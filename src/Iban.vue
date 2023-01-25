<template>
      <input v-maska :data-maska="mask" v-model="iban" />
</template>

<script>
import { vMaska } from "maska";
export default {
  name: "Iban",
  directives: { "maska": vMaska},
  data() {
    return {
      mask: "**** **** **** **** **** **** **** **** **",
      iban: "DE40 1234",
    };
  },

}
</script>
