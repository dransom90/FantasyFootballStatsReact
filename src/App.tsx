import "./App.css";
//import Title from './Components/Title'
import TeamDropdown from "./Components/TeamDropdown";
import Title from "./Components/Title";
import WeekMenu from "./Components/WeekMenu";
import "reflect-metadata";
import React, { useEffect, useState } from "react";
import { Root, Team } from "./ESPN/Requests/TeamRequest";
import Axios from "axios";

import TeamMenu from "./Components/TeamMenu";

function App() {
  const [data, setData] = useState<Root>();
  const [selectTeam, setSelectTeam] = useState<Team>();
  const [selectWeek, setSelectWeek] = useState<string>("");

  const teamSelection = (team: Team): void => {
    setSelectTeam(team);
  };

  const weekSelection = (week: string): void => {
    setSelectWeek(week);
  };

  useEffect(() => {
    const getTeams = async () => {
      Axios.get<Root>(
        "https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues/1525510?&view=mTeam"
      ).then((response) => {
        console.log(response.data);
        setData(response.data);
      });

      //console.log(response.data);

      //const obj = JSON.parse(response.data);
      //console.log(`received ${obj.teams.length} teams`);
      //setData(obj);
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
      </div>
    </>
  );
}

export default App;
