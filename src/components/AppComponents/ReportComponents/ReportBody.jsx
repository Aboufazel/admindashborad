import {Grid, NativeSelect, Typography} from "@mui/material";
import theme from "../../../themes/theme";


const ReportBody = ({percent , HeaderTitle , margin , price , badge}) => {


    return(
        <Grid
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={40}
            width={"100%"}
            marginTop={margin}
            px={0.78}
            container>

            <Grid
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
                xs={6}
                sx={{
                    cursor: 'pointer',
                    transition: 0.5,
                }}
                item>
                <Typography display={"flex"} color={theme.palette.neutralN100.main} variant={"h2"}>
                    {HeaderTitle}
                </Typography>
                <Typography variant={"h3"} marginLeft={1} color={theme.palette.neutralN40.main}>
                    {percent}
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

export default ReportBody;