import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./components/loginForm/SignIn";
import SignUp from "./components/loginForm/SignUp";
import DashBoard from "./pages/DashBoard";
import Favorites from "./pages/Favorites";
import HotelDetail from "./pages/HotelDetail";

function App() {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/signin" />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/dashboard" exact>
        <DashBoard />
      </Route>
      <Route path="/dashboard/:id">
        {isLoggedIn && <HotelDetail />}
        {!isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="/favorites" exact>
        {isLoggedIn && <Favorites />}
        {!isLoggedIn && <Redirect to="/" />}
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
