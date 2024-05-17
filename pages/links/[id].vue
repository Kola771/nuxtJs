<template>
  <div class="mx-auto max-w-md border rounded py-4 px-3 shadow-xl prose">
    <h1 class="font-bold text-[20px]">Modifier le lien</h1>
    <GoBack />
    <form>
      <label for="">
        <div>Lien Court</div>
        <input type="text">
      </label>
      <label for="">
        <div>Lien Complet</div>
        <input type="text">
      </label>
      <button>Modifier le lien</button>
    </form>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  label {
    @apply block mb-2 text-sm font-medium text-gray-900;
  }

  input {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full p-2.5 focus:ring-gray-900 focus:border-gray-900;
  }

  form {
    @apply w-[90%] flex flex-col gap-y-4 px-4 py-6 rounded mx-auto
  }

  button {
    @apply bg-gray-800 text-white rounded py-2 w-[40%] text-sm animate-pulse
  }
</style>