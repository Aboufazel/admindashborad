import {Input} from "@mui/material";


const InputField = ({value , placeholder}) => {
  return(
      <Input value={value} placeholder={placeholder} sx={{direction:"rtl"}}/>
  )
}

export default InputField;