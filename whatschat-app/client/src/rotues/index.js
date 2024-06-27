import { createBrowserRouter } from "react-router-dom";
import CheckEmailPage from "../pages/CheckEmailPage";
import CheckPasswordPage from "../pages/CheckPasswordPage";
import MessagePage from "../components/MessagePage";
import RegisterPage from "../pages/RegisterPage";
import Home from "../pages/Home";
import App from "../App";
import AuthLayouts from "../layout";
import Forgetpassword from "../pages/Forgetpassword"

const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "register",
            element : <AuthLayouts><RegisterPage/></AuthLayouts>
        },
        {
            path: "email",
            element : <AuthLayouts><CheckEmailPage/></AuthLayouts>
        },
        {
            path: "password",
            element : <AuthLayouts><CheckPasswordPage/></AuthLayouts>
        },
        {
            path: "forget-password",
            element : <AuthLayouts><Forgetpassword/></AuthLayouts>
        },
        {
            path: "",
            element: <Home/>,
            children : [
                {
                    path: ":userId",
                    element : <MessagePage/>
                }
            ]
        }
    ]
}
])

export default router