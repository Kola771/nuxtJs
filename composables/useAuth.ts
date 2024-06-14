import axios from "axios";
import type { LoginPayload, RegisterPayload, User } from "~/@types";

export const useAuth = () => {
  // La variable stockant le user connecté
  const user = ref<User|null>(null) ;

  // register
  async function register(payload: RegisterPayload) {
    await axios.post("/register", payload);

    await axios.post("/login", {
      email: payload.email,
      password: payload.password
    });

    useRouter().push("/me");
  }

  // login
  async function login(payload: LoginPayload) {
    const res = await axios.post("/login", payload);
    useRouter().push("/me");
  }

  // logout
  async function logout() {
    await axios.post("/logout");
    useRouter().replace("/login");
  }

  return {
    register,
    login,
    logout
  }
}
