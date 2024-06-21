import axios, { AxiosError, type AxiosResponse } from "axios";

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = useRuntimeConfig();
    // Configuration de base pour que les requêtes soient acceptées par le backend
    axios.defaults.baseURL = `${config.public.apiUrl}/api`;
    axios.defaults.headers.common['Content-Type'] = 'application/json'; // on envoie du json au serveur
    axios.defaults.headers.common['Accept'] = 'application/json'; // on attend du serveur du json 
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.withCredentials = true; // 
    axios.defaults.withXSRFToken = true; // 

    let isInitialCheck = true;
    let route = useRoute();

    // intercepteur de réponse
    axios.interceptors.response.use(
        (res) => res,
        async (error: AxiosError) => {
            if ([401, 419].includes((error.response as AxiosResponse).status)) {
                const { logout } = useAuth();
                
                if (!["/login", "/register"].includes(route.path)) {
                    if (isInitialCheck) {
                        // On ne fait rien si c'est la première authentification
                        isInitialCheck = false;
                    } else {
                        await logout();
                    }
                }
            } else {
                return Promise.reject(Error);
            }
        }
    );

    // On lance une requête pour avoir les cookies nous permettant d'interagir avec le backend
    await axios.get("/sanctum/csrf-cookie", {
        baseURL: config.public.apiUrl
    });
});