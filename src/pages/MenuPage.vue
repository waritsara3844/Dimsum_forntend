<template>
  <q-page class="q-pa-md row justify-center">
    <div class="text-subtitle1 text-bold">Categories</div>
    <div class="q-pt-md" style="max-width: 400px">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
        no-caps
      >
        <q-tab name="all" label="All menu" />
        <q-tab
          v-for="category in categories"
          :key="category"
          :name="category"
          :label="category"
        />
      </q-tabs>

      <div class="q-gutter-y-lg">
        <q-tab-panels v-model="tab" class="text-black bg-grey-2">
          <q-tab-panel name="all">
            <MenuCard
              class="q-my-md"
              v-for="allmenu in allmenus"
              :key="allmenu.id"
              :menuName="allmenu.name"
              :menuDetail="allmenu.detail"
              :menuPrice="allmenu.price"
              :menuCategory="allmenu.category"
              :menuSold="allmenu.sold_amount"
              :menuBuy="a"
            />
          </q-tab-panel>
          <q-tab-panel
            v-for="category in categories"
            :key="category"
            :name="category"
          >
            <MenuCard
              class="q-my-md"
              v-for="menu in filteredMenus(category)"
              :key="menu.id"
              :menuName="menu.name"
              :menuDetail="menu.detail"
              :menuPrice="menu.price"
              :menuCategory="menu.category"
              :menuSold="menu.sold_amount"
              :menuBuy="a"
            />
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
  computed: {
    categories() {
      // Get unique categories from allmenus
      return [...new Set(this.allmenus.map((menu) => menu.category))];
    },
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
    filteredMenus(category) {
      // Filter menus by category
      return this.allmenus.filter((menu) => menu.category === category);
    },
  },
  components: { MenuCard },
});
</script>
