<template>
  <q-dialog v-model="isDialogVisible" align="center" class="text-grey-9">
    <q-card>
      <q-card-section>
        <div class="text-h6">Add new menu</div>
        <q-input label="Name" v-model="menuName" />
        <q-input label="Detail" v-model="menuDetail" />
        <q-input label="Price" v-model="menuPrice" />
        <q-select
          label="Category"
          v-model="menuCategory"
          :options="categories"
        />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          label="Save"
          color="green-5"
          @click="saveMenu"
          style="border-radius: 15px"
          no-caps
        />
        <q-btn
          label="Cancel"
          text-color="red"
          color="red-3"
          @click="closeDialog"
          style="border-radius: 15px"
          no-caps
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MenuAdd",
  props: {
    isVisible: Boolean, // Prop to control the dialog visibility
  },
  data() {
    return {
      menuName: "",
      menuDetail: "",
      menuPrice: "",
      menuCategory: "",
      isDialogVisible: this.isVisible, // Initialize dialog visibility from the prop
      categories: ["Dimsum", "Drink", "Seafood"],
    };
  },
  methods: {
    closeDialog() {
      this.isDialogVisible = false;
      this.$emit("updateVisible", this.isDialogVisible);
    },
    saveMenu() {
      const menuData = {
        name: this.menuName,
        detail: this.menuDetail,
        price: this.menuPrice,
        catagory: this.menuCategory,
      };
      console.log(menuData);
      this.$emit("addmenu", menuData);
    },
  },
};
</script>
