import {Grid} from "@mui/material";
import {Outlet, useNavigate} from "react-router-dom";
import theme from "../themes/theme";
import Storage from "../Service/Storage";
import {useEffect} from "react";


const MobileLayout = ()=>{

    const storage = Storage();
    const navigate = useNavigate();

    useEffect(()=>{
        ManageToken()
    } , [storage.kind])


    const ManageToken = ()=>{
        if (storage.kind === undefined){
            navigate("/login")
        }
    }


    return(
        <Grid
            display={"flex"}
            justifyContent={"center"}

            height={"90vh"}
            container >
            <Grid
                item
                display={"flex"}
                justifyContent={"center"}
                position={"relative"}
                bgcolor={theme.palette.neutralN00.main}
                mb={0}
                maxWidth={500}
                width={'100%'}
                >
                <Outlet/>
            </Grid>
        </Grid>
    )
}

export default MobileLayout;