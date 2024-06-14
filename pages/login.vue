<template>
  <div>
    <div class="flex flex-col gap-y-2 border-gray-800">
      <h1 class="text-center font-bold text-[1.375rem]">Connexion</h1>
      
      <form @submit.prevent="login(form)" class="flex flex-col gap-y-3 p-4 text-[.9375rem]">
        <div class="flex flex-col gap-y-1">
          <label for="email">
            Email
          </label>
          <input required id="email" v-model="form.email" type="email" placeholder="Votre adresse électronique" class="bg-gray-50 placeholder:text-[13px] border-[.0625rem] px-2 py-1.5 rounded focus:outline-none">
        </div>
        <div class="flex flex-col gap-y-1">
          <label for="password">
            Mot de passe
          </label>
          <input required id="password" v-model="form.password" type="password" placeholder="Votre mot de passe" class="bg-gray-50 placeholder:text-[13px] border-[.0625rem] px-2 py-1.5 rounded focus:outline-none">
        </div>
        <div class="flex justify-end items-center mt-3">
          <button class="w-[35%] bg-gray-800 text-white hover:bg-gray-900 py-2 rounded">Se connecter</button>
        </div>
        <p>Pas de compte ? <NuxtLink class="text-blue-500 underline font-medium" to="/register">inscrivez-vous !</NuxtLink></p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { LoginPayload } from '~/@types';

definePageMeta({
  layout: 'centered',
  middleware: ["guest"]
});


const form = ref<LoginPayload>({
  email: "",
  password: "",
});

const {login} = useAuth();
</script>

<style>

</style>