<template>
  <div>
    <!-- Composant permetant d'afficher le contenu du dossier "pages/" -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">

useHead({
  title: 'Url shortener',
  link: [
    {
      rel: 'icon',
      href: '/app-icon.png',
      type: 'image/png'
    }
  ]
});

</script>