<template>
  <div>
    <slot />
    <AskomarovCopy />
  </div>
</template>
<script setup>
import AskomarovCopy from "../components/AskomarovCopy.vue";
import { onMounted } from "vue";
onMounted(() => console.log("mount AppLayoutArtem"));
</script>
