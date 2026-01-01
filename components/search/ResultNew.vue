<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, watch, onMounted } from "vue";
import { useRuntimeConfig, useFetch } from "#app";
import { useSkelton } from "~/composables/useLoader";
const { isSkelton } = useSkelton();
const router = useRouter();
const route = useRoute();
const baseURL = useRuntimeConfig().public.apiBaseUrl;

const props = defineProps({
  emitFunction: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    required: true,
  },
  totalItems: Number,
  currentPage: Number,
  itemsPerPage: Number,
  totalPages: Number,
});

const getGallery = (car) => {
  try {
    return JSON.parse(car.gallery || "[]");
  } catch (e) {
    return [];
  }
};

const emit = defineEmits(["page-change", "items-per-page-change"]);

const currentPage = computed(() => {
  const page = parseInt(route.query.page || "1");
  return isNaN(page) || page < 1 ? 1 : page;
});

const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    // Emit event to parent to fetch data (if needed)
    emit("page-change", page);

    // Update URL query param
    router.push({
      query: { ...route.query, page: page.toString() },
    });
  }
};
// Handle page click

const handleItemsPerPage = (event) => {
  const newValue = parseInt(event.target.value);

  emit("items-per-page-change", newValue);

  router.push({
    query: {
      ...route.query,
      items_per_page: newValue.toString(),
      page: "1", // reset to page 1
    },
  });
};

const itemsPerPageQuery = computed(() => {
  const ipp = parseInt(
    route.query.items_per_page || props.itemsPerPage || "10"
  );
  return [10, 20, 30].includes(ipp) ? ipp : 10;
});

