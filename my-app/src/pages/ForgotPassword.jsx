import React from "react";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";
import {useDispath } from "react-redux";
//import { forgotPassword} form "../store/slices/authSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

const dispatch = useDispatch();

const  { loading,error,message,user,isAuthenticated } = useSelector(
(state) => state.auth
);

//const handleForgotPassword forgotPassword(e) => {
  email.preventDefault();
dispatch(forgotPassword(email))
}

useEffect(() => {
  //if (message) {
  //toast.success(message);
  //dispatch(resetAuthSlice());
//}
  if (error) {
    toast.error(error);
    dispatch(resetAuthSlice());
  }
},[dispatch,isAuthenticated,error,loading]);

if (isAuthenticated) {
  return <Navigate to={"/"} />;
}



return <>

<div className ="flex flex-col justify-center md: flex-row h-screen">
  {/* LEFT SECTION */ }
  {/* RIGHT SECTION */ }
< div className="Hidden w-full md:w-1/2 bg-black text-white md:flex flex-col items-center justify-center p-8 rounded-tr-[80px] rounded-br-[80px]" >
</div>
</div>
</>;
//};
export default ForgotPassword;