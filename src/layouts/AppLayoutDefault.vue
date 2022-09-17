<template>
  <SvgSprite></SvgSprite>
  <VHeader></VHeader>
  <!-- <h1>Default layout</h1> -->
  <slot />
</template>
<script setup>
import SvgSprite from "../components/SvgSprite.vue";
import VHeader from "../base/VHeader.vue";
import { onMounted } from "vue";
onMounted(() => console.log("mount AppLayoutDefault"));
</script>
