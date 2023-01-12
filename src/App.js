import React, { useContext } from "react";
import MainLayout from "./layout/MainLayout";
import LoginPage from "./pages/LoginPage";
import { UserDataContext } from "./context/UserDataContext";

const App = () => {
  //conditional rendering for isUserLoggedIn

  const [isUserLoggedIn, SetIsUserLoggedIn] = useContext(UserDataContext);
  console.log(isUserLoggedIn);

  return <>{isUserLoggedIn ? <MainLayout /> : <LoginPage />}</>;
};

export default App;
