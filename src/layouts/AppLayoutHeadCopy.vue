<template>
  <VHeader></VHeader>
  <slot />
  <AskomarovCopy />
</template>

<script setup>
import SvgSprite from "../components/SvgSprite.vue";
import VHeader from "../base/VHeader.vue";
import AskomarovCopy from "../components/AskomarovCopy.vue";
</script>
