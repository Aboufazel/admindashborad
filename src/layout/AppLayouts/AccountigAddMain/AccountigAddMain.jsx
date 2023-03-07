import {Grid, Typography} from "@mui/material";
import AppBarVer3 from "../../../components/AppComponents/AppBar/AppBarVer3";
import useTitle from "../../../hooks/useTitle";
import MainAddShow from "../../../components/AppComponents/MainAddShow/MainAddShow";
import ActionButton from "../../../components/AppComponents/ActionButton/ActionButton";
import AddIcon from "@mui/icons-material/Add";

const AccountingAddMain = () => {


    useTitle("ثبت حسابداری")
    return (
        <Grid
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            component={"div"}
            sx={{overflowY: 'scroll'}}
            container
            width={'100%'}>
            <AppBarVer3 title={"ثبت حسابداری"} link={"app"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"} marginT={3.375}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>
            <MainAddShow num={"134"}
                         data={"21 شهریور 1401"}
                         badge={"ریال"}
                         price={"25,000,000"}
                         desc={"شرح سند"}/>



            <ActionButton>
                <AddIcon/>
                <Typography variant={"h1"}>
                    {"ثبت جدید"}
                </Typography>
            </ActionButton>

        </Grid>
    )
}

export default AccountingAddMain;