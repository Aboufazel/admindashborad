import {Alert, Button, Grid, TextField} from "@mui/material";
import theme from "../../../themes/theme";
import AppBarVer1 from "../../../components/AppComponents/AppBar/AppBarVer1";
import WhiteLoader from "../../../Loader/WhiteLoader";
import {useState} from "react";
import {ChangeUserPassword} from "../../../api/Services";

const ChangePassword = () => {
    const [form, setForm] = useState([
        {oldPass: "", newPass: "", confPass: ""},
    ])


    const [message, setMessage] = useState(0);

    const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(false);

    const manageChange = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const ManageSendData = async (e) => {
        e.preventDefault();
        setLoading(true)
        const sendData = await ChangeUserPassword(form.oldPass, form.newPass).catch(() => {
            setLoading(false);
            setMessage(sendData.data.message);
            setShow(!show)
            setLoading(false);

            setTimeout(()=>{
                setShow(!show)
            } , 2500)

        });
        setMessage(sendData.data.message);
        setShow(!show)
        setLoading(false);

        setTimeout(()=>{
            setShow(!show)
        } , 100)
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
                    <AppBarVer1 title={"تغییر رمز عبور"} link={"app/profile"}/>

                    {
                        show ? <Alert sx={{position: "absolute", bottom: 90}} severity="success">
                            {message}
                        </Alert> : ""
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

                            <TextField name="oldPass"
                                       width={"100%"}
                                       required={true}
                                       label=" رمز عبور فعلی"
                                       value={form.oldPass}
                                       variant="outlined"
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <TextField name="newPass"
                                       width={"100%"}
                                       required={true}
                                       label="رمز عبور جدید"
                                       value={form.newPass}
                                       variant="outlined"
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}

                            />
                            <TextField name="confPass"
                                       width={"100%"}
                                       required={true}
                                       label="تکرار رمز عبور جدید"
                                       value={form.confPass}
                                       variant="outlined"
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
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


export default ChangePassword;