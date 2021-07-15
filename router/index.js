import Vue from 'vue'
import Router from 'vue-router'

import Home from '../view/Home'
import Splash from '../view/Splash'
import NewProduct from '../view/NewProduct'
import Login from '../view/Login'
import Class from '../view/Class'
import Boll from '../view/Boll'
import Shinkan from '../view/Shinkan'
import Find from '../view/Find'
import Afflatus from '../view/Find/afflatus'
import Jointly from '../view/Find/jointly'
import Stylist from '../view/Find/stylist'
import Cara from '../view/Cara'
import Person from '../view/Person'
import Indent from '../view/Indent'
import Shop from '../view/Shop'
import ShopD from '../view/Default/shopD'
import carD from '../view/Default/carD'
import signalD from '../view/Default/signalD'
import Allindent from '../view/Allindent'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/Home",
            name: 'Home',
            component: Home
        },
        {
            path: "/Splash",
            name: 'Splash',
            component: Splash
        },
        {
            path: "/NewProduct",
            name: 'NewProduct',
            component: NewProduct
        },
        {
            path: "/Login",
            name: 'Login',
            component: Login
        },
        {
            path: "/Class",
            name: 'Class',
            component: Class
        },
        {
            path: "/Boll",
            name: 'Boll',
            component: Boll
        },
        {
            path: "/Shinkan",
            name: 'Shinkan',
            component: Shinkan
        },
        {
            path: "/Find",
            name: 'Find',
            component: Find
        },
        {
            path: "/Find/afflatus",
            name:'afflatus',
            component: Afflatus
        },
        {
            path: "/Find/jointly",
            name:'jointly',
            component: Jointly
        },
        {
            path: "/Find/stylist",
            name:'stylist',
            component: Stylist
        },
        {
            path: "/Cara",
            name:'Cara',
            component: Cara
        },
        {
            path: "/Person",
            name:'Person',
            component: Person
        },
        {
            path: "/Indent",
            name:'Indent',
            component: Indent
        },
        {
            path: "/Shop",
            name:'Shop',
            component: Shop
        },
        {
            path: "/ShopD",
            name:'ShopD',
            component: ShopD
        },
        {
            path: "/carD",
            name:'carD',
            component: carD
        },
        {
            path: "/signalD",
            name:'signalD',
            component: signalD
        },
        {
            path: "/Allindent",
            name:'Allindent',
            component: Allindent
        }

    ]

})