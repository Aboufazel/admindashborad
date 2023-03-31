import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ActionButton from "../ActionButton/ActionButton";
import AddIcon from "@mui/icons-material/Add";
import {TextField} from "@mui/material";
import {column} from "stylis";
import WhiteLoader from "../../../Loader/WhiteLoader";

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));



function SwipeableEdgeDrawer(props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Box position={"absolute"} bottom={16} left={"41.5%"} sx={{ textAlign: 'center', pt: 1 }}>
                <Button onClick={toggleDrawer(true)}>
                    <ActionButton>
                        <AddIcon/>
                        <Typography variant={"h1"}>
                            {"ثبت جدید"}
                        </Typography>
                    </ActionButton>
                </Button>
            </Box>
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: false,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Typography variant={"h1"} fontWeight={"bold"} textAlign={"center"} sx={{ p: 2}}>
                        {"مشتری جدید"}
                    </Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        gap:1,
                        px: 1,
                        pt:1,
                        height: "100%",
                        overflow: 'auto',
                    }}
                >
                    <TextField label={"نام مشتری"}/>
                    <TextField label={"کد تفضیلی"}/>
                    <TextField label={"شماره موبایل مشتری"}/>

                    <Button
                        type={"submit"}
                        sx={{
                            marginTop: 1,
                            width: "100%",
                            padding: 0.65,
                            bottom: 16,
                            maxWidth: 500
                        }} variant={"contained"}
                        color={"primary"}>
                        {
                            loading === false ? "ثبت" : <WhiteLoader/>
                        }
                    </Button>

                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

SwipeableEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SwipeableEdgeDrawer;