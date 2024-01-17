import React from "react";
import "./appStyles.css";
import styles from "./appStyles.module.css";

const Inline = () => {
  const heading = {
    fontSize: "72px",
    color: "blue",
  };
  return (
    <div>
      <h1 style={heading}>Inline Css</h1>
      <h2 className="error">Error</h2>
      <h2 className={styles.success}>Success</h2>
    </div>
  );
};

export default Inline;
