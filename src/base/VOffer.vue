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

<style lang="scss">
.our-offer__item {
  p {
    color: #333;
  }
}
.our-offer {
  h2 {
    padding-left: 2rem;
  }
  p {
    font-size: size(16px);
    line-height: size(24px);
  }
  h3 {
    font-weight: 700;
    font-size: size(24px);
    line-height: size(36px);
  }
}
.our-offer__title {
  margin-bottom: 18px;
  @media (min-width: $width-tablet) {
    margin-bottom: 36px;
  }
}
.our-offer__list {
  display: grid;
  width: auto;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, 341px);
  justify-content: center;
  gap: 1rem;
}
.offer-item {
  background: #ffffff;
  padding: 1.5rem 1rem;
  border-radius: 24px;
  display: grid;
  gap: 1rem;
  align-items: start;
  justify-content: start;
  justify-items: start;
  text-align: left;
  --icon-color: #2d9cdb;

  &:hover {
    box-shadow: var(--box-shadow);

    .offer-item__button {
      background-color: #2d9cdb;
      color: #fff;
    }
  }
  &--frontend {
    --icon-color: #27ae60;
  }
  &--backend {
    --icon-color: #eb5757;
  }
}
.offer-item__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 67px;
  height: 67px;
  border-radius: 16px;
  color: #fff;
  background-color: var(--icon-color);
}
.offer-item__button {
  background: #e0e0e0;
  border-radius: 12px;
  font-size: size(16px);
  line-height: size(24px);
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  color: #828282;
  transition: all 0.3s ease 0s;
  &:hover {
    box-shadow: 2px 2px 8px 0px #33333375;
  }
}
</style>
