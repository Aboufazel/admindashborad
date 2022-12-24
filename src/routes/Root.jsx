import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../layout/IndexLayout";
import Main from "../layout/Main/Main";
import Category from "../layout/Category/Category";
import Product from "../layout/Product/Product";
import BlogPost from "../layout/BlogPost/BlogPost";


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
                    },{
                        path: '/blogpost',
                        element: <BlogPost/>
                    },{
                        path: '/product',
                        element: <Product/>
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