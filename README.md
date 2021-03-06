# vue-boring-avatars

![hi](https://badgen.net/npm/v/vue-boring-avatars)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/3206-shield.svg)](https://madewithvuejs.com/p/vue-boring-avatars/shield-link)

`vue-boring-avatars` is a Vue 3 port of [Boring Avatars](https://github.com/boringdesigners/boring-avatars), a JS library that generates custom, SVG-based avatars from any username and color palette.

## Features

- Supports **Vue 3** (for Vue 2, look at [this](https://github.com/stonega/vue2-boring-avatars) implementation).
- Built using **TypeScript** and comes with TS types.
- Similar API with the React version of [Boring Avatars](https://github.com/boringdesigners/boring-avatars).

## Installation

NPM:

```bash
yarn add vue-boring-avatars

# or

npm install vue-boring-avatars
```

CDN:

```html
<!-- UMD version -->
<script src="https://unpkg.com/vue-boring-avatars/dist/vue-boring-avatars.umd.js"></script>

<!-- ESM version -->
<script type="module">
  import Avatar from 'https://unpkg.com/vue-boring-avatars/dist/vue-boring-avatars.es.js'
</script>                                                                    
```

## Props

Props:

- `size`: number
  - Default: `40`
- `square`: boolean
  - Default: `false`
- `name`: string
  - Default: `"Clara Barton"`
- `variant`: string
  - Accepts either of the following: `"bauhaus", "beam", "marble", "pixel", "ring", "sunset"`.
  - Default: `"marble"`
- `colors`: string[]
  - Accepts a string of colors.
  - Default: `["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]`

## Usage

Basic usage (with default props):

```html
<template>
  <Avatar />
</template>

<script>
import Avatar from "vue-boring-avatars";

export default {
  components: {
    Avatar,
  },
});
</script>
```


Basic usage with `<script setup>` (with default props):

```html
<script setup>
import Avatar from "vue-boring-avatars";
</script>

<template>
  <Avatar />
</template>
```

With props:

```html
<template>
  <Avatar 
    :size="80" 
    variant="bauhaus"
    name="Mujahid Anuar" 
    :colors="colors" 
  />
</template>

<script>
import Avatar from "vue-boring-avatars";

export default {
  data() {
    return {
      colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]
    }
  },
  components: {
    Avatar,
  },
});
</script>
```

With Composition API:

```html
<template>
  <input type="text" v-model="name" />
  <input type="number" v-model.number="size" />

  <Avatar :size="size" variant="bauhaus" :name="name" />
  <Avatar :size="size" variant="beam" :name="name" :square="true" />
  <Avatar :size="size" variant="marble" :name="name" />
  <Avatar :size="size" variant="pixel" :name="name" :square="true" />
  <Avatar :size="size" variant="ring" :name="name" />
  <Avatar :size="size" variant="sunset" :name="name" :square="true" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Avatar from "vue-boring-avatars";

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
```

## Credits

Credits to [@hihayk](https://twitter.com/hihayk) ([GitHub](https://github.com/hihayk)) and [@josep_martins](https://twitter.com/josep_martins) ([GitHub](https://github.com/josepmartins)) for creating the original [Boring Avatars](https://github.com/boringdesigners/boring-avatars) library at [boringdesigners](https://github.com/boringdesigners)!
