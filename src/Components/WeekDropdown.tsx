import React, { useEffect, useState } from "react";
import "./styles/Dropdown.css";

type WeekProps = {
  weeks: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  weekSelection: Function;
};

const WeekDropdown: React.FC<WeekProps> = ({
  weeks,
  weekSelection,
}: WeekProps): React.JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the week menu
   * back to the parent component
   * @param The selected week
   */
  const onClickHandler = (week: string): void => {
    weekSelection(week);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown-active"}>
        {weeks.map((week: string, index: number): JSX.Element => {
          return (
            <div className="dropdown-content">
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(week);
                }}
              >
                {week}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default WeekDropdown;
