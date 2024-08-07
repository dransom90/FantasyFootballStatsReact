import React, { useEffect, useState } from "react";
import { Member } from "../ESPN/Member";
import Client from "../ESPN/Client";
import { get } from "lodash";
import Select from "react-select";
import Axios from "axios";
import { League } from "../ESPN/League";
import { plainToInstance } from "class-transformer";

function TeamDropdown() {
  const [teamsList, setTeams] = useState<Member[]>([]);

  const getTeams = async () => {
    const teams: Member[] = [];
    const apiRes = await Axios.get(
      `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/2023/segments/0/leagues/1525510`
    );
    var league = plainToInstance(League, apiRes.data);

    console.log(`setting  teams`);

    // Update state
    setTeams(league.members);
  };

  const handleChange = (e) => {
    alert(e.target.value);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <div className="dropdown">
        {/* <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select your team
        </button> */}
        <select onChange={handleChange}>
          {/* rendering option from the state teamsList */}
          {teamsList.map((data, i) => (
            <option key={i}>{data.displayName}</option>
          ))}
        </select>
        {/* <ul className="dropdown-menu">
          {teamsList.map((team: Member): React.JSX.Element => {
            return <li>{team.displayName}</li>;
          })}
        </ul> */}
      </div>
    </>
  );
}

/* const TeamDropdown: React.FC<TeamDropdownProps> = ({
  teams,
}: React.JSX.Element => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await Client.getLeagueTeams("2023");
      

      teams = data;
    }

    fetchData();
  });
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select your team
        </button>
        <ul className="dropdown-menu">
          {teams.map((team: Member): React.JSX.Element => {
            return <li>{team.displayName}</li>;
          })}
        </ul>
      </div>
    </>
  );
}; */

// function TeamDropdown({ teams } :{teams: Member[]}) {

//   //return teams.map((team) => <h1>{team.displayName}</h1>);
//   <div className="dropdown">
//     <button
//       className="btn btn-secondary dropdown-toggle"
//       type="button"
//       data-bs-toggle="dropdown"
//       aria-expanded="false"
//     >
//       Select Your Team
//     </button>
//     <ul className="dropdown-menu">
//       {
//         teams.map(team => <li>{team.displayName}</li>
//       };
//     </ul>
//   </div>
// }

export default TeamDropdown;
