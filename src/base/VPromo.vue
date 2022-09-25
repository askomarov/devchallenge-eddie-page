<template lang="pug">
section.promo
  h1.visually-hidden Home page of our service which provide you the best solutions
  p.promo__small Unhappy with your website?
  h2.promo__title We create beatiful
    br
    | and fast web services
  .promo__img-wrap
    picture
      source(:srcset="'img/hero-image.webp'" type="image/webp")
      img(:src="'img/hero-image.jpg'" width="348" height="145" alt="our office" )
  .promo__join
    h2.promo__join-title Story, emotion
      br
      | and purpose
    p.promo__join-text Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quo optio molestias atque dolores tenetur illum quam harum eum eius. Earum dolore consectetur tempora cumque!
    EmailForm(id="promo-form-email").promo__input-wrap

</template>

<script setup>
import EmailForm from "../components/EmailForm.vue";
</script>

<style lang="scss">
.promo {
  padding: 3rem 2rem 0;
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 1rem;
  }
}

.promo__small {
  color: var(--color-warning);
  font-weight: 500;
  font-size: size(12px);
  line-height: size(18px);
}

.promo__img-wrap {
  margin: 0 -2rem;
  width: calc(100% + 4rem);
  border-radius: 18px;
  overflow: hidden;
  position: relative;
  height: auto;
  aspect-ratio: 1/0.32;
  margin-bottom: 1rem;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  @media (min-width: $width-desktop) {
    width: calc(100% + 308px);
    margin: 0;
    margin-left: -154px;
    margin-bottom: 2rem;
  }
}

.promo__join {
  max-width: 366px;
  @media (min-width: $width-tablet) {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1.5rem;

    h2 {
      grid-column: 1/-1;
      text-align: center;
      margin-bottom: 0;
      br {
        display: none;
      }
      // grid-column: 2/3;
      // grid-row: 1/3;
    }
  }
}

.promo__join-text {
  margin-bottom: 2rem;
  @media (min-width: $width-tablet) {
    margin-bottom: 0;
  }
}
</style>
