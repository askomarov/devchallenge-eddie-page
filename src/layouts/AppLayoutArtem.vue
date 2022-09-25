<template>
  <VHeader></VHeader>
  <main>
    <slot />
  </main>
  <AskomarovCopy />
</template>
<script setup>
import VHeader from "../base/VHeader.vue";
import AskomarovCopy from "../components/AskomarovCopy.vue";
import { onMounted } from "vue";
onMounted(() => console.log("mount AppLayoutArtem"));
</script>
