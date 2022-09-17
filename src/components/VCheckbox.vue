<template>
  <div class="w-custom-checkbox">
    <input
      ref="input"
      type="checkbox"
      :name="name"
      :id="id"
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
  },
  mounted() {
    () => {
      if (props.on) {
        checked.value = true;
        emit("update:modelValue", true);
        if ($this.$refs.input.value) $this.$refs.input.value.checked = true;
      }
    };
  },
};
</script>

<style></style>
