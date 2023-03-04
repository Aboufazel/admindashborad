import {Box, Link} from "@mui/material";


const LinkText = ({title , fontSize , width}) => {

    return(
        <Box display={'flex'}
             alignItems={'center'}
             textAlign={"center"}
             marginTop={2}
             marginBottom={1}
             width={`${width}`}
             flexDirection={'column'}>
            <Link href={"#"} color={"primary.main"} sx={{width:"100%" , textDecoration:"none"}}>
                {title}
            </Link>
        </Box>
    )
}


export default LinkText;