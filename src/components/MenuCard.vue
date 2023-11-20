<template>
  <q-card>
    <div class="q-pa-md">
      <div class="text-subtitle2 text-bold row justify-between">
        <div>{{ menuName }}</div>
        <div>{{ menuPrice }} Bath</div>
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
      <div class="row justify-end">
        <q-icon name="add" size="20px" color="orange-9" @click="addMenuBuy()" />
        <div class="q-mx-sm text-bold">{{ menuBuy }}</div>
        <q-icon
          name="remove"
          size="20px"
          color="orange-9"
          @click="removeMenuBuy()"
        />
      </div>
      <div align="center" class="q-pt-md" v-if="menuBuy > 0">
        <q-btn
          color="green-3"
          label="Confirm"
          text-color="green"
          style="border-radius: 15px"
          no-caps
          class="q-mr-sm"
          @click="confirmOrder()"
        />
        <q-btn
          color="red-3"
          label="Cancel"
          text-color="red"
          style="border-radius: 15px"
          no-caps
          @click="canCelOrder"
        />
      </div>
    </div>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuCard",
  props: {
    menuId: Number,
    menuName: String,
    menuDetail: String,
    menuPrice: Number,
    menuCategory: String,
    menuSold: Number,
  },
  data() {
    return {
      menuBuy: 0,
    };
  },
  methods: {
    addMenuBuy() {
      this.menuBuy++;
    },
    removeMenuBuy() {
      if (this.menuBuy > 0) {
        this.menuBuy--;
      }
    },
    confirmOrder() {
      // Emit an event to notify the parent component (MenuPage)
      this.$emit("addMenuToCart", {
        menuId: this.menuId,
        menuName: this.menuName,
        menuPrice: this.menuPrice,
        menuBuy: this.menuBuy,
      });
    },
    canCelOrder() {
      this.menuBuy = 0;
    },
  },
});
</script>
