import {Alert, AlertTitle, Button, Grid, TextField} from "@mui/material";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";

import {userData, userMobile} from "../../Toolkit/Slice/contact.slice"
import {useDispatch} from "react-redux";
import {useState} from "react";
import {CreateNewUser} from "../../api/Services";
import {useNavigate} from "react-router-dom";
import WhiteLoader from "../../Loader/WhiteLoader";

const SignUp = () => {
const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [show , setShow] = useState(false);
    const [form, setForm] = useState([
        {mobile: "", job: "", mail: "", password: "", rePassword: ""},
    ])

    const manageChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }


    const EmptyInput =  () => {
        setForm({mobile: "", job: "", mail: "", password: "", rePassword: ""});
    }

    const manageAlert = () =>{
        setShow(show ? false : true)
    }

    const manageSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const sendData = await CreateNewUser( form.mobile , form.password , form.mail , form.job )
            .catch((error)=>{
                setLoading(false);
                console.log(error);
                manageAlert()
                EmptyInput()
                navigate("/signUp");
            });
        console.log(sendData)
        if(sendData.data.isSuccess === true){
            navigate("/verification");
            dispatch(userData(sendData.data));
            EmptyInput()
            setLoading(false);
            manageAlert()
        }
        setTimeout(()=>{
            manageAlert()
        } , 100)
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
                    {
                        show ? <Alert sx={{position:"absolute" , bottom:90}} severity="error">
                            <AlertTitle></AlertTitle>
                            {"ثبت با مشکل مواجه شد" }
                            <br/>
                            <br/>
                            {"شماره موبایل معتبر وارد نمایید"}
                            <br/>
                            <br/>
                            {"ایمیل معتبر وارد نمایید"}
                            <br/>
                            <br/>
                            {"رمز باید حداقل 8 حرف و شامل حرف عدد و کارکتر باشد مانند a123@Asd"}
                        </Alert>   : ""
                    }
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
                            <TextField name="password"
                                       type={"password"}
                                       required={true}
                                       label="رمز عبور"
                                       value={form.password}
                                       variant="outlined"
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <TextField name="rePassword"
                                       required={true}
                                       type={"password"}
                                       label="تکرار رمز عبور"
                                       variant="outlined"
                                       value={form.rePassword}
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <Button
                                type={"submit"}
                                sx={{
                                    width: "80%",
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