
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import {Grid} from "@mui/material";
import ReportBody from "../../../components/AppComponents/ReportComponents/ReportBody";
import AppBarVer3 from "../../../components/AppComponents/AppBar/AppBarVer3";
import ReportHeader from "../../../components/AppComponents/ReportComponents/ReportHeader";


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
            <AppBarVer3 title={"موجودی نقد"}/>
            <Grid container mt={3.375}>
                <SectionHeader title={"مجموع موجودی"} price={"25,000,000"} badge={"ریال"}/>
                <ReportHeader selectValue={"بانک"} percent={"78 درصد"} price={"25,000,000"} badge={"ریال"}/>
                <ReportBody HeaderTitle={"نام بانک"} percent={"78 درصد"} price={"25,000,000"} badge={"ریال"}/>
                <ReportBody HeaderTitle={"نام بانک"} percent={"78 درصد"} price={"25,000,000"} badge={"ریال"}/>
                <ReportHeader selectValue={"بانک"} percent={"78 درصد"} price={"25,000,000"} badge={"ریال"}/>
                <ReportBody HeaderTitle={"نام بانک"} percent={"78 درصد"} price={"25,000,000"} badge={"ریال"}/>
                <ReportHeader selectValue={"بانک"} percent={"78 درصد"} price={"25,000,000"} badge={"ریال"}/>
                <ReportBody HeaderTitle={"نام بانک"} percent={"78 درصد"} price={"25,000,000"} badge={"ریال"}/>
            </Grid>
        </Grid>
    )
}


export default CashReport;