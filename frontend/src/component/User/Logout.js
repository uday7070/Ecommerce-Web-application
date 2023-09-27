import React, { useEffect } from "react";
import Home from "../Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const alert = useAlert();
  useEffect(() => {
    dispatch(logout());
    history.push("/login");
    alert.success("Logout Successfully");
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default Logout;
