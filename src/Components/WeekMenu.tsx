import React, { useState } from "react";
import WeekDropdown from "./WeekDropdown";

type WeekMenuProps = {
  weekSelection: Function;
};

const WeekMenu: React.FC<WeekMenuProps> = ({
  weekSelection,
}: WeekMenuProps): React.JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectWeek, setSelectWeek] = useState<string>("");
  const weeks = () => {
    return [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
    ];
  };

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

  /**
   * Callback function to consume the week from the child component
   * @param week The selected week
   */

  // const weekSelection = (week: string): void => {
  //   setSelectWeek(week);
  // };

  return (
    <>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectWeek ? "Select: " + selectWeek : "Select ..."} </div>
        {showDropDown && (
          <WeekDropdown
            weeks={weeks()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            weekSelection={weekSelection}
          />
        )}
      </button>
    </>
  );
};

export default WeekMenu;
