import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom/dist";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

function AppRouter({ isLoggedIn, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
