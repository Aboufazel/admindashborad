import {Box, Grid, Typography} from "@mui/material";


const SecondaryInfoCard = ({bgColor , color , title}) => {

    return(
        <Grid padding={"16px"}
              display={"flex"}
              bgcolor={bgColor}
              color={color}
              justifyContent={"space-between"}
              flexDirection={"column"}
              alignItems={"end"}>
            <Box display={"flex"} alignItems={"center"} flexDirection={"row-reverse"}>
                <Typography color={"neutralN40.main"}>
                    {"شرح"}
                </Typography>
            </Box>
            <Typography mt={"12px"}>
                {title}
            </Typography>
        </Grid>
    )
}


export default SecondaryInfoCard;