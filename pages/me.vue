<template>
  <div>
    <pre>{{ data }}</pre>
    <p><strong>Nom d'utilisateur: </strong> Koladé ABOUDOU M.</p>
    <p><strong>Email: </strong> Koladeaboudou@gmail.com</p>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

const user = null;
onMounted(async () => {
  const{data} = await axios.get("/user");
  console.log(data);
  
})
</script>

<style>

</style>