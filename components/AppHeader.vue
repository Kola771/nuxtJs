<template>
    <div class="bg-gray-800 text-white p-6 shadow-md shadow-gray-900 mb-10">
      <div class="flex items-center justify-between max-w-[60%] mx-auto">
        <NuxtLink to="/" class="font-bold text-xl">
          URLShortify
        </NuxtLink>
  
        <nav class="flex justify-between items-center gap-x-4 text-[14px]">
          <NuxtLink to="/" class="hover:duration-300 hover:ease-linear hover:bg-gray-400 p-2 rounded-lg">Se connecter</NuxtLink>
          <NuxtLink to="/register" class="hover:duration-300 hover:ease-linear hover:bg-gray-400 p-2 rounded-lg">S'inscrire</NuxtLink>
        </nav>
      </div>
    </div>
</template>