<template>
  <SvgSprite></SvgSprite>
  <VHeader></VHeader>
  <!-- <div> -->
  <!-- <h1>Default layout</h1> -->
  <slot />
  <!-- </div> -->
</template>
<script setup>
import SvgSprite from "../components/SvgSprite.vue";
import VHeader from "../base/VHeader.vue";
</script>
