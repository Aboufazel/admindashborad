import {useEffect, useState} from "react";



function FromValidation(validationSchema , callback){
    const initialState = {mobile: "", job: "", email: "", password: "", rePassword: ""}
    const [values , setValues] = useState (initialState)
    const [error , setError] = useState ({});
    const [isSubmitting , setSubmitting] = useState(false)

    const handleChange = (event) =>{
        const {name , value} = event.target;
        setValues({...values,
        [name]:value
        })

        return {handleChange , handleSubmit , values , error , isSubmitting}
    }


    const handleSubmit = e => {
        e.preventDefault();
        setError(validationSchema(values));
        setSubmitting(true);
    };


    useEffect(
        () => {
            if (Object.keys(error).length === 0 && isSubmitting) {
                callback();
            }
        },
        [error]
    );
}



export default FromValidation;