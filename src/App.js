import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./components/loginForm/SignIn";
import SignUp from "./components/loginForm/SignUp";

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
    </Switch>
  );
}

export default App;