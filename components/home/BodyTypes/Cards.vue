<script setup>
// 👇 Force artificial delay for suspense fallback to show

const bodyType = [
  {
    id: 1,
    carImge: `assets/images/cars-logo/1.webp`,
    carName: "SUV",
  },
  {
    id: 2,
    carImge: `assets/images/cars-logo/2.webp`,
    carName: "クーペ",
  },
  {
    id: 3,
    carImge: `assets/images/cars-logo/3.webp`,
    carName: "福祉車両",
  },
  {
    id: 4,
    carImge: `assets/images/cars-logo/4.webp`,
    carName: "ステーションワゴン",
  },
  {
    id: 5,
    carImge: `assets/images/cars-logo/5.webp`,
    carName: "ミニバン",
  },
  {
    id: 6,
    carImge: `assets/images/cars-logo/6.webp`,
    carName: "コンパクトカー",
    
  },
  {
    id: 7,
    carImge: `assets/images/cars-logo/7.webp`,
    carName: "EV",
    query:"?ev=1",
  },
  {
    id: 8,
    carImge: `assets/images/cars-logo/8.webp`,
    carName: "ハイブリッド h",
    query: "?hybrid=1",
  },
  {
    id: 9,
    carImge: `assets/images/cars-logo/9.webp`,
    carName: "オープンカー",
  },
  {
    id: 10,
    carImge: `assets/images/cars-logo/10.webp`,
    carName: "キャンピングカー",
    query:"?camper=1",
  },
  {
    id: 11,
    carImge: `assets/images/cars-logo/11.webp`,
    carName: "セダン",
  },
  {
    id: 12,
    carImge: `assets/images/cars-logo/12.webp`,
    carName: "軽自動車",
    query:"?light_automatic=1",
  },
  {
    id: 13,
    carImge: `assets/images/cars-logo/13.webp`,
    carName: "ハッチバック",
  },
  {
    id: 14,
    carImge: `assets/images/cars-logo/14.webp`,
    carName: "選び出す",
  },
  {
    id: 15,
    carImge: `assets/images/cars-logo/15.webp`,
    carName: "商用車",
    query:"?commercial=1",
  },
  {
    id: 16,
    carImge: `assets/images/cars-logo/16.webp`,
    carName: "トラック",
  },
];
</script>

<template>
  <div class="carsLogoArea text-center" v-for="bt in bodyType" :key="bt.id">
    <NuxtLink :to="`/search${bt.query}`">
      <NuxtImg
        :src="bt.carImge"
        :alt="bt.carName"
        class="img-fluid"
        width="46"
        height="32"
        layout="intrinsic"
      />
      <p class="m-0">{{ bt.carName }}</p>
    </NuxtLink>
  </div>
</template>


<style scoped>
.searchUsedCarByBody .CarBrandsSect .textRight p {
  font-size: 12px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16px;
  text-decoration: underline;
  cursor: pointer;
}

.searchUsedCarByBody .carsLogoSec .carsLogoArea {
  border: 1px solid #dcdae2;
  padding: 20px 0px;
  border-radius: 10.65px;
  width: 12%;
  cursor: pointer;
}
.searchUsedCarByBody .carsLogoSec .carsLogoArea a{
  text-decoration:none;
}
.searchUsedCarByBody .carsLogoSec .carsLogoArea:hover {
  background-color: #ecf5ff;
}
.searchUsedCarByBody .carsLogoSec .carsLogoArea:hover img {
  filter: brightness(0) saturate(100%) invert(42%) sepia(84%) saturate(490%)
    hue-rotate(159deg) brightness(92%) contrast(89%);
}
.searchUsedCarByBody .carsLogoSec .carsLogoArea p {
  color: #1e293b;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  padding: 5px 0px 0px 0px;
}
</style>