import {Box, Grid, Typography} from "@mui/material";
import useTitle from "../../../hooks/useTitle";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import theme from "../../../themes/theme";
import {useState} from "react";
import {Link} from "react-router-dom";


const AppBottomTab = () => {

    const [select, setSelect] = useState("Accounting");


    const manageSelect = (value) => setSelect(value)
    useTitle("برنامه حسابداری")

    return (
        <Grid
            display={"flex"}
            height={'50px'}
            width={"100%"}
            maxWidth={500}
            position={"fixed"}
            bgcolor={theme.palette.neutralN00.main}
            paddingY={2}
            sx={{boxShadow: "0px -4px 6px 0px rgba(0, 0, 0, 0.1)"}}
            bottom={0}
            containe>

            <Grid
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                    cursor: 'pointer',
                    transition: 0.5,
                }}
                xs={6}
                 item>
                <Link to={"/app"}>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        onClick={()=>manageSelect("Accounting")}>
                        <AccountBalanceIcon color={select === "Accounting" ? "primary" : "neutralN40"}/>
                        <Typography
                            color={select === "Accounting" ? theme.palette.primary.main : theme.palette.neutralN40.main}
                            variant={"h3"}>
                            {"حسابداری"}
                        </Typography>
                    </Box>
                </Link>
            </Grid>

            <Grid
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                xs={6}
                onClick={()=>manageSelect("Profile")}
                sx={{
                    cursor: 'pointer',
                    transition: 0.5,
                }}
                bgcolor={"white"} item>
                <Link to={"/app/profile"}>
                    <Box display={"flex"}
                         alignItems={"center"}
                         justifyContent={"center"}
                         flexDirection={"column"}
                         onClick={()=>manageSelect("Profile")}>
                        <ManageAccountsIcon color={ select === "Profile" ? "primary" : "neutralN40"}/>
                        <Typography
                            color={select === "Profile" ? theme.palette.primary.main : theme.palette.neutralN40.main}
                            variant={"h3"}>
                            {"حساب کاربری"}
                        </Typography>
                    </Box>
                </Link>
            </Grid>
        </Grid>
    )
}


export default AppBottomTab;