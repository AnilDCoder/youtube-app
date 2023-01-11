import { useState } from "react";
import { UserDataContext } from "./UserDataContext";
const { Provider } = UserDataContext;

export const UserDataProvider = (props) => {
  const [message, setMessage] = useState("My name is context");

  return <Provider value={[message, setMessage]}>{props.children}</Provider>;
};
