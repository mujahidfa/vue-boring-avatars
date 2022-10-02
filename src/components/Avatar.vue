<template>
  <component
    :is="`avatar-${variant}`"
    :colors="colors"
    :name="name"
    :square="square"
    :size="size"
    :title="title"
  ></component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import AvatarBauhaus from "./AvatarBauhaus.vue";
import AvatarBeam from "./AvatarBeam.vue";
import AvatarMarble from "./AvatarMarble.vue";
import AvatarPixel from "./AvatarPixel.vue";
import AvatarRing from "./AvatarRing.vue";
import AvatarSunset from "./AvatarSunset.vue";

type Variant = "bauhaus" | "beam" | "marble" | "pixel" | "ring" | "sunset";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Avatar",
  props: {
    variant: {
      type: String as PropType<Variant>,
      required: false,
      default: "marble",
      validator(value: string) {
        // The value must match one of these strings
        return [
          "bauhaus",
          "beam",
          "marble",
          "pixel",
          "ring",
          "sunset",
        ].includes(value);
      },
    },
    colors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
    },
    name: {
      type: String,
      required: false,
      default: "Clara Barton",
    },
    square: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: Number,
      required: false,
      default: 40,
    },
    title: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    return {};
  },
  components: {
    AvatarBauhaus,
    AvatarBeam,
    AvatarMarble,
    AvatarPixel,
    AvatarRing,
    AvatarSunset,
  },
});
</script>
