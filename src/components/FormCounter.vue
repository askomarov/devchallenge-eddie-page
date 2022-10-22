<script setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['decreaseCounter', 'increaseCounter'])
const props = defineProps({
  propvalue: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: undefined,
  }
})
const counter = ref(props.propvalue);
const MIN_INGREDIENT_COUNT = props.min;
const increaseCounter = () => {
  emit("increaseCounter", ++counter.value);
}
const decreaseCounter = () => {
  emit("decreaseCounter", --counter.value);
}

</script>

<template>
  <div class="counter">
    <button type="button"
            aria-label="decrease counter"
            :disabled="counter <= MIN_INGREDIENT_COUNT"
            @click="decreaseCounter()">➖</button>
    <input type="text"
           :value="counter">
    <button type="button"
            aria-label="increase counter"
            @click="increaseCounter()"
            :disabled="counter >= max">➕</button>
  </div>
</template>
