<template>
  <div>
    <pre>{{ userLogin.data }}</pre>
  </div>
</template>

<style>

</style>

<script lang="ts" setup>
import axios from 'axios';


const userLogin =  ref()

// console.log("zzzzz");

onMounted(async ()=>{
  const user  =  await axios.get("/user")
  userLogin.value = user
})

</script>

<style></style>