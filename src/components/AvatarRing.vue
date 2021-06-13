<template>
  <svg
    :viewBox="`0 0 ${SIZE} ${SIZE}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
  >
    <path
      d="M90 45a45.001 45.001 0 00-76.82-31.82A45 45 0 000 45h90z"
      :fill="cellColors[0]"
    ></path>
    <path
      d="M90 45a45.001 45.001 0 01-76.82 31.82A45 45 0 010 45h90z"
      :fill="cellColors[1]"
    ></path>
    <path d="M83 45a38 38 0 00-76 0h76z" :fill="cellColors[2]"></path>
    <path d="M83 45a38 38 0 01-76 0h76z" :fill="cellColors[3]"></path>
    <path d="M77 45a32 32 0 10-64 0h64z" :fill="cellColors[4]"></path>
    <path d="M77 45a32 32 0 11-64 0h64z" :fill="cellColors[5]"></path>
    <path d="M71 45a26 26 0 00-52 0h52z" :fill="cellColors[6]"></path>
    <path d="M71 45a26 26 0 01-52 0h52z" :fill="cellColors[7]"></path>
    <circle :cx="45" :cy="45" :r="23" :fill="cellColors[8]"></circle>
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
