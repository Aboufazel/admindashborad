import {Button, colors, Grid, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";

const ForgetPass = () => {

    useTitle("فراموشی رمز عبور")
    const navigate  = useNavigate()
    return (
        <Grid container
              display={'flex'}
              flexDirection={"column"}
              alignItems={"center"}
        >
            <Grid
                display={"flex"}
                flexDirection={"column"}
                position={"relative"}
                paddingTop={3.375}
                maxWidth={500}
                alignItems={"center"}
                height={"100vh"}
                bgcolor={theme.palette.neutralN00.main}
                container>
                <Grid
                    display={'flex'}
                    flexDirection={"column"}
                    alignItems={"center"}
                    height={'100%'}
                    width={"100%"}
                    item>
                    <AppBarVer1 title={"فراموشی رمز"} link={"login"}/>
                    <Grid
                        display={"flex"}
                        justifyContent={"center"}
                        width={'100%'}
                        marginTop={1}
                        textAlign={"start"}
                        color={theme.palette.neutralN60.main}>
                        <form>
                            <Typography variant={"h2"}>
                                شماره خود را وارد کنید
                            </Typography>
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="شماره موبایل"
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 1,
                                       }}

                            />
                        </form>
                    </Grid>
                    <Button
                        type={"submit"}
                        sx={{
                            marginTop: 1,
                            width: "95%",
                            padding: 0.65,
                            position: "absolute",
                            maxWidth:500,
                            bottom: 16
                        }} variant={"contained"}
                        onClick={()=> navigate('/login/verification')}
                        color={"primary"}>
                            {"ثبت"}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ForgetPass;