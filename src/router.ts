import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Contact from '@/components/about/Contact.vue';
import History from '@/components/about/History.vue';
import AddBlog from '@/components/myBlog/addBlog.vue';
import ShowBlog from '@/components/myBlog/ShowBlog.vue';
import SingleBlog from '@/components/myBlog/SingleBlog.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      //路由独享守卫
      beforeEnter: (to, from, next) => {
        console.log("---------------路由独享守卫: beforeEnter--------------");
        next();//next(false)--不能跳转
      },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      redirect: '/about/history',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children: [
        { path: 'contact', name: 'contactLink', component: Contact },
        { path: 'history', name: 'historyLink', component: History }
      ]
    },
    {
      path: '/myBlog',
      name: 'myblog',
      redirect: '/myBlog/addBlog/0',
      children: [
        {
          path: 'addBlog', name: 'addBlogLink', component: AddBlog,
          redirect: '/myBlog/addBlog/0',
          children: [
            { path: ':id', component: AddBlog }
          ]
        },
        {
          path: 'showBlog', name: 'showBlogLink', component: ShowBlog,
          children: [
            { path: ':id', name: 'singleBlogLink', component: SingleBlog }
          ]
        }
      ],
      component: () => import(/* webpackChunkName: "about" */ './components/myBlog/index.vue'),
    },
    {
      path: '*',
      redirect: '/'
    },
  ],
});
//全局守卫
router.beforeEach((to, from, next) => {
  console.log("--------------全局守卫 : beforeEach -----------");
  next();
});

//后置钩子
router.afterEach((to, from) => {
  console.log("--------------后置钩子 :afterEach-----------");
});
export default router;