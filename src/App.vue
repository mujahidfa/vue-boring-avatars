<template>
  <input type="text" v-model="name" />
  <Avatar :size="80" variant="bauhaus" :name="name" />
  <Avatar :size="80" variant="beam" :name="name" />
  <Avatar :size="80" variant="marble" :name="name" />
  <Avatar :size="80" variant="pixel" :name="name" />
  <Avatar :size="80" variant="ring" :name="name" />
  <Avatar :size="80" variant="sunset" :name="name" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Avatar from "./components/Avatar.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      name: "Clara Barton",
    };
  },
  components: {
    Avatar,
  },
});
</script>
