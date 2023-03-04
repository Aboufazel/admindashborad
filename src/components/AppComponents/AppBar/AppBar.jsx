import {Box, Grid, Typography} from "@mui/material";
import {ArrowForward, Settings} from "@mui/icons-material";
import theme from "../../themes/theme";


const AppBar = ({bgColor , itemColor , title}) => {

    return(
        <Grid display={"flex"}
              justifyContent={"space-between"}
              bgcolor={`${bgColor}`}
              maxWidth={"768px"}
              sx={{color:`${itemColor}`}}
              padding={theme.spacing}>
            <Box display={"flex"}
                 alignItems={"center"}
                 justifyContent={"center"}>
                <ArrowForward sx={{marginLeft:"2px" , cursor:"pointer"}}/>
                <Typography sx={{cursor:"pointer"}}>
                    {title}
                </Typography>
            </Box>
            <Settings sx={{cursor:"pointer"}}/>
        </Grid>
    );
}

export default AppBar;