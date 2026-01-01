
<script setup>
// const others = [
//   {
//     id: 1,
//     title: "カタログ",
//     option1: "トヨタ",
//     option2: "スズキ",
//     option3: "ダイハツ",
//     option4: "日産",
//     option5: "ホンダ",
//   },
//   {
//     id: 2,
//     title: "中古車相場",
//     option1: "ホンダ タント",
//     option2: "日産 セレナ",
//     option3: "トヨタ プリウス",
//     option4: "トヨタ ハリア",
//     option5: "レクサスRX",
//   },
//   {
//     id: 3,
//     title: "低燃費車",
//     option1: "トヨタ プリウ",
//     option2: "スズキ ジムニー",
//     option3: "ホンダ フィット",
//     option4: "トヨタ アクア",
//     option5: "トヨタ アルファード",
//   },
//   {
//     id: 4,
//     title: "SAT-について",
//     option1: "SATーの歴史",
//     option2: "SATーのサービス",
//     option3: "SATーの目標<",
//     option4: "SATの会社概要",
//     option5: "SATの会社概要",
//   },
// ];
const others = [
  {
    id: 1,
    title: "カタログ",
    options: [
      { label: "トヨタ", url: "/search/mk-toyota" },
      { label: "スズキ", url: "/search/mk-suzuki" },
      { label: "ダイハツ", url: "/search/mk-daihatsu" },
      { label: "日産", url: "/search/mk-nissan" },
      { label: "ホンダ", url: "/search/mk-honda" },
    ],
  },
  {
    id: 2,
    title: "中古車相場",
    options: [
      { label: "ホンダ タント", url: "/search/mk-honda/md-tanto" },
      { label: "日産 セレナ", url: "/search/mk-nissan/md-serena" },
      { label: "トヨタ プリウス", url: "/search/mk-toyota/md-prius" },
      { label: "トヨタ ハリア", url: "/search/mk-toyota/md-harrier" },
      { label: "レクサスRX", url: "/search/mk-lexus/md-rx" },
    ],
  },
  {
    id: 3,
    title: "低燃費車",
    options: [
      { label: "トヨタ プリウ", url: "/search/mk-toyota/md-prius" },
      { label: "スズキ ジムニー", url: "/search/mk-suzuki/md-jimny" },
      { label: "ホンダ フィット", url: "/search/mk-honda/md-fit" },
      { label: "トヨタ アクア", url: "/search/mk-toyota/md-aqua" },
      { label: "トヨタ アルファード", url: "/search/mk-toyota/md-alphard" },
    ],
  },
  {
    id: 4,
    title: "SAT-について",
    options: [
      { label: "SATーの歴史" },
      { label: "SATーのサービス" },
      { label: "SATーの目標" },
      { label: "SATの会社概要" },
      { label: "SATの会社概要" },
    ],
  },
];
</script>

<!-- <template>
  <div class="col-md-3" v-for="otherContent in others" :key="otherContent.id">
    <div class="otherContentDetails">
      <p class="title my-3">{{ otherContent.title }}</p>
      <ul class="p-0">
        <li>{{ otherContent.option1 }}</li>
        <li>{{ otherContent.option2 }}</li>
        <li>{{ otherContent.option3 }}</li>
        <li>{{ otherContent.option4 }}</li>
        <li>{{ otherContent.option5 }}</li>
      </ul>
    </div>
  </div>
</template> -->

<template>
    <div class="col-md-3" v-for="otherContent in others" :key="otherContent.id">
      <div class="otherContentDetails">
        <p class="title my-3">{{ otherContent.title }}</p>
        <ul class="p-0">
          <li v-for="(option, index) in otherContent.options" :key="index">
            <NuxtLink
              v-if="option.url"
              :to="option.url"
              class="text-decoration-underline"
            >
              {{ option.label }}
            </NuxtLink>
            <span v-else>{{ option.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  
</template>



<style scoped>
.otherContent .otherContentDetails .title {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  font-family: "Inter";
  color: #0f172a;
}
.otherContent .otherContentDetails ul li {
  list-style: none;
  font-size: 12px;
  font-weight: 400;
  font-family: "Inter";
  line-height: 16px;
  color: #154f74;
  margin: 10px 0px;
}
.otherContent .otherContentDetails ul li a{
  text-decoration:none !important;
  color: #154f74;
}
.otherContent .otherContentDetails ul li:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  cursor: pointer;
}
</style>