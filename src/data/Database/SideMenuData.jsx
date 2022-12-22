import {
    faAddressCard,
    faBars, faBell,
    faBlog,
    faCertificate, faDoorOpen,
    faGauge, faGifts, faLock,
    faPager, faPhoneVolume, faQuestion, faSearch, faShare,
    faShoppingCart, faSliders, faSolarPanel
} from "@fortawesome/free-solid-svg-icons";


export const SideMenuData = [
    {id:1 , name:'داشبورد' , icon:faGauge , link:'/'},
    {id:2 , name:'دسته بندی مقالات' , icon: faBars , link:'/category'},
    {id:3 , name:'مقالات', icon: faBlog , link:'/blogpost'},
    {id:4 , name:'محصولات', icon: faShoppingCart , link:'/product'},
    {id:5 , name:'درباره ما', icon: faAddressCard , link:'/about'},
    {id:5 , name:'صفحات', icon: faPager , link:'/pages'},
    {id:6 , name:'مجوزها', icon: faCertificate , link:'/certificate'},
    {id:7 , name:'جوایز', icon: faGifts , link: '/gift'},
    {id:8 , name:'شبکه های اجتماعی', icon: faShare , link:'/share'},
    {id:9 , name:'تماس با ما', icon: faPhoneVolume , link:'/contact'},
    {id:10 , name:'پرسش های متداول', icon: faQuestion , link:'/faq'},
    {id:11 , name:'اعلانات', icon: faBell , link:'/notification'},
    {id:12, name:'اسلایدر', icon: faSliders , link:'/slider'},
    {id:13 , name:'تگ سئو', icon: faSearch , link:'/search'},
    {id:14, name:'تعویض کلمه عبور', icon: faLock , link:'/pass'},
    {id:15 , name:'پنل کاربری', icon: faSolarPanel, link: '/admin'},
    {id:17 , name:'خروج', icon: faDoorOpen , link: '/exit'},
]