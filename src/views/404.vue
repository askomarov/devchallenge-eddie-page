<template lang="pug">
section
  p.not-found 404 not found
  .content
    img(:src="'../img/scarecrow.png'" width="286" height="238" alt="not found image")
    h2 I have bad news for you
    p The page you are looking for might be removed or is temporarily unavailble
    a(href="/").back Back to homepage
  AskomarovCopy(linkClass="artem").not-found-askomarov
</template>

<script setup>
import AskomarovCopy from "../components/AskomarovCopy.vue";
</script>

<style lang="scss">
section {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  color: var(--text-color-black);
  padding: 4rem 2rem 2rem;

  max-width: 475px;
  margin: 0 auto;

  @media (min-width: $width-tablet) {
    padding: 10vh 2rem 4rem;
    max-width: $max-width;
  }
}
.content {
  flex: 1 0 auto;
  justify-self: center;
  align-self: center;
  display: grid;
  gap: 2rem;
  justify-content: start;
  justify-items: start;
  align-content: center;
  margin-bottom: 2rem;
  @media (min-width: $width-tablet) {
    align-items: start;
    grid-template-columns: 1fr 1fr;
  }
}
img {
  justify-self: center;
  @media (min-width: $width-tablet) {
    align-self: center;
    width: 100%;
    height: auto;
    grid-row: 1/4;
  }
}
h2 {
  font-weight: 500;
  font-size: size(48px);
  line-height: size(71px);
  @media (min-width: $width-tablet) {
    font-size: size(64px);
    line-height: size(90px);
  }
}
p.not-found {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-weight: 700;
  font-size: size(24px);
  line-height: size(25px);
  letter-spacing: -0.08em;
  text-transform: uppercase;
}
p {
  font-weight: 400;
  font-size: size(18px);
  line-height: size(27px);
  @media (min-width: $width-tablet) {
    font-size: size(24px);
    line-height: size(36px);
  }
}
a.back {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-white);
  background: var(--text-color-black);
  font-weight: 700;
  font-size: size(14px);
  line-height: size(21px);
  padding: 1rem 1.5rem;
  &:hover {
    box-shadow: var(--box-shadow);
    background: var(--bg-main);
  }
  @media (prefers-color-scheme: dark) {
    color: #333;
    &:hover {
      background: #d5d5d5;
    }
  }
}
.not-found-askomarov {
  grid-column: 1/-1;
  text-align: center;
  width: 100%;
  justify-self: stretch;
}
.artem:hover {
  span {
    text-decoration: underline;
    color: var(--color-warning);
  }
}
</style>
