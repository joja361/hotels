import SignIn from "./components/loginForm/SignIn";
import SignUp from "./components/loginForm/SignUp";
import DashBoard from "./pages/DashBoard";
import Favorites from "./pages/Favorites";
import HotelDetail from "./pages/HotelDetail";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import { Switch, Route, Redirect } from "react-router-dom";
import AddHotel from "./pages/AddHotel";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/dashboard" component={DashBoard} />
      <ProtectedRoute exact path="/admin/dashboard" component={DashBoard} />
      <ProtectedRoute exact path="/admin/addhotel" component={AddHotel} />
      <ProtectedRoute exact path="/dashboard/:id" component={HotelDetail} />
      <ProtectedRoute exact path="/favorites" component={Favorites} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
