import {Box, Grid} from "@mui/material";
import AppBarVer1 from "../../../components/AppComponents/AppBar/AppBarVer1";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";
import {DefineData} from "../../../data/Database/DefineData";
import {useNavigate} from "react-router-dom";

const DefineMain = () => {
    const navigate = useNavigate()


    const ManageNavigate = (itemLink) => {
        navigate(itemLink)
    }


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

            <AppBarVer1 title={"تعاریف حسابداری"} link={"app"}/>

            <SectionHeader title={"حساب های تفضیلی"} margin={3.375}/>
            {
                DefineData.map(item => (
                    <Box key={`define-items-${item.id}`} onClick={() => ManageNavigate(item.link)} display={"flex"}
                         width={"100%"}>
                        <SimplePrice title={item.name} padding={1}/>
                    </Box>
                ))
            }
        </Grid>
    )

}


export default DefineMain;