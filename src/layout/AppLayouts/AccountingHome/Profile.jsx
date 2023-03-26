import useTitle from "../../../hooks/useTitle";
import {Grid} from "@mui/material";
import AppBarVer2 from "../../../components/AppComponents/AppBar/AppBarVer2";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";
import {useSelector} from "react-redux";


const Profile = () => {
    useTitle("حساب کاربر")
    const ProfileInfo = useSelector(state => state.action);
    console.log(ProfileInfo.user)

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
            <SimplePrice title={"نام کسب و کار"} price={ProfileInfo.user === undefined ? "" :ProfileInfo.business.map(item =>(item.businessName))} padding={0.6}/>
            <SimplePrice title={"شماره تلفن"} price={ProfileInfo.user === undefined ? "" :ProfileInfo.user.mobile} padding={0.6}/>
            <SimplePrice title={"ایمیل"} price={ProfileInfo.user === undefined ? "" :ProfileInfo.user.email} padding={0.6}/>
            <SimplePrice title={"تغییر اطلاعات کاربر"} padding={0.6}/>
            <SimplePrice title={"تغییر رمز عبور"} padding={0.6}/>

            <SectionHeader title={"اطلاعات"} padding={0.6}/>
            <SimplePrice title={"تماس با پشتیبانی"} padding={0.6}/>
            <SimplePrice title={"خروج از حساب کاربری"} padding={0.6}/>

        </Grid>
    )

}


export default Profile;