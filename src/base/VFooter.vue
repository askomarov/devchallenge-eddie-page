<template lang="pug">
footer.footer
  .container.footer__container
    nav.footer__nav
      a(:href="link.href" v-for="(link,index) in menu", :key="index" ).footer__nav-link {{link.text}}
    .footer__social.social
      p.social__title Edie
      .social__list
        a(href="#").social__link
          svg(width="24" height="24")
            use(href="#instagram")
        a(href="#").social__link
          svg(width="24" height="24")
            use(href="#linkedin")
        a(href="#").social__link
          svg(width="24" height="24")
            use(href="#twitter")
    .footer__form
      EmailForm(id="footer-email")

    p.footer__copy created by
      | &nbsp;
      a(href="https://github.com/askomarov").footer__copy-link 🤔&nbsp;
        span Askomarov
</template>
<!-- <svg class="icon">
  <use xlink:href="#instagram"></use>
</svg
>><svg class="icon">
  <use xlink:href="#linkedin"></use>
</svg
>><svg class="icon">
  <use xlink:href="#twitter"></use>
</svg> -->
<script>
import EmailForm from "../components/EmailForm.vue";
export default {
  name: "VFooter",
  components: { EmailForm },
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
    };
  },
};
</script>

<style lang="scss">
.footer {
  padding: 2rem 0 1rem;
  color: var(--color-white);
  background: var(--bg-main);
}
.footer__container {
  @media (min-width: $width-tablet) {
    display: grid;
    grid-template-columns: 1fr 1fr 350px;
    justify-content: start;
  }
}
.footer__nav {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  align-items: flex-start;
}
.footer__nav-link {
  font-weight: 400;
  font-size: size(18px);
  line-height: size(36px);

  &:hover {
    color: var(--text-color-gray);
    text-decoration: underline;
  }
}
.footer__form {
  max-width: 350px;
  margin-bottom: 4rem;
  color: var(--text-color-gray);
}
.footer__copy {
  text-align: center;
  @media (min-width: $width-tablet) {
    grid-column: 1/-1;
  }
}
.footer__copy-link {
  &:hover {
    span {
      text-decoration: underline;
    }
  }
  span {
    font-weight: 600;
    color: var(--color-warning);
  }
}
.footer__social {
  margin-bottom: 2rem;
}

.social__title {
  font-weight: 800;
  font-size: size(36px);
  line-height: size(53px);

  @media (min-width: $width-tablet) {
    margin-bottom: 0.9rem;
  }
}
.social__list {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  @media (min-width: $width-tablet) {
    gap: 0.9rem;
  }
}
.social__link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);

  &:hover {
    color: var(--text-color-gray);
  }
}
</style>
