import {Button, Grid, TextField} from "@mui/material";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";


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
                paddingTop={3.375}
                position={"relative"}
                alignItems={"center"}
                maxWidth={500}
                height={"100vh"}
                bgcolor={theme.palette.neutralN00.main}
                container>
                <Grid
                    display={'flex'}
                    flexDirection={"column"}
                    alignItems={"center"}
                    height={'100%'}
                    maxWidth={500}
                    width={"100%"}
                    item>
                    <AppBarVer1 title={"ورود اطلاعات"} link={"login"}/>
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
                                       }}

                            />
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="نام کسب و کار"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="ایمیل"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <TextField id="login-mobile-number"
                                       type={"password"}
                                       required={true}
                                       label="رمز عبور"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <TextField id="login-mobile-number"
                                       required={true}
                                       type={"password"}
                                       label="تکرار رمز عبور"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
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