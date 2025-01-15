import React, { useEffect, useState } from "react";
import { Team } from "../ESPN/Requests/TeamRequest";
import "./styles/Dropdown.css";

type TeamProps = {
  teams: Team[] | undefined;
  showDropDown: boolean;
  toggleDropDown: Function;
  teamSelection: Function;
};

const TeamDropdown: React.FC<TeamProps> = ({
  teams,
  teamSelection,
}: TeamProps): React.JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  /**
   * Handle passing the week menu
   * back to the parent component
   * @param The selected week
   */
  const onClickHandler = (team: Team | undefined): void => {
    teamSelection(team);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown-active"}>
        {teams?.map((team: Team | undefined, index: number): JSX.Element => {
          return (
            <div className="dropdown-content">
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(team);
                }}
              >
                {team?.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamDropdown;
