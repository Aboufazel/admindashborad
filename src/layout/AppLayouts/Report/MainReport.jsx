import {Grid} from "@mui/material";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";
import AppBarVer1 from "../../../components/AppComponents/AppBar/AppBarVer1";


const MainReport = () =>{

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

            <AppBarVer1 title={"گزارشات"} link={"app"}/>

            <SectionHeader title={"گزارشات وضعیت کسب و کار"} margin={3.375}/>
            <SimplePrice title={"موجودی نقدی"} padding={1}/>
            <SimplePrice title={"بدهکار"} padding={1}/>
            <SimplePrice title={"طلبکاران"} padding={1}/>
            <SimplePrice title={"گزارش درامد"} padding={1}/>
            <SimplePrice title={"گزارش هزینه"} padding={1}/>

        </Grid>
    )
}



export default MainReport;