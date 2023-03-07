import {Fab} from "@mui/material";


const ActionButton = ({children}) => {

    return(
        <Fab variant={"extended"}

             color={"primary"}
                sx={{width:"max-content",
                    position:"absolute",
                    bottom:65,
                    gap:0.5,
                    textAlign:"center",
                    }}>
            {children}
        </Fab>
    )
}

export default ActionButton;