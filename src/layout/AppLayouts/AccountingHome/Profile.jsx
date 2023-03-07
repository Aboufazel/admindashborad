import useTitle from "../../../hooks/useTitle";
import {Grid} from "@mui/material";
import AppBarVer2 from "../../../components/AppComponents/AppBar/AppBarVer2";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";


const Profile = () => {
    useTitle("حساب کاربر")

    return (
        <Grid
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            component={"div"}
            sx={{overflow: 'auto'}}
            container
            width={'100%'}>

            <AppBarVer2 title={"حساب کاربری"}/>

            <SectionHeader title={"اطلاعات"} margin={3.375}/>
            <SimplePrice title={"نام کسب و کار"} price={"زندی کالا"}/>
            <SimplePrice title={"شماره تلفن"} price={"09179896554"}/>
            <SimplePrice title={"ایمیل"} price={"siavashma.ir@gmail.com"}/>
            <SimplePrice title={"تغییر اطلاعات کاربر"}/>
            <SimplePrice title={"تغییر رمز عبور"}/>

            <SectionHeader title={"اطلاعات"}/>
            <SimplePrice title={"تماس با پشتیبانی"}/>
            <SimplePrice title={"خروج از حساب کاربری"}/>

        </Grid>
    )

}


export default Profile;