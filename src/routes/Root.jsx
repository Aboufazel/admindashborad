import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../layout/IndexLayout";
import Main from "../layout/Main/Main";
import Category from "../layout/Category/Category";


const Root = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                element: <IndexLayout/>,
                children: [
                    {
                        path: "/",
                        element: <Main/>
                    }, {
                        path: '/category',
                        element: <Category/>
                    }
                ]

            }
        ]
    )
    return (
        <RouterProvider router={router}/>
    )
}

export default Root;