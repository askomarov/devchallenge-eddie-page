<template>
  <div id="Cursor">
    <button @click="run">
      <h1>NEON<br />CURSOR</h1>
    </button>
  </div>
</template>

<script setup>
import { neonCursor } from "threejs-toys";
const run = () => {
  neonCursor({
    el: document.getElementById("Cursor"),
    shaderPoints: 16,
    curvePoints: 80,
    curveLerp: 0.5,
    radius1: 5,
    radius2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025,
  });
};
</script>

<style lang="scss">
#hero {
  min-height: 100%;
  min-width: 100%;
  position: relative;
}
#Cursor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  text-shadow: 0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000;
  overflow: hidden;
  touch-action: pan-up;
  color: #ffffff;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
h1 {
  --fontSize: 60px;
  --lineHeight: 80px;
  width: auto;
  height: calc(2 * var(--lineHeight));
  line-height: var(--lineHeight);
  margin: calc(50vh - var(--lineHeight)) auto 0;
  font-size: var(--fontSize);
  text-transform: uppercase;
}
</style>
