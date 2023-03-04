import {Box, Grid, Typography} from "@mui/material";


const Balance = ({bgColor , color , statusColor , title , status , accountBalance}) => {

    return(
        <Grid padding={"16px"}
              display={"flex"}
              bgcolor={bgColor}
              color={color}
              justifyContent={"space-between"}>
            <Box display={"flex"} alignItems={"center"} flexDirection={"row-reverse"}>
                <Typography ml={"5px"}>
                    {`${accountBalance}`}
                </Typography>
                <Typography color={"neutralN40.main"}>
                    {"ریال"}
                </Typography>
            </Box>
            <Box display={"flex"} flexDirection={"row-reverse"} alignItems={"center"}>
                <Typography fontWeight={"bold"} ml={"10px"}>
                    {title}
                </Typography>
                <Typography color={statusColor} fontWeight={"bold"} >
                    {status}
                </Typography>
            </Box>
        </Grid>
    )
}

export default Balance;