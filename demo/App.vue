<script setup lang="ts">
import { ref } from "vue";
import Avatar from "../src";

const name = ref("Clara Barton");
const size = ref(80);
const square = ref(true);
</script>

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
