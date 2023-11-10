<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/valid-v-for -->
<template>
  <q-page class="q-pa-md row justify-center">
    <div class="text-subtitle1 text-bold">Categories</div>
    <div>
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
        no-caps
      >
        <q-tab name="all" label="All menu" />
        <q-tab name="dimsum" label="Dimsum" />
        <q-tab name="drink" label="Drinks" />
        <q-tab name="seafood" label="Seafood" />
      </q-tabs>

      <div class="q-gutter-y-lg">
        <q-tab-panels v-model="tab" class="text-black bg-grey-2">
          <q-tab-panel name="all">
            <MenuCard
              class="q-my-md"
              v-for="allmenu in allmenus"
              :key="id"
              :menuName="allmenu.name"
              :menuDetail="allmenu.detail"
              :menuPrice="allmenu.price"
              :menuCategory="allmenu.category"
              :menuSold="allmenu.sold_amount"
            />
          </q-tab-panel>
        </q-tab-panels>

        <q-tab-panels
          v-model="drink"
          animated
          transition-prev="fade"
          transition-next="fade"
          class="bg-orange text-white text-center"
        >
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useUserStore } from "src/Stores/user";
import MenuCard from "src/components/MenuCard.vue";

export default defineComponent({
  name: "MenuPage",
  data() {
    const userStore = useUserStore();
    const accessToken = userStore.user.accessToken;
    return {
      userStore,
      accessToken,
      allmenus: [],
      tab: "all",
    };
  },
  created() {
    this.getAllMenu();
  },
  methods: {
    getAllMenu() {
      const headerss = {
        "x-access-token": `${this.accessToken}`,
      };
      this.$api
        .get("/menu/", { headers: headerss })
        .then((res) => {
          this.allmenus = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  components: { MenuCard },
});
</script>
