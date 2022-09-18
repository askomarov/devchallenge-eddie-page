<template lang="pug">
section.our-works
  h2 Good design means
    br
    | good business
  ul.our-works__list
    li.our-works__list-item(href="#" v-for="(item, index) in works" :key="index")
      a(href="#").work-item
        .work-item__img-wrap
          picture
            source(:srcset="`../img/${item.imgWebp}.webp`" type="image/webp")
            img(:src="`../img/${item.img}`" width="270" height="270" :alt="item.title")
        p.work-item__type {{item.type}}
        h3.work-item__title {{item.title}}
  a(href="#").our-works__more-link
    span see more
    |
    SpanIcon(:icon-name="'trending_flat'")

</template>

<script setup>
import SpanIcon from "../components/SpanIcon.vue";
const works = [
  {
    title: "Smart home dashboard",
    type: "Full stack application",
    img: "smarthome.jpg",
    imgWebp: "smarthome",
  },
  {
    title: "Onboard application",
    type: "UX/UI design",
    img: "onboard.png",
    imgWebp: "onboard",
  },
  {
    title: "Booking system",
    type: "Mobile application",
    img: "booking.png",
    imgWebp: "booking",
  },
  {
    title: "Juice product homepage",
    type: "Frontend application",
    img: "juice-product.png",
    imgWebp: "juice-product",
  },
];
</script>

<style lang="scss">
.our-works {
  color: var(--text-color-black);
  position: relative;

  h2 {
    padding-left: 2rem;
    margin-bottom: size(48px);
  }
  h3 {
    color: inherit;
  }
}

.our-works__more-link {
  gap: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-blue);
  font-weight: 500;
  font-size: size(18px);
  line-height: size(27px);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: width 0.3s ease 0s;
  }
  .material-symbols-outlined {
    transition: transform 0.3s ease 0s;
  }

  &:hover {
    color: var(--color-blue-dark);
    &::after {
      width: 100%;
    }
    .material-symbols-outlined {
      transform: translateX(0.5rem);
    }
  }

  @media (min-width: $width-tablet) {
    position: absolute;
    z-index: 1;
    bottom: 1rem;
    right: 0;
  }
}
.our-works__list {
  display: grid;
  grid-template-columns: 270px;
  align-items: start;
  justify-content: center;
  row-gap: size(36px);
  column-gap: 20px;
  font-weight: 300;
  font-size: size(12px);
  line-height: size(18px);

  @media (min-width: $width-tablet) {
    grid-template-columns: 1fr 1fr;
    font-size: size(14px);
    line-height: size(21px);
  }
}
.our-works__list-item {
  padding: 0.5rem;
  border-radius: 12px;
  transition: all 0.3s ease 0s;
  &:hover {
    box-shadow: var(--box-shadow);
    .work-item__img-wrap img {
      scale: 1.1;
    }
  }
  @media (min-width: $width-tablet) {
    &:nth-child(odd) {
      margin-top: 20%;
    }
  }
}

.work-item__img-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  margin-bottom: 0.5rem;

  img {
    border-radius: 12px;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: scale 0.3s ease 0s;
  }
}
.work-item__type {
  color: var(--text-color);
}
</style>
