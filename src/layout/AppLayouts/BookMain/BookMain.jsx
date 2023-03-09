import {Box, Grid, Tab, Tabs} from "@mui/material";
import AppBarVer3 from "../../../components/AppComponents/AppBar/AppBarVer3";
import useTitle from "../../../hooks/useTitle";
import {useState} from "react";
import AccountState from "../../../components/AppComponents/AccountState/AccountState";


const BookMain = () => {

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useTitle("ثبت حسابداری")
    return (
        <Grid
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            component={"div"}
            sx={{overflow: 'scroll'}}
            container
            width={'100%'}>
            <AppBarVer3 title={"دفاتر"} link={"app"}/>
            <Box marginTop={3.375} sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="neutralN00"
                >
                    <Tab sx={{minWidth:60}} value="one" label="کل" />
                    <Tab sx={{minWidth:60}} value="two" label="معین" />
                    <Tab sx={{minWidth:60}} value="three" label="تفضیلی" />
                </Tabs>
            </Box>

            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />
            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />
            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />
            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />
            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />
            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />
            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />
            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />
            <AccountState accountName={"نام حساب"}
                          price={"25,000,000"}
                          badge={"ریال"}
                          status={"بدهکار"}
                          main={"حساب کل"}
                          group={"گروه حساب"}
                          spec={"حساب معین"} />


        </Grid>
    )
}

export default BookMain;

