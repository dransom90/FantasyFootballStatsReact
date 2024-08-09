import "./App.css";
import TeamDropdown from "./Components/TeamDropdown";
import Title from "./Components/Title";
import WeekMenu from "./Components/WeekMenu";
import "reflect-metadata";
import React, { useEffect, useState } from "react";
import { Root, Team } from "./ESPN/Requests/TeamRequest";
import Axios from "axios";
import Client from "./ESPN/Client";
import BestLineup from "./Components/BestLineup";

import TeamMenu from "./Components/TeamMenu";

function App() {
  const [data, setData] = useState<Root>();
  const [selectTeam, setSelectTeam] = useState<Team>();
  const [selectWeek, setSelectWeek] = useState<string>("");
  const [showOptimalLineup, setShowOptimalLineup] = useState<boolean>(false);
  const [actualScore, setActualScore] = useState<number>(0);
  const [optimalScore, setOptimalScore] = useState<number>(0);

  const teamSelection = (team: Team): void => {
    setSelectTeam(team);
    calculateOptimalScore();
  };

  const weekSelection = (week: string): void => {
    setSelectWeek(week);
    calculateOptimalScore();
  };

  const calculateOptimalScore = (): void => {
    if (selectTeam && selectWeek) {
      setShowOptimalLineup(true);
      Client.getWeekBoxscores({
        seasonId: 2023,
        matchupPeriodId: { selectWeek },
        scoringPeriodId: selectWeek,
      }).then((result) => {
        console.log(result);
        setActualScore(1);
        setOptimalScore(2);
      });
    } else {
      setShowOptimalLineup(false);
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
        <Title />
      </div>
      <div>
        {selectTeam
          ? `You are viewing stats for ${selectTeam.name} `
          : "Select Team"}
      </div>
      <div>
        {selectWeek ? `You selected week ${selectWeek} ` : "Select week"}
      </div>
      <div>
        <WeekMenu weekSelection={weekSelection} />
        <TeamMenu leagueTeams={data?.teams} teamSelection={teamSelection} />
        <div>
          <BestLineup
            showComponent={showOptimalLineup}
            actualScore={actualScore}
            optimalScore={optimalScore}
          />
        </div>
      </div>
    </>
  );
}

export default App;
