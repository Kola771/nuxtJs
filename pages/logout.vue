<template>
  <div>
    Déconnexion ...
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'simple'
})

const {logout} = useAuth();
logout();
</script>

<style></style>