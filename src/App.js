import { Routes } from "react-router-dom";

import { centerRoutes } from "./pages/centre/routes";

const App = () => {
  return (
    <>
      <Routes>{centerRoutes}</Routes>
    </>
  );
};

export default App;
