<template>
  <SvgSprite></SvgSprite>
  <VHeader></VHeader>
  <main>
    <slot />
  </main>
</template>
<script setup>
import SvgSprite from "../components/SvgSprite.vue";
import VHeader from "../base/VHeader.vue";
import { onMounted } from "vue";
onMounted(() => console.log("mount AppLayoutDefault"));
</script>
