import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../../../themes/theme";


const AppBarVer1 = ({title , link}) => {

    return(
        <Grid
            display={"flex"}
            justifyContent={"start"}
            width={"95%"}
            maxWidth={500}
            position={"fixed"}
            padding={1}
            top={0}>
            <Link to={`/${link}`}>
                <ArrowForwardIcon color={"neutralN100"}/>
            </Link>
            <Typography marginLeft={0.55}>
                {title}
            </Typography>
        </Grid>
    )
}



export default AppBarVer1;