import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default RouterConfig;
