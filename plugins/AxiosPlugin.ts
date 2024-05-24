import axios from "axios";

export default defineNuxtPlugin(async (nuxtApp) => {
    // Configuration de base pour que les requêtes soient acceptées par le backend
    axios.defaults.baseURL = useRuntimeConfig().public.apiUrl;
    axios.defaults.headers.common['Content-Type'] = 'application/json'; // on envoie du json au serveur
    axios.defaults.headers.common['Accept'] = 'application/json'; // on attend du serveur du json 
    axios.defaults.withCredentials = true; // 
    axios.defaults.withXSRFToken = true; // 

    // On lance une requête pour avoir les cookies nous permettant d'interagir avec le backend
    await axios.get("/sanctum/csrf-cookie");
})