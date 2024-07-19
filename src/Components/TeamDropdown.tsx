import React, { useEffect, useState } from "react";
import { Member } from "../ESPN/Member";

type TeamDropdownProps = {
  teams: Member[];
};

const TeamDropdown: React.FC<TeamDropdownProps> = ({
  teams,
}: TeamDropdownProps): React.JSX.Element => {
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
};

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
