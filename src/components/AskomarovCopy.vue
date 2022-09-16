<template lang="pug">
p(:class='parentClass') created by
  | &nbsp;
  a(href="https://github.com/askomarov" :class='linkClass') 🤔&nbsp;
    span Askomarov
</template>

<script setup>
const props = defineProps({
  parentClass: {
    type: String,
  },
  linkClass: {
    type: String,
  },
});
</script>

<style></style>
