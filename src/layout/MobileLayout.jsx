import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";
import theme from "../themes/theme";
import AppBottomTab from "../components/AppComponents/AppBottomTab/AppBottomTab";

const MobileLayout = ()=>{

    return(
        <Grid
            display={"flex"}
            justifyContent={"center"}
            container >
            <Grid
                item
                display={"flex"}
                justifyContent={"center"}
                position={"relative"}
                bgcolor={theme.palette.neutralN00.main}
                mb={0}
                height={'96vh'}
                maxWidth={500}
                width={'100%'}
                >
                <Outlet/>
                <AppBottomTab/>
            </Grid>
        </Grid>
    )
}

export default MobileLayout;