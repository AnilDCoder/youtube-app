import { useState } from "react";
import { UserDataContext } from "./UserDataContext";
const { Provider } = UserDataContext;

export const UserDataProvider = (props) => {
  const [isUserLoggedIn, SetIsUserLoggedIn] = useState(true);

  return (
    <Provider value={[isUserLoggedIn, SetIsUserLoggedIn]}>
      {props.children}
    </Provider>
  );
};
