import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../layout/IndexLayout";
import Main from "../layout/Main/Main";
import Category from "../layout/Category/Category";
import Product from "../layout/Product/Product";
import BlogPost from "../layout/BlogPost/BlogPost";
import About from "../layout/About/About";
import Login from "../layout/Login/Login";


const Root = () => {
    const router = createBrowserRouter(
        [
            {
                path:"/login",
                element:<Login/>
            },
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
                    }, {
                        path: '/blogpost',
                        element: <BlogPost/>
                    }, {
                        path: '/product',
                        element: <Product/>
                    }, {
                        path: '/about',
                        element: <About/>
                    }, {
                        path: '/pages',
                        element:<Product/>
                    },
                    {
                        path: '/certificate',
                        element:<Product/>
                    }, {
                        path: '/gift',
                        element:<Product/>
                    }, {
                        path: '/share',
                        element:<Product/>
                    }, {
                        path: '/contact',
                        element:<Product/>
                    }, {
                        path: '/faq',
                        element:<Product/>
                    }, {
                        path: '/notification',
                        element:<Product/>
                    }, {
                        path: '/slider',
                        element:<Product/>
                    }, {
                        path: '/search',
                        element:<Product/>
                    }, {
                        path: '/pass',
                        element:<Product/>
                    }, {
                        path: '/admin',
                        element:<Product/>
                    }, {
                        path: '/exit',
                        element:<Product/>
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