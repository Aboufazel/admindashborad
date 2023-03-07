import {Grid, Typography} from "@mui/material";
import theme from "../../../themes/theme";


const SectionHeader = ({title , margin}) => {

    return(
        <Grid
            display={"flex"}
            alignItems={"center"}
            height={"max-content"}
            width={"100%"}
            marginTop={margin}
            padding={0.6}
            bgcolor={theme.palette.primary.extraLight}
            container>
            <Typography variant={"h3"} color={theme.palette.neutralN100} fontWeight={"bold"}>
                {title}
            </Typography>
        </Grid>
    )
}


export default SectionHeader;