import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./components/loginForm/SignIn";
import SignUp from "./components/loginForm/SignUp";
import DashBoard from "./pages/DashBoard";
import HotelDetail from "./pages/HotelDetail";

function App() {
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
        <HotelDetail />
      </Route>
    </Switch>
  );
}

export default App;
