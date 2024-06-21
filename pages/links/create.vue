<template>
  <div class="mx-auto max-w-md border rounded py-4 px-3 shadow-xl prose">
    <h1>Crééz un nouveau lien</h1>
    <GoBack>Revenir en arrière</GoBack>

    <!-- <form>
      <div>
        <label for="lien">Lien complet</label>
        <input type="text" id="lien" name="full_link" autofocus placeholder="Entrez le lien complet">
      </div>
      <button class="btn">Créer le lien</button>
    </form> -->

    <FormKit type="form" submit-label="Créer le lien" :submit-attrs="{inputClass: 'mt-4 w-[35%] bg-gray-800 text-white hover:bg-gray-900 py-2 rounded flex items-center justify-center animate-pulse'}">
      <FormKit type="url" name="full_link" label="Lien complet"/>
      <FormKit type="text" name="short_link" label="Lien court"/>
    </FormKit>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<style scoped>
  form {
    @apply w-[90%] flex flex-col gap-y-4 px-4 py-6 rounded mx-auto
  }

  button {
    @apply bg-gray-800 text-white rounded py-2 w-[40%] text-sm animate-pulse
  }
</style>