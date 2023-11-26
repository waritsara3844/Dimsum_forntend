<template>
  <div class="q-pa-md">
    <q-layout
      view="lHh lpr lFf"
      container
      class="shadow-2 rounded-borders fullscreen"
    >
      <q-header
        bordered
        class="bg-white q-pa-md q-pt-lg"
        style="color: #ff5c00"
      >
        <q-toolbar>
          <q-toolbar-title
            style="font-weight: bold; color: #ff5c00; font-size: 24px"
            >Dimsum</q-toolbar-title
          >
          <q-btn
            flat
            dense
            round
            icon="shopping_cart"
            @click="$router.push({ name: 'cart' })"
          />
          <q-btn
            class="q-ml-md"
            flat
            round
            dense
            icon="logout"
            @click="logoutUser"
          />
        </q-toolbar>
      </q-header>

      <q-footer
        bordered
        class="bg-white text-primary q-pt-sm"
        style="height: 85px"
      >
        <q-tabs
          no-caps
          active-color="deep-orange-6"
          indicator-color="transparent"
          class="text-grey-6"
          v-model="tab"
        >
          <q-tab
            name="detail"
            icon="store"
            @click="$router.push({ name: 'menu' })"
          >
            <div style="font-size: 12px; font-weight: 500">Detail</div>
          </q-tab>
          <q-tab
            name="manage"
            icon="edit_calendar"
            @click="$router.push({ name: 'menuManagement' })"
          >
            <div style="font-size: 12px; font-weight: 500">Manage</div>
          </q-tab>
          <q-tab
            name="cart"
            icon="shopping_cart"
            @click="$router.push({ name: 'cart' })"
          >
            <div style="font-size: 12px; font-weight: 500">Cart</div>
          </q-tab>
          <q-tab
            name="dashboard"
            icon="grid_view"
            @click="$router.push({ name: 'dashboard' })"
          >
            <div style="font-size: 12px; font-weight: 500">Dashboard</div>
          </q-tab>
        </q-tabs>
      </q-footer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../Stores/user";
import { createRouter, useRouter } from "vue-router";

const userStore = useUserStore();
const $router = useRouter();
const user = {};

const tab = ref(`images`);

const logoutUser = () => {
  try {
    userStore.user = {};
  } catch (error) {
    console.log("🚀 ~ logoutUser ~ error:", error);
  }
  $router.push({ name: "login" });
};
</script>
