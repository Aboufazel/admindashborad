import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";

const MobileLayout = ()=>{

    return(
        <Grid
            container >
            <Outlet/>
        </Grid>
    )
}

export default MobileLayout;