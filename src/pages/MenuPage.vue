<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/valid-v-for -->
<template>
  <q-page class="q-pa-md">
    <div class="text-h5">Menu</div>
    <div>
      <MenuCard
        v-for="all in this.allmenu"
        :menuName="all.name"
        :menuDetail="all.detail"
        :menuPrice="all.price"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MenuCard from "src/components/MenuCard.vue";

export default defineComponent({
  name: "MenuPage",
  components: { MenuCard },
  data() {
    return {
      allmenu: [],
    };
  },
  methods: {
    getAllMenu() {
      this.$api
        .get("/menu/")
        .then((res) => {
          this.allmenu = res.data;
          console.log(this.allmenu);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
});
</script>
