import {Box, Grid, Typography} from "@mui/material";
import AppBarVer2 from "../../../components/AppComponents/AppBar/AppBarVer2";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";
import ActionButton from "../../../components/AppComponents/ActionButton/ActionButton";
import AddIcon from '@mui/icons-material/Add';
import AppBottomTab from "../../../components/AppComponents/AppBottomTab/AppBottomTab";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";


const AccountingHome = () => {

    const ProfileInfo = useSelector(state => state.action);

    const navigate = useNavigate();


    const ManageNavigate = (link) => {
      navigate(link)
    }

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
            <AppBarVer2 title={"نرم افزار حسابداری"}/>
            <SectionHeader title={"وضعیت کسب و کار در سال 1401"} margin={3.375}/>
            <SimplePrice title={"موجودی نقدی"} price={"29,102,000"} badge={"ریال"} padding={0.6}/>
            <SimplePrice title={"بدهی"} price={"29,102,000"} badge={"ریال"} padding={0.6}/>
            <SimplePrice title={"طلب"} price={"29,102,000"} badge={"ریال"} padding={0.6}/>
            <SimplePrice title={"درآمد"} price={"29,102,000"} badge={"ریال"} padding={0.6}/>
            <SimplePrice title={"هزینه"} price={"29,102,000"} badge={"ریال"} padding={0.6}/>

            <SectionHeader title={"اسناد مالی"} margin={0}/>
            <SimplePrice title={"ثبت حسابداری"} padding={0.6}/>

            <SectionHeader title={"حسابداری"} margin={0}/>
            <SimplePrice title={"دفاتر"} padding={0.6}/>
            <SimplePrice title={"گزارشات"} padding={0.6}/>

            <Box onClick={()=>ManageNavigate("defineMain")} display={"flex"} width={"100%"}>
                <SimplePrice title={"تعاریف حسابداری"} padding={0.6}/>
            </Box>

            <SimplePrice title={`سال مالی (سال فعلی ${ProfileInfo.user === undefined ? "" : ProfileInfo.fiscalYear.map(item => item.fiscalYearName)})`} padding={0.6}/>
            <ActionButton>
                <AddIcon/>
                <Typography variant={"h1"}>
                    {"ثبت"}
                </Typography>
            </ActionButton>
            <AppBottomTab step={"Accounting"}/>
        </Grid>
    )
}


export default AccountingHome;