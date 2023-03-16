import {Grid, Typography} from "@mui/material";
import theme from "../../../themes/theme";


const SimplePrice = ({title , price , badge , padding}) => {

    return(
        <Grid
            display={"flex"}
            alignItems={"center"}
            height={40}
            width={"100%"}
            padding={padding}
            container>

            <Grid
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
                sx={{
                    cursor: 'pointer',
                    transition: 0.5,
                }}
                xs={6}

                bgcolor={"white"} item>
                <Typography
                    color={theme.palette.neutralN100.main}
                            variant={"h2"}>
                    {title}
                </Typography>
            </Grid>

            <Grid
                display={"flex"}
                alignItems={"center"}
                justifyContent={"end"}
                xs={6}
                sx={{
                    cursor: 'pointer',
                    transition: 0.5,
                }}
                bgcolor={"white"} item>
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







export default SimplePrice;