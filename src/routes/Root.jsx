import React, {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import IndexLayout from "../layout/IndexLayout";
import Main from "../layout/Main/Main";
import Category from "../layout/AllUsers/Category";
import AccountingMain from "../layout/AccountingMain/AccountingMain";
import Login from "../layout/Login/Login";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import EditUser from "../layout/EditUser/EditUser";
import AccountingGroup from "../layout/AccountingGroup/AccountingGroup";
import AccountTotal from "../layout/AccountTotal/AccountTotal";
import PageNotFound from "../layout/PageNotFound/PageNotFound";
import AccountingType from "../layout/AccountingType/AccountingType";
import AccountingSpecType from "../layout/AccountingSpecType/AccountingSpecType";
import AccountingDefaultPerson from "../layout/AccountingDefaultPerson/AccountingDefaultPerson";
import AccoutingPersonLink from "../layout/AccoutingPersonLink/AccoutingPersonLink";
import LoadingPage from "../layout/Login/LoadingPage";
import ForgetPass from "../layout/Auth/ForgetPass";
import SignUp from "../layout/Auth/SignUp";
import Verification from "../layout/Auth/Verification";

const Root = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/",
                children:[
                    {
                        path: "/login",
                        element: <Login/>
                    },{
                        path: "/forgetPass",
                        element: <ForgetPass/>
                    },{
                        path: "/verification",
                        element: <Verification/>
                    },{
                        path: "/signUp",
                        element: <SignUp/>
                    },
                ]
            },
            {
                path: "/",
                element: <IndexLayout/>,
                children: [
                    {
                        path: "/admin",
                        element: (
                            <Suspense fallback={<LoadingPage/>}>
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
                        path: '/accountType',
                        element:
                            (<Suspense fallback={<div>Loading...</div>}>
                                <AuthProvider>
                                    <AccountingType/>
                                </AuthProvider>
                            </Suspense>)
                    },{
                        path: '/accountSpecType',
                        element:
                            (<Suspense fallback={<div>Loading...</div>}>
                                <AuthProvider>
                                    <AccountingSpecType/>
                                </AuthProvider>
                            </Suspense>)
                    },{
                    path:'/accountingDefaultPerson',
                        element:(<Suspense fallback={<div>Loading...</div>}>
                            <AuthProvider>
                                <AccountingDefaultPerson/>
                            </AuthProvider>
                        </Suspense>)

                    },{
                        path:'/personsLink',
                        element:(<Suspense fallback={<div>Loading...</div>}>
                            <AuthProvider>
                                <AccoutingPersonLink/>
                            </AuthProvider>
                        </Suspense>)

                    },
                    {
                        path: '/pass',
                        element: <PageNotFound/>
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