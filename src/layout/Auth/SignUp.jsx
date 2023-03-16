import {Alert, Box, Button, Grid, TextField, Typography, Zoom} from "@mui/material";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";

import {userData} from "../../Toolkit/Slice/contact.slice"
import {useDispatch} from "react-redux";
import {useState} from "react";
import {CreateNewUser} from "../../api/Services";
import {useNavigate} from "react-router-dom";
import WhiteLoader from "../../Loader/WhiteLoader";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import * as Yup from "yup";


const SignUp = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [helperText, setHelperTex] = useState({mobile: "", passWord: "" , rePassword:""});
    const [form, setForm] = useState([
        {mobile: "", job: "", email: "", password: "", rePassword: ""}
    ])


    const [error, setError] = useState({mobile: false, passWord: false , rePassword:false})




    const [type, setType] = useState('password');

    // validated states
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    const manageChange = (e) => {
        if (e.target.name === "password"){
            setForm({...form, [e.target.name]: e.target.value});
            const lower = new RegExp('(?=.*[a-z])');
            const upper = new RegExp('(?=.*[A-Z])');
            const number = new RegExp('(?=.*[0-9])');
            const special = new RegExp('(?=.*[!@#\$%\^&\*])');
            const length = new RegExp('(?=.{8,})')
            if (lower.test(e.target.value)) {
                setLowerValidated(true);
            } else {
                setLowerValidated(false);
            }
            if (upper.test(e.target.value)) {
                setUpperValidated(true);
            } else {
                setUpperValidated(false);
            }
            if (number.test(e.target.value)) {
                setNumberValidated(true);
            } else {
                setNumberValidated(false);
            }
            if (special.test(e.target.value)) {
                setSpecialValidated(true);
            } else {
                setSpecialValidated(false);
            }
            if (length.test(e.target.value)) {
                setLengthValidated(true);
            } else {
                setLengthValidated(false);
            }
        } else {
            setForm({...form, [e.target.name]: e.target.value});
        }
    }


    const EmptyInput = () => {
        setForm({mobile: "", job: "", mail: "", password: "", rePassword: ""});
    }


    const manageSubmit = async (e) => {
        e.preventDefault();
        setError({mobile: false, passWord: false , rePassword: false})
        setHelperTex({mobile: "", passWord: ""})
        setLoading(true);
        if(form.password === form.rePassword){
            const sendData = await CreateNewUser(form.mobile, form.password, form.mail, form.job)
                .catch((error) => {
                    setLoading(false);
                    if (error.response.data.errors.Mobile !== undefined && error.response.data.errors.passWord !== undefined) {
                        setError({mobile: true, passWord: true});
                        console.log(error.response.data.errors.Mobile[0])
                        setHelperTex({
                            mobile: `${error.response.data.errors.Mobile[0]}`,
                            passWord: `${error.response.data.errors.passWord[0]}`
                        })
                    } else if (error.response.data.errors.Mobile !== undefined) {
                        setError({mobile: true, passWord: false})
                        setHelperTex({mobile: "", passWord: `${error.response.data.errors.passWord[0]}`})

                    } else if (error.response.data.errors.passWord !== undefined) {
                        setError({mobile: false, passWord: true})
                        setHelperTex({mobile: `${error.response.data.errors.Mobile[0]}`, passWord: ""})

                    }

                    console.log(error.response.data.errors);
                    navigate("/signUp");
                });
            if (sendData.data.isSuccess === true) {
                navigate("/verification");
                dispatch(userData(sendData.data));
                EmptyInput()
                setLoading(false);
            }
        }else {
            setError({passWord: true , rePassword: true})
            setLoading(false)
        }

    }

    const dispatch = useDispatch();







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
                overflow={"scroll"}
                bgcolor={theme.palette.neutralN00.main}
                container>
                <Grid
                    display={'flex'}
                    flexDirection={"column"}
                    alignItems={"center"}
                    height={"80vh"}
                    maxWidth={500}
                    width={"100%"}
                    item>
                    <AppBarVer1 title={"ورود اطلاعات"} link={"login"}/>

                    <form onSubmit={manageSubmit}>
                        <Grid
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            width={'100%'}
                            marginTop={1}
                            textAlign={"start"}
                            color={theme.palette.neutralN60.main}>

                            <TextField name="mobile"
                                       required={true}
                                       type={"tel"}
                                       label="شماره موبایل"
                                       variant="outlined"
                                       error={error.mobile}
                                       helperText={error.mobile ? "شماره موبایل درست نیست" : ""}
                                       value={form.mobile}
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <TextField name="job"
                                       required={true}
                                       label="نام کسب و کار"
                                       variant="outlined"
                                       value={form.job}
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}
                            />
                            <TextField name="mail"
                                       required={true}
                                       label="ایمیل"
                                       type={"email"}
                                       variant="outlined"
                                       value={form.mail}
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <Grid display={"flex"} flexDirection={"column"} width={"100%"}>
                                <Grid position={"relative"}>
                                    <TextField name="password"
                                               type={type}
                                               width={"100%"}
                                               required={true}
                                               label="رمز عبور"
                                               error={error.passWord}
                                               value={form.password}
                                               helperText={error.passWord ? "پسورد  همخوانی ندارد" : ""}
                                               variant="outlined"
                                               onChange={manageChange}
                                               sx={{
                                                   width: "100%",
                                                   marginY: 0.5,
                                               }}

                                    />
                                    {type === "password" ? (
                                        <Box sx={{position: "absolute", top: "23px", right: "15px"}}
                                             onClick={() => setType("text")}>
                                            <VisibilityOffIcon/>
                                        </Box>
                                    ) : (
                                        <Box sx={{position: "absolute", top: "23px", right: "15px"}}
                                             onClick={() => setType("password")}>
                                            <RemoveRedEyeIcon/>
                                        </Box>
                                    )}
                                </Grid>

                                {/* validation tracker */}
                                <Grid>
                                    <Box display={"flex"} marginY={0.5}>
                                        {lowerValidated ? (
                                            <CheckCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                    color={"success"}/>
                                        ) : (
                                            <RemoveCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                     color={"error"}/>
                                        )}
                                        <Typography variant={"h3"}>
                                            {"شامل حروف انگلیسی  کوچک"}
                                        </Typography>
                                    </Box>
                                    <Box display={"flex"} marginY={0.5}>
                                        {upperValidated ? (
                                            <CheckCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                    color={"success"}/>
                                        ) : (
                                            <RemoveCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                     color={"error"}/>
                                        )}
                                        <Typography variant={"h3"}>
                                            {"شامل حروف انگلیسی بزرگ"}
                                        </Typography>
                                    </Box>
                                    <Box display={"flex"} marginY={0.5}>
                                        {numberValidated ? (
                                            <CheckCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                    color={"success"}/>
                                        ) : (
                                            <RemoveCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                     color={"error"}/>
                                        )}
                                        <Typography variant={"h3"}>
                                            {"شامل عدد"}
                                        </Typography>
                                    </Box>
                                    <Box display={"flex"} marginY={0.5}>
                                        {specialValidated ? (
                                            <CheckCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                    color={"success"}/>

                                        ) : (
                                            <RemoveCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                     color={"error"}/>
                                        )}
                                        <Typography variant={"h3"}>
                                            {"شامل علائم (@!#$%&*)"}
                                        </Typography>
                                    </Box>
                                    <Box display={"flex"} marginY={0.5}>
                                        {lengthValidated ? (
                                            <CheckCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                    color={"success"}/>
                                        ) : (
                                            <RemoveCircleOutlineIcon fontSize="small" sx={{marginRight: 0.5}}
                                                                     color={"error"}/>
                                        )}
                                        <Typography variant={"h3"}>
                                            {"حداقل 8 حرف باشد"}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>


                            <TextField name="rePassword"
                                       required={true}
                                       type={"password"}
                                       label="تکرار رمز عبور"
                                       variant="outlined"
                                       error={error.rePassword}
                                       value={form.rePassword}
                                       helperText={error.rePassword ? "پسورد همخوانی ندارد" : ""}
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <Button
                                type={"submit"}
                                sx={{
                                    width: "60%",
                                    position: "fixed",
                                    padding: 0.65,
                                    bottom: 16,
                                    maxWidth: 500
                                }} variant={"contained"}
                                color={"primary"}>
                                {
                                    loading === false ? "ثبت" : <WhiteLoader/>
                                }
                            </Button>

                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default SignUp;