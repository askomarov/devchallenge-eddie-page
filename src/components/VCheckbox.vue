<template>
  <div class="w-custom-checkbox">
    <input
      type="checkbox"
      :name="name"
      :id="id"
      :checked="checked"
      class="w-custom-checkbox__input"
    />
    <label
      :for="id"
      class="w-custom-checkbox__label"
    >
      <slot name="label">{{ labelText }}</slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      default: "Label",
    },
    on: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.w-custom-checkbox__input {
  appearance: none;
  display: block;
  flex: 0 0 30px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px var(--text-color);
  background-color: var(--color-white);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='9' viewBox='0 0 12 9' fill='none'%3E%3Cpath id='check' fill-rule='evenodd' clip-rule='evenodd' d='M10.9498 0.87947C10.5593 0.488946 9.92609 0.488946 9.53557 0.87947L4.58594 5.8291L2.46443 3.70759C2.07391 3.31707 1.44074 3.31707 1.05022 3.70759C0.659693 4.09812 0.659693 4.73128 1.05022 5.12181L3.86589 7.93748C3.87012 7.94186 3.87439 7.94622 3.87871 7.95054C4.26924 8.34106 4.9024 8.34106 5.29293 7.95054L10.9498 2.29368C11.3403 1.90316 11.3403 1.26999 10.9498 0.87947Z' fill='white'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 12px 9px;
  background-position: center;
  &:checked {
    background-color: var(--primary-color);
    box-shadow: none;
  }
  &:focus-visible,
  &:checked:focus-visible,
  &:hover {
    box-shadow: inset 0 0 0 1px var(--primary-color);
  }

  @media (min-width: $width-tablet) {
    flex: 0 0 35px;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    background-size: 18px 13px;
    background-position: center;
  }
}
.w-custom-checkbox__label {
  cursor: pointer;
}
</style>
