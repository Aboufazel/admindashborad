import {
    faAdd,
    faBook,
    faGauge, faGifts, faLock,
     faUsers
} from "@fortawesome/free-solid-svg-icons";


export const SideMenuData = [
    {id:1 , name:'داشبورد' , icon:faGauge , link:'/'},
    {id:2 , name:'تمامی کاربران' , icon: faUsers , link:'/allUser'},
    {id:3 , name:'گروه حساب', icon: faAdd , link:'/accountingGroup'},
    {id:3 , name:'نوع حساب', icon: faBook , link:'/accountType'},
    {id:3 , name:'حساب تفضیلی', icon: faGifts , link:'/accountingDefaultPerson'},
    {id:15, name:'تعویض کلمه عبور', icon: faLock , link:'/pass'},
]