<template>
  <div class="q-pa-md">
    <q-card class="my-card" flat bordered>
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-card-section>
        <div class="text-h6 q-mt-sm">{{ menuName }}</div>
        <div class="text-subtitle1 text-grey">{{ menuDetail }}</div>
        <div class="text-h6 text-bold q-mt-md">{{ menuPrice }}</div>
        <q-card-actions class="row justify-end">
          <q-btn flat color="orange" label="Add" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuCard",
  props: {
    menuName: String,
    menuDetail: String,
    menuPrice: Number,
  },
});
</script>
