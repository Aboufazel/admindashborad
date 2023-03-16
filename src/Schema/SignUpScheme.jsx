import * as Yup from "yup"


const SignUpSchema = Yup.object().shape({

    mobile:Yup.string()
        .min(11 , 'شماره موبایل معتبر وارد نمایید')
        .required('شماره موبایل اجباری است'),


    job:Yup.string()
        .min(2 , 'نام کسب و کار حداقل باید دو حرف باشد')
        .required('نام کسب و کار اجباری است'),

    email:Yup.string()
        .email('آدرس ایمیل معتبر نیست')
        .required('ایمیل اجباری است'),

    password:Yup.string()
        .min(8 , 'کلمه عبور حداقل باید 8 حرف باشد')
        .required('رمز عبور اجباری است'),

    rePassword:Yup.string()
        .oneOf([Yup.ref('password') , null] , 'رمز عبور همخوانی ندارد')
        .required('تکرار رمز عبور اجباری است')
})

export default SignUpSchema;