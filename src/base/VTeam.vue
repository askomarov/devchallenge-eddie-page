<template lang="pug">
section.our-team
  .our-team__text-content
    small.our-team__attention-text Meet the team
    h2 We are chilled and a laidback team
    p Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis.
  .our-team__imgs-wrap.team-images
    .team-images__img.team-images__img--1
      picture
        source(:srcset="`../img/person3.webp`" type="image/webp")
        img(:src="'../img/person3.png'" width="178" height="178" alt="Veronica PR")
    .team-images__img.team-images__img--2
      picture
        source(:srcset="`../img/person1.webp`" type="image/webp")
        img(:src="'../img/person1.png'" width="178" height="178" alt="Mike Disigner")
    .team-images__img.team-images__img--3
      picture
        source(:srcset="`../img/person2.webp`" type="image/webp")
        img(:src="'../img/person2.png'" width="178" height="178" alt="Mark Frontend dev")

</template>

<script setup></script>

<style lang="scss">
.our-team {
  display: grid;
  gap: 2rem;
  justify-content: center;

  h2 {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
  }
  @media (min-width: $width-mobile-h) {
    grid-template-columns: auto 1fr;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: $width-tablet-h) {
    grid-template-columns: 280px 1fr;
  }
}
.our-team__text-content {
  max-width: 280px;
}
.our-team__attention-text {
  font-weight: 500;
  font-size: size(18px);
  line-height: size(27px);
  color: var(--color-warning);
}

.team-images {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: $width-tablet-h) {
    gap: 1.5rem;
  }
}
.team-images__img {
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  height: auto;
  aspect-ratio: 1/1;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    border-radius: inherit;
    overflow: hidden;
  }
}

.team-images__img--1 {
  grid-row: 1/3;
  width: 178px;
  @media (min-width: $width-tablet-h) {
    width: 320px;
  }
}

.team-images__img--2 {
  width: 144px;
  @media (min-width: $width-tablet-h) {
    width: 280px;
  }
}
.team-images__img--3 {
  width: 162px;
  @media (min-width: $width-tablet-h) {
    width: 290px;
  }
}
</style>
