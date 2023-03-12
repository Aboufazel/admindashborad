import {Button, Grid, TextField, Typography} from "@mui/material";
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

    const [loading , setLoading] = useState(false)

    const manageChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const ManageSendData = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(form)
        const sendData = await forgetPass(form.user);
        console.log(sendData)
        setLoading(false)
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
                        <form onSubmit={ManageSendData}>
                            <Grid
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                width={'100%'}
                                marginTop={1}
                                textAlign={"start"}
                                color={theme.palette.neutralN60.main}>

                                <Typography variant={"h2"}>
                                    شماره خود را وارد کنید
                                </Typography>
                                <TextField name="user"
                                           required={true}
                                           label="شماره موبایل"
                                           value={form.user}
                                           variant="outlined"
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
                                        width: "95%",
                                        position: "absolute",
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