<script setup>
// const popularCar = [
//   {
//     id: 1,
//     carImage: `assets/images/deck/1.webp`,
//     carTitle: "軽自動車",
//     detail1: "ダイハツ タント",
//     detail2: "スズキ ジムニー",
//     detail3: "スズキ ハスラー",
//   },
//   {
//     id: 2,
//     carImage: `assets/images/deck/2.webp`,
//     carTitle: "コンパクトカー",
//     detail1: "ホンダ フィット",
//     detail2: "トヨタ アクア",
//     detail3: "スズキ ワゴンR",
//   },
//   {
//     id: 3,
//     carImage: `assets/images/deck/3.webp`,
//     carTitle: "ミニバン",
//     detail1: "トヨタ ヴォクシー",
//     detail2: "トヨタ アルファード",
//     detail3: "日産 セレナ",
//   },
//   {
//     id: 4,
//     carImage: `assets/images/deck/4.webp`,
//     carTitle: "クーペ",
//     detail1: "トヨタ 86",
//     detail2: "日産 フェアレディＺ",
//     detail3: "ポルシェ 911",
//   },
//   {
//     id: 5,
//     carImage: `assets/images/deck/5.webp`,
//     carTitle: "ステーションワゴン",
//     detail1: "トヨタ カローラツーリング",
//     detail2: "スバル レヴォーグ",
//     detail3: "MINI MINI",
//   },
//   {
//     id: 6,
//     carImage: `assets/images/deck/6.webp`,
//     carTitle: "SUV",
//     detail1: "トヨタ ハリア",
//     detail2: "日産 エクストレイル",
//     detail3: "レクサス RX",
//   },
//   {
//     id: 7,
//     carImage: `assets/images/deck/7.webp`,
//     carTitle: "セダン",
//     detail1: "トヨタ クラウン",
//     detail2: "トヨタ プリウス",
//     detail3: "レクサス LS",
//   },
//   {
//     id: 8,
//     carImage: `assets/images/deck/8.webp`,
//     carTitle: "オープンカー",
//     detail1: "ホンダ S660",
//     detail2: "ダイハツ コペン",
//     detail3: "マツダ ロードスター",
//   },
// ];

