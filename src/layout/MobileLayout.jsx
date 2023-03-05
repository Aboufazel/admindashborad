import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";

const MobileLayout = ()=>{

    return(
        <Box>
            <Outlet/>
        </Box>
    )
}

export default MobileLayout;