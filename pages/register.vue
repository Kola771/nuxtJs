<template>
  <div>
    <div class="flex flex-col gap-y-2 border-gray-800">
      <h1 class="text-center font-bold text-[1.375rem]">Inscription</h1>
      
      <form @submit.prevent="register(form)" class="flex flex-col gap-y-3 p-4 text-[.9375rem]">
        <div class="flex flex-col gap-y-1">
          <label for="nom">
            Nom et prénoms
          </label>
          <input required id="nom" type="text" placeholder="Votre nom..." class="bg-gray-50 placeholder:text-[13px] border-[.0625rem] px-2 py-1.5 rounded focus:outline-none" v-model="form.name">
        </div>
        <div class="flex flex-col gap-y-1">
          <label for="email">
            Email
          </label>
          <input required id="email" type="email" placeholder="Votre adresse électronique" class="bg-gray-50 placeholder:text-[13px] border-[.0625rem] px-2 py-1.5 rounded focus:outline-none" v-model="form.email">
        </div>
        <div class="flex flex-col gap-y-1">
          <label for="password">
            Mot de passe
          </label>
          <input required id="password" type="password" placeholder="Votre mot de passe" class="bg-gray-50 placeholder:text-[13px] border-[.0625rem] px-2 py-1.5 rounded focus:outline-none" v-model="form.password">
        </div>
        <div class="flex flex-col gap-y-1">
          <label for="confirm_password">
            Confirmation du mot de passe
          </label>
          <input required id="confirm_password" type="password" placeholder="Votre mot de passe" class="bg-gray-50 placeholder:text-[13px] border-[.0625rem] px-2 py-1.5 rounded focus:outline-none" v-model="form.password_confirmation">
        </div>
        <div class="flex justify-end items-center mt-3">
          <button class="w-[35%] bg-gray-800 text-white hover:bg-gray-900 py-2 rounded">S'inscrire</button>
        </div>
        <p>Vous avez déjà un compte ? <NuxtLink class="text-blue-500 underline font-medium" to="/login">connectez-vous !</NuxtLink></p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";

definePageMeta({
  layout: 'centered'
});

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const form = ref<RegisterPayload>({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

async function register(payload: RegisterPayload) {
  console.log(payload);
  const res = await axios.post("/api/register", payload);
}
</script>

<style>

</style>