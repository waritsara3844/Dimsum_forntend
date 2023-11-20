<template>
  <q-page style="background-color: rgba(203, 203, 203, 0.1)">
    <!-- <q-card class="q-mb-md">
        <q-card-section>
          <q-form>
            <q-input v-model="name" label="Name" />
            <q-input v-model="price" label="Price" type="number" />
            <q-input v-model="quantity" label="Quantity" type="number" />
            <q-btn label="Add" type="button" color="primary" @click="addItem" />
          </q-form>
        </q-card-section>
      </q-card> -->

    <q-card>
      <q-card-section>
        <div v-for="(item, index) in menus" :key="index">
          <div class="row" style="font-weight: 600">
            <div class="col flex d-flex justify-start items-center">
              <div>
                <q-btn
                  flat
                  dense
                  round
                  icon="add_circle"
                  style="color: #ff5c00"
                  @click="increaseQuantity(index)"
                />
              </div>
              <div>{{ item.quantity }}</div>
              <div>
                <q-btn
                  flat
                  dense
                  round
                  icon="remove_circle"
                  style="color: #ff5c00"
                  @click="decreaseQuantity(index)"
                />
              </div>
            </div>
            <div class="col flex d-flex flex-center q-ma-md">
              {{ item.name }}
            </div>
            <div class="col flex d-flex flex-center q-ma-md">
              {{ item.price }} THB
            </div>
          </div>
          <q-separator />
        </div>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <div class="row" style="font-weight: 600; text-align: center">
          <div class="col">Total</div>
          <div class="col">{{ totalAmount }} THB</div>
        </div>
      </q-card-section>
    </q-card>

    <div class="flex d-flex flex-center q-ma-md">
      <q-btn
        class="flex d-flex flex-center q-ma-md"
        unelevated
        rounded
        @click="createPayment"
        label="Payment"
        style="
          height: 55px;
          width: 348px;
          background-color: rgba(255, 92, 0, 0.1);
          color: #ff5c00;
          font-weight: 600;
        "
      />
    </div>
  </q-page>
</template>

<script setup>
import { getMenuInCartById, updateMenuInCart } from "src/api/cart";
import { createOrder } from "src/api/order";
import { onMounted, ref } from "vue";

const menus = ref([]);
const totalAmount = ref(0);
const user = ref({ cart_id: 8, id: 13 });

onMounted(() => {
  initialMenu();
});

const initialMenu = async () => {
  const resp = await getMenuInCartById(user.value.cart_id);
  menus.value = resp.data;
  totalAmount.value = resp.amount.toLocaleString();
};

const increaseQuantity = async (index) => {
  const menuId = menus.value[index].id;
  let quantity = menus.value[index].quantity;
  await updateMenuInCart(user.value.cart_id, menuId, (quantity += 1));
  await initialMenu();
};

const decreaseQuantity = async (index) => {
  const menuId = menus.value[index].id;
  let quantity = menus.value[index].quantity;
  await updateMenuInCart(user.value.cart_id, menuId, (quantity -= 1));
  await initialMenu();
};

const createPayment = async () => {
  console.log("payment");
  const resp = await createOrder(user.value.id, user.value.cart_id);
  menus.value = resp.data;
  await initialMenu();
};
</script>
