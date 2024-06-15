import axios from "axios";
import type { LoginPayload, RegisterPayload, User } from "~/@types";

// La variable stockant le user connecté et qui sera partagé par tout les composants
const user = ref<User|null>(null);

export const useAuth = () => {
  /** Routeur vue */
  const router = useRouter();
  /**
   * C'est une fonction qui récupère l'utilisateur connecté dans la base de données
   */
  async function getUser(): Promise<User|null> {
    if(user.value) return user.value;
    try {
      const res = await axios.get("/user");
      const user = res.data as User;
      return user;
    } catch (e: unknown) {
      return null;
    }
  }

  /**
   * 
   */
  async function initUser()
  {
    user.value = await getUser();
  }

  // register
  async function register(payload: RegisterPayload) {
    await axios.post("/register", payload);

    await axios.post("/login", {
      email: payload.email,
      password: payload.password
    });

    router.push("/me");
  }

  // login
  async function login(payload: LoginPayload) {
    const res = await axios.post("/login", payload);
    router.push("/me");
  }

  // logout
  async function logout() {
    await axios.post("/logout");
    user.value = null;
    router.replace("/login");
  }

  return {
    register,
    login,
    logout,
    initUser,
    user
  }
}
