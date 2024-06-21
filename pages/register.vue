<template>
  <div>
    <div class="flex flex-col gap-y-2 border-gray-800">
      <h1 class="text-center font-bold text-[1.375rem]">Inscription</h1>

      <div class="flex flex-col gap-y-3 p-4 text-[.9375rem]">
        <!-- <form @submit.prevent="register(form)">
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
        </form> -->

        <FormKit type="form" @submit="handleRegister" submit-label="S'inscrire"
          :submit-attrs="{ inputClass: 'mt-4 w-[35%] bg-gray-800 text-white hover:bg-gray-900 py-2 rounded flex items-center justify-center animate-pulse' }">
          <FormKit type="text" name="name" label="Nom et prénoms" validation="required" autocomplete="off" />
          <FormKit type="email" name="email" label="Adresse électronique" validation="required|email"
            autocomplete="off" />
          <FormKit type="password" validation="required" name="password" label="Mot de passe" />
          <FormKit type="password" validation="required" name="password_confirmation"
            label="Confirmation du mot de passe" />
        </FormKit>
        <p>Vous avez déjà un compte ? <NuxtLink class="text-blue-500 underline font-medium" to="/login">connectez-vous !
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RegisterPayload } from '~/@types';
import type { FormKitNode } from "@formkit/core";
import axios from "axios";

definePageMeta({
  layout: 'centered',
  middleware: ["guest"]
});

const { register } = useAuth();

async function handleRegister(payload: RegisterPayload, node?: FormKitNode) {
  try {
    await register(payload);
  } catch (e: unknown) {

    // console.log(e.response)
    // if (axios.isAxiosError(e) && e.response?.status === 422) {
    // console.log("Hello world")
    node?.setErrors(["Veuillez corriger les erreurs ci-dessus"],
      { name: "Veuillez bien remplir ce champ !", password: "Veuillez bien remplir ce champ !" });
    // }
  }
}
</script>

<style></style>