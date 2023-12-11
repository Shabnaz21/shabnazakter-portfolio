import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Shared/Root";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    },
]);


export default router;