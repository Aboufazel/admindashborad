import {Grid, Typography} from "@mui/material";
import AppBarVer3 from "../../../components/AppComponents/AppBar/AppBarVer3";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";
import ActionButton from "../../../components/AppComponents/ActionButton/ActionButton";
import AddIcon from "@mui/icons-material/Add";

const DefineListType1 = () => {

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

            <AppBarVer3 title={"عنوان لیست تفضیلی"} link={"app"}/>

            <SectionHeader title={"نام حساب معین"} margin={3.375}/>
            <SimplePrice title={"نام حساب تفضیلی"} padding={1}/>
            <SimplePrice title={"نام حساب تفضیلی"} padding={1}/>

            <SectionHeader title={"نام حساب معین"}/>
            <SimplePrice title={"نام حساب تفضیلی"} padding={1}/>

            <SectionHeader title={"نام حساب معین"}/>
            <SimplePrice title={"نام حساب تفضیلی"} padding={1}/>


            <ActionButton>
                <AddIcon/>
                <Typography variant={"h1"}>
                    {"نوع جدید"}
                </Typography>
            </ActionButton>
        </Grid>
    )
}


export default DefineListType1;