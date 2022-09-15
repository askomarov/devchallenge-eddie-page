<template lang="pug">
header(id="header").header
  .header__container.container
    nav.header__menu.header-menu(:class="isMenuOpened ? 'header-menu--opened' : 'header-menu--closed'")
      .header-menu__logo-wrap
        a(href='/').header-menu__logo
          | Logotext
      button(@click="toggleMenu" type="button" :aria-hidden="isMenuOpened" :aria-expanded="isMenuOpened" aria-label="open/close menu").header-menu__button.menu-button
        span.menu-button__icon
      ul.header-menu__list
        li(v-for="(link,index) in menu", :key="index" ).header-menu__item
          a(:href="link.href").header-menu__link {{link.text}}
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      menu: [
        {
          href: "/",
          text: "Home",
        },
        {
          href: "#",
          text: "Services",
        },
        {
          href: "#",
          text: "Our Works",
        },
        {
          href: "#",
          text: "Clients",
        },
        {
          href: "#",
          text: "Contact",
        },
      ],
      isMenuOpened: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
  },
};
</script>

<style></style>
