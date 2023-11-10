<template>
  <q-dialog persistent>
    <q-card>
      <q-card-section align="center">
        <q-avatar
          size="100px"
          :text-color="propDialog.iconColor"
          :icon="propDialog.icon"
        />
        <q-space />
        <span class="q-ml-sm" v-html="propDialog.msg"></span>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          flat
          label="OK"
          color="primary"
          v-close-popup
          @click="closeDialog(propDialog.btnType)"
        />
      </q-card-actions>
    </q-card>
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
      </div>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: "MenuDialog",
  props: {
    propDialog: {
      icon: { type: String },
      msg: { type: String },
      btnType: { type: String },
      iconColor: { type: String },
    },
  },
  methods: {
    closeDialog(type) {
      if (type == "Signup") {
        this.$router.push("/user");
      }
    },
  },
};
</script>
