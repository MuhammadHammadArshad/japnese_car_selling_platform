<script setup>
definePageMeta({
  layout: "dashboard",
  breadcrumb: "お気に入り",
  //TODO: middleware: 'auth'
});
useHead({
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useRuntimeConfig, useFetch } from "#app";

const baseURL = useRuntimeConfig().public.apiBaseUrl;

const favoriteCars = ref([]); // Store full list
// const fetchFavorites = async () => {
//   try {
//     const res = await fetch(`${baseURL}/favorite/list`, {
//       method: "GET",
//     });

//     const json = await res.json();
//     console.log("Favourite Dashboard per object mily k nai", json);

//     if (json.data && json.data.length) {
//       favoriteCars.value = json.data;
//     }
//   } catch (err) {
//     console.error("Manual fetch error:", err);
//   }
// };

const fetchFavorites = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(`${baseURL}/favorite/list`, {
      method: "GET",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });

    const json = await res.json();
    console.log("Favourite Dashboard per object mily k nai", json);

    if (json.data && json.data.length) {
      favoriteCars.value = json.data;
    }
  } catch (err) {
    console.error("Manual fetch error:", err);
  }
};

onMounted(() => {
  fetchFavorites();
});
</script>
<template>
  <div>
    <div class="favourite-desktop desktop-view">
        <div class="row g-2">
            <div
              class="col-md-6"
              v-for="(car, index) in favoriteCars"
              :key="car.id || index"
            >
            <div class="border rounded-2 p-2">
              <div class="box d-flex gap-3">
                <div class="col-md-4 left">
                   <!-- src="/assets/images/favCar.webp" -->
                  <NuxtImg
                    :src="car.image"
                    alt="car"
                    class="img-fluid"
                    loading="lazy"
                    width="362"
                    height="287"
                  />
                </div>
                <div class="col-md-8 right">
                  <div
                    class="top d-flex align-items-center justify-content-between pe-2"
                  >
                    <!-- <p class="m-0 title">
                      ハスラー 660 ハイブリッド G 届出済未使用車 現行型
                    </p> -->
                    <p class="m-0 title">
                      {{ car.title ?? `${car.make} ${car.model} ${car.year}` }}
                    </p>
                    <NuxtImg
                      src="/assets/images/heart.webp"
                      alt="car"
                      class="img-fluid me-2"
                      loading="lazy"
                      width="18"
                      height="18"
                    />
                  </div>

                  <table class="table table-borderless w-75">
                    <tbody>
                      <tr>
                        <th scope="row">年式</th>
                        <td>{{car?.model}} ({{car?.year}})</td>
                        <th scope="row">走行距離</th>
                        <td>{{car?.milage || "No Milage"}}km</td>
                      </tr>

                      <tr>
                        <th scope="row">車検</th>
                        <td>2026年8月</td>
                        <th scope="row">修復歴</th>
                        <!-- <td>インパネCVT</td> -->
                        <td>{{car?.is_repaired ? "Yes" : "No"}}</td>
                      </tr>
                      <tr>
                        <th scope="row">排気量</th>
                        <td>{{car?.engine_size}} &nbsp;&nbsp; {{car?.engine_type}}</td>
                        <th scope="row">修復歴</th>
                        <td>{{car?.is_repaired ? "Yes" : "No"}}</td>
                      </tr>

                      <tr>
                        <th scope="row">燃料</th>
                        <td>{{car?.fuel || "No Fuel"}}</td>
                        <th scope="row">在庫ID</th>
                        <td>sat:{{car?.sql_id || "No"}}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="showDetails">
                    <button type="button" class="btn-showDetail bg-transparent">
                      詳細を表示
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

.favourite-desktop .box .top .title {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.58px;
  line-height: 18.87px;
}
.favourite-desktop .box .table th {
  background-color: #f6f6f8;
  color: #0f172a;
  padding: 5px 20px 5px 20px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12.58px;
  text-align: center;
}
.favourite-desktop .box .table td {
  color: #334155;
  padding: 5px 20px 5px 20px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12.58px;
}
.favourite-desktop table {
  border-collapse: separate;
  border-spacing: 0px 10px;
}
.favourite-desktop .showDetails {
  background: #2384c1;
  padding: 6px 10px;
  text-align: center;
  width: 95%;
}
.favourite-desktop .showDetails .btn-showDetail {
  color: white;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
</style>