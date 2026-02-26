import React from "react";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";
import {useDispath } from "react-redux";
import { forgotPassword} form "../store/slices/authSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

const dispatch = useDispatch();

const  { loading,error,message,user,isAuthenticated } = useSelector(
(state) => state.auth
);

const handleForgotPassword forgotPassword(email: any); (dispatch: any) => 
  email.preventDefault();
dispatch(forgotPassword(email))
}

useEffect
  return <></>;
};
export default ForgotPassword;