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
import MobileLayout from "../layout/MobileLayout";
import AccountingHome from "../layout/AppLayouts/AccountingHome/AccountingHome";
import Profile from "../layout/AppLayouts/AccountingHome/Profile";
import AccountingAddMain from "../layout/AppLayouts/AccountigAddMain/AccountigAddMain";
import BookMain from "../layout/AppLayouts/BookMain/BookMain";
import MainReport from "../layout/AppLayouts/Report/MainReport";
import DebtorsReport from "../layout/AppLayouts/Report/DebtorsReport";
import DipositorReport from "../layout/AppLayouts/Report/DipositorReport";
import CashReport from "../layout/AppLayouts/Report/CashReport";
import DefineMain from "../layout/AppLayouts/DefineAccount/DefineMain";
import DefineListType1 from "../layout/AppLayouts/DefineAccount/DefineListType1";
import DefineListType2 from "../layout/AppLayouts/DefineAccount/DefineListType2";
import ChangeInformation from "../layout/AppLayouts/ChangeInformation/ChangeInformation";
import ChangePassword from "../layout/AppLayouts/ChangePassword/ChangePassword";
import MobileNotFound from "../layout/PageNotFound/MobileNotFound";


const Root = () => {
    const router = createBrowserRouter(
        [
            {
                path: "/login",
                element: <Login/>
            }, {
            path: "/forgetPass",
            element: <ForgetPass/>
        }, {
            path: "/verification",
            element: <Verification/>
        }, {
            path: "/signUp",
            element: <SignUp/>
        },  {
            path: "*",
            element: <MobileNotFound/>
        },

            {
            path: "/",
            element: <IndexLayout/>,
            children: [
                {
                    path: "/",
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
                }, {
                    path: '/accountSpecType',
                    element:
                        (<Suspense fallback={<div>Loading...</div>}>
                            <AuthProvider>
                                <AccountingSpecType/>
                            </AuthProvider>
                        </Suspense>)
                }, {
                    path: '/accountingDefaultPerson',
                    element: (<Suspense fallback={<div>Loading...</div>}>
                        <AuthProvider>
                            <AccountingDefaultPerson/>
                        </AuthProvider>
                    </Suspense>)

                }, {
                    path: '/personsLink',
                    element: (<Suspense fallback={<div>Loading...</div>}>
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

        }, {
            path: '/app',
            element: <MobileLayout/>,
            children: [
                {
                    path: "/app",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <AccountingHome/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/profile",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <Profile/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/accountingAddMain",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <AccountingAddMain/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/bookMain",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <BookMain/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/mainReport",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <MainReport/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/debtorsReport",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <DebtorsReport/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/dipositorReport",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <DipositorReport/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/cashReport",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <CashReport/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/defineMain",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <DefineMain/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/defineListType1",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <DefineListType1/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/defineListType2",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <DefineListType2/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/profile/changeInfo",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <ChangeInformation/>
                            </AuthProvider>
                        </Suspense>
                    )
                },
                {
                    path: "/app/profile/changePass",
                    element: (
                        <Suspense fallback={<LoadingPage/>}>
                            <AuthProvider>
                                <ChangePassword/>
                            </AuthProvider>
                        </Suspense>
                    )
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