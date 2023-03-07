import {Grid, Typography} from "@mui/material";
import AppBarVer3 from "../../../components/AppComponents/AppBar/AppBarVer3";
import useTitle from "../../../hooks/useTitle";
import ActionButton from "../../../components/AppComponents/ActionButton/ActionButton";
import AddIcon from "@mui/icons-material/Add";

const BookMain = () => {


    useTitle("ثبت حسابداری")
    return (
        <Grid
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            component={"div"}
            sx={{overflowY: 'scroll'}}
            container
            width={'100%'}>
            <AppBarVer3 title={"ثبت حسابداری"} link={"app"}/>




            <ActionButton>
                <AddIcon/>
                <Typography variant={"h1"}>
                    {"ثبت جدید"}
                </Typography>
            </ActionButton>

        </Grid>
    )
}

export default BookMain;

