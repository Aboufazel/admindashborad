import {Button, Grid, TextField} from "@mui/material";
import theme from "../../themes/theme";
import useTitle from "../../hooks/useTitle";
import AppBarVer1 from "../../components/AppComponents/AppBar/AppBarVer1";

import {userData} from "../../Toolkit/Slice/contact.slice"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const SignUp = () => {


    const [form, setForm] = useState([
        {mobile: "", job: "", mail: "", password: "", rePassword: ""},
    ])

    const manageChange = e => {
        setForm({...form, [e.target.name]: e.target.value});

    }


    const manageSubmit = e => {
        e.preventDefault();

        console.log(form)

    }

    const state = useSelector(state => state.action);
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
                height={"100vh"}
                bgcolor={theme.palette.neutralN00.main}
                container>
                <Grid
                    display={'flex'}
                    flexDirection={"column"}
                    alignItems={"center"}
                    height={'100%'}
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
                                       value={form.mail}
                                       onChange={manageChange}
                                       sx={{
                                           width: "100%",
                                           marginY: 0.5,
                                       }}
                            />
                            <TextField name="mail"
                                       required={true}
                                       label="ایمیل"
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
                                    marginTop: 1,
                                    width: "95%",
                                    position: "absolute",
                                    padding: 0.65,
                                    bottom: 16,
                                    maxWidth: 500
                                }} variant={"contained"}
                                color={"primary"}>
                                {"ثبت"}
                            </Button>

                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default SignUp;