const visiblePages = computed(() => {
  const pages = [];
  const maxVisible = 10;
  let startPage, endPage;
  const cp = currentPage.value;

  if (props.totalPages <= maxVisible) {
    startPage = 1;
    endPage = props.totalPages;
  } else {
    const half = Math.floor(maxVisible / 2);
    if (cp <= half) {
      startPage = 1;
      endPage = maxVisible;
    } else if (cp + half >= props.totalPages) {
      startPage = props.totalPages - maxVisible + 1;
      endPage = props.totalPages;
    } else {
      startPage = cp - half;
      endPage = cp + half;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
});

const goToDetailsPage = (slug) => {
  if (!slug) return;
  router.push(`/search-details/${slug}`);
};

//======================Start Add to favourtie API

const extractedToken = ref("");
const cars = ref([]);
const token = ref("");
const favoritedIds = ref([]);

onMounted(() => {
  const localToken = localStorage.getItem("token");
  token.value = localToken?.split("|")[1] || "";
});

const isFavorited = (id) => {
  return favoritedIds.value.includes(id);
};

// const addToFavorites = async (itemId) => {
//   try {
//     if (!token.value) {
//       // alert("Please login first");
//       router.push("/login");
//       return;
//     }

//     console.log("Sending item_id:", itemId);
//     console.log("Token being sent:", extractedToken);
//     console.log("Payload:", { item_id: itemId });

//     const favResponse = await fetch(`${baseURL}/favorite/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token.value}`,
//       },
//       body: JSON.stringify({
//         item_id: itemId,
//       }),
//     });

//     const contentType = favResponse.headers.get("content-type");

//     if (contentType && contentType.includes("application/json")) {
//       const data = await favResponse.json();
//       if (data.status) {
//         if (favoritedIds.value.includes(itemId)) {
//           favoritedIds.value = favoritedIds.value.filter((id) => id !== itemId);
//         } else {
//           favoritedIds.value.push(itemId);
//         }
//         console.log("Favorited:", data.message);
//       } else {
//         console.error("Error from API:", data.message);
//       }
//     } else {
//       const text = await favResponse.text();
//       console.error("Server returned non-JSON:", text);
//     }
//   } catch (error) {
//     console.error(" Fetch error:", error);
//   }
// };

const toggleFavorite = async (itemId) => {
  try {
    if (!token.value) {
      router.push("/login");
      return;
    }

    const isAlreadyFavorited = favoritedIds.value.includes(itemId);

    const url = isAlreadyFavorited
      ? `${baseURL}/favorite/remove/${itemId}`
      : `${baseURL}/favorite/add`;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      ...(isAlreadyFavorited ? {} : {
        body: JSON.stringify({ item_id: itemId }),
      }),
    };

    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();

      if (data.status) {
        if (isAlreadyFavorited) {
          // Remove from favorites
          favoritedIds.value = favoritedIds.value.filter((id) => id !== itemId);
          console.log("Removed from favorites:", data.message);
        } else {
          // Add to favorites
          favoritedIds.value.push(itemId);
          console.log("Added to favorites:", data.message);
        }
      } else {
        console.error("API Error:", data.message);
      }
    } else {
      const text = await response.text();
      console.error("Non-JSON response:", text);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

//====================== End Add to favourtie API
</script>
<template>
  <div>
    <!-- listing cars -->
    <div v-if="isSkelton">
      <CommonPaginationSkeleton />
      <CommonSkeleton />
      <CommonSkeleton />
      <CommonSkeleton />
      <CommonSkeleton />
    </div>
    <div v-else>
      <!-- pagination -->
      <div class="pagination d-flex gap-2 justify-content-center mt-4">
        <div class="paginate d-flex align-items-center w-100">
          <div class="col-md-3">
            <div class="stand">
              <p class="m-0">{{ totalItems }}<span>台</span></p>
            </div>
          </div>
          <div class="col-md-9">
            <div
              class="former d-flex justify-content-between align-items-center"
            >
              <div class="pagination d-flex gap-4 align-items-center">
                <p
                  v-for="page in visiblePages"
                  :key="page"
                  class="m-0"
                  :class="{ active: page === currentPage }"
                  style="cursor: pointer"
                  @click="goToPage(page)"
                >
                  {{ page }}
                </p>

                <!-- ======================Pagination next previous ======================-->
                <div class="previous d-flex align-items-center">
                  <NuxtImg
                    src="/assets/images/icons/left-arrow.webp"
                    alt="arrow"
                    class="img-fluid"
                    loading="lazy"
                  />
                  <p
                    class="m-0 ps-2"
                    :class="{ 'text-muted': currentPage === 1 }"
                    style="cursor: pointer"
                    @click="goToPage(currentPage - 1)"
                  >
                    前の
                  </p>
                </div>
                <div class="next d-flex align-items-center">
                  <p
                    class="m-0 pe-2"
                    :class="{ 'text-muted': currentPage === totalPages }"
                    style="cursor: pointer"
                    @click="goToPage(currentPage + 1)"
                  >
                    次のページ
                  </p>
                  <NuxtImg
                    src="/assets/images/icons/right-arrow.webp"
                    alt="arrow"
                    class="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
              <!-- ======================Pagination next previous ======================-->

              <div class="noOfItems">
                <select
                  class="form-select"
                  :value="itemsPerPageQuery"
                  @change="handleItemsPerPage"
                >
                  <option value="10">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;10
                  </option>
                  <option value="20">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;20
                  </option>
                  <option value="30">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;30
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Listing -->
      <div v-if="emitFunction.length === 0">No cars found.</div>
      <div class="searchListCar" v-else>
        <div
          v-for="(car, index) in emitFunction"
          :key="index"
          class="carListSection d-flex mt-4"
          style="cursor: pointer"
        >
          <div class="col-md-3" style="height:265px;">
            <div class="top">
              <NuxtImg
                :src="getGallery(car)[0]"
                alt="car"
                class="img-fluid"
                loading="lazy"
              />
            </div>
            <div class="bottom d-flex gap-1 py-2">
              <NuxtImg
                v-for="(img, idx) in getGallery(car).slice(1, 4)"
                :key="idx"
                :src="img"
                alt="car"
                class="img-fluid"
                loading="lazy"
                width="73"
                height="70"
              />
            </div>
          </div>
          <div class="col-md-9">
            <div
              class="topRight d-flex justify-content-between align-items-center"
            >
              <div class="center d-flex gap-2 mx-2">
                <div class="left d-flex align-items-center gap-2">
                  <NuxtImg
                    src="/assets/images/icons/coin.webp"
                    alt="coin"
                    class="img-fluid"
                    loading="lazy"
                    width="16"
                    height="16"
                  />
                  <!-- <p class="m-0">{{ car.model || "No name" }}</p> -->
                  <p class="m-0">100 ロイヤルティポイント</p>
                </div>
                <div class="center">
                  <!-- <p class="m-0">{{ car.make || "No data" }}</p> -->
                  <p class="m-0">新車</p>
                </div>
                <div class="right">
                  <!-- <p class="m-0">{{ car.fuel || "No data" }}</p> -->
                  <p class="m-0">プレミアムカー</p>
                </div>
              </div>
              <div class="right">
                <!-- <NuxtImg
                    src="/assets/images/icons/heart-icon.webp"
                    alt="heart"
                    class="img-fluid"
                    loading="lazy"
                    width="24"
                    height="24"
                    @click="addToFavorites(car.sql_id)"
                    style="cursor: pointer"
                  /> -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  @click="toggleFavorite(car.sql_id)"
                  :class="['heart-icon', { active: isFavorited(car.sql_id) }]"
                  style="cursor: pointer; transition: fill 0.3s ease"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
               2 5.42 4.42 3 7.5 3
               c1.74 0 3.41 0.81 4.5 2.09
               C13.09 3.81 14.76 3 16.5 3
               C19.58 3 22 5.42 22 8.5
               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>
            </div>

            <div class="heading">
              <p class="mx-2 mb-0 mt-2" @click="goToDetailsPage(car.slug)">
                {{ car.suggest_full[0] || "No name" }}
              </p>
            </div>

            <div class="modelYear d-flex mx-2 justify-content-between">
              <div class="left w-50">
                <table class="table table-borderless mb-0">
                  <tbody>
                    <tr>
                      <!-- <td class="model">{{ car.doors || "No name" }}</td> -->
                      <td class="model">年式</td>
                      <td class="year">{{ car.year || "No name" }}</td>
                      <!-- <td class="model">{{ car.engine_type || "No name" }}</td> -->
                      <td class="model">走行距離</td>
                      <!-- <td class="year">{{ car.milage && car.milage_unit|| " - " }}</td> -->
                      <!-- <td class="year">{{ car.milage ? `${car.milage} km` : ' - ' }}</td> -->
                      <td class="year">
                        {{
                          car.milage !== null
                            ? `${car.milage} ${car.milage_unit}`
                            : " - "
                        }}
                      </td>
                    </tr>
                    <tr>
                      <!-- <td class="model">{{ car.grade || "No name" }}</td> -->
                      <td class="model">車検</td>
                      <td class="year">{{ car.inspection || " - " }}</td>
                      <!-- <td class="model">{{ car.year || "No name" }}</td> -->
                      <td class="model">ミッション</td>
                      <td class="year">{{ car.transmission || " - " }}</td>
                    </tr>
                    <tr>
                      <!-- <td class="model">{{ car.body_type || "No name" }}</td> -->
                      <td class="model">排気量</td>
                      <td class="year">
                        {{
                          car.engine_size && car.engine_type
                            ? `${car.engine_size} ${car.engine_type}`
                            : "No name"
                        }}
                      </td>
                      <!-- <td class="model">{{ car.engine_type || "No name" }}</td> -->
                      <td class="model">修復歴</td>
                      <!-- <td class="year">{{ car.is_repaired || "false" }}</td> -->
                      <td class="year">{{ car.is_repaired ? "Yes" : "No" }}</td>
                    </tr>
                    <tr>
                      <!-- <td class="model">{{ car.grade || "No name" }}</td> -->
                      <td class="model">燃料</td>
                      <td class="year">{{ car.fuel || "No name" }}</td>
                      <!-- <td class="model">{{ car.year || "No name" }}</td> -->
                      <td class="model">在庫ID</td>
                      <td class="year">{{ car.sql_id || "No name" }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="right w-50 ps-4">
                <div class="top d-flex gap-4 mt-3">
                  <div class="totalPayment p-2">
                    <!-- <p class="m-0 title pb-2"></p> -->
                    <p class="m-0 amount">
                      {{ car.price || "No name" }} <span class="yen">万円</span>
                    </p>
                  </div>
                  <div class="vehicalePrice p-2">
                    <!-- <p class="m-0 title pb-2">125</p> -->
                    <p class="m-0 amount">
                      {{ car.price || "No Price" }}<span class="yen">万円</span>
                    </p>
                  </div>
                </div>
                <div class="bottom d-flex gap-3 mt-3 pt-4">
                  <button class="btn btn-inquiry">問い合わせ</button>
                  <button class="btn btn-contact ms-1">今すぐ購入</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination d-flex gap-2 justify-content-center mt-4">
          <div class="paginate d-flex align-items-center w-100">
            <div class="col-md-3">
              <div class="stand">
                <p class="m-0 d-none">{{ totalItems }}<span>台</span></p>
              </div>
            </div>
            <div class="col-md-9">
              <div
                class="former d-flex justify-content-between align-items-center"
              >
                <div class="pagination d-flex gap-4 align-items-center">
                  <p
                    v-for="page in visiblePages"
                    :key="page"
                    class="m-0"
                    :class="{ active: page === currentPage }"
                    style="cursor: pointer"
                    @click="goToPage(page)"
                  >
                    {{ page }}
                  </p>

                  <!-- ======================Pagination next previous ======================-->
                  <div class="previous d-flex align-items-center">
                    <NuxtImg
                      src="/assets/images/icons/left-arrow.webp"
                      alt="arrow"
                      class="img-fluid"
                      loading="lazy"
                    />
                    <p
                      class="m-0 ps-2"
                      :class="{ 'text-muted': currentPage === 1 }"
                      style="cursor: pointer"
                      @click="goToPage(currentPage - 1)"
                    >
                      前の
                    </p>
                  </div>
                  <div class="next d-flex align-items-center">
                    <p
                      class="m-0 pe-2"
                      :class="{ 'text-muted': currentPage === totalPages }"
                      style="cursor: pointer"
                      @click="goToPage(currentPage + 1)"
                    >
                      次のページ
                    </p>
                    <NuxtImg
                      src="/assets/images/icons/right-arrow.webp"
                      alt="arrow"
                      class="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </div>
                <!-- ======================Pagination next previous ======================-->

                <div class="noOfItems">
                  <select
                    class="form-select"
                    :value="itemsPerPage"
                    @change="handleItemsPerPage"
                  >
                    <option value="10">
                      1ページあたりの項目数:&nbsp;&nbsp;&nbsp;10
                    </option>
                    <option value="20">
                      1ページあたりの項目数:&nbsp;&nbsp;&nbsp;20
                    </option>
                    <option value="30">
                      1ページあたりの項目数:&nbsp;&nbsp;&nbsp;30
                    </option>
                  </select>
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
.searchListCar .carListSection {
  border: 1px solid #cbd5e1;
  padding: 10px;
}
.searchListCar .carListSection .topRight .left .image_360 {
  border: 1px solid #64748b;
  font-size: 10px;
  color: #64748b;
  font-weight: 600;
  line-height: 16px;
  padding: 3px;
  font-family: "Inter";
}
.searchListCar .carListSection .topRight .center .left {
  background-color: #f1892b;
  color: white;
  border-radius: 50px;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 16px;
}
.searchListCar .carListSection .topRight .center .center {
  background-color: #ff4b44;
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  padding: 3px 7px;
  border-radius: 12px;
}
.searchListCar .carListSection .topRight .center .right {
  background-color: #a576f1;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50px;
  padding: 3px 10px;
  line-height: 16px;
}
.searchListCar .carListSection .heading {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
.searchListCar .carListSection .modelYear .left .modelText .model {
  background-color: #f6f6f8;
  color: black;
  padding: 4px 12px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.searchListCar .carListSection .modelYear .left .modelText .year {
  color: #334155;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.searchListCar .carListSection .modelYear .left .table .model {
  background-color: #f6f6f8;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.searchListCar .carListSection .modelYear .left .table .year {
  font-weight: 500;
  color: #334155;
  font-size: 12px;
  line-height: 18px;
  font-family: "Inter";
}
.searchListCar .carListSection .modelYear .left .table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
.searchListCar .carListSection .modelYear .left .table > :not(caption) > * > * {
  padding: 3px 10px 0px 13px;
}
.searchListCar .carListSection .modelYear .left .seeDetails {
  background-color: #ecf5ff;
  color: #0f172a;
  height: 33px;
  border-radius: 5px;
  font-size: 11.97px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 13px;
}
.searchListCar .carListSection .modelYear .left .seeDetails .left {
  background-color: #2384c1;
  color: white;
  border-radius: 5px 0px 0px 5px;
}
.searchListCar .carListSection .modelYear .left .seeDetails .right p {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  font-size: 9px;
  line-height: 12px;
}
.searchListCar .carListSection .modelYear .left .seeDetails .center .amount {
  color: #0f172a;
  font-size: 17px;
  font-weight: 700;
}
.searchListCar .carListSection .modelYear .right .totalPayment {
  background-color: #ecf5ff;
}
.searchListCar .carListSection .modelYear .right .totalPayment .title {
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 20px;
}
.searchListCar .carListSection .modelYear .right .totalPayment .amount {
  font-size: 28px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #2384c1;
}
.searchListCar .carListSection .modelYear .right .totalPayment .yen {
  font-size: 16px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #0f172a;
}
.searchListCar .carListSection .modelYear .right .totalPayment .plan {
  color: #0f172a;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 500;
  line-height: 20px;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice {
  background-color: #f6f6f8;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice .title {
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 20px;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice .amount {
  font-size: 28px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #334155;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice .yen {
  font-size: 16px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #0f172a;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice .plan {
  color: #0f172a;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 500;
  line-height: 20px;
}
.searchListCar .carListSection .modelYear .right .bottom .btn-inquiry {
  border: 1px solid #2384c1;
  color: #2384c1;
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  width: 137px;
  height: 34px;
}
.searchListCar .carListSection .modelYear .right .bottom .btn-contact {
  background-color: #2384c1;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  width: 137px;
  height: 34px;
}

/* pagination css */
.paginate .stand p {
  color: #141817;
  font-family: "Sofia-Pro";
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}
.paginate .stand span {
  color: #141817;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18px;
}
.paginate .former .pagination p.active {
  background-color: #ecf5ff;
  color: #2a9fe8;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 14.14px;
  width: 18px;
  height: 18px;
  padding: 3px 6px;
}
.paginate .former .pagination p {
  color: #5d6370;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 14.14px;
}
.paginate .former .previous p {
  color: #5d6370;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}
.paginate .former .next p {
  color: #2a9fe8;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}
.paginate .former .noOfItems .form-select {
  color: #5d6370;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 9.8px;
  line-height: 14.71px;
  --bs-form-select-bg-img: url(/assets/images/home/caret-down.webp);
  background-repeat: no-repeat;
  background-size: 9px;
}
.heart-icon {
  fill: #ccc;
  cursor: pointer;
  transition: fill 0.3s ease;
}

.heart-icon.active {
  fill: #d92d20;
}
</style>