const popularCar = [
  {
    id: 1,
    carImage: "assets/images/deck/1.webp",
    carTitle: "軽自動車",
    models: [
      {
        label: "ダイハツ タント",
        makerSlug: "daihatsu",
        modelSlug: "tanto-custom",
      },
      {
        label: "スズキ ジムニー",
        makerSlug: "suzuki",
        modelSlug: "jimny",
      },
      {
        label: "スズキ ハスラー",
        makerSlug: "suzuki",
        modelSlug: "hustler",
      },
    ],
  },
  {
    id: 2,
    carImage: "assets/images/deck/2.webp",
    carTitle: "コンパクトカー",
    models: [
      {
        label: "ホンダ フィット",
        makerSlug: "honda",
        modelSlug: "fit",
      },
      {
        label: "トヨタ アクア",
        makerSlug: "toyota",
        modelSlug: "aqua",
      },
      {
        label: "スズキ ワゴンR",
        makerSlug: "suzuki",
        modelSlug: "wagon-r",
      },
    ],
  },
  {
    id: 3,
    carImage: "assets/images/deck/3.webp",
    carTitle: "ミニバン",
    models: [
      {
        label: "トヨタ ヴォクシー",
        makerSlug: "toyota",
        modelSlug: "voxy",
      },
      {
        label: "トヨタ アルファード",
        makerSlug: "toyota",
        modelSlug: "alphard",
      },
      {
        label: "日産 セレナ",
        makerSlug: "nissan",
        modelSlug: "serena",
      },
    ],
  },
  {
    id: 4,
    carImage: "assets/images/deck/4.webp",
    carTitle: "クーペ",
    models: [
      {
        label: "トヨタ 86",
        makerSlug: "toyota",
        modelSlug: "86",
      },
      {
        label: "日産 フェアレディＺ",
        makerSlug: "nissan",
        modelSlug: "fairlady-z",
      },
      {
        label: "ポルシェ 911",
        makerSlug: "porsche",
        modelSlug: "911",
      },
    ],
  },
  {
    id: 5,
    carImage: "assets/images/deck/5.webp",
    carTitle: "ステーションワゴン",
    models: [
      {
        label: "トヨタ カローラツーリング",
        makerSlug: "toyota",
        modelSlug: "corolla-touring",
      },
      {
        label: "スバル レヴォーグ",
        makerSlug: "subaru",
        modelSlug: "levorg",
      },
      {
        label: "MINI MINI",
        makerSlug: "mini",
        modelSlug: "mini-others",
      },
    ],
  },
  {
    id: 6,
    carImage: "assets/images/deck/6.webp",
    carTitle: "SUV",
    models: [
      {
        label: "トヨタ ハリア",
        makerSlug: "toyota",
        modelSlug: "harrier",
      },
      {
        label: "日産 エクストレイル",
        makerSlug: "nissan",
        modelSlug: "x-trail",
      },
      {
        label: "レクサス RX",
        makerSlug: "lexus",
        modelSlug: "rx",
      },
    ],
  },
  {
    id: 7,
    carImage: "assets/images/deck/7.webp",
    carTitle: "セダン",
    models: [
      {
        label: "トヨタ クラウン",
        makerSlug: "toyota",
        modelSlug: "crown",
      },
      {
        label: "トヨタ プリウス",
        makerSlug: "toyota",
        modelSlug: "prius",
      },
      {
        label: "レクサス LS",
        makerSlug: "lexus",
        modelSlug: "ls",
      },
    ],
  },
  {
    id: 8,
    carImage: "assets/images/deck/8.webp",
    carTitle: "オープンカー",
    models: [
      {
        label: "ホンダ S660",
        makerSlug: "honda",
        modelSlug: "s660",
      },
      {
        label: "ダイハツ コペン",
        makerSlug: "daihatsu",
        modelSlug: "copen",
      },
      {
        label: "マツダ ロードスター",
        makerSlug: "mazda",
        modelSlug: "roadster",
      },
    ],
  },
];
</script>

<!-- <template>
  <div class="col-md-3 mb-2" v-for="car in popularCar" :key="car.id">
    <div class="cardDeckArea px-3 pt-3 pb-1">
      <div class="top d-flex align-items-center">
        <NuxtImg
          :src="car.carImage"
          alt="car"
          class="img-fluid"
          loading="lazy"
          width="46"
          height="32"
        />
        <p class="m-0 ms-3">{{ car.carTitle }}</p>
      </div>

      <div class="details">
        <ol class="px-3 pt-3">
          <li class="pt-3">{{ car.detail1 }}</li>
          <li class="pt-3">{{ car.detail2 }}</li>
          <li class="pt-3">{{ car.detail3 }}</li>
        </ol>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div
    class="col-md-3 mb-2"
    v-for="car in popularCar"
    :key="car.id"
  >
    <div class="cardDeckArea px-3 pt-3 pb-1">
      <div class="top d-flex align-items-center">
        <NuxtImg
          :src="car.carImage"
          alt="car"
          class="img-fluid"
          loading="lazy"
          width="46"
          height="32"
        />
        <p class="m-0 ms-3">{{ car.carTitle }}</p>
      </div>

      <div class="details">
        <ol class="px-3 pt-3">
          <li
            v-for="(model, index) in car.models"
            :key="index"
            class="pt-3"
          >
            <NuxtLink
              :to="`/search/mk-${model.makerSlug}/md-${model.modelSlug}`"
            >
              {{ model.label }}
            </NuxtLink>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>



<style scoped>
.popularCarRanking .cardDeckArea {
  background-color: #f6f6f6;
}
.popularCarRanking .cardDeckArea .top p {
  font-size: 13.5px;
  font-weight: 600;
  font-family: "Inter";
  color: #0f172a;
  line-height: 20px;
}
.popularCarRanking .cardDeckArea .details ol li {
  color: #154f74;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  font-family: "Inter";
}
.popularCarRanking .cardDeckArea .details ol li a{
  text-decoration: none;
  color: #154f74;
}
.popularCarRanking .cardDeckArea .details ol li:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  cursor: pointer;
}
</style>