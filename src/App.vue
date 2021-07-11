<template>
  <div style="margin-bottom: 20px">
    <input type="text" v-model="name" />
    <input type="number" v-model.number="size" />
    <input type="checkbox" id="square" name="square" v-model="square" />
    <label for="square">Square?</label>
  </div>

  <Avatar :size="size" variant="bauhaus" :name="name" :square="square" />
  <Avatar :size="size" variant="beam" :name="name" :square="square" />
  <Avatar :size="size" variant="marble" :name="name" :square="square" />
  <Avatar :size="size" variant="pixel" :name="name" :square="square" />
  <Avatar :size="size" variant="ring" :name="name" :square="square" />
  <Avatar :size="size" variant="sunset" :name="name" :square="square" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Avatar from "./components/Avatar.vue";

export default defineComponent({
  name: "App",
  setup() {
    const name = ref("Clara Barton");
    const size = ref(80);
    const square = ref(true);

    return {
      name,
      size,
      square,
    };
  },
  components: {
    Avatar,
  },
});
</script>
