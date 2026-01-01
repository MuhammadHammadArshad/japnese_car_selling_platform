<script setup lang="ts">
const domestic = [
  {
    id: 1,
    carName: "レクサス",
    carImage: "/assets/images/brands/1.webp",
    slug: "mk-lexus",
  },
  {
    id: 2,
    carName: "トヨタ",
    carImage: "/assets/images/brands/2.webp",
    slug: "mk-toyota",
  },
  {
    id: 3,
    carName: "ホンダ",
    carImage: "/assets/images/brands/3.webp",
    slug: "mk-honda",
  },
  {
    id: 4,
    carName: "日産",
    carImage: "/assets/images/brands/4.webp",
    slug: "mk-nissan",
  },
  {
    id: 5,
    carName: "鈴木",
    carImage: "/assets/images/brands/5.webp",
    slug: "mk-suzuki",
  },
  {
    id: 6,
    carName: "ダイハツ",
    carImage: "/assets/images/brands/6.webp",
    slug: "mk-daihatsu",
  },
  {
    id: 7,
    carName: "マツダ",
    carImage: "/assets/images/brands/7.webp",
    slug: "mk-mazda",
  },
  {
    id: 8,
    carName: "スバル",
    carImage: "/assets/images/brands/8.webp",
    slug: "mk-subaru",
  },
  {
    id: 9,
    carName: "三菱",
    carImage: "/assets/images/brands/9.webp",
    slug: "mk-mitsubishi",
  },
];
</script>

<template>
  <div class="logoArea" v-for="car in domestic" :key="car.id">
  
    <NuxtLink :to="`/search/${car.slug}`">
      <NuxtImg
        :src="car.carImage"
        :alt="car.carName"
        width="51"
        height="51"
        loading="lazy"
      />
      <p>{{ car.carName }}</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
.logoArea {
  text-align: center;
  cursor: pointer;
}
.logoArea a{
  text-decoration: none;
}

.logoArea p {
  font-size: 13.52px;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 600;
  line-height: 23.66px;
}

.logoArea img:hover {
  opacity: 0.5;
}
</style>
