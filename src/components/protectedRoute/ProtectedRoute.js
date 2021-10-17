import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { roleOfUser } from "../../store/authSlice";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const role = useSelector(roleOfUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        role ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
