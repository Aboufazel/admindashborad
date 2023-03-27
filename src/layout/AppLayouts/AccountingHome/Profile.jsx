import useTitle from "../../../hooks/useTitle";
import {Box, Button, Grid, ListItemIcon, Modal, Typography} from "@mui/material";
import AppBarVer2 from "../../../components/AppComponents/AppBar/AppBarVer2";
import SectionHeader from "../../../components/AppComponents/SectionHeader/SectionHeader";
import SimplePrice from "../../../components/AppComponents/SimplePrice/SimplePrice";
import {useSelector} from "react-redux";
import useStorage from "../../../hooks/storage";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {ModalStyle} from "../../../components/AppComponents/ModalStyle/ModalStyle"

const Profile = () => {
    useTitle("حساب کاربر")
    const ProfileInfo = useSelector(state => state.action);
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

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

    const mangeNavigate = (link)=>{
        navigate(link)
    }

    return (
        <Grid
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"start"}
            component={"div"}
            sx={{overflow: 'auto'}}
            container
            width={'100%'}>
            <Box>
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                >
                    <Box sx={ModalStyle}>
                        <Typography fontWeight={"bold"} id="modal-modal-description">
                            {"آیا برای خروج از حساب اطمینان دارید؟"}
                        </Typography>
                        <Box mt={1} display={"flex"} gap={1}>
                            <Button onClick={manageLogout} variant={"contained"} color={'error'}>
                                <ListItemIcon sx={{color: "white", minWidth: 30}}>
                                    <ExitToAppIcon/>
                                </ListItemIcon>
                                {"خروج"}
                            </Button>
                            <Button onClick={handleCloseModal} variant={"contained"} color={'success'}>
                                <ListItemIcon sx={{color: "white", minWidth: 30}}>
                                    <HighlightOffIcon/>
                                </ListItemIcon>
                                {"انصراف"}
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>

            <AppBarVer2 title={"حساب کاربری"}/>

            <SectionHeader title={"اطلاعات"} margin={3.375}/>
            <SimplePrice title={"نام کسب و کار"}
                         price={ProfileInfo.user === undefined ? "" : ProfileInfo.business.map(item => (item.businessName))}
                         padding={0.6}/>
            <SimplePrice title={"شماره تلفن"} price={ProfileInfo.user === undefined ? "" : ProfileInfo.user.mobile}
                         padding={0.6}/>
            <SimplePrice title={"ایمیل"} price={ProfileInfo.user === undefined ? "" : ProfileInfo.user.email}
                         padding={0.6}/>



            <Box display={"flex"} width={"100%"} onClick={()=> mangeNavigate("changeInfo")}>
                <SimplePrice title={"تغییر اطلاعات کاربر"} padding={0.6}/>
            </Box>

            <Box display={"flex"} width={"100%"} onClick={()=> mangeNavigate("changePass")}>
                <SimplePrice title={"تغییر رمز عبور"} padding={0.6}/>
            </Box>
            <SectionHeader title={"اطلاعات"} padding={0.6}/>
            <SimplePrice title={"تماس با پشتیبانی"} padding={0.6}/>
            <Box display={"flex"} width={"100%"} onClick={handleOpenModal}>
                <SimplePrice title={"خروج از حساب کاربری"} padding={0.6}/>
            </Box>

        </Grid>
    )

}


export default Profile;