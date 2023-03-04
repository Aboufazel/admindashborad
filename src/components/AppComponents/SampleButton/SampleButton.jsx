import {Button} from "@mui/material";


const SampleButton = ({title}) => {

    return(
        <Button variant={"contained"}
                sx={{width:"100%" , marginY:1 , paddingY:1.5 ,backgroundColor:"primary.main" , color:"common.white"}}>
            {title}
        </Button>
    )
}

export default SampleButton;