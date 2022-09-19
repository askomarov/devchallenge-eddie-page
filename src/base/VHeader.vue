<template lang="pug">
header(id="header").header
  .header__container.container
    nav.header__menu.header-menu(:class="isMenuOpened ? 'header-menu--opened' : 'header-menu--closed'")
      .header-menu__logo-wrap
        routerLink(to='/').header-menu__logo Logotext

      button(@click="toggleMenu" type="button" :aria-hidden="isMenuOpened" :aria-expanded="isMenuOpened" aria-label="open/close menu").header-menu__button.menu-button
        span.menu-button__icon
      ul.header-menu__list
        li(v-for="(link,index) in getMainMenu", :key="index" ).header-menu__item
          routerLink(:to="link.href").header-menu__link {{link.text}}
</template>

<script>
import { useAppStore } from "../store";
import { mapState } from "pinia";
export default {
  name: "VHeader",
  data() {
    return {
      isMenuOpened: false,
    };
  },
  computed: {
    ...mapState(useAppStore, ["getMainMenu"]),
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
  },
};
</script>

<style></style>
