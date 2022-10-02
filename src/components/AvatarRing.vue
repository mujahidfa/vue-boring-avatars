<template>
  <svg
    :viewBox="`0 0 ${SIZE} ${SIZE}`"
    fill="none"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <title v-if="title">{{ name }}</title>
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
        fill="#FFFFFF"
      />
    </mask>
    <g mask="url(#mask__ring)">
      <path d="M0 0h90v45H0z" :fill="ringColors[0]" />
      <path d="M0 45h90v45H0z" :fill="ringColors[1]" />
      <path d="M83 45a38 38 0 00-76 0h76z" :fill="ringColors[2]" />
      <path d="M83 45a38 38 0 01-76 0h76z" :fill="ringColors[3]" />
      <path d="M77 45a32 32 0 10-64 0h64z" :fill="ringColors[4]" />
      <path d="M77 45a32 32 0 11-64 0h64z" :fill="ringColors[5]" />
      <path d="M71 45a26 26 0 00-52 0h52z" :fill="ringColors[6]" />
      <path d="M71 45a26 26 0 01-52 0h52z" :fill="ringColors[7]" />
      <circle :cx="45" :cy="45" :r="23" :fill="ringColors[8]" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";
import { hashCode, getRandomColor } from "../utilities";

const SIZE = 90;
const COLORS = 5;

function generateColors(name: string, colors: string[]) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;
  const colorsShuffle = Array.from({ length: COLORS }, (_, i) =>
    getRandomColor(numFromName + i, colors, range)
  );
  const colorsList = [];
  colorsList[0] = colorsShuffle[0];
  colorsList[1] = colorsShuffle[1];
  colorsList[2] = colorsShuffle[1];
  colorsList[3] = colorsShuffle[2];
  colorsList[4] = colorsShuffle[2];
  colorsList[5] = colorsShuffle[3];
  colorsList[6] = colorsShuffle[3];
  colorsList[7] = colorsShuffle[0];
  colorsList[8] = colorsShuffle[4];

  return colorsList;
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
    title: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const ringColors = computed(() => generateColors(props.name, props.colors));

    return { ringColors, SIZE };
  },
});
</script>
