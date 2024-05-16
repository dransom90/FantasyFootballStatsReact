import React from "react";

function TeamDropdown() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Select Your Team
      </button>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            DJ
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Naka
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Brad
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TeamDropdown;
