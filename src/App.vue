<template>
  <input type="text" v-model="name" />
  <input type="number" v-model.number="size" />

  <Avatar :size="size" variant="bauhaus" :name="name" />
  <Avatar :size="size" variant="beam" :name="name" />
  <Avatar :size="size" variant="marble" :name="name" />
  <Avatar :size="size" variant="pixel" :name="name" />
  <Avatar :size="size" variant="ring" :name="name" />
  <Avatar :size="size" variant="sunset" :name="name" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Avatar from "./components/Avatar.vue";

export default defineComponent({
  name: "App",
  setup() {
    const name = ref("Clara Barton");
    const size = ref(80);

    return {
      name,
      size,
    };
  },
  components: {
    Avatar,
  },
});
</script>
