import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";
import {useSelector} from "react-redux";
import Loader from "../../Loader/Loader";

const Verification = () => {
    useTitle("احراز هویت");

    const Mobile = useSelector(state => state.action);
    const navigate = useNavigate();

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
                height={"80vh"}
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

                                {
                                    Mobile ? `کد تایید برای شماره ${Mobile} ارسال شد` : <Loader/>
                                }

                            </Typography>
                            <TextField id="login-mobile-number"
                                       required={true}
                                       label="کد تایید"
                                       value={Mobile.data === undefined ? "" : Mobile.data.verify}
                                       variant="standard"
                                       sx={{
                                           width: "100%",
                                           marginY: 1,
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
                        <Link to={'/forgetPass'}>
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
                        onClick={()=>{navigate("/app")}}
                        color={"primary"}>
                        {"ثبت"}
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Verification;