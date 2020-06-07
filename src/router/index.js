import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/home'
import about from '../components/about'

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
{path:'/home',

component:home
},

{
    path:'/about',
    name:about,
    component:about

}

]

const router = new VueRouter({

    routes,
    mode:'history',
    linkActiveClass:'active'
})

export default router