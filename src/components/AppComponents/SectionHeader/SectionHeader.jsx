import {Grid, Typography} from "@mui/material";
import theme from "../../../themes/theme";


const SectionHeader = ({title , margin , price , badge}) => {

    return(
        <Grid
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={"max-content"}
            width={"100%"}
            marginTop={margin}
            padding={0.78}
            bgcolor={theme.palette.primary.extraLight}
            container>
            <Typography variant={"h3"} color={theme.palette.neutralN100} fontWeight={"bold"}>
                {title}
            </Typography>

            <Grid
                display={"flex"}
                alignItems={"center"}
                justifyContent={"end"}
                xs={6}
                sx={{
                    cursor: 'pointer',
                    transition: 0.5,
                }}
                item>
                <Typography display={"flex"} color={theme.palette.neutralN100.main} variant={"h2"}>
                    {price}
                    <Typography display={price ? "block" : "none"} color={theme.palette.neutralN40.main} variant={"h2"}>
                        {badge}
                    </Typography>
                </Typography>
            </Grid>
        </Grid>
    )
}


export default SectionHeader;