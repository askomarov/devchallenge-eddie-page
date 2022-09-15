<template lang="pug">
section.our-offer
  h2.our-offer__title We offer high
    br
    | demand services
  ul.our-offer__list
    li.our-offer__item(href="#" v-for="(item, index) in offers" :key="index")
      a(href="#" :class="`offer-item--${getClassName(item.icon)}`").offer-item
        .offer-item__icon-wrap
          |
          SpanIcon(:icon-name="item.icon")
        h3.offer-item__title {{item.title}}
        p.offer-item__text {{item.text}}
        span.offer-item__button Get started
</template>

<script setup>
import SpanIcon from "../components/SpanIcon.vue";

const offers = [
  {
    icon: "edit",
    title: "UI/UX Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
  {
    icon: "code",
    title: "Front End",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
  {
    icon: "dns",
    title: "BackEnd",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
  },
];
const getClassName = (name) => {
  let className = "";
  switch (name) {
    case "edit":
      return (className = "uxui");
      break;
    case "code":
      return (className = "frontend");
      break;
    case "dns":
      return (className = "backend");
      break;
    default:
      break;
  }
  return className;
};
</script>

<style lang="scss" scoped></style>
