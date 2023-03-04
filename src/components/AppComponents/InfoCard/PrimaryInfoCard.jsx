import {Box, Grid, Typography} from "@mui/material";


const PrimaryInfoCard = ({title , accountBalance ,bgColor , color}) => {

    return(
        <Grid paddingX={"16px"}
              marginY={1}
              display={"flex"}
              bgcolor={bgColor}
              width={"100%"}
              color={color}
              justifyContent={"space-between"}
              alignItems={"center"}>
            <Typography>
                {title}
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
                <Typography ml={"5px"}>
                    {`${accountBalance}`}
                </Typography>
                <Typography color={"neutralN40.main"}>
                    {"ریال"}
                </Typography>
            </Box>
        </Grid>
    )
}

export default PrimaryInfoCard;