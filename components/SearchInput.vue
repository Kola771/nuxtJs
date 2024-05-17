<template>
  <div class="relative">
    <Icon name="mdi:magnify" class="absolute top-[50%] -translate-y-[50%] ml-2"/>
    <!-- <input
    :value="props.modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    type="text" placeholder="Recherchez un lien" class="pl-10 p-2 rounded border bg-gray-50"> -->
    
    <input
    v-model="modelValue"
    type="text" placeholder="Recherchez un lien" class="pl-10 p-2 rounded border bg-gray-50">
  </div>
</template>

<script lang="ts" setup>
// defineProps({
//   modelValue: {type: String, require: true}
// })

// const props = defineProps<{
//   modelValue: string
// }>();

const modelValue = defineModel();
</script>

<style>

</style>