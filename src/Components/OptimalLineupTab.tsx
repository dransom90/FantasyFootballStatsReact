import React, { act, useEffect, useReducer, useState } from "react";
import BestLineup from "./BestLineup";
import { Root, Team } from "../ESPN/Requests/TeamRequest";
import Axios from "axios";
import Client from "../ESPN/Client";
import Psychic from "../Stats/Psychic";
import TeamMenu from "./TeamMenu";
import WeekMenu from "./WeekMenu";
import { FallingLines } from "react-loader-spinner";
import CalculateButton from "./CalculateButton";

type State = {
  team: Team;
  week: string;
  actualScore: number;
  optimalScore: number;
  showOptimalLineup: boolean;
  showLoader: boolean;
  showDropdowns: boolean;
};

const initialState: State = {
  team: {} as Team,
  week: "",
  actualScore: 0,
  optimalScore: 0,
  showOptimalLineup: false,
  showLoader: false,
  showDropdowns: true,
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "updateTeam":
      let newTeam = action.payload;
      return { ...state, team: newTeam };
    case "updateWeek":
      let newWeek = action.payload;
      return { ...state, week: newWeek };
    case "updateActualScore":
      let newActual = action.payload;
      return { ...state, actualScore: newActual };
    case "updateOptimalScore":
      let newOptimal = action.payload;
      return { ...state, optimalScore: newOptimal };
    case "showLineup":
      let newShow = action.payload;
      return { ...state, showOptimalLineup: newShow };
    case "showLoader":
      let newShowLoader = action.payload;
      return { ...state, showLoader: newShowLoader };
    case "showDropdowns":
      let newShowDropdowns = action.payload;
      return { ...state, showDropdowns: newShowDropdowns };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function OptimalLineupTab() {
  const [data, setData] = useState<Root>();
  const [state, dispatch] = useReducer(reducer, initialState);

  const teamSelection = (team: Team): void => {
    dispatch({
      type: "updateTeam",
      payload: team,
    });
  };

  const weekSelection = (week: string): void => {
    dispatch({
      type: "updateWeek",
      payload: week,
    });
  };

  const calculateOptimalScore = (): void => {
    if (state.team && state.week) {
      dispatch({
        type: "showLoader",
        payload: true,
      });
      dispatch({
        type: "showDropdowns",
        payload: false,
      });
      dispatch({
        type: "showLineup",
        payload: true,
      });
      let weekResult = Psychic.runForWeek({
        seasonId: 2023,
        matchupPeriodId: state.week,
        scoringPeriodId: state.week,
      });
      console.log(weekResult);
      console.log(`calling runForWeek with teamId: ${state.team.id}`);
      let boxscores = Client.runForWeek({
        seasonId: 2024,
        matchupPeriodId: state.week,
        scoringPeriodId: state.week,
        teamId: state.team.id,
      }).then((result) => {
        dispatch({
          type: "showLoader",
          payload: false,
        });
        dispatch({
          type: "showDropdowns",
          payload: true,
        });
        console.log(`result: ${result}`);
        dispatch({
          type: "updateOptimalScore",
          payload: result.bestSum,
        });
        dispatch({
          type: "updateActualScore",
          payload: result.currentScore,
        });
      });
    } else {
      //setShowOptimalLineup(false);
    }
  };

  useEffect(() => {
    const getTeams = async () => {
      Axios.get<Root>(
        "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues/1525510?&view=mTeam"
      ).then((response) => {
        setData(response.data);
      });
    };

    getTeams();
  }, [data]);

  return (
    <>
      <div>
        {state.showDropdowns === true && (
          <div>
            {state.team.name
              ? `Selected team: ${state.team.name} `
              : "Select Team"}
            {
              <TeamMenu
                leagueTeams={data?.teams}
                teamSelection={teamSelection}
              />
            }
          </div>
        )}
        <div>
          <FallingLines
            color="#4fa94d"
            width="100"
            visible={state.showLoader}
          />
        </div>
        {state.showDropdowns === true && (
          <div>
            {state.week ? `You selected week ${state.week} ` : "Select week"}
            {state.showDropdowns && <WeekMenu weekSelection={weekSelection} />}
          </div>
        )}
        <div>
          <BestLineup
            showComponent={state.showOptimalLineup}
            actualScore={state.actualScore}
            optimalScore={state.optimalScore}
          />
        </div>
        <div>
          <CalculateButton
            buttonText="Calculate"
            onClick={calculateOptimalScore}
            disabled={state.showLoader}
          />
        </div>
      </div>
    </>
  );
}

export default OptimalLineupTab;
