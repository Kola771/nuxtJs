<template>
  <div>
    <nav class="flex justify-between items-center mb-4">
      <h1>Mes liens</h1>
      <!-- <SearchInput :modelValue="search" @update:modelValue="$event => search = $event" /> -->
      <SearchInput :model="search" />
      <NuxtLink to="/links/create">Créer un lien</NuxtLink>
    </nav>

    <div v-if="true">
      <table class="w-full border text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th>Lien Complet</th>
            <th>Lien Court</th>
            <th>Nbr. Vues</th>
            <th>Supprimer</th>
            <th>Editer</th>
            <th aria-label="Rafraîchir">
              <Icon name="mdi:refresh" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="link in links" :key="link.id" class="bg-white border-b">
            <td><a :href="link.full_links" target="_blank">
                {{ link.full_links }}</a>
            </td>
            <td>
              <a target="_blank" :href="`${useRuntimeConfig().public.appUrl}/${link.short_links}`">
                {{ `${useRuntimeConfig().public.appUrl.replace(/^http(s?):\/\//, "")}/${link.short_links}` }}
              </a>
            </td>
            <td>
              {{ link.views }}
            </td>
            <td>
              <button>
                <Icon name="mdi:trash" />
              </button>
            </td>
            <td>
              <NuxtLink :to="`/links/${link.id}`">
                <Icon name="material-symbols:edit-square-outline" />
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else>
      <div>
        <p>Aucune données dans la base de données !</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const links = [
  {
    short_links: "lkjklsdf",
    full_links: "https://youtube.com",
    views: 3,
    id: 1,
  },
  {
    short_links: "lkjklsdf",
    full_links: "https://w3schools.com",
    views: 1,
    id: 2,
  },
  {
    short_links: "lkjklsdf",
    full_links: "https://devdocs.io",
    views: 0,
    id: 3,
  },
];

const search = ref("");
</script>

<style scoped>
th {
  @apply px-6 py-3;
}

td {
  @apply px-6 py-4;
}
</style>