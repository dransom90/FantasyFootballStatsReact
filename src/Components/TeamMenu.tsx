import React, { useEffect, useState } from "react";
import { Team } from "../ESPN/Requests/TeamRequest";
import TeamDropdown from "./TeamDropdown";

type TeamMenuProps = {
  /* teams: Team[];
  showDropDown: boolean;
  toggleDropDown: Function; */
  //teams: Team[];
  leagueTeams: Team[] | undefined;
  teamSelection: Function;
};

const TeamMenu: React.FC<TeamMenuProps> = ({
  leagueTeams,
  teamSelection,
}: TeamMenuProps): React.JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectTeam, setSelectTeam] = useState<Team>();

  /**
   * Toggle the dropdown menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs outside of the drop down element.
   * @param event The mouse event
   */

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  return (
    <>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectTeam ? "Select " + selectTeam : " Select ..."}</div>
        {showDropDown && (
          <TeamDropdown
            teams={leagueTeams}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            teamSelection={teamSelection}
          />
        )}
      </button>
    </>
  );
};

export default TeamMenu;
