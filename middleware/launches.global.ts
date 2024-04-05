
//const isLogged = false;
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== '/' && to.path !== '/favorites' && to.path !== '/launches' && to.path !== '/rocket') {
    return navigateTo('/launches')
  }


  // if(to.path === '/' && isLogged){ 
  //     return navigateTo('/launches')
  // }

  // console.log(to);
  // console.log(from);
})
