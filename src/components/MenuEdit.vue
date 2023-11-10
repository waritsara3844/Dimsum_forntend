<template>
  <q-card>
    <div class="q-pa-md">
      <div class="text-subtitle2 text-bold row justify-between">
        <div>{{ menuName }}</div>
        <div>{{ menuPrice }}</div>
      </div>
      <div class="text-grey q-pt-md">
        Catagory: <span class="text-black">{{ menuCategory }}</span>
      </div>
      <div class="text-grey q-pt-md">
        Sold out: <span class="text-black">{{ menuSold }}</span>
      </div>
      <div class="text-grey q-pt-md">
        detail:
        <span class="text-black">{{ menuDetail }}</span>
      </div>
      <div class="row justify-center q-mt-md">
        <q-btn
          color="orange-2"
          text-color="orange"
          label="Edit"
          style="border-radius: 15px"
          no-caps
          class="q-mr-md"
        />
        <q-btn
          color="red-2"
          text-color="red"
          label="Delete"
          style="border-radius: 15px"
          no-caps
          @click="deleteMenuItem()"
        />
      </div>
    </div>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuEdit",
  props: {
    menuId: Number,
    menuName: String,
    menuPrice: Number,
    menuCategory: String,
    menuSold: Number,
    menuDetail: String,
  },

  methods: {
    deleteMenuItem(menuId) {
      this.$emit("deleteMenuItem", menuId);
    },
  },
});
</script>
