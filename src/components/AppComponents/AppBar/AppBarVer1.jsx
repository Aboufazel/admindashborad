import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const AppBarVer1 = ({title , link}) => {

    return(
        <Grid
            display={"flex"}
            justifyContent={"start"}
            width={"95%"}
            maxWidth={500}
            position={"absolute"}
            top={16}>
            <Link to={`/${link}`}>
                <ArrowForwardIcon color={"neutralN100"}/>
            </Link>
            <Typography marginRight={0.65}>
                {title}
            </Typography>
        </Grid>
    )
}



export default AppBarVer1;