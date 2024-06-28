<template>
    <div>
        <div class="flex flex-col gap-y-2 border-gray-800">
            <h1 class="text-center font-bold text-[1.375rem]">Inscription</h1>

            <div class="flex flex-col gap-y-3 p-4 text-[.9375rem]">
                <!-- Utilisation de formkit -->
                <FormKit type="form" @submit="functionRegister" submit-label="S'inscrire"
                    :submit-attrs="{ inputClass: 'mt-4 w-[35%] bg-gray-800 text-white hover:bg-gray-900 py-2 rounded flex items-center justify-center animate-pulse' }">
                    <FormKit type="text" name="name" label="Nom et prénoms" validation="required" autocomplete="off" />
                    <FormKit type="email" name="email" label="Adresse électronique" validation="required|email"
                        autocomplete="off" />
                    <FormKit type="password" validation="required" name="password" label="Mot de passe" />
                    <FormKit type="password" validation="required" name="password_confirmation"
                        label="Confirmation du mot de passe" />
                </FormKit>
                <p>Avez-vous déjà un compte ? <NuxtLink class="text-blue-500 underline font-medium" to="/login">
                        connectez-vous !
                    </NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { FormKitNode } from "@formkit/core";

interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

definePageMeta({
    layout: 'centered'
});


async function functionRegister(payload: RegisterPayload, node?: FormKitNode) {
    try {
        console.log(payload);

    } catch (e: unknown) {
    }
}
</script>

<style></style>