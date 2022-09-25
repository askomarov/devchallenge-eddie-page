<template>
  <div class="input-wrap">
    <input
      :type="type"
      :name="id"
      :id="id"
      :value="value"
      required
      :placeholder="placeholder"
      :readonly="readonly"
    />
    <button
      class="btn-submit"
      type="submit"
      @click="$emit('btnEvent')"
    >
      <slot name="buttonSlot">{{ Button }}</slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    id: {
      type: String,
      default: "form-id",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Email",
    },
    readonly: {
      type: Boolean,
      default: "false",
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrap {
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
.btn-submit {
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
