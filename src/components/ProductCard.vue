<script setup>
import { computed, ref, onMounted, onBeforeMount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Mousewheel,
  Navigation,
  Pagination,
  Thumbs,
  Autoplay,
  Parallax,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import FormCounter from '../components/FormCounter.vue'

const modules = [
  Navigation,
  Pagination,
  Thumbs,
  Autoplay,
];

const thumbsSwiper = ref(null);
const onSwiper = () => {
  console.log("swiper");
};
const onSlideChange = () => {
  console.log("slide change");
};
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
//
const productImages = ['instagram.svg', 'linkedin.svg', 'twitter.svg', 'vite.svg']

</script>
<template>
  <p style="text-align: center;">Product card</p>
  <div class="product-card">
    <div class="product-card__content">
      <!-- title -->
      <header class="product-card__header">
        <h2 class="product-card__company-title">Some great company</h2>
        <h3 class="product-card__name">My favite product</h3>
      </header>
      <!-- text contetn - decr + price -->
      <div class="product-card__text-content">
        <p class="product-card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magnam, distinctio perferendis modi dolor vel
          iure dicta voluptates commodi amet sint ab voluptatibus quos, pariatur laudantium itaque aspernatur repellat
          veritatis.
        </p>
        <div class="product-card__price">
          <p class="product-card__price-current">199$</p>
          <span class="product-card__price-old">399%</span>
          <span class="product-card__price-sale">50%</span>
        </div>
      </div>
      <!-- action buttons -->
      <div class="product-card__action-btns">
        <FormCounter class="product-card__counter"
                     :propvalue="5"
                     :max="10" />
        <button class="product-card__button-add"
                type="button">Add to cart</button>
      </div>
      <!-- images -->
      <div class="product-card__sliders-wrapper">
        <div class="product-card__images">
          <swiper class="slider-first"
                  :loop="true"
                  :modules="modules"
                  :slides-per-view="1"
                  :space-between="10"
                  @swiper="setThumbsSwiper"
                  watch-slides-progress>
            <SwiperSlide class=""
                         v-for="(slide, i) in productImages"
                         :key="i">
              <img :src="`img/team/photo${i + 1}.png`"
                   width="270"
                   height="270"
                   alt="some descr" />
            </SwiperSlide>
          </swiper>
          <!--  -->
          <swiper class="slider-second"
                  :thumbs="{ swiper: thumbsSwiper }"
                  :slidesPerView="3"
                  :space-between="15"
                  :loop="true"
                  :modules="modules"
                  :navigation="true"
                  :centeredSlides="true"
                  :mousewheel="true"
                  :pagination="{
                    dynamicBullets: true,
                    clickable: true,
                  }">
            <SwiperSlide class=""
                         v-for="slide, i in productImages"
                         :key="i">
              <img :src="`img/team/photo${i + 1}.png`"
                   width="60"
                   height="60"
                   alt="some descr" />
            </SwiperSlide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.product-card {
  color: var(--text-color);
  filter: invert(1);
}

.swiper-button-next {
  right: 0;
}

.swiper-button-prev {
  left: 0;
}

.product-card__content {
  >* {
    outline: 1px solid;
    padding: 0.3rem 0.5rem;
    border-radius: 0.7rem;
  }

  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  padding: 0.5rem;
  gap: 0.5rem;
  grid-template-areas: 'header'
  'img'
  'textcontent'
  'actions';

  @media (min-width:$width-tablet) {
    gap: 1rem;
    grid-template-columns: 270px 1fr;
    grid-template-areas: 'img header'
      'img textcontent'
      'img actions';
  }
}

.product-card__header {
  grid-area: header;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.product-card__company-title {
  font-size: 1rem;
  line-height: 1.3;
  text-decoration: underline;
  font-weight: 300;
}

.product-card__name {
  font-size: 1rem;
  line-height: 1.3;
  color: #fff;
  font-weight: 500;
}

.product-card__text-content {
  grid-area: textcontent;
}

.product-card__description {
  margin-bottom: 0.5rem;
}

.product-card__price {
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1;
  display: inline-grid;
  gap: 0.3rem 0.6rem;
  align-items: center;
  width: auto;
  grid-template-columns: auto auto;
}

.product-card__price-current {
  font-size: 1.2rem;
  letter-spacing: 0.4px;
  font-weight: 600;
}

.product-card__price-old {
  font-size: 0.75rem;
  text-decoration: line-through;
  color: rgb(201, 201, 201);
}

.product-card__price-sale {
  grid-column: 2/3;
  grid-row: 1/3;
  display: inline-block;
  align-self: start;
  margin-top: -0.3rem;
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  background-color: #fff;
  color: #333;
  box-shadow: 0 0 10px 0 rgb(158, 158, 158);
}

.product-card__action-btns {
  grid-area: actions;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.product-card__button-add {
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  background-color: #fff;
  color: #333;
  box-shadow: 0 0 16px 0 rgb(124, 124, 124);

  &:hover {
    color: var(--primary-color);
  }

  &:active {
    box-shadow: none;
  }
}

.product-card__counter {}

.counter {}

.product-card__sliders-wrapper {
  grid-area: img;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 0;

  img {
    filter: invert(1);
  }
}

.product-card__images {
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  // height: 320px;
}

.slider-first {
  flex: 1 0 70%;

  img {
    display: block;
    max-width: 100%;
    height: 270px;
    object-fit: contain;
    margin: 0 auto;
  }
}

.slider-second {
  flex: 1 0 30%;
}
</style>
