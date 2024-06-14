import axios, { AxiosError } from "axios";

export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
        const { data } = (await axios.get('/user'));
        if (data) {
            // Si l'utilisateur est déjà authentifié, redirige le sur son profile
            // return navigateTo("/me")
            useRouter().push("/me")
        }
    } catch (e: unknown) {
        return;
    }
})
