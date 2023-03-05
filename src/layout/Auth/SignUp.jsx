import {Button, Grid, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";


const SignUp = () => {
useTitle("ورود اطلاعات")
    return (
        <Grid container
              display={'flex'}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
        >
            <Grid
                display={"flex"}
                flexDirection={"column"}
                marginTop={3.375}
                alignItems={"center"}
                maxWidth={500}
                container>
                <Grid
                    display={'flex'}
                    flexDirection={"column"}
                    alignItems={"center"}
                    height={'100%'}
                    maxWidth={500}
                    width={"100%"}
                    item>
                    <Grid
                        display={"flex"}
                        justifyContent={"start"}
                        width={"95%"}
                        maxWidth={500}
                        position={"absolute"}
                        top={16}>
                        <Link to={"/login"}>
                            <ArrowForwardIcon color={"neutralN100"}/>
                        </Link>
                        <Typography marginRight={0.65}>
                            {"ورود اطلاعات"}
                        </Typography>
                    </Grid>
                    <Grid
                        display={"flex"}
                        justifyContent={"center"}
                        width={'100%'}
                        marginTop={1}
                        textAlign={"start"}
                        color={theme.palette.neutralN60.main}>
                        <form>
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="شماره موبایل"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                           '& label': {
                                               transformOrigin: "right !important",
                                               left: "inherit !important",
                                               right: "1.75rem !important",
                                           }
                                       }}

                            />
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="نام کسب و کار"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                           '& label': {
                                               transformOrigin: "right !important",
                                               left: "inherit !important",
                                               right: "1.75rem !important",
                                           }
                                       }}

                            />
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="ایمیل"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                           '& label': {
                                               transformOrigin: "right !important",
                                               left: "inherit !important",
                                               right: "1.75rem !important",
                                           }
                                       }}

                            />
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="رمز عبور"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                           '& label': {
                                               transformOrigin: "right !important",
                                               left: "inherit !important",
                                               right: "1.75rem !important",
                                           }
                                       }}

                            />
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="تکرار رمز عبور"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                           '& label': {
                                               transformOrigin: "right !important",
                                               left: "inherit !important",
                                               right: "1.75rem !important",
                                           }
                                       }}

                            />
                        </form>
                    </Grid>
                    <Button
                        type={"submit"}
                        sx={{
                            marginTop: 1,
                            width: "95%",
                            position:"absolute",
                            padding: 0.65,
                            bottom: 16,
                            maxWidth:500
                        }} variant={"contained"}
                        color={"primary"}>
                        {"ثبت"}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default SignUp;