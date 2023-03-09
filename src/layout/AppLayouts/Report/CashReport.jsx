
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import {Grid} from "@mui/material";
import ReportBody from "../../../components/AppComponents/ReportHeader/ReportBody";


const CashReport = () => {

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
            <SectionHeader title={"مجموع موجودی"} price={"25,000,000"} badge={"ریال"}/>
            <ReportBody HeaderTitle={"نام بانک"} percent={"78 درصد"} price={"25,000,000"} badge={"ریال"}/>
        </Grid>
    )
}


export default CashReport;