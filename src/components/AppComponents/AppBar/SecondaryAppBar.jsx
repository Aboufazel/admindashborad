import {Box, Grid, Typography} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";


const SecondaryAppBar = ({bgColor , itemColor , title}) => {
  return(
      <Grid display={"flex"}
            justifyContent={"start"}
            bgcolor={`${bgColor}`}
            sx={{color:`${itemColor}`}}
            mt={0.5}
            mb={2}
            width={"100%"}>
          <ArrowForward sx={{cursor:"pointer"}}/>
          <Box display={"flex"}
               alignItems={"center"}
               justifyContent={"center"}>
              <Typography sx={{cursor:"pointer"}}>
                  {title}
              </Typography>
          </Box>
      </Grid>
  )
}

export default SecondaryAppBar;