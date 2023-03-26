import useTitle from "../../../hooks/useTitle";
import {Grid} from "@mui/material";
import AppBarVer2 from "../../../components/AppComponents/AppBar/AppBarVer2";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";
import {useContext} from "react";
import {GiveIdContext} from "../../../Context/GiveId";


const Profile = () => {
    useTitle("حساب کاربر")
    const userInfo = useContext(GiveIdContext);
    console.log(userInfo)

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
            <SimplePrice title={"نام کسب و کار"} price={"زندی کالا"} padding={0.6}/>
            <SimplePrice title={"شماره تلفن"} price={"09179896554"} padding={0.6}/>
            <SimplePrice title={"ایمیل"} price={"siavashma.ir@gmail.com"} padding={0.6}/>
            <SimplePrice title={"تغییر اطلاعات کاربر"} padding={0.6}/>
            <SimplePrice title={"تغییر رمز عبور"} padding={0.6}/>

            <SectionHeader title={"اطلاعات"} padding={0.6}/>
            <SimplePrice title={"تماس با پشتیبانی"} padding={0.6}/>
            <SimplePrice title={"خروج از حساب کاربری"} padding={0.6}/>

        </Grid>
    )

}


export default Profile;