<template>
  <span class="material-symbols-outlined">
    {{ iconName }}
  </span>
</template>

<script setup>
const props = defineProps({
  iconName: {
    type: String,
    default: "edit",
    requiered: true,
  },
});
</script>

<style></style>
