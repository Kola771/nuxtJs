<template>
  <a href="#" @click.prevent="useRouter().back()" class="text-sm mb-5 italic flex items-center gap-3">
    <Icon name="mdi:arrow-left" /> 
    <slot>Retour</slot>
  </a>
</template>

<script lang="ts" setup>

</script>

<style></style>