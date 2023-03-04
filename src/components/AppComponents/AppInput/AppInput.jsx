import {Box, TextField} from "@mui/material";


const AppInput = ({placeholder , bgColor}) => {

    return (
        <Box display={"flex"}
             width={'100%'}
             flexDirection={"column"}>
            <TextField sx={{backgroundColor:`${bgColor}`}}
                       width={"100%"}
                       id="search"
                       placeholder={`${placeholder}`}
                       variant="outlined" dir={"rtl"}/>
        </Box>
    )
}

export default AppInput;