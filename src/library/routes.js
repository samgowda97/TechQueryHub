import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Components/auth/SignUp";
import SignIn from "../Components/auth/SignIn";
export const ROOT="/"
export const SIGNIN="/signin"
export const SIGNUP="/signup"
export const DASHBOARD="/signup"


export const router=createBrowserRouter([
    {path:ROOT,element:"Public Root"},
    {path:SIGNIN,element:<SignIn/>},
    {path:SIGNUP,element:<SignUp/>},

])