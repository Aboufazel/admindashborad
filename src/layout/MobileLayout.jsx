import {Grid} from "@mui/material";
import {Outlet} from "react-router-dom";

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
                maxWidth={500}
                width={'100%'}
                >
                <Outlet/>
            </Grid>
        </Grid>
    )
}

export default MobileLayout;