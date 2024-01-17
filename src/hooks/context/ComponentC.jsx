import React, { useContext } from "react";
import { OtherContext, UserContext } from "../../App";

const ComponentC = () => {
  const user = useContext(UserContext);
  const other = useContext(OtherContext);

  return (
    <div>
      <h3>component C</h3>
      <p>{user}</p>
      <p>{other}</p>
    </div>
  );
};

export default ComponentC;

/**
 * import { createContext } from "react";
 * export const UserContext = createContext();
 * export const OtherContext = createContext();
 */

/**
 * <UserContext.Provider value={"MR Masum"}>
        <OtherContext.Provider value="Other context">
          <ComponentA />
        </OtherContext.Provider>
      </UserContext.Provider>
 */
