<template>
  <v-card
    :height="height"
  >
    <v-btn :color="color" @click="$emit('click')">{{ text }}</v-btn>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Test",
  props: {
    text: {
      type: String,
    },
    color: {
      type: String,
    },
    height:{
      type:Number
    }
  },
});
</script>

<style scoped></style>