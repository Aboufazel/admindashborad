import {Grid, Typography} from "@mui/material";
import theme from "../../themes/theme";
import NotFound from "../../assets/pics/NotFound.svg"
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import useStorage from "../../hooks/storage";


const MobileNotFound = () => {
    const navigate = useNavigate();

    const [tokenInfo, setTokenInfo] = useStorage("auth", {
        refreshToken: "",
        accessToken: "",
    });

    const manageLogout = () => {
        localStorage.clear();
        setTokenInfo({
            accessToken: "",
            refreshToken: "",
        })
        navigate("/login")
    }


    return(
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

                    <img width={360} src={NotFound} alt={"404-error"}/>

                    <Typography my={2} fontSize={20} fontWeight={"bold"} variant={'h1'}>
                        {"متاسفانه خطای رخ داده است"}
                    </Typography>
                    <Button  onClick={manageLogout}>
                        <Typography fontWeight={"bold"} variant={'h1'}>
                            {"ورود مجدد"}
                        </Typography>
                    </Button>

                </Grid>
            </Grid>
        </Grid>
    )
}


export default MobileNotFound;