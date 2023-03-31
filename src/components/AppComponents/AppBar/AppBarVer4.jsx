import {Box, FormControl, Grid, NativeSelect, Typography} from "@mui/material";
import theme from "../../../themes/theme";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


const AppBarVer4 = ({title , link}) => {

    return(
        <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
            height={56}
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
                <FormControl>
                    <NativeSelect
                        defaultValue={30}
                        sx={{
                            ":before": {
                                borderBottom: "none",
                            },

                            ":after": {
                                borderBottom: "none",
                            }
                        }}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={title}>
                            {title}
                        </option>
                    </NativeSelect>
                </FormControl>
            </Box>
        </Grid>
    )
}



export default AppBarVer4;