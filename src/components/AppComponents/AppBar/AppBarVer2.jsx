import {Grid, Typography} from "@mui/material";
import theme from "../../../themes/theme";


const AppBarVer2 = ({title}) => {

    return(
        <Grid
            display={"flex"}
            justifyContent={"start"}
            width={"100%"}
            padding={1}
            maxWidth={500}
            bgcolor={theme.palette.neutralN00.main}
            position={"absolute"}
            >
            <Typography marginRight={0.65}>
                {title}
            </Typography>
        </Grid>
    )
}



export default AppBarVer2;