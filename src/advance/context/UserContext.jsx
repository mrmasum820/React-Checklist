import React from "react";

const UserContext = React.createContext("MR Masum");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;

/**
 * <UserProvider value="MR Masum">
        <ComponentA />
      </UserProvider>
 */
