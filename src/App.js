import { Redirect, Route, Switch } from "react-router-dom";
import SignIn from "./components/loginForm/SignIn";
import SignUp from "./components/loginForm/SignUp";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import AddHotel from "./pages/AddHotel";
import DashBoard from "./pages/DashBoard";
import Favorites from "./pages/Favorites";
import HotelDetail from "./pages/HotelDetail";

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
      <ProtectedRoute exact path="/favorites/:id" component={HotelDetail} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
