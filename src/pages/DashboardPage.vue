<template>
  <q-page style="background-color: rgba(203, 203, 203, 0.1)">
    <div class="q-pt-md q-pa-md" style="font-size: 20px">Sales</div>
    <div class="flex">
      <div class="col q-ma-xs" style="background-color: white">
        <div class="col q-ma-md">per day</div>
        <div class="col q-ma-md" style="font-weight: 600; font-size: 24px">
          {{ days }} THB
        </div>
      </div>
      <div class="col q-ma-xs" style="background-color: white">
        <div class="col q-ma-md">per month</div>
        <div class="col q-ma-md" style="font-weight: 600; font-size: 24px">
          {{ months }} THB
        </div>
      </div>
    </div>
    <div>
      <div class="col q-ma-xs" style="background-color: white; width: 50%">
        <div class="col q-ma-md">per year</div>
        <div class="col q-ma-md" style="font-weight: 600; font-size: 24px">
          {{ years }} THB
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" />
    </div>
  </q-page>
</template>

<script setup>
import { getDashboardReport, getRanking } from "src/api/order";
import { onMounted, ref } from "vue";
import * as dayjs from "dayjs";

const days = ref(0);
const months = ref(0);
const years = ref(0);

const startDate = ref("2023-01-01"); // Replace with your desired start date
const endDate = ref("2023-31-31");

const columns = ref([
  {
    name: "no",
    align: "center",
    label: "Ranking",
    field: "no",
    sortable: true,
  },
  {
    name: "name",
    align: "center",
    label: "Menu Name",
    field: "name",
    sortable: true,
  },
  {
    name: "sold_amount",
    align: "center",
    label: "sold amount",
    field: "sold_amount",
    sortable: true,
  },
]);

const rows = ref([]);

onMounted(async () => {
  initialDashboard();
});

const initialDashboard = async () => {
  // const report = await getDashboardReport(startDate.value, endDate.value);
  // const ranking = await getRanking();

  const [report, rankings] = await Promise.all([
    getDashboardReport(startDate.value, endDate.value),
    getRanking(),
  ]);

  rows.value = rankings.data.map((index) => {
    // Add the 'no' property to each item in ranking data
    return {
      no: index + 1, // Assign the ranking number starting from 1
    };
  });

  days.value = report.data
    .filter((val) => {
      return dayjs(val.date).isSame(dayjs(), "days");
    })
    .reduce((acc, val) => {
      return acc + val.total_amount;
    }, 0)
    .toLocaleString();

  months.value = report.data
    .filter((val) => {
      return dayjs(val.date).isSame(dayjs(), "months");
    })
    .reduce((acc, val) => {
      return acc + val.total_amount;
    }, 0)
    .toLocaleString();

  years.value = report.data
    .filter((val) => {
      return dayjs(val.date).isSame(dayjs(), "years");
    })
    .reduce((acc, val) => {
      return acc + val.total_amount;
    }, 0)
    .toLocaleString();
};
</script>
