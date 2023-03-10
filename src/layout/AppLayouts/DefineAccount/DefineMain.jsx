import {Grid} from "@mui/material";
import AppBarVer1 from "../../../components/AppComponents/AppBar/AppBarVer1";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";

const DefineMain = () => {


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

            <AppBarVer1 title={"تعاریف حسابداری"} link={"app"}/>

            <SectionHeader title={"حساب های تفضیلی"} margin={3.375}/>
            <SimplePrice title={"مشتری"} padding={1}/>
            <SimplePrice title={"سهامدار"} padding={1}/>
            <SimplePrice title={"کارمند"} padding={1}/>
            <SimplePrice title={"بانک"} padding={1}/>
            <SimplePrice title={"صندوق"} padding={1}/>
            <SimplePrice title={"تنخواه"} padding={1}/>
            <SimplePrice title={"دسته بندی درآمد"} padding={1}/>
            <SimplePrice title={"دسته بندی هزینه"} padding={1}/>
            <SimplePrice title={"سایر حساب های تفضیلی"} padding={1}/>

        </Grid>
    )

}


export default DefineMain;