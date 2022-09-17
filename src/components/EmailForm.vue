<template lang="pug">
form.email-form
  label(:for='id').email-form__label Want us to contact you
  .email-form__input-wrap
    input(type="email" :name="id" :id='id' required :placeholder="placeholder").email-form__input
    button(type="submit").email-form__btn-submit Join
</template>

<script>
export default {
  name: "EmailForm",
  props: {
    id: {
      type: String,
      default: "form-id",
    },
    placeholder: {
      type: String,
      default: "Email",
    },
  },
};
</script>

<style lang="scss" scoped>
.email-form__input-wrap {
  padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--text-color-gray-light);
  border-radius: 12px;
  &:hover,
  &:focus,
  &:focus-within {
    outline: 1px solid var(--color-blue);
  }
}
label {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0.5rem;
}
input {
  font-family: $font-family;
  border-radius: inherit;
  padding: 0 10px;
  margin: 0 5px;
  width: 100%;
  height: 39px;
  background: inherit;
  border: 0;
  outline: 0;
  font-weight: 500;
  font-size: size(14px);
  line-height: 100%;
  &::placeholder {
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    color: var(--text-color-gray);
  }
  @media (prefers-color-scheme: dark) {
    color: #333;
    &::placeholder {
      color: #5f5f5f;
    }
  }
}
.email-form__btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-blue);
  color: var(--color-white);
  border-radius: inherit;
  padding: 11px 20px;

  &:hover {
    background: var(--color-blue-dark);
  }
}
</style>
