import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";

const Verification = () => {
    useTitle("احراز هویت")
    return (
        <Grid container
              display={'flex'}
              flexDirection={"column"}
              alignItems={"center"}
        >
            <Grid
                display={"flex"}
                flexDirection={"column"}
                paddingTop={3.375}
                position={"relative"}
                maxWidth={500}
                height={"100vh"}
                bgcolor={theme.palette.neutralN00.main}
                alignItems={"center"}
                container>
                <Grid
                    display={'flex'}
                    flexDirection={"column"}
                    alignItems={"center"}
                    height={'100%'}
                    width={"100%"}
                    item>
                    <AppBarVer1 title={"احراز هویت"} link={"login"}/>
                    <Grid
                        display={"flex"}
                        justifyContent={"center"}
                        width={'100%'}
                        marginTop={1}
                        textAlign={"start"}
                        color={theme.palette.neutralN60.main}>
                        <form>
                            <Typography variant={"h2"}>
                                کد تایید برای 09179896554 ارسال شد <Link to={'/login'}>ویرایش شماره</Link>
                            </Typography>
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="شماره موبایل"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 1,
                                           '& label': {
                                               transformOrigin: "right !important",
                                               left: "inherit !important",
                                               right: "1.75rem !important",
                                           }
                                       }}

                            />
                        </form>
                    </Grid>
                    <Grid
                        display={"flex"}
                        marginTop={3.375}
                        position={"absolute"}
                        bottom={"74px"}
                        textAlign={"center"}>
                        <Link to={'/login/forgetPass'}>
                            {"ارسال مجدد کد تایید"}
                        </Link>
                    </Grid>
                    <Button
                        type={"submit"}
                        sx={{
                            marginTop: 1,
                            width: "95%",
                            padding: 0.65,
                            position: "absolute",
                            maxWidth: 500,
                            bottom: 16
                        }} variant={"contained"}
                        color={"primary"}>
                        {"ثبت"}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Verification;