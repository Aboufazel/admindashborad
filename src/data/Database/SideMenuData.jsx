import {
    faAddressCard,
    faBell,
    faAdd,
    faBlog,
    faCertificate,
    faGauge, faGifts, faLock,
    faPager, faPhoneVolume, faQuestion, faSearch, faShare,
    faShoppingCart, faSliders, faSolarPanel, faUsers
} from "@fortawesome/free-solid-svg-icons";


export const SideMenuData = [
    {id:1 , name:'داشبورد' , icon:faGauge , link:'/'},
    {id:2 , name:'تمامی کاربران' , icon: faUsers , link:'/allUser'},
    {id:3 , name:'گروه حساب', icon: faAdd , link:'/accountingGroup'},
    {id:4 , name:'محصولات', icon: faShoppingCart , link:'/product'},
    {id:5 , name:'درباره ما', icon: faAddressCard , link:'/about'},
    {id:6 , name:'صفحات', icon: faPager , link:'/pages'},
    {id:7 , name:'مجوزها', icon: faCertificate , link:'/certificate'},
    {id:8 , name:'جوایز', icon: faGifts , link: '/gift'},
    {id:9 , name:'شبکه های اجتماعی', icon: faShare , link:'/share'},
    {id:10 , name:'تماس با ما', icon: faPhoneVolume , link:'/contact'},
    {id:11 , name:'پرسش های متداول', icon: faQuestion , link:'/faq'},
    {id:12 , name:'اعلانات', icon: faBell , link:'/notification'},
    {id:13, name:'اسلایدر', icon: faSliders , link:'/slider'},
    {id:14 , name:'تگ سئو', icon: faSearch , link:'/search'},
    {id:15, name:'تعویض کلمه عبور', icon: faLock , link:'/pass'},
    {id:16 , name:'پنل کاربری', icon: faSolarPanel, link: '/admin'},
]