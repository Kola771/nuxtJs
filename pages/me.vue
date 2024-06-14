<template>
  <div>
    <div v-if="userLogin">
      <p><strong>Nom d'utilisateur :</strong> {{userLogin.name}}</p>
      <p><strong>Adresse électronique :</strong> {{userLogin.email}}</p>
    </div>
  </div>
</template>

<style>

</style>

<script lang="ts" setup>
import axios from 'axios';

definePageMeta({
  middleware: ["auth"]
})

const userLogin =  ref();

onMounted(async ()=>{
  const user  =  await axios.get("/user")
  userLogin.value = user.data
})

</script>

<style></style>