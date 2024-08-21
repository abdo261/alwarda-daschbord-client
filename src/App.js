import {  Routes } from "react-router-dom";
import { centerRoutes } from "./pages/centre/routes";
import { homeRoutes } from "./pages/home/routes";
import { studentRoutes } from "./pages/student/routes";
import { utilisateurRoutes } from "./pages/user/routes";

const App = () => {
  return (
    <>
      <Routes>
        {homeRoutes}
        {centerRoutes}
        {studentRoutes}
        {utilisateurRoutes}
      </Routes>
    </>
  );
};

export default App;
