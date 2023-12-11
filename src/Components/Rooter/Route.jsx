import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Shared/Root";
import Home from "../../Pages/Home/Home";
import Project from "../../Pages/Project/project";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }, 
            // {
            //     path: '/project', 
            //     element: <Project></Project>
            // }
        ]
    },
]);


export default router;