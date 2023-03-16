import "./login.style.css"
import {LoginApi} from "../../api/Services"
import {Link, useNavigate} from "react-router-dom";
import useStorage from "../../hooks/storage";
import {useState} from "react";
import {Alert, Box, Button, Grid, TextField, Typography, Zoom} from "@mui/material";
import WhiteLoader from "../../Loader/WhiteLoader";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import Storage from "../../Service/Storage";

const Login = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);



    const navigate = useNavigate();
    const [authInfo, setAuthInfo] = useStorage("auth", {
        userId: "",
        accessToken: "",
        kind:""
    })

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const manageSubmit = (e) => {
        e.preventDefault();
        const admin = 4;
        setLoading(true);
        setShowAlert(false);
        LoginApi(state.email, state.password)
            .then(res => {
                if (res.data.isSuccess === true) {
                    setLoading(false)
                    setAuthInfo({
                        userId: res.data.token.userId,
                        accessToken: res.data.token.token,
                        kind:res.data.user.kind,
                    })
                    if (res.data.user.kind === admin){
                        navigate("/");
                    }else {
                        navigate("/app")
                    }
                }
                else {
                    setMessage(res.data.message);
                    setShowAlert(true);
                    setLoading(false);
                    setChecked((prev) => !prev);
                    setTimeout(() => {
                        setShowAlert(false)
                    }, 500)
                }
            })

    };

    useTitle("صفحه ورود")

    return (
        <Grid container
              display={'flex'}
              flexDirection={"column"}
              alignItems={"center"}
        >
            {showAlert === true ?
                <Box position={"absolute"} bottom={150} right={10}>
                    <Zoom in={checked}>
                        <Alert sx={{transition: 10}} variant="filled" severity="error">
                            {message}
                        </Alert>
                    </Zoom>
                </Box>
                : <></>}
            <Grid
                display={"flex"}
                flexDirection={"column"}
                paddingTop={3.375}
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
                    novalidate
                    item>
                    <form onSubmit={manageSubmit}>
                        <TextField id="login-mobile-number"
                                   required={true}
                                   label="شماره موبایل"
                                   variant="outlined"
                                   onChange={(e) => setState({...state, email: e.target.value})}
                                   value={state.email}
                                   sx={{
                                       width: "100%",
                                       marginY: 1,
                                   }}

                        />
                        <TextField id="login-mobile-number"
                                   required={true}
                                   type="password"
                                   label="رمز عبور"
                                   onChange={(e) => setState({
                                       ...state,
                                       password: e.target.value
                                   })}
                                   value={state.password}
                                   variant="outlined"
                                   sx={{
                                       width: "100%",
                                       marginY: 1,
                                   }}/>
                        <Button
                            type={"submit"}
                            color={"primary"}
                            variant="contained"
                            sx={{width: "100%", p: 0.7}}>
                            {
                                loading === false ? "ورود" : <WhiteLoader/>
                            }
                        </Button>
                    </form>

                    <Grid
                        display={"flex"}
                        marginTop={3.375}
                        textAlign={"center"}>
                        <Link to={'/forgetPass'}>
                            {"فراموشی کلمه عبور"}
                        </Link>
                    </Grid>

                    <Grid
                        padding={0.63}
                        width={'100%'}
                        maxWidth={500}
                        sx={{
                            background: theme.palette.primary.extraLight,
                            cursor: "pointer",
                            position: "fixed",
                            bottom: 41,
                        }}>
                        <Typography color={theme.palette.neutralN100.main}>
                            {"تماس با پشتیبانی"}
                        </Typography>
                    </Grid>
                    <Grid
                        padding={0.63}
                        width={'100%'}
                        maxWidth={500}
                        color={theme.palette.neutralN100.main}
                        sx={{
                            background: theme.palette.primary.extraLight,
                            position: "fixed",
                            bottom: 0,
                        }}>
                        <Link to={"/signUp"}>
                            {"ساخت کسب و کار جدید"}
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login;