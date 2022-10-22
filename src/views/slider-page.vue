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
import ProductCard from '../components/ProductCard.vue'

const modules = [
  Navigation,
  Pagination,
  Mousewheel,
  Thumbs,
  Autoplay,
  Parallax,
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
let wisePhrase = ref(
  { quoteAuthor: "null", quoteText: "null", _id: 1 },
  { quoteAuthor: "null", quoteText: "null", _id: 2 },
  { quoteAuthor: "null", quoteText: "null", _id: 3 },
  { quoteAuthor: "null", quoteText: "null", _id: 4 },
  { quoteAuthor: "null", quoteText: "null", _id: 5 }
);
const URL = "https://quote-garden.herokuapp.com/api/v3/quotes/";
const getRandomQuote = () => {
  try {
    return fetch(`${URL}random?count=5`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};
const setNewWisePhrase = async () => {
  wisePhrase.value = await getRandomQuote();
  return wisePhrase.value;
};

onBeforeMount(() => {
  setNewWisePhrase();
});
</script>
<template>
  <div class="slider-page">
    <div class="container">
    <ProductCard></ProductCard>
      <h1>Two Swiper sliders</h1>
      <p>
        The bottom slider shows random phrases of famous people.
        <i><a target="_blank" href="https://quote-garden.herokuapp.com/api/v3/quotes">quote-garden.herokuapp.com
          </a></i>
        API request implemented. Random phrases will be loaded every time the
        page is reloaded.
      </p>
      <div class="reviews">
        <swiper class="slider-first hero__swiper" :modules="modules" :slides-per-view="1" :space-between="0"
          @swiper="setThumbsSwiper" watch-slides-progress :parallax="true">
          <div class="parallax-bg" data-swiper-parallax="-23%">
            <svg width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
              <g mask="url('#SvgjsMask1000')" fill="none">
                <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
                <path
                  d="M505.05,435.489C557.258,434.528,606.009,412.009,634.99,368.573C667.85,319.323,686.433,257.13,659.091,204.616C630.014,148.77,567.961,116.459,505.05,119.002C445.978,121.39,399.424,164.324,371.165,216.253C344.298,265.625,337.253,325.545,366.548,373.516C394.802,419.781,450.849,436.487,505.05,435.489"
                  fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
                <path
                  d="M1345.6732016788 63.590799911581335L1447.792218214111 68.94263079076515 1453.1440490932948-33.17638574454572 1351.0250325579839-38.52821662372954z"
                  fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
                <path
                  d="M17.3533421705272 82.9960199305948L100.75996661354442 211.43095866043805 229.1949053433877 128.02433421742083 145.78828090037047-0.4106045124224238z"
                  fill="rgba(28, 83, 142, 0.4)" class="triangle-float3"></path>
                <path
                  d="M483.729,340.204C509.44,339.927,536.996,336.159,550.983,314.584C566.023,291.386,565.67,260.318,550.509,237.199C536.527,215.878,509.225,211.774,483.729,212.028C458.814,212.276,433.095,217.816,419.211,238.505C403.735,261.566,399.035,292.611,413.913,316.063C428.051,338.349,457.339,340.489,483.729,340.204"
                  fill="rgba(28, 83, 142, 0.4)" class="triangle-float3"></path>
                <path
                  d="M918.6810028189012 380.07193832777875L1032.382343775867 428.3352941332724 1080.6456995813605 314.6339531763066 966.9443586243948 266.37059737081296z"
                  fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
                <path
                  d="M71.21125796524309 366.79525957692425L25.875537091194445 445.31903152853744 104.39930904280763 490.6547524025861 149.73502991685626 412.1309804509729z"
                  fill="rgba(28, 83, 142, 0.4)" class="triangle-float2"></path>
              </g>
              <defs>
                <mask id="SvgjsMask1000">
                  <rect width="1440" height="560" fill="#ffffff"></rect>
                </mask>
              </defs>
            </svg>
          </div>
          <SwiperSlide class="hero__slide-1" v-for="slide in wisePhrase" :key="slide._id">
            <div class="hero__title">
              <h2>{{ slide.quoteAuthor }}</h2>
            </div>
            <p class="hero__text-feature">"{{ slide.quoteText }}"</p>
          </SwiperSlide>
        </swiper>
        <swiper class="slider-second" :thumbs="{ swiper: thumbsSwiper }" :slidesPerView="5" :space-between="15"
          :loop="true" :modules="modules" :navigation="true" :centeredSlides="true" :mousewheel="true" :pagination="{
            dynamicBullets: true,
            clickable: true,
          }">
          <swiper-slide>
            <img height="270" width="270" src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </swiper-slide>
          <swiper-slide><img height="270" width="270" src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </swiper-slide>
          <swiper-slide><img height="270" width="270" src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img height="270" width="270" src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img height="270" width="270" src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-page {
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--color-white);
  background-color: var(--text-color);
  width: 100%;
  flex: 1;

  h1,
  p {
    margin: revert;
  }
}

a {
  &:hover {
    text-decoration: underline;
  }
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}

@keyframes float1 {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-10px, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

.triangle-float1 {
  animation: float1 5s infinite;
}

@keyframes float2 {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-5px, -5px);
  }

  100% {
    transform: translate(0, 0);
  }
}

