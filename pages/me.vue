<template>
  <div>
    <div v-if="user">
      <p><strong>Nom d'utilisateur :</strong> {{user.name}}</p>
      <p><strong>Adresse électronique :</strong> {{user.email}}</p>
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

const { user } = useAuth();

// const userLogin =  ref();

// onMounted(async ()=>{
//   const user  =  await axios.get("/user")
//   userLogin.value = user.data
// })

</script>

<style></style>