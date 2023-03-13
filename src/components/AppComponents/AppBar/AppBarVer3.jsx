import {Box, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {SearchRounded} from "@mui/icons-material";
import theme from "../../../themes/theme";


const AppBarVer3 = ({title , link}) => {

    return(
        <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
            padding={1}
            top={0}
            maxWidth={500}
            bgcolor={theme.palette.neutralN00.main}
            position={"fixed"}
            >
            <Box  display={"flex"}>
                <Link to={`/${link}`}>
                    <ArrowForwardIcon color={"neutralN100"}/>
                </Link>
                <Typography marginLeft={1}>
                    {title}
                </Typography>
            </Box>
            <Box display={"flex"}>
                <SearchRounded/>
            </Box>
        </Grid>
    )
}



export default AppBarVer3;