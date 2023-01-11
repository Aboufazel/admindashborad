import React, {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../layout/IndexLayout";
import Main from "../layout/Main/Main";
import Category from "../layout/Category/Category";
import Product from "../layout/Product/Product";
import BlogPost from "../layout/BlogPost/BlogPost";
import About from "../layout/About/About";
import Login from "../layout/Login/Login";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import EditUser from "../layout/EditUser/EditUser";


const Root = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login/>
                    </Suspense>
                )
            },
            {
                path: "/",
                element: <IndexLayout/>,
                children: [
                    {
                        path: "/",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AuthProvider>
                                    <Main/>
                                </AuthProvider>
                            </Suspense>
                        )
                    }, {
                        path: '/allUser',
                        element: (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <AuthProvider>
                                        <Category/>
                                    </AuthProvider>
                                </Suspense>
                            )
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
                        element: <Product/>
                    },
                    {
                        path: '/certificate',
                        element: <Product/>
                    }, {
                        path: '/gift',
                        element: <Product/>
                    }, {
                        path: '/share',
                        element: <Product/>
                    }, {
                        path: '/contact',
                        element: <Product/>
                    }, {
                        path: '/faq',
                        element: <Product/>
                    }, {
                        path: '/notification',
                        element: <Product/>
                    }, {
                        path: '/slider',
                        element: <Product/>
                    }, {
                        path: '/search',
                        element: <Product/>
                    }, {
                        path: '/pass',
                        element: <Product/>
                    }, {
                        path: '/admin',
                        element: <Product/>
                    }, {
                        path: '/editUser',
                        element: <EditUser/>
                    },
                ]

            }
        ]
    )
    return (
        <RouterProvider router={router}/>
    )
}

export default Root;