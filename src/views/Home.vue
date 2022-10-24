<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import VFooter from "../base/VFooter.vue";
import VPromo from "../base/VPromo.vue";
import VOffer from "../base/VOffer.vue";
import VWorks from "../base/VWorks.vue";
import VTeam from "../base/VTeam.vue";
</script>

<template>
  <div class="container content-wrap">
    <VPromo></VPromo>
    <VOffer></VOffer>
    <VWorks></VWorks>
    <VTeam></VTeam>
  </div>
  <VFooter></VFooter>
</template>

<style lang="scss">
.content-wrap {
  flex: 1 0 auto;
  section {
    margin-bottom: 5rem;
  }
}
h2 {
  font-weight: 500;
  font-size: size(24px);
  line-height: size(36px);

  @media (min-width: $width-tablet) {
    font-size: size(36px);
    line-height: size(48px);
  }
}

h3 {
  // color: #333333;
  font-weight: 500;
  font-size: size(18px);
  line-height: size(27px);

  @media (min-width: $width-tablet) {
    font-size: size(24px);
    line-height: size(36px);
  }
}
p {
  font-weight: 400;
  font-size: size(12px);
  line-height: size(18px);
  @media (min-width: $width-tablet) {
    font-size: size(18px);
    line-height: size(27px);
  }
}
label {
  cursor: pointer;
  font-weight: 500;
  font-size: size(10px);
  line-height: size(15px);

  @media (min-width: $width-tablet) {
    font-size: size(14px);
    line-height: size(21px);
    color: var(--text-color-gray);
  }
}
</style>
