import {FormControl, Grid, InputLabel, NativeSelect, Typography} from "@mui/material";
import theme from "../../../themes/theme";


const ReportHeader = ({selectValue, percent, margin, price, badge}) => {
    return (
        <Grid
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            height={40}
            width={"100%"}
            marginTop={margin}
            px={0.78}
            bgcolor={theme.palette.primary.extraLight}
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
                        <option value={selectValue}>
                            {selectValue}
                        </option>
                    </NativeSelect>
                </FormControl>
                <Typography variant={"h3"} marginLeft={0.2} color={theme.palette.neutralN40.main}>
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


export default ReportHeader;