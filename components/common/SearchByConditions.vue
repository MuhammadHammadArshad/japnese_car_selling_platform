<script setup>
defineProps({
  title: {
    type: String,
    default: "条件から探す",
  },
});
const priceRanges = [
  { label: "1〜20万円", slug: "pr-10000-20000" },
  { label: "20〜50万円", slug: "pr-20000-50000" },
  { label: "50〜100万円", slug: "pr-50000-100000" },
  { label: "100〜150万円", slug: "pr-100000-100000" },
  { label: "150〜500万円", slug: "pr-100000-100000" },
  { label: "1000万円以上", slug: "pr-100000-100000" },
];

const mileageRanges = [
  { label: "0〜1万km", slug: "ml-10000-10000" },
  { label: "1〜2万km", slug: "ml-10000-20000" },
  { label: "2〜4万km", slug: "ml-20000-40000" },
  { label: "4〜6万km", slug: "ml-40000-60000" },
  { label: "6〜10万km", slug: "ml-60000-100000" },
  { label: "10万km以上", slug: "ml-100000-100000" },
];

const engineSizes = [
  { label: "660cc以下", slug: "enginesize-500-660" },
  { label: "660～1,000cc以下", slug: "enginesize-660-1000" },
  { label: "1,000～1,400cc以下", slug: "enginesize-1000-1500" },
  { label: "1,400～1,900cc以下", slug: "enginesize-2000-2500" },
  { label: "2,000～2,400cc以下", slug: "enginesize-3000-3500" },
  { label: "2,500～2,900cc以下", slug: "enginesize-4000-4000" },
  { label: "4,000cc以下", slug: "enginesize-4000-4000" },
  { label: "電気自動車", slug: "enginesize-4000-4000" },
];

const currentYear = new Date().getFullYear(); //2025

const yearRanges = [
  {
    label: "新しい",
    slug: `yr-${currentYear}-${currentYear}`,
  },
  {
    label: "1年落ち以下", // 1 year old or less
    slug: `yr-${currentYear - 1}-${currentYear}`,
  },
  {
    label: "2～3年落ち",
    slug: `yr-${currentYear - 3}-${currentYear - 2}`,
  },
  {
    label: "4～6年落ち",
    slug: `yr-${currentYear - 6}-${currentYear - 4}`,
  },
  {
    label: "7～10年落ち",
    slug: `yr-${currentYear - 10}-${currentYear - 7}`,
  },
  {
    label: "11～15年落ち",
    slug: `yr-${currentYear - 15}-${currentYear - 11}`,
  },
  {
    label: "15年落ち以上",
    slug: `yr-${currentYear - 15}-${currentYear - 15}`,
  },
];
</script>
<template>
  <div>
    <div class="searchByConditions desktop-view">
      <div class="container">
        <div class="row">
          <div class="tagsTitle">
            <CommonHeading :title="title" />
          </div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="cardsTag">
              <p class="m-0 mb-3">車両価格から探す</p>
              <ul class="p-0">
                <!-- <li>1〜20万円</li>
                <li>20〜50万円</li>
                <li>50〜100万円</li>
                <li>100〜150万円</li>
                <li>150〜500万円</li>
                <li>1000万円以上</li> -->
                <li v-for="(range, index) in priceRanges" :key="index">
                  <NuxtLink :to="`/search/${range.slug}`">
                    {{ range.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="cardsTag">
              <p class="m-0 mb-3">走行距離から車を探す</p>
              <ul class="p-0">
                <!-- <li>0〜1万km</li>
                <li>1〜2万km</li>
                <li>2〜4万km</li>
                <li>4〜6万km</li>
                <li>6〜10万km</li>
                <li>10万km以上</li> -->
                <li v-for="(range, index) in mileageRanges" :key="index">
                  <NuxtLink :to="`/search/${range.slug}`">
                    {{ range.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="cardsTag">
              <p class="m-0 mb-3">排気量から探す</p>
              <ul class="p-0">
                <!-- <li>660cc以下</li>
                <li>660～1,000cc以下</li>
                <li>1,000～1,400cc以下</li>
                <li>1,400～1,900cc以下</li>
                <li>2,000～2,400cc以下</li>
                <li>2,500～2,900cc以下</li>
                <li>4,000cc以下</li>
                <li>電気自動車</li> -->
                <li v-for="(size, index) in engineSizes" :key="index">
                  <NuxtLink :to="`/search/${size.slug}`">
                    {{ size.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="cardsTag">
              <p class="m-0 mb-3">登録年から探す</p>
              <ul class="p-0">
                <!-- <li>新しい</li>
                <li>1年落ち以下</li>
                <li>2～3年落ち</li>
                <li>4～6年落ち</li>
                <li>7～10年落ち</li>
                <li>11～15年落ち</li>
                <li>15年落ち以上</li> -->
                <li v-for="(range, index) in yearRanges" :key="index">
                  <NuxtLink :to="`/search/${range.slug}`">
                    {{ range.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.searchByConditions .cardsTag {
  background: #f6f6f6;
  margin: 25px 0px 0px 0px;
  padding: 14px;
  height: 340px;
}
.cardsTag ul li a {
  text-decoration: none;
  color: #154f74;
}

.searchByConditions .cardsTag p {
  color: #0f172a;
  font-size: 14px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 20px;
}
.searchByConditions .cardsTag ul li {
  list-style: none;
  color: #154f74;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
  margin-bottom: 20px;
}
.searchByConditions .cardsTag ul li:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  cursor: pointer;
}
</style>