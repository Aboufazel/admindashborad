import {Fab} from "@mui/material";
import theme from "../../themes/theme";


const ActionButton = ({children}) => {

    return(
        <Fab variant={"extended"}
             color={"primary"}
                sx={{width:"max-content",
                    gap:0.5,
                    bottom:"16px",
                    position:"",
                    textAlign:"center",
                    }}>
            {children}
        </Fab>
    )
}

export default ActionButton;