import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/sub2' : process.env.BASE_URL),
  routes
});


// const childRoute = ['/sub2'];
// const isMe = path => childRoute.some(item => path.startsWith(item))
// // const rawAppendChild = HTMLHeadElement.prototype.appendChild;
// // const rawAddEventListener = window.addEventListener;
// router.beforeEach((to, from, next) => {
//   // 从子项目跳转到主项目
//   // if(isChildRoute(from.path) && !isChildRoute(to.path)){
//   //   HTMLHeadElement.prototype.appendChild = rawAppendChild;
//   //   window.addEventListener = rawAddEventListener;
//   // } 
//    const location = window.location.pathname
//   if(isMe(location)){
//     console.log(">>>>11111111111111111<<<<",isMe(location),location)
//     next()
//   }else{
//     console.log(">>>>222222222222222<<<<",isMe(location),location)
//     next(false)
//   }
   
// });


export default router;
