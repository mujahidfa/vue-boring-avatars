<template>
  <svg
    :viewBox="`0 0 ${SIZE} ${SIZE}`"
    fill="none"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <title>{{ name }}</title>
    <mask
      id="mask__ring"
      maskUnits="userSpaceOnUse"
      :x="0"
      :y="0"
      :width="SIZE"
      :height="SIZE"
    >
      <rect
        :width="SIZE"
        :height="SIZE"
        :rx="!square ? SIZE * 2 : undefined"
        fill="white"
      />
    </mask>
    <g mask="url(#mask__ring)">
      <path d="M0 0h90v45H0z" :fill="cellColors[0]" />
      <path d="M0 45h90v45H0z" :fill="cellColors[1]" />
      <path d="M83 45a38 38 0 00-76 0h76z" :fill="cellColors[2]" />
      <path d="M83 45a38 38 0 01-76 0h76z" :fill="cellColors[3]" />
      <path d="M77 45a32 32 0 10-64 0h64z" :fill="cellColors[4]" />
      <path d="M77 45a32 32 0 11-64 0h64z" :fill="cellColors[5]" />
      <path d="M71 45a26 26 0 00-52 0h52z" :fill="cellColors[6]" />
      <path d="M71 45a26 26 0 01-52 0h52z" :fill="cellColors[7]" />
      <circle :cx="45" :cy="45" :r="23" :fill="cellColors[8]" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { getNumber, getRandomColor } from "../utilities";

const SIZE = 90;
const COLORS = 5;

function generateColors(name: string, colors: string[]) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;
  const colorsShuffle = Array.from({ length: COLORS }, (_, i) =>
    getRandomColor(numFromName + (i + 1), colors, range)
  );
  const iconColors = [];
  iconColors[0] = colorsShuffle[0];
  iconColors[1] = colorsShuffle[1];
  iconColors[2] = colorsShuffle[1];
  iconColors[3] = colorsShuffle[2];
  iconColors[4] = colorsShuffle[2];
  iconColors[5] = colorsShuffle[3];
  iconColors[6] = colorsShuffle[3];
  iconColors[7] = colorsShuffle[0];
  iconColors[8] = colorsShuffle[4];

  return iconColors;
}

export default defineComponent({
  props: {
    colors: {
      type: Array as PropType<string[]>,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    square: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const cellColors = computed(() => generateColors(props.name, props.colors));

    return { cellColors, SIZE };
  },
});
</script>
