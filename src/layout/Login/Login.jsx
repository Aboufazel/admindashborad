
import "./login.style.css"
import {LoginApi} from "../../api/Services"
import {Link, useNavigate} from "react-router-dom";
import useStorage from "../../hooks/storage";
import {useState} from "react";
import {Alert, Box, Button, Grid, TextField, Typography} from "@mui/material";
import WhiteLoader from "../../Loader/WhiteLoader";
import theme from "../../themes/theme";

const Login = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState(false);
    const [loading , setLoading] = useState(false);


    const navigate = useNavigate();
    const [authInfo, setAuthInfo] = useStorage("auth", {
        userId: "",
        accessToken: "",
    })

        const [state, setState] = useState({
            email: "",
            password: "",
        });

        const manageSubmit = (e) => {
            e.preventDefault();
            setLoading(true)
            LoginApi(state.email, state.password)
                .then(res => {
                    if (res.data.isSuccess === true) {
                        setAuthInfo({
                            userId: res.data.data.userId,
                            accessToken: res.data.data.token,
                        });
                        navigate("/");
                    } else {
                        setMessage(res.data.message);
                        setShowAlert(true);
                        setTimeout(() => {
                            setShowAlert(false)
                        }, 1000)
                    }
                })

        };
        return (
            <Grid container
                  display={'flex'}
                  flexDirection={"column"}
                  color={"white"}
                  alignItems={"center"}
                  >
                {showAlert === true ?
                    <Box position={"absolute"} sx={{transition:0.5}} top={10} right={10}>
                        <Alert variant="filled"  severity="error">
                            {message}
                        </Alert>
                    </Box>
                    : <></>}
                <Grid
                    display={"flex"}
                    flexDirection={"column"}
                    marginTop={3.375}
                    maxWidth={500}
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
                                       onChange={(e) => setState({
                                           ...state,
                                           password: e.target.value
                                       })}
                                       value={state.password}
                                       variant="outlined"
                                       sx={{
                                           width: "100%",
                                           marginY: 1,
                                           '& label': {
                                               transformOrigin: "right !important",
                                               left: "inherit !important",
                                               right: "1.75rem !important",
                                           }
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
                            <Link  to={'/forgetPass'}>
                                {"فراموشی کلمه عبور"}
                            </Link>
                        </Grid>

                        <Grid
                              padding={0.63}
                              width={'100%'}
                              maxWidth={500}
                              sx={{background:theme.palette.primary.extraLight ,
                                  cursor:"pointer",
                                  position:"absolute",
                                  bottom:41,
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
                            sx={{background:theme.palette.primary.extraLight ,
                                position:"absolute",
                                bottom:0,
                            }}>
                            <Link to={"/register"}>
                                {"ساخت کسب و کار جدید"}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    export default Login;