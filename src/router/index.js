import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/home'
import about from '../components/about'

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/about'
    },
{path:'/about',

component:about
},

{
    path:'/home',
    name:home,
    component:home

}

]

const router = new VueRouter({

    routes,
    mode:'history',
    linkActiveClass:'active'
})

export default router