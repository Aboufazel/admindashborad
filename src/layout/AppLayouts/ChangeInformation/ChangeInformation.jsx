import {Alert, AlertTitle, Button, Grid, TextField} from "@mui/material";
import theme from "../../../themes/theme";
import AppBarVer1 from "../../../components/AppComponents/AppBar/AppBarVer1";
import WhiteLoader from "../../../Loader/WhiteLoader";
import {useEffect, useState} from "react";
import {forgetPass} from "../../../api/Services";
import useTitle from "../../../hooks/useTitle";
import {useSelector} from "react-redux";


const ChangeInformation = () => {
    const [form, setForm] = useState([
        {job: "", mobile: "", email: ""},
    ])


    const ProfileInfo = useSelector(state => state.action);

    const [message, setMessage] = useState(0);

    const [show, setShow] = useState(false);
    const [error, setError] = useState(false)

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setForm({
            job: ProfileInfo.user === undefined ? "" : ProfileInfo.business.map(item => (item.businessName)),
            mobile: ProfileInfo.user === undefined ? "" : ProfileInfo.user.mobile,
            email:ProfileInfo.user === undefined ? "" : ProfileInfo.user.email
        })
    }, [])
    const InputValidate = () => {
        if (form.user.length !== 11) {
            setError(true)
        } else if (form.user.length === 11) {
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
        if (form.user.length !== 11) {
            setError(true)
        }
        setLoading(true)
        const sendData = await forgetPass(form.user).catch((error) => {
            setLoading(false);
        });
        if (sendData.data.isSuccess) {
            setMessage(sendData.data.data.passWord);
            setShow(true)
            setLoading(false);
        } else {
            setMessage(sendData.data.message);
            setShow(true)
            setLoading(false);
        }
    }

    useTitle("تغییر اطلاعات کاربر")


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
                    <AppBarVer1 title={"تغییر اطلاعات"} link={"app/profile"}/>

                    {
                        show ? <Alert sx={{position: "absolute", bottom: 90}} severity="success">
                            <AlertTitle>{`${message}رمز جدید `}</AlertTitle>
                            {"پسورد با موفقیت تغییر کرد"}
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

                            <TextField name="job"
                                       required={true}
                                       label="نام  کسب وکار"
                                       value={form.job}
                                       variant="outlined"
                                       focused
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.6,
                                       }}

                            />

                            <TextField name="mobile"
                                       required={true}
                                       label="شماره موبایل"
                                       type={"tel"}
                                       value={form.mobile}
                                       variant="outlined"
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.6,
                                       }}

                            />

                            <TextField name="email"
                                       required={true}
                                       label="ایمیل"
                                       type={"email"}
                                       value={form.email}
                                       variant="outlined"
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.6,
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


export default ChangeInformation