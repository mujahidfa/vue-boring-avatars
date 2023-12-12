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
      :id="id"
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
    <g :mask="`url(#${id})`">
      <path
        :fill="`url(#gradient_paint0_linear_${formattedName})`"
        d="M0 0h80v40H0z"
      />
      <path
        :fill="`url(#gradient_paint1_linear_${formattedName})`"
        d="M0 40h80v40H0z"
      />
    </g>
    <defs>
      <linearGradient
        :id="`gradient_paint0_linear_${formattedName}`"
        :x1="SIZE / 2"
        :y1="0"
        :x2="SIZE / 2"
        :y2="SIZE / 2"
        gradientUnits="userSpaceOnUse"
      >
        <stop :stop-color="sunsetColors[0]" />
        <stop :offset="1" :stop-color="sunsetColors[1]" />
      </linearGradient>
      <linearGradient
        :id="`gradient_paint1_linear_${formattedName}`"
        :x1="SIZE / 2"
        :y1="SIZE / 2"
        :x2="SIZE / 2"
        :y2="SIZE"
        gradientUnits="userSpaceOnUse"
      >
        <stop :stop-color="sunsetColors[2]" />
        <stop :offset="1" :stop-color="sunsetColors[3]" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { PropType } from "vue";
import { hashCode, getRandomColor } from "../utilities";

const ELEMENTS = 4;
const SIZE = 80;

function generateColors(name: string, colors: string[]) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;

  const colorsList = Array.from({ length: ELEMENTS }, (_, i) =>
    getRandomColor(numFromName + i, colors, range),
  );

  return colorsList;
}

export default defineComponent({
  props: {
    id: {
      type: String,
      required: false,
      default: "mask__sunset",
    },
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
    const sunsetColors = computed(() =>
      generateColors(props.name, props.colors),
    );
    const formattedName = computed(() => props.name.replace(/\s/g, ""));

    return { sunsetColors, formattedName, SIZE };
  },
});
</script>
