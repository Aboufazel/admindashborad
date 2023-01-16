import React, {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../layout/IndexLayout";
import Main from "../layout/Main/Main";
import Category from "../layout/AllUsers/Category";
import AccountingMain from "../layout/AccountingMain/AccountingMain";
import About from "../layout/AccountTotal/AccountTotal";
import Login from "../layout/Login/Login";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import EditUser from "../layout/EditUser/EditUser";
import AccountingGroup from "../layout/AccountingGroup/AccountingGroup";
import AccountTotal from "../layout/AccountTotal/AccountTotal";


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
                        path: '/accountingGroup',
                        element:
                            (<Suspense fallback={<div>Loading...</div>}>
                                <AuthProvider>
                                    <AccountingGroup/>
                                </AuthProvider>
                            </Suspense>)

                    }, {
                        path: '/accountingMain',
                        element:
                            (<Suspense fallback={<div>Loading...</div>}>
                                <AuthProvider>
                                    <AccountingMain/>
                                </AuthProvider>
                            </Suspense>)

                    }, {
                        path: '/accountTotal',
                        element:
                            (<Suspense fallback={<div>Loading...</div>}>
                                <AuthProvider>
                                    <AccountTotal/>
                                </AuthProvider>
                            </Suspense>)

                    }, {
                        path: '/pages',
                        element: <AccountingMain/>
                    },
                    {
                        path: '/certificate',
                        element: <AccountingMain/>
                    }, {
                        path: '/gift',
                        element: <AccountingMain/>
                    }, {
                        path: '/share',
                        element: <AccountingMain/>
                    }, {
                        path: '/contact',
                        element: <AccountingMain/>
                    }, {
                        path: '/faq',
                        element: <AccountingMain/>
                    }, {
                        path: '/notification',
                        element: <AccountingMain/>
                    }, {
                        path: '/slider',
                        element: <AccountingMain/>
                    }, {
                        path: '/search',
                        element: <AccountingMain/>
                    }, {
                        path: '/pass',
                        element: <AccountingMain/>
                    }, {
                        path: '/admin',
                        element: <AccountingMain/>
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