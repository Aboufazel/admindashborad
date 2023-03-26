import {Button, Grid, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";
import {useSelector} from "react-redux";
import Loader from "../../Loader/Loader";
import {VerifyCode} from "../../api/Services";
import WhiteLoader from "../../Loader/WhiteLoader";
import {useState} from "react";

const Verification = () => {
    useTitle("احراز هویت");
    const [loading, setLoading] = useState(false);
    const Mobile = useSelector(state => state.action);
    const navigate = useNavigate();


      const manageVerification = async () =>{
          setLoading(true);
          const sendData = await VerifyCode(Mobile.data.verify , Mobile.data.userId).catch();
          if (sendData.data.isSuccess === true){
              navigate("/app")
              setLoading(false)
          }
      }


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
                            width: "90%",
                            padding: 0.65,
                            position: "fixed",
                            maxWidth: 500,
                            bottom: 16
                        }} variant={"contained"}
                        onClick={()=>manageVerification()}
                        color={"primary"}>
                        {
                            loading === false ? "ثبت" : <WhiteLoader/>
                        }
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default Verification;