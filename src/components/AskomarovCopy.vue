<template lang="pug">
p(:class='parentClass').ascopy created by
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

<style lang="scss">
.ascopy {
  text-align: center;
  padding: 0.5rem;

  a:hover span {
    text-decoration: underline;
    color: var(--primary-color);
  }
}
</style>
