const {on, emit } = useGlobalEventBus();
const needLoginPage = ['create']
import { useRouteStore } from "../store/route";
const routeStore = useRouteStore()
export default defineNuxtRouteMiddleware((to, from) => {

    const token = useUserState().token
    if(needLoginPage.includes(to.name) && !token){
		emit('show-login-modal')
		routeStore.setRedirectRoute(to.name)
		return abortNavigation()
    }
  });