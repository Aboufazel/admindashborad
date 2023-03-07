import {Box, Grid, Typography} from "@mui/material";
import theme from "../../../themes/theme";


const MainAddShow = ({num , data , desc , price , badge, marginT})=>{

    return(
        <Grid
            display={"flex"}
            alignItems={"center"}
            height={"max-content"}
            width={"100%"}
            marginTop={marginT}
            padding={0.6}
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
                <Box display={"flex"} flexDirection={"column"}>
                    <Box marginBottom={1} display={"flex"} alignItems={"center"}>
                        <Typography
                            color={theme.palette.neutralN100.main}
                            marginRight={1}
                            variant={"h2"}>
                            {num}
                        </Typography>
                        <Typography
                            color={theme.palette.neutralN100.main}
                            variant={"h2"}>
                            {data}
                        </Typography>
                    </Box>
                    <Typography
                        color={theme.palette.neutralN40.main}
                        variant={"h2"}>
                        {desc}
                    </Typography>
                </Box>
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


export default MainAddShow;