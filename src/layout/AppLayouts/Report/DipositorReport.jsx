import {Grid} from "@mui/material";
import AppBarVer3 from "../../../components/AppComponents/AppBar/AppBarVer3";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";

const DipositorReport = () => {

    return(
        <Grid
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            component={"div"}
            sx={{overflow: 'auto'}}
            container
            width={'100%'}>

            <AppBarVer3 title={"طلبکاران"} link={"app"}/>

            <SectionHeader title={"مجموع طلب"} price={"25,000,000"} badge={"ریال"} margin={3.375}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>
            <SimplePrice title={"نام مشتری‌های طلبکار"} price={"25,000,000"} badge={"ریال"}  padding={0.78}/>


        </Grid>
    )
}



export default DipositorReport;