.triangle-float2 {
  animation: float2 4s infinite;
}

@keyframes float3 {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, -10px);
  }

  100% {
    transform: translate(0, 0);
  }
}

.triangle-float3 {
  animation: float3 6s infinite;
}

.reviews {
  min-height: 420px;
  position: relative;
  z-index: 0;
  background-color: var(--text-color);
  display: grid;
  align-items: start;
  grid-template-rows: 1fr 1fr;

  @media (min-width: $width-tablet) {
    grid-template-columns: 270px 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
}

.slider-first {
  @media (min-width: $width-tablet) {
    grid-row: 2/-1;
    grid-column: 1/-1;
  }
}

.slider-second {
  height: 100%;
  width: 100%;

  @media (min-width: $width-tablet) {
    grid-row: 1/3;
    grid-column: 2/3;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .swiper-slide:not(.swiper-slide-active) {
    img {
      filter: grayscale(1);
    }
  }
}

.swiper-thumbs {
  .swiper-slide:not(.swiper-slide-thumb-active) {
    img {
      filter: grayscale(1);
    }
  }
}

.hero__swiper {
  background-color: #3a4b46;
  width: 100%;
  display: block;
  height: 100%;
}

.hero__slide-1 {
  @media (min-width: $width-tablet) {
    display: grid;
    grid-template-columns: 270px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "title ."
      ". text";
  }

  color: var(--color-white);
  text-align: left;
  // background-image: url("@/assets/img/slider/slider-colors-img-1.png");
  background-repeat: no-repeat;
  background-size: cover;

  // background-size: 2500px 1042px;
  @media (min-width: 1700px) {
    background-size: 100% auto;
    background-position: 0 -150px;
  }
}

.hero__title {
  text-align: center;
  padding: 1rem;
  grid-area: title;

  h2 {
    font-size: 1.5rem;
    line-height: 1.1;
  }

  @media (min-width: $width-tablet) {
    margin-bottom: 1rem;
    font-size: 2.8rem;
  }
}

.hero__text-feature {
  grid-area: text;
  font-size: 1.06rem;
  line-height: 130%;
  padding: 0 1rem;
}

.swiper-slide {
  user-select: none;
  // display: grid;
  // align-items: center;
}

.swiper-pagination {
  display: inline-flex;
  gap: 8px;
  width: auto !important;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  padding: 13px 24px;
}

.swiper .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba($color: #fff, $alpha: 0.2);
  cursor: pointer;

  &:hover:not(.swiper-pagination-bullet-active) {
    background: rgba($color: #fff, $alpha: 0.7);
  }
}

.swiper .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 25%;
  z-index: 10;
  color: rgba($color: #fff, $alpha: 0.7);

  &:hover:not(.swiper-button-disabled) {
    color: #fff;
  }
}

.swiper-button-prev {
  left: 5%;
}

.swiper-button-next {
  right: 5%;
}
</style>
