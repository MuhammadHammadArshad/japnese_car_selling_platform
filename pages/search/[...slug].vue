<script setup>
import { ref, onMounted } from "vue";
import { useLoader,useSkelton } from "~/composables/useLoader";
import { useRoute } from "vue-router";
import { debounce } from "lodash-es";
import { useRuntimeConfig, useFetch } from "#app";

const { showLoader, hideLoader  } = useLoader();
const { showSkelton, hideSkelton } = useSkelton();
const route = useRoute();
const config = useRuntimeConfig();
const dataResult = ref([]);
const searchResult = ref([]);
const totalCars = ref(0);
var carData = {};

// Pagination variables
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalPages = ref(0);
const shownTotalCars = ref(0); //pagination totalItems main ye show ho ga

// Initialize current page from URL if provided (for direct URL access/new window)
const initialPageFromQuery = Number(route.query?.page);
if (Number.isFinite(initialPageFromQuery) && initialPageFromQuery > 0) {
  currentPage.value = initialPageFromQuery;
}

const baseURL = useRuntimeConfig().public.apiBaseUrl;

async function searchCars(queryText) {
  showLoader();
  showSkelton()
  try {
    const fullPayload = {
      query: queryText.toLowerCase(),
      page: currentPage.value,
      per_page: route?.query?.items_per_page ?? itemsPerPage.value,
    };
    const res = await $fetch(`${baseURL}/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fullPayload),
    });


    if (res?.data?.cars) {
      totalCars.value = res.data.total;
      totalPages.value = Math.ceil(
        res.data.total /
          Number(route?.query?.items_per_page ?? itemsPerPage.value)
      );
      shownTotalCars.value = res.data.total;
      return res.data.cars;
    } else {
      console.error("Search API error:", res?.message || "No cars found");
      return [];
    }
  } catch (err) {
    console.error("Search API failed ho gaye hai:", err);
    return [];
  } finally {
    hideLoader();
    hideSkelton()
  }
}
//end function

function updateResult(ResponseData = []) {
  if (ResponseData) {
    dataResult.value = ResponseData;
  } else {
    // console.log("No data found");
  }
}

async function fetchCars(payload = {}, updateList = true) {
  // console.log("Calling API with payload:", payload);
  showLoader();
  showSkelton()
  try {
    await useFetch(`${config.public.baseUrl}/sanctum/csrf-cookie`, {
      credentials: "include",
    });
    const xsrf = useCookie("XSRF-TOKEN");
    const csrfToken = xsrf.value;
    // Add pagination parameters to payload
    const fullPayload = {
      ...payload,
      page: currentPage.value,
      per_page: route?.query?.items_per_page ?? itemsPerPage.value,
    };

    // console.log("Calling API with payload:", fullPayload);

    const res = await $fetch(`${baseURL}/filter`, {
      method: "POST",
      body: fullPayload,
      baseURL: config.public.baseUrl,
      credentials: "include",
      headers: { "X-XSRF-TOKEN": csrfToken },
    });

    // console.log("API Response:", res);

    if (res?.status) {
      
      totalCars.value = res.data.total;
      
      if (updateList === true){
        totalPages.value = Math.ceil(
          res.data.total /
            Number(route?.query?.items_per_page ?? itemsPerPage.value)
        );
      }
      hideLoader();
      hideSkelton()
      return res.data.cars;
    } else {
      console.error("API returned error:", res.message);
    }
  } catch (err) {
    console.error("Fetch failed:", err);
  } finally {
    hideLoader();
    hideSkelton()
  }
}

// is code ko use krney per filter ki api once chalay gi 2 time nai chalay ge page navigation per
const skippedInitialNonListFetch = ref(false);
async function handleCarData(data) {
  // console.log("handleCarData", data);
  if (typeof window !== "undefined" && window.localStorage && data) {
    localStorage.setItem("carsData", JSON.stringify(data));
  }

  carData = JSON.parse(JSON.stringify(data));
}
async function eventEmit(payload) {
  // console.log("Event emitted with payload:", payload);

  // Only reset to first page when the list is explicitly updated by user action
  if (payload?.updateList) {
    currentPage.value = 1;
  }
  const data = await fetchCars(
    JSON.parse(JSON.stringify(payload?.payload)),
    payload?.updateList
  );
  if (payload.updateList) {
    // Only update displayed total when handleSearchClick (function) button is used
    shownTotalCars.value = totalCars.value;
    updateResult(data);
    
  }
}


// Handle page change from child component
async function handlePageChange(page) {
  currentPage.value = page;
  const slug = route.params.slug;
  const payload = extractYearParams(slug);
  let data;
  // console.log("handle page change", route?.query);
 
}

// Handle items per page change
async function handleItemsPerPageChange(newValue) {
  return;
  router.push({
    query: { ...route.query, page: "1", items_per_page: newValue },
  });
 
  // console.log("handleItemsPerPageChange executed");
  return;
  const slug = route.params.slug;
  const payload = extractYearParams(slug);
 
  let data;
  if (route?.query?.q) {
    data = await searchCars(route.query.q);
  } else {
    data = await fetchCars(payload);
  }
  updateResult(data);
}

// ============= start hota hai ye code api inital load kiya real time data ===========
function extractYearParams(slug, query) {
  let payload = {};
  // console.log("car data in slug", carData);
  // ==================== Make Params ====================
  let makesParam = "";
  if (Array.isArray(slug)) {
    makesParam = slug.find((p) => p.startsWith("mk-"));
  } else if (typeof slug === "string" && slug.startsWith("mk-")) {
    makesParam = slug;
  }

  if (makesParam) {
    const makeParts = makesParam.replace("mk-", "").split(",");
    makeParts.forEach((make) => {
      // Format the make (capitalize the first letter if necessary)
      const formattedMake = make.charAt(0).toUpperCase() + make.slice(1);

      // Ensure make_model_map is initialized before accessing
      if (!payload.make_model_map) {
        payload.make_model_map = {}; // Initialize make_model_map if it's undefined
      }
      // Initialize the make model map with an empty object for each make
      if (!payload.make_model_map[formattedMake]) {
        payload.make_model_map[formattedMake] = {};
      }
    });
  }

  // ==================== Model Params ====================
  let modelsParam = "";
  if (Array.isArray(slug)) {
    modelsParam = slug.find((p) => p.startsWith("md-"));
  } else if (typeof slug === "string" && slug.startsWith("md-")) {
    modelsParam = slug;
  }

  if (modelsParam) {
    const modelParts = modelsParam.replace("md-", "").split(",");

    // Create a mapping between makes and models
    // Each make should only have its corresponding models
    const makeModelMapping = {};

    // For now, we'll assume the first model goes to the first make, second model to second make, etc.
    // You can modify this logic based on your specific requirements
    const makes = Object.keys(payload.make_model_map);
    makes.forEach((m, i) => {
      if (!i) console.log("carData?.[m]", carData?.[m]);
      // console.log("modelParts", modelParts);
      modelParts.forEach((modelSlug, index) => {
        modelSlug = modelSlug.replace(/-/g, " ").trim().toUpperCase();
        const make = makes[index % makes.length]; // Cycle through makes if more models than makes
        if (!makeModelMapping[make]) {
          makeModelMapping[make] = [];
        }
        // makeModelMapping[make].push(modelSlug.toUpperCase());
        if (carData?.[m]?.models?.[modelSlug]) {
          // console.log("modelSlug", modelSlug);
          makeModelMapping[m].push(modelSlug.toUpperCase());
        } else {
          // console.log("else modelSlug", modelSlug);
        }
      });
    });

    // Apply the mapping to the payload
    for (const make in payload.make_model_map) {
      if (makeModelMapping[make]) {
        makeModelMapping[make].forEach((modelSlug) => {
          if (!payload.make_model_map[make][modelSlug]) {
            payload.make_model_map[make][modelSlug] = [];
          }
        });
      }
    }
  }

  // ==================== Grade Params ====================

  let gradesParam = "";

  if (Array.isArray(slug)) {
    gradesParam = slug.find((p) => p.startsWith("gr-"));
  } else if (typeof slug === "string" && slug.startsWith("gr-")) {
    gradesParam = slug;
  }
  // console.log("gradesParam");
  if (gradesParam) {
    const gradeParts = gradesParam
      .replace("gr-", "")
      .split(",")
      .map((g) => g.replace(/-/g, " ").trim())
      .map((g) =>
        g
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    const makeKeys = Object.keys(payload.make_model_map);
    // console.log("gradeParts", gradeParts, makeKeys);

    for (let i = 0; i < makeKeys.length; i++) {
      const make = makeKeys[i];
      const modelKeys = Object.keys(payload.make_model_map[make]);

      for (let j = 0; j < modelKeys.length; j++) {
        const model = modelKeys[j];
        const modelGrades = carData?.[make]?.models?.[model]?.grades;

        // console.log("modelGrades", modelGrades)
        if (!modelGrades) {
          // console.log(`No data for ${make} ${model}`);
          continue;
        }

        for (let gi = 0; gi < gradeParts.length; gi++) {
          const grade = gradeParts[gi];
          if (modelGrades[grade]) {
            payload.make_model_map[make][model].push(grade);
            // console.log("Grade found", modelGrades[grade]);
          } else {
            // console.log("Grade not found", grade, "in", make, model);
          }
        }
      }
    }

  }

  //End
  let yrParam = "";

  if (Array.isArray(slug)) {
    yrParam = slug.find((p) => p.startsWith("yr-"));
  } else if (typeof slug === "string" && slug.startsWith("yr-")) {
    yrParam = slug;
  }

  if (yrParam) {
    const parts = yrParam.replace("yr-", "").split("-");
    if (parts.length === 1) {
      payload.min_year = Number(parts[0]);
    } else if (parts.length === 2) {
      payload.min_year = Number(parts[0]);
      payload.max_year = Number(parts[1]);
    }
  }

  let mlParam = "";

  if (Array.isArray(slug)) {
    mlParam = slug.find((p) => p.startsWith("ml-"));
  } else if (typeof slug === "string" && slug.startsWith("ml-")) {
    mlParam = slug;
  }

  if (mlParam) {
    const parts = mlParam.replace("ml-", "").split("-");
    if (parts.length === 1) {
      payload.min_milage = Number(parts[0]);
    } else if (parts.length === 2) {
      payload.min_milage = Number(parts[0]);
      payload.max_milage = Number(parts[1]);
    }
  }

  let prParam = "";

  if (Array.isArray(slug)) {
    prParam = slug.find((p) => p.startsWith("pr-"));
  } else if (typeof slug === "string" && slug.startsWith("pr-")) {
    prParam = slug;
  }

  if (prParam) {
    const parts = prParam.replace("pr-", "").split("-");
    if (parts.length === 1) {
      payload.min_price = Number(parts[0]);
    } else if (parts.length === 2) {
      payload.min_price = Number(parts[0]);
      payload.max_price = Number(parts[1]);
    }
  }

  let seatParam = "";

  if (Array.isArray(slug)) {
    seatParam = slug.find((p) => p.startsWith("seat-"));
  } else if (typeof slug === "string" && slug.startsWith("seat-")) {
    seatParam = slug;
  }

  if (seatParam) {
    const parts = seatParam.replace("seat-", "").split("-");
    if (parts.length === 1) {
      payload.min_seats = Number(parts[0]);
    } else if (parts.length === 2) {
      payload.min_seats = Number(parts[0]);
      payload.max_seats = Number(parts[1]);
    }
  }

  let engineParam = "";

  if (Array.isArray(slug)) {
    engineParam = slug.find((p) => p.startsWith("enginesize-"));
  } else if (typeof slug === "string" && slug.startsWith("enginesize-")) {
    engineParam = slug;
  }

  if (engineParam) {
    const parts = engineParam.replace("enginesize-", "").split("-");
    if (parts.length === 1) {
      payload.min_engine_size = Number(parts[0]);
    } else if (parts.length === 2) {
      payload.min_engine_size = Number(parts[0]);
      payload.max_engine_size = Number(parts[1]);
    }
  }

  // ===== AREA =====
  let areaParam = "";
  if (Array.isArray(slug)) {
    areaParam = slug.find((p) => p.startsWith("area-"));
  } else if (typeof slug === "string" && slug.startsWith("area-")) {
    areaParam = slug;
  }

  if (areaParam) {
    const areas = areaParam.replace("area-", "").split(",");
    payload.area = areas;
  }

  // ===== PREFECTURE =====
  let prefParam = "";
  if (Array.isArray(slug)) {
    prefParam = slug.find((p) => p.startsWith("pref-"));
  } else if (typeof slug === "string" && slug.startsWith("pref-")) {
    prefParam = slug;
  }

  if (prefParam) {
    const prefs = prefParam.replace("pref-", "").split(",");
    payload.prefecture = prefs;
  }

  // ===== CITY =====
  let cityParam = "";
  if (Array.isArray(slug)) {
    cityParam = slug.find((p) => p.startsWith("city-"));
  } else if (typeof slug === "string" && slug.startsWith("city-")) {
    cityParam = slug;
  }

  if (cityParam) {
    const cities = cityParam.replace("city-", "").split(",");
    payload.city = cities;
  }

  const color = query?.color;
  if (color && typeof color === "string") {
    payload.color = color.toLowerCase();
  }
 
  const steering = query?.steering;
  if (steering) {
    const steeringUpper = steering.toUpperCase();
    if (steeringUpper === "rhd" || steeringUpper === "lhd") {
      payload.steering = steeringUpper;
    }
  }

  const drivetrain = query?.drivetrain;

  if (drivetrain) {
    const drivetrainUpper = drivetrain.toLowerCase();
    if (drivetrainUpper === "2wd" || drivetrainUpper === "4wd") {
      payload.drive_train = drivetrainUpper;
    }
  }

  const doors = query?.doors;
  if (doors && (doors === "3" || doors === "4" || doors === "5")) {
    payload.doors = doors;
  }

  const engine = query?.engine;
  if (
    engine &&
    (engine === "cc" ||
    engine === "kw" ||
      engine === "ガソリン" ||
      engine === "ディーゼル" ||
      engine === "3 ハイブリッド" ||
      engine === "電気自動車" ||
      engine === " 水素")
  ) {
    payload.engine_type = engine;
  }
  const transmission = query?.transmission;
  if (transmission && (transmission === "at" || transmission === "mt")) {
    payload.transmission = transmission;
  }

  const duration = query?.duration;

  if (duration) {
    const durationLower = duration.toLowerCase();
    if (
      durationLower === "1year" ||
      durationLower === "2year" ||
      durationLower === "3year"
    ) {
      payload.duration = durationLower;
    }
  }

 
  const abs = route.query?.abs;

  if (abs === "1") {
    payload.is_abs = true;
  }

  const ac = query?.ac;
  if (ac === "1") {
    payload.is_ac = true;
  }
  const fog = query?.fog;
  if (fog === "1") {
    payload.is_fog_lights = true;
  }
  const gurentee = query?.gurentee;

  if (gurentee === "1") {
    payload.is_gurantee_included = true;
  }
  const notGurentee = query?.not_gurentee;
  if (notGurentee === "0") {
    payload.is_gurantee_included = false;
  }
  const repaired = query?.repaired;

  if (repaired === "1") {
    payload.is_repaired = true;
  }

  const notRepaired = query?.not_repaired;

  if (notRepaired === "1") {
    payload.is_not_repaired = true;
  }

  const owner = query?.owner;

  if (owner === "1") {
    payload.is_owner = true;
  }
  const vehicleModel = query?.vehicle_model;

  if (vehicleModel === "1") {
    payload.is_vqe_report = true;
  }
  const keyless = query?.keyless;

  if (keyless === "1") {
    payload.is_keyless_entry = true;
  }

  const smartKey = query?.smart_key;

  if (smartKey === "1") {
    payload.is_keyless_entry = true;
  }

  const unregister = query?.unregister;
  if (unregister === "1") {
    payload.is_unregistered = true;
  }
  const etc = query?.etc;

  if (etc === "1") {
    payload.is_esc = true;
  }

  const sixDegree = query?.six_degree;

  if (sixDegree === "1") {
    payload.three_sixty_view = true;
  }

  const hybrid = query?.hybrid;

  if (hybrid === "1") {
    payload.is_hybrid = true;
  }

  const commercial = route.query?.commercial;

  if (commercial === "1") {
    payload.is_commercial = true;
  }

  const imported = route.query?.imported;

  if (imported === "1") {
    payload.is_imported = true;
  }

  const ev = route.query?.ev;

  if (ev === "1") {
    payload.is_ev = true;
  }

  const domestic = route.query?.domestic;

  if (domestic === "1") {
    payload.is_domestic = true;
  }

  const lightAutomatic = route.query?.light_automatic;

  if (lightAutomatic === "1") {
    payload.is_light_automatic = true;
  }

  const camper = route.query?.camper;

  if (camper === "1") {
    payload.is_camper = true;
  }

  const hydrogen = route.query?.hydrogen;

  if (hydrogen === "1") {
    payload.is_hydrogen_fule = true;
  }

  const pw = route.query?.pw;
  if (pw === "1") {
    payload.is_power_window = true;
  }

  const sunroof = route.query?.sunroof;

  if (sunroof === "1") {
    payload.is_sunroof = true;
  }

  const property = route.query?.property;

  if (property === "1") {
    payload.is_property = true;
  }

  return payload;
}
//ye onMounted trigger ho ga jab page load ya refresh ho ga
onMounted(async () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = localStorage.getItem("carsData");
    if (stored && stored !== "undefined") {
      try {
        carData = JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse car data:", e);
        carData = {};
      }
    }
  }
  const slug = route.params.slug;
  const query = route.query; //ye router se query le ge ?color=green
  const payload = extractYearParams(slug, query);
  
  if (query?.q) {
    const searchData = await searchCars(query.q);
    searchResult.value = searchData;
    updateResult(searchData);
  } else {
    let data = await fetchCars(payload);
    updateResult(data);
  }
  
  shownTotalCars.value = totalCars.value;
});


//?ye watcher per query parameter ?query chaly ge oper waly onMount main masla hai query parameter k sath

watch(
  () => ({
    slug: route.params.slug,
    query: route.query,
  }),
  async ({ slug, query }, oldValue) => {
    // Skip when only the page query changed (pagination click already fetches)
    if (oldValue) {
      const { page: newPage, ...newQueryRest } = query || {};
      const { page: oldPage, ...oldQueryRest } =
        (oldValue && oldValue.query) || {};
      const onlyPageChanged =
        JSON.stringify(newQueryRest) === JSON.stringify(oldQueryRest) &&
        newPage !== oldPage &&
        slug === oldValue.slug;
      
    }
    
    // Only execute if either slug or query actually changed
    if (slug !== oldValue?.slug || query !== oldValue?.query) {
      currentPage.value = Number(query?.page) > 0 ? Number(query.page) : 1;
      const payload = extractYearParams(slug, query);
      const currentPath = route.params.slug; // <-- Get slug here
      // console.log("Slug from URL:", currentPath, payload);

      // Fetch when not in search-q mode; pagination clicks are already handled
      if (!route?.query?.q) {
        let data = await fetchCars(payload);
        updateResult(data);
      } else {
        let data = await searchCars(route?.query?.q);
        updateResult(data);
      }
      shownTotalCars.value = totalCars.value;
    }
  },
  { deep: true }
);
//?ye watcher per query parameter ?query chaly ge oper waly onMount main masla hai query parameter k sath

// ============= end hota hai ye code api inital load kiya real time data ===========


</script>

<template>
  <div>
    <div class="search-desktop desktop-view">
      <LazyCommonBreadCrumbs />
      <div class="topSection">
        <div class="container">
          <p class="m-0 title">中古車一覧</p>
        </div>
      </div>
      <!-- <LazySearchFilter @myEvent="eventEmit" /> -->
      <LazySearchFilterNew
        @myEvent="eventEmit"
        :total="totalCars"
        @carData="handleCarData"
      />
      <div class="searchStand p-0">
        <div class="container p-0">
          <div class="row">
            <!-- :emitFunction="searchResult.length ? searchResult : dataResult" -->
            <LazySearchResultNew
              :emitFunction="dataResult"
              :total-items="shownTotalCars"
              :current-page="currentPage"
              :items-per-page="itemsPerPage"
              :total-pages="totalPages"
              @page-change="handlePageChange"
              @items-per-page-change="handleItemsPerPageChange"
              :data="searchResult.length ? searchResult : dataResult"
            />
            <!-- :total-items="totalCars"  ye :total-items ki jaga per ho ga-->

            <LazySearchConditions />
          </div>
        </div>
      </div>
    </div>

    <!-- =================== Mobile View ==============-->
    <div class="search-page-mobile mobile_view">
      <div class="inner">
        <div
          class="top-bottom d-flex justify-content-between align-items-center p-2"
        >
          <div class="left d-flex gap-1 align-items-center">
            <img
              src="/assets/images/mobile/header/filter.webp"
              alt="bars"
              class="img-fluid"
              loading="lazy"
              width="16"
              height="16"
            />
            <p class="m-0">フィルター <span>3</span></p>
          </div>
          <div class="right d-flex align-items-center gap-1 px-2">
            <img
              src="/assets/images/mobile/header/barArrow.webp"
              alt="heart"
              class="img-fluid"
              loading="lazy"
              width="16"
              height="16"
            />
            <p class="m-0">選別</p>
          </div>
        </div>

        <div
          class="topResult p-2 d-flex align-items-center justify-content-between"
        >
          <div class="left">
            <p class="m-0">5412 件の結果</p>
          </div>
          <div class="right d-flex align-items-center gap-2">
            <p class="m-0">検索を保存</p>
            <img
              src="/assets/images/mobile/header/chit.webp"
              alt="chit"
              class="img-fluid"
              loading="lazy"
              width="11"
              height="13"
            />
          </div>
        </div>

        <div
          class="degreeImages d-flex align-items-center justify-content-between p-2"
        >
          <div class="left d-flex align-items-center gap-2">
            <button type="button" class="btn btn-360">360°画像付</button>
            <button type="button" class="btn btn-360">360°画像付</button>
            <button type="button" class="btn btn-360">360°画像付</button>
          </div>
          <div class="right">
            <img
              src="/assets/images/mobile/header/heartTag.webp"
              alt="heart"
              class="img-fluid"
              loading="lazy"
              width="23"
              height="20"
            />
          </div>
        </div>

        <div class="mobileHeading p-2">
          <p class="m-0">
            eKワゴン　660 M　届出済未使用車 衝突被害軽減B キーレス
          </p>
        </div>

        <div class="mobileListcar d-flex px-2 gap-2">
          <div class="col-md-2">
            <div class="left">
              <img
                src="/assets/images/cars/search-car.webp"
                alt="car"
                class="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div class="col-md-10">
            <div class="right">
              <div class="top d-flex gap-1">
                <div class="totalPaymentAmount w-50">
                  <p class="m-0 title pb-1">支払総額</p>
                  <p class="m-0 price">149.9 <span>万円</span></p>
                </div>
                <div class="totalPaymentAmount2 w-50">
                  <p class="m-0 title pb-1">車両本体価格</p>
                  <p class="m-0 price">149.9 <span>万円</span></p>
                </div>
              </div>
              <hr class="m-0 my-2" style="color: #e2e8f0" />

              <div class="details d-flex justify-content-between gap-2">
                <div class="left w-100">
                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">年式</p>
                    <p class="m-0 date">2025(R07)</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">車検</p>
                    <p class="m-0 date">2026年8</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">排気量</p>
                    <p class="m-0 date">660CC</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center"
                  >
                    <p class="m-0 title">燃料</p>
                    <p class="m-0 date">ガソリン</p>
                  </div>
                </div>
                <div class="right w-100">
                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">走行距離</p>
                    <p class="m-0 date">5km</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">修復歴</p>
                    <p class="m-0 date">インパネCVT</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">修復歴</p>
                    <p class="m-0 date">なし</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">在庫ID</p>
                    <p class="m-0 date">sat:5412542</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div
          class="evaluationScore d-flex align-items-center justify-content-between px-2"
        >
          <div class="score d-flex align-items-center">
            <p class="m-0">評価点：</p>
            <p class="m-0 s-tag"><span>S</span> 点</p>
          </div>

          <div class="score d-flex align-items-center">
            <p class="m-0">内装：</p>
            <div class="stars d-flex">
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
            </div>
          </div>

          <div class="score d-flex align-items-center">
            <p class="m-0">外装：</p>
            <div class="stars d-flex">
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
            </div>
          </div>

          <div class="evalutationReport">
            <button type="button" class="btn btn-report">評価書を見る</button>
          </div>
        </div>

        <div
          class="stockInvest d-flex align-items-center m-2 justify-content-center"
        >
          <p class="m-0 left p-2 w-100 text-center py-3">
            今すぐ在庫確認・見積依頼
          </p>
          <div
            class="phone d-flex align-items-center w-100 justify-content-center"
          >
            <img
              src="/assets/images/mobile/header/phone.webp"
              alt="phone"
              class="img-fluid"
              loading="lazy"
              width="13"
              height="13"
            />
            <p class="m-0 ms-2 callText">電話する</p>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div class="accordion" id="accordionExample">
          <div class="accordion-item mx-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                販売店：軽未使用車専門店プルミエ　豊田店
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body px-1 py-2">
                <div class="inner">
                  <p class="m-0 top">
                    カーセンサーアフター保証車 | カーセンサー認定車
                  </p>
                  <div class="blueCard d-flex gap-2 my-2">
                    <img
                      src="/assets/images/mobile/header/blue-card.webp"
                      alt="card"
                      class="img-fluid"
                      loading="lazy"
                      width="61"
                      height="68"
                    />
                    <div class="text">
                      <p class="m-0 topTitle pb-1">
                        軽未使用車専門店プルミエ　豊田店
                      </p>
                      <p class="m-0 bottomPara">
                        愛知県豊田市丸山町５－５５－１
                      </p>
                    </div>
                  </div>

                  <div class="overallReview d-flex align-items-center">
                    <p class="m-0 ratingText">クチコミ総合評価：</p>
                    <div class="stars d-flex">
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                    </div>
                    <p class="m-0 rate ms-2">4.7</p>
                  </div>

                  <div
                    class="serving d-flex align-items-center justify-content-between"
                  >
                    <p class="m-0 left">接客：</p>
                    <p class="m-0 right">4.4</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">雰囲気：</p>
                    <p class="m-0 right">4.6</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">アフター：</p>
                    <p class="m-0 right">4.1</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">品質：</p>
                    <p class="m-0 right">4.4</p>
                  </div>

                  <div
                    class="stockInvest d-flex align-items-center my-2 justify-content-center"
                  >
                    <p class="m-0 left p-2 w-100 text-center py-3">
                      気になることを販売店にまとめて確認
                    </p>
                    <div
                      class="phone d-flex align-items-center w-100 justify-content-center"
                    >
                      <img
                        src="/assets/images/mobile/header/phone.webp"
                        alt="phone"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <p class="m-0 ms-2 callText">電話する</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="degreeImages d-flex align-items-center justify-content-between p-2"
        >
          <div class="left d-flex align-items-center gap-2">
            <button type="button" class="btn btn-360">360°画像付</button>
            <button type="button" class="btn btn-360">360°画像付</button>
            <button type="button" class="btn btn-360">360°画像付</button>
          </div>
          <div class="right">
            <img
              src="/assets/images/mobile/header/heartTag.webp"
              alt="heart"
              class="img-fluid"
              loading="lazy"
              width="23"
              height="20"
            />
          </div>
        </div>

        <div class="mobileHeading p-2">
          <p class="m-0">
            eKワゴン　660 M　届出済未使用車 衝突被害軽減B キーレス
          </p>
        </div>

        <div class="mobileListcar d-flex px-2 gap-2">
          <div class="col-md-2">
            <div class="left">
              <img
                src="/assets/images/cars/search-car.webp"
                alt="car"
                class="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div class="col-md-10">
            <div class="right">
              <div class="top d-flex gap-1">
                <div class="totalPaymentAmount w-50">
                  <p class="m-0 title pb-1">支払総額</p>
                  <p class="m-0 price">149.9 <span>万円</span></p>
                </div>
                <div class="totalPaymentAmount2 w-50">
                  <p class="m-0 title pb-1">車両本体価格</p>
                  <p class="m-0 price">149.9 <span>万円</span></p>
                </div>
              </div>
              <hr class="m-0 my-2" style="color: #e2e8f0" />

              <div class="details d-flex justify-content-between gap-2">
                <div class="left w-100">
                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">年式</p>
                    <p class="m-0 date">2025(R07)</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">車検</p>
                    <p class="m-0 date">2026年8</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">排気量</p>
                    <p class="m-0 date">660CC</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center"
                  >
                    <p class="m-0 title">燃料</p>
                    <p class="m-0 date">ガソリン</p>
                  </div>
                </div>
                <div class="right w-100">
                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">走行距離</p>
                    <p class="m-0 date">5km</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">修復歴</p>
                    <p class="m-0 date">インパネCVT</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">修復歴</p>
                    <p class="m-0 date">なし</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">在庫ID</p>
                    <p class="m-0 date">sat:5412542</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div
          class="evaluationScore d-flex align-items-center justify-content-between px-2"
        >
          <div class="score d-flex align-items-center">
            <p class="m-0">評価点：</p>
            <p class="m-0 s-tag"><span>S</span> 点</p>
          </div>

          <div class="score d-flex align-items-center">
            <p class="m-0">内装：</p>
            <div class="stars d-flex">
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
            </div>
          </div>

          <div class="score d-flex align-items-center">
            <p class="m-0">外装：</p>
            <div class="stars d-flex">
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
            </div>
          </div>

          <div class="evalutationReport">
            <button type="button" class="btn btn-report">評価書を見る</button>
          </div>
        </div>

        <div
          class="stockInvest d-flex align-items-center m-2 justify-content-center"
        >
          <p class="m-0 left p-2 w-100 text-center py-3">
            今すぐ在庫確認・見積依頼
          </p>
          <div
            class="phone d-flex align-items-center w-100 justify-content-center"
          >
            <img
              src="/assets/images/mobile/header/phone.webp"
              alt="phone"
              class="img-fluid"
              loading="lazy"
              width="13"
              height="13"
            />
            <p class="m-0 ms-2 callText">電話する</p>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div class="accordion" id="accordionExample">
          <div class="accordion-item mx-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                販売店：軽未使用車専門店プルミエ　豊田店
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body px-1 py-2">
                <div class="inner">
                  <p class="m-0 top">
                    カーセンサーアフター保証車 | カーセンサー認定車
                  </p>
                  <div class="blueCard d-flex gap-2 my-2">
                    <img
                      src="/assets/images/mobile/header/blue-card.webp"
                      alt="card"
                      class="img-fluid"
                      loading="lazy"
                      width="61"
                      height="68"
                    />
                    <div class="text">
                      <p class="m-0 topTitle pb-1">
                        軽未使用車専門店プルミエ　豊田店
                      </p>
                      <p class="m-0 bottomPara">
                        愛知県豊田市丸山町５－５５－１
                      </p>
                    </div>
                  </div>

                  <div class="overallReview d-flex align-items-center">
                    <p class="m-0 ratingText">クチコミ総合評価：</p>
                    <div class="stars d-flex">
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                    </div>
                    <p class="m-0 rate ms-2">4.7</p>
                  </div>

                  <div
                    class="serving d-flex align-items-center justify-content-between"
                  >
                    <p class="m-0 left">接客：</p>
                    <p class="m-0 right">4.4</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">雰囲気：</p>
                    <p class="m-0 right">4.6</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">アフター：</p>
                    <p class="m-0 right">4.1</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">品質：</p>
                    <p class="m-0 right">4.4</p>
                  </div>

                  <div
                    class="stockInvest d-flex align-items-center my-2 justify-content-center"
                  >
                    <p class="m-0 left p-2 w-100 text-center py-3">
                      気になることを販売店にまとめて確認
                    </p>
                    <div
                      class="phone d-flex align-items-center w-100 justify-content-center"
                    >
                      <img
                        src="/assets/images/mobile/header/phone.webp"
                        alt="phone"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <p class="m-0 ms-2 callText">電話する</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="degreeImages d-flex align-items-center justify-content-between p-2"
        >
          <div class="left d-flex align-items-center gap-2">
            <button type="button" class="btn btn-360">360°画像付</button>
            <button type="button" class="btn btn-360">360°画像付</button>
            <button type="button" class="btn btn-360">360°画像付</button>
          </div>
          <div class="right">
            <img
              src="/assets/images/mobile/header/heartTag.webp"
              alt="heart"
              class="img-fluid"
              loading="lazy"
              width="23"
              height="20"
            />
          </div>
        </div>

        <div class="mobileHeading p-2">
          <p class="m-0">
            eKワゴン　660 M　届出済未使用車 衝突被害軽減B キーレス
          </p>
        </div>

        <div class="mobileListcar d-flex px-2 gap-2">
          <div class="col-md-2">
            <div class="left">
              <img
                src="/assets/images/cars/search-car.webp"
                alt="car"
                class="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div class="col-md-10">
            <div class="right">
              <div class="top d-flex gap-1">
                <div class="totalPaymentAmount w-50">
                  <p class="m-0 title pb-1">支払総額</p>
                  <p class="m-0 price">149.9 <span>万円</span></p>
                </div>
                <div class="totalPaymentAmount2 w-50">
                  <p class="m-0 title pb-1">車両本体価格</p>
                  <p class="m-0 price">149.9 <span>万円</span></p>
                </div>
              </div>
              <hr class="m-0 my-2" style="color: #e2e8f0" />

              <div class="details d-flex justify-content-between gap-2">
                <div class="left w-100">
                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">年式</p>
                    <p class="m-0 date">2025(R07)</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">車検</p>
                    <p class="m-0 date">2026年8</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">排気量</p>
                    <p class="m-0 date">660CC</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center"
                  >
                    <p class="m-0 title">燃料</p>
                    <p class="m-0 date">ガソリン</p>
                  </div>
                </div>
                <div class="right w-100">
                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">走行距離</p>
                    <p class="m-0 date">5km</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">修復歴</p>
                    <p class="m-0 date">インパネCVT</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">修復歴</p>
                    <p class="m-0 date">なし</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">在庫ID</p>
                    <p class="m-0 date">sat:5412542</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div
          class="evaluationScore d-flex align-items-center justify-content-between px-2"
        >
          <div class="score d-flex align-items-center">
            <p class="m-0">評価点：</p>
            <p class="m-0 s-tag"><span>S</span> 点</p>
          </div>

          <div class="score d-flex align-items-center">
            <p class="m-0">内装：</p>
            <div class="stars d-flex">
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
            </div>
          </div>

          <div class="score d-flex align-items-center">
            <p class="m-0">外装：</p>
            <div class="stars d-flex">
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
            </div>
          </div>

          <div class="evalutationReport">
            <button type="button" class="btn btn-report">評価書を見る</button>
          </div>
        </div>

        <div
          class="stockInvest d-flex align-items-center m-2 justify-content-center"
        >
          <p class="m-0 left p-2 w-100 text-center py-3">
            今すぐ在庫確認・見積依頼
          </p>
          <div
            class="phone d-flex align-items-center w-100 justify-content-center"
          >
            <img
              src="/assets/images/mobile/header/phone.webp"
              alt="phone"
              class="img-fluid"
              loading="lazy"
              width="13"
              height="13"
            />
            <p class="m-0 ms-2 callText">電話する</p>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div class="accordion" id="accordionExample">
          <div class="accordion-item mx-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                販売店：軽未使用車専門店プルミエ　豊田店
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body px-1 py-2">
                <div class="inner">
                  <p class="m-0 top">
                    カーセンサーアフター保証車 | カーセンサー認定車
                  </p>
                  <div class="blueCard d-flex gap-2 my-2">
                    <img
                      src="/assets/images/mobile/header/blue-card.webp"
                      alt="card"
                      class="img-fluid"
                      loading="lazy"
                      width="61"
                      height="68"
                    />
                    <div class="text">
                      <p class="m-0 topTitle pb-1">
                        軽未使用車専門店プルミエ　豊田店
                      </p>
                      <p class="m-0 bottomPara">
                        愛知県豊田市丸山町５－５５－１
                      </p>
                    </div>
                  </div>

                  <div class="overallReview d-flex align-items-center">
                    <p class="m-0 ratingText">クチコミ総合評価：</p>
                    <div class="stars d-flex">
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                    </div>
                    <p class="m-0 rate ms-2">4.7</p>
                  </div>

                  <div
                    class="serving d-flex align-items-center justify-content-between"
                  >
                    <p class="m-0 left">接客：</p>
                    <p class="m-0 right">4.4</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">雰囲気：</p>
                    <p class="m-0 right">4.6</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">アフター：</p>
                    <p class="m-0 right">4.1</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">品質：</p>
                    <p class="m-0 right">4.4</p>
                  </div>

                  <div
                    class="stockInvest d-flex align-items-center my-2 justify-content-center"
                  >
                    <p class="m-0 left p-2 w-100 text-center py-3">
                      気になることを販売店にまとめて確認
                    </p>
                    <div
                      class="phone d-flex align-items-center w-100 justify-content-center"
                    >
                      <img
                        src="/assets/images/mobile/header/phone.webp"
                        alt="phone"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <p class="m-0 ms-2 callText">電話する</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="degreeImages d-flex align-items-center justify-content-between p-2"
        >
          <div class="left d-flex align-items-center gap-2">
            <button type="button" class="btn btn-360">360°画像付</button>
            <button type="button" class="btn btn-360">360°画像付</button>
            <button type="button" class="btn btn-360">360°画像付</button>
          </div>
          <div class="right">
            <img
              src="/assets/images/mobile/header/heartTag.webp"
              alt="heart"
              class="img-fluid"
              loading="lazy"
              width="23"
              height="20"
            />
          </div>
        </div>

        <div class="mobileHeading p-2">
          <p class="m-0">
            eKワゴン　660 M　届出済未使用車 衝突被害軽減B キーレス
          </p>
        </div>

        <div class="mobileListcar d-flex px-2 gap-2">
          <div class="col-md-2">
            <div class="left">
              <img
                src="/assets/images/cars/search-car.webp"
                alt="car"
                class="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
          <div class="col-md-10">
            <div class="right">
              <div class="top d-flex gap-1">
                <div class="totalPaymentAmount w-50">
                  <p class="m-0 title pb-1">支払総額</p>
                  <p class="m-0 price">149.9 <span>万円</span></p>
                </div>
                <div class="totalPaymentAmount2 w-50">
                  <p class="m-0 title pb-1">車両本体価格</p>
                  <p class="m-0 price">149.9 <span>万円</span></p>
                </div>
              </div>
              <hr class="m-0 my-2" style="color: #e2e8f0" />

              <div class="details d-flex justify-content-between gap-2">
                <div class="left w-100">
                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">年式</p>
                    <p class="m-0 date">2025(R07)</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">車検</p>
                    <p class="m-0 date">2026年8</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">排気量</p>
                    <p class="m-0 date">660CC</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center"
                  >
                    <p class="m-0 title">燃料</p>
                    <p class="m-0 date">ガソリン</p>
                  </div>
                </div>
                <div class="right w-100">
                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">走行距離</p>
                    <p class="m-0 date">5km</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">修復歴</p>
                    <p class="m-0 date">インパネCVT</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">修復歴</p>
                    <p class="m-0 date">なし</p>
                  </div>

                  <div
                    class="inner d-flex justify-content-between align-items-center mb-2"
                  >
                    <p class="m-0 title">在庫ID</p>
                    <p class="m-0 date">sat:5412542</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div
          class="evaluationScore d-flex align-items-center justify-content-between px-2"
        >
          <div class="score d-flex align-items-center">
            <p class="m-0">評価点：</p>
            <p class="m-0 s-tag"><span>S</span> 点</p>
          </div>

          <div class="score d-flex align-items-center">
            <p class="m-0">内装：</p>
            <div class="stars d-flex">
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
            </div>
          </div>

          <div class="score d-flex align-items-center">
            <p class="m-0">外装：</p>
            <div class="stars d-flex">
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
              <img
                src="/assets/images/icons/star.webp"
                alt="star"
                class="img-fluid"
                loading="lazy"
                width="10"
                height="10"
              />
            </div>
          </div>

          <div class="evalutationReport">
            <button type="button" class="btn btn-report">評価書を見る</button>
          </div>
        </div>

        <div
          class="stockInvest d-flex align-items-center m-2 justify-content-center"
        >
          <p class="m-0 left p-2 w-100 text-center py-3">
            今すぐ在庫確認・見積依頼
          </p>
          <div
            class="phone d-flex align-items-center w-100 justify-content-center"
          >
            <img
              src="/assets/images/mobile/header/phone.webp"
              alt="phone"
              class="img-fluid"
              loading="lazy"
              width="13"
              height="13"
            />
            <p class="m-0 ms-2 callText">電話する</p>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div class="accordion" id="accordionExample">
          <div class="accordion-item mx-2">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                販売店：軽未使用車専門店プルミエ　豊田店
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body px-1 py-2">
                <div class="inner">
                  <p class="m-0 top">
                    カーセンサーアフター保証車 | カーセンサー認定車
                  </p>
                  <div class="blueCard d-flex gap-2 my-2">
                    <img
                      src="/assets/images/mobile/header/blue-card.webp"
                      alt="card"
                      class="img-fluid"
                      loading="lazy"
                      width="61"
                      height="68"
                    />
                    <div class="text">
                      <p class="m-0 topTitle pb-1">
                        軽未使用車専門店プルミエ　豊田店
                      </p>
                      <p class="m-0 bottomPara">
                        愛知県豊田市丸山町５－５５－１
                      </p>
                    </div>
                  </div>

                  <div class="overallReview d-flex align-items-center">
                    <p class="m-0 ratingText">クチコミ総合評価：</p>
                    <div class="stars d-flex">
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                    </div>
                    <p class="m-0 rate ms-2">4.7</p>
                  </div>

                  <div
                    class="serving d-flex align-items-center justify-content-between"
                  >
                    <p class="m-0 left">接客：</p>
                    <p class="m-0 right">4.4</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">雰囲気：</p>
                    <p class="m-0 right">4.6</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">アフター：</p>
                    <p class="m-0 right">4.1</p>
                    <p class="m-0 dot"></p>
                    <p class="m-0 left">品質：</p>
                    <p class="m-0 right">4.4</p>
                  </div>

                  <div
                    class="stockInvest d-flex align-items-center my-2 justify-content-center"
                  >
                    <p class="m-0 left p-2 w-100 text-center py-3">
                      気になることを販売店にまとめて確認
                    </p>
                    <div
                      class="phone d-flex align-items-center w-100 justify-content-center"
                    >
                      <img
                        src="/assets/images/mobile/header/phone.webp"
                        alt="phone"
                        class="img-fluid"
                        loading="lazy"
                        width="13"
                        height="13"
                      />
                      <p class="m-0 ms-2 callText">電話する</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="m-0 m-2" style="color: #e2e8f0" />

        <div class="total">
          <p class="m-0 m-2 py-2 date">1/17512</p>
        </div>

        <div class="begning d-flex justify-content-between p-2">
          <p class="m-0 left">初め</p>
          <p class="m-0 left">
            <img
              src="/assets/images/icons/left-arrow.webp"
              alt="arrow"
              class="img-fluid pe-1"
              loading="lazy"
              width="10"
              height="10"
            />
            前の
          </p>
          <p class="m-0 right">
            次
            <img
              src="/assets/images/mobile/header/blackArrow.webp"
              alt="arrow"
              class="img-fluid ms-1"
              loading="lazy"
              width="6"
              height="10"
            />
          </p>
          <p class="m-0 right">最後</p>
        </div>

        <div class="topPage m-2">
          <p class="m-0">
            ページトップへ
            <img
              src="/assets/images/mobile/header/topPage.webp"
              alt="Rank"
              class="img-fluid ms-2"
              width="17"
              height="17"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ====================== Start Search Page Css */
.search-desktop .topSection .title {
  color: #141817;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
/* ====================== End Search Page Css */

/* =========== Start Search Page Css For Mobile*/
.search-page-mobile .inner .top-bottom .left {
  background-color: #ecf5ff;
  color: #334155;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 8px;
  border-radius: 50px;
}
.search-page-mobile .inner .top-bottom .left span {
  background-color: #2384c1;
  color: white;
  font-weight: 600;
  font-size: 11px;
  line-height: 17px;
  padding: 3px 6px;
  border-radius: 50px;
}
.search-page-mobile .inner .top-bottom .right {
  background-color: #ecf5ff;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 8px;
  border-radius: 50px;
}
.search-page-mobile .inner .topResult .left p {
  color: #0e354d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search-page-mobile .inner .topResult .right {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search-page-mobile .inner .degreeImages .left button {
  border: 1px solid #64748b;
  color: #64748b;
  padding: 4px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  border-radius: 0;
}
.search-page-mobile .inner .mobileHeading p {
  color: #1c6a9b;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.search-page-mobile .inner .mobileListcar .right .top .totalPaymentAmount {
  background-color: #ecf5ff;
  padding: 6px;
  border-radius: 4px;
}
.search-page-mobile .inner .mobileListcar .right .top .totalPaymentAmount2 {
  background-color: #f6f6f8;
  padding: 6px;
  border-radius: 4px;
}
.search-page-mobile
  .inner
  .mobileListcar
  .right
  .top
  .totalPaymentAmount
  .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 10px;
  line-height: 11.41px;
}
.search-page-mobile
  .inner
  .mobileListcar
  .right
  .top
  .totalPaymentAmount2
  .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 10px;
  line-height: 11.41px;
}
.search-page-mobile
  .inner
  .mobileListcar
  .right
  .top
  .totalPaymentAmount
  .price {
  color: #2384c1;
  font-weight: 600;
  font-size: 17px;
  line-height: 20.54px;
}
.search-page-mobile
  .inner
  .mobileListcar
  .right
  .top
  .totalPaymentAmount2
  .price {
  color: #0f172a;
  font-weight: 600;
  font-size: 17px;
  line-height: 20.54px;
}
.search-page-mobile
  .inner
  .mobileListcar
  .right
  .top
  .totalPaymentAmount
  .price
  span {
  color: #0f172a;
  font-weight: 600;
  font-size: 10px;
  line-height: 20.54px;
}
.search-page-mobile
  .inner
  .mobileListcar
  .right
  .top
  .totalPaymentAmount2
  .price
  span {
  color: #0f172a;
  font-weight: 600;
  font-size: 10px;
  line-height: 20.54px;
}
.search-page-mobile .inner .mobileListcar .right .details .left .inner .title {
  color: #0f172a;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  background-color: #f6f6f8;
  padding: 4px 8px;
  width: max-content;
}
.search-page-mobile .inner .mobileListcar .right .details .left .inner .date {
  color: #334155;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
}
.search-page-mobile .inner .mobileListcar .right .details .right .inner .title {
  color: #0f172a;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  background-color: #f6f6f8;
  padding: 4px 8px;
  width: max-content;
  white-space: nowrap;
}
.search-page-mobile .inner .mobileListcar .right .details .right .inner .date {
  color: #334155;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
  white-space: nowrap;
}
.search-page-mobile .inner .evaluationScore p {
  color: #0f172a;
  font-weight: 500;
  font-family: "Inter";
  font-size: 9.92px;
  line-height: 16.84px;
}
.search-page-mobile .inner .evaluationScore .evalutationReport .btn-report {
  background-color: #ecf5ff;
  border: 1px solid #1c6a9b;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  border-radius: 4px;
  color: #1c6a9b;
}
.search-page-mobile .inner .evaluationScore .score .s-tag span {
  color: #2384c1;
  font-weight: 700;
  font-family: "Inter";
  font-size: 14px;
  line-height: 33.69px;
}
.search-page-mobile .inner .stockInvest {
  background-color: #ecf5ff;
  border-radius: 10px;
}
.search-page-mobile .inner .stockInvest .left {
  background-color: #2384c1;
  color: #fff;
  border-radius: 10px 0px 0px 10px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 11.97px;
  line-height: 13px;
  white-space: nowrap;
}
.search-page-mobile .inner .stockInvest .phone .callText {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  font-size: 11.97px;
  line-height: 11.97px;
}
.search-page-mobile .inner .accordion .accordion-item {
  border-radius: 0px;
  border: 0px;
}
.search-page-mobile .inner .accordion .accordion-button:not(.collapsed) {
  background-color: transparent;
}
.search-page-mobile
  .inner
  .accordion
  .accordion-item:first-of-type
  > .accordion-header
  .accordion-button {
  border-radius: 0;
  background: #f6f6f8;
  color: #334155;
  font-family: "Inter";
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
}
.search-page-mobile .inner .accordion .accordion-body .inner .top {
  color: #64748b;
  font-family: "Inter";
  font-weight: 300;
  font-size: 10px;
  line-height: 16.84px;
}
.search-page-mobile
  .inner
  .accordion
  .accordion-body
  .inner
  .blueCard
  .topTitle {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 300;
  font-size: 12px;
  line-height: 16.84px;
}
.search-page-mobile
  .inner
  .accordion
  .accordion-body
  .inner
  .blueCard
  .bottomPara {
  color: #64748b;
  font-family: "Inter";
  font-weight: 300;
  font-size: 10px;
  line-height: 16.84px;
}
.search-page-mobile
  .inner
  .accordion
  .accordion-body
  .inner
  .overallReview
  .ratingText {
  color: #64748b;
  font-size: 10px;
  font-weight: 500;
  line-height: 18px;
}
.search-page-mobile
  .inner
  .accordion
  .accordion-body
  .inner
  .overallReview
  .rate {
  color: #2384c1;
  font-weight: 700;
  font-size: 12.3px;
  line-height: 17.58px;
}
.search-page-mobile .inner .accordion .accordion-body .inner .serving .left {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
}
.search-page-mobile .inner .accordion .accordion-body .inner .serving .right {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 10px;
  line-height: 20px;
}
.search-page-mobile .inner .accordion .accordion-body .inner .serving .dot {
  width: 6px;
  height: 6px;
  background-color: #6f6f6f;
  border-radius: 50px;
}
.search-page-mobile .inner .total .date {
  color: #0f172a;
  font-weight: 400;
  font-size: 16px;
  line-height: 14.14px;
  font-family: "Inter";
}
.search-page-mobile .inner .begning .left {
  color: #5d6370;
  font-size: 9.8px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 14.71px;
  border: 1px solid #5d6370;
  padding: 10px 28px;
  border-radius: 2.5px;
}
.search-page-mobile .inner .begning .right {
  color: #1e293b;
  font-size: 9.8px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 14.71px;
  border: 1px solid #1e293b;
  padding: 10px 28px;
  border-radius: 2.5px;
}
.search-page-mobile .inner .topPage p {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 400;
  font-size: 10px;
  line-height: 16.92px;
  cursor: pointer;
}
/* =========== End Search Page Css For Mobile*/
</style>
