import React, { useState } from "react";
import styles from "./styles/CalculateButton.module.css";

const CalculateButton = ({ buttonText, onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default CalculateButton;
