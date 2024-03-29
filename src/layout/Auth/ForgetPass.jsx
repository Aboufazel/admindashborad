import {Alert, AlertTitle, Button, Grid, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";
import {useState} from "react";
import {forgetPass} from "../../api/Services";
import WhiteLoader from "../../Loader/WhiteLoader";

const ForgetPass = () => {
    const [form, setForm] = useState([
        {user: ""},
    ])

    const [message , setMessage] = useState(0);

    const [show , setShow] = useState(false);
    const [error , setError] = useState(false)

    const [loading , setLoading] = useState(false);


    const InputValidate = () => {
        if(form.user.length !== 11){
            setError(true)
        }else if(form.user.length === 11){
            setError(false)
        }
    }

    const manageChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
        InputValidate();
    }

    const ManageSendData = async (e) => {
        e.preventDefault();
        InputValidate();
        if(form.user.length !== 11){
            setError(true)
        }
        setLoading(true)
        const sendData = await forgetPass(form.user).catch((error)=>{
            setLoading(false);
        });
       if(sendData.data.isSuccess){
           setMessage(sendData.data.data.passWord);
           setShow(true)
           setLoading(false);
       }else {
           setMessage(sendData.data.message);
           setShow(true)
           setLoading(false);
       }

        setTimeout(()=>{
            setShow(false)
            navigate("/login")
        } , 20000)

    }

    useTitle("فراموشی رمز عبور")
    const navigate = useNavigate()
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
                        <AppBarVer1 title={"فراموشی رمز"} link={"login"}/>

                        {
                            show ? <Alert sx={{position:"absolute" , bottom:90}} severity="success">
                                <AlertTitle>{`${message}رمز جدید `}</AlertTitle>
                                {"پسورد با موفقیت تغییر کرد"}
                            </Alert>   : ""
                        }
                        <form onSubmit={ManageSendData}>
                            <Grid
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                width={'100%'}
                                marginTop={1}
                                color={theme.palette.neutralN60.main}>
                                <TextField name="user"
                                           required={true}
                                           label="شماره موبایل"
                                           value={form.user}
                                           variant="outlined"
                                           error={error}
                                           helperText={error ? "فرمت شماره موبایل درست نیست" : ""}
                                           onChange={manageChange}
                                           sx={{
                                               width: "100%",
                                               marginY: 1,
                                           }}

                                />
                                <Button
                                    type={"submit"}
                                    sx={{
                                        marginTop: 1,
                                        width: "90%",
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

export default ForgetPass;