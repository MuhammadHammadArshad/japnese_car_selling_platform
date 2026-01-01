<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const breadcrumbs = ref([]);

watchEffect(() => {
  // Route path ko split karo aur 'dashboard' ko hatao
  let paths = route.path.split("/").filter(Boolean);

  // Agar pehla segment 'dashboard' hai to usko hata do
  if (paths[0] === "dashboard") {
    paths.shift();
  }

  let accumulatedPath = "/dashboard"; // Start accumulated path with '/dashboard'

  breadcrumbs.value = paths.map((segment, index) => {
    accumulatedPath += "/" + segment;
    const matched = route.matched.find((r) => r.path === accumulatedPath);
    return {
      label: matched?.meta?.breadcrumb || segment,
      to: accumulatedPath,
    };
  });
});
</script>
<template>
  <nav class="breadcrumb desktop-view">
    <ul style="display: flex; list-style: none; gap: 10px">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <NuxtLink to="/" class="crumbLabels"> 家 </NuxtLink>
        <span class="crumbDivider"> / </span>
        <NuxtLink to="/dashboard/profile" class="crumbLabels">
          ダッシュボード
        </NuxtLink>
        <span class="crumbDivider"> / </span>
        <NuxtLink :to="crumb.to" v-if="index < breadcrumbs.length - 1">{{
          crumb.label
        }}</NuxtLink>
        <span v-else class="crumbTitle">{{ crumb.label }}</span>
        <span v-if="index < breadcrumbs.length - 1"> / </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.breadcrumb ul li {
  display: flex;
  gap: 20px;
}
.breadcrumb ul li a.crumbLabels {
  text-decoration: none;
}
.breadcrumb ul li .crumbLabels {
  color: #0c1529;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.breadcrumb ul li .crumbDivider {
  color: #cac8d4;
}
.breadcrumb ul li .crumbTitle {
  color: #2384c1;
  font-size: 16px;
  font-weight: 500;
}
</style>