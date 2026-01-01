<script setup>
const Imported = [
    { id: 1, carName: "メルセデス", carImage: "/assets/images/brands/10.webp", slug: "mk-mcc" },
  { id: 2, carName: "BMW", carImage: "/assets/images/brands/11.webp", slug: "mk-bmw" },
  { id: 3, carName: "フォルクスワーゲン", carImage: "/assets/images/brands/12.webp", slug: "mk-volkswagen" },
  { id: 4, carName: "アウディ", carImage: "/assets/images/brands/13.webp", slug: "mk-audi" },
  { id: 5, carName: "ミニ", carImage: "/assets/images/brands/14.webp", slug: "mk-mini" },
  { id: 6, carName: "ポルシェ", carImage: "/assets/images/brands/15.webp", slug: "mk-porsche" },
  { id: 7, carName: "ウーリン", carImage: "/assets/images/brands/16.webp", slug: "mk-jaguar" },
  { id: 8, carName: "プジョー", carImage: "/assets/images/brands/17.webp", slug: "mk-peugeot" },
  { id: 9, carName: "テスラ", carImage: "/assets/images/brands/18.webp", slug: "mk-tesla" },
];
</script>

<template>
  <div class="logoArea" v-for="car in Imported" :key="car.id">
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
.findManufacture .brands-title p {
  color: #020408;
  font-size: 24px;
  font-weight: 600;
  font-family: "Sofia-Pro";
  line-height: 28.82px;
}
.findManufacture .brand-cat-title .title p {
  color: #020408;
  font-size: 20px;
  font-weight: 400;
  font-family: "Inter";
  line-height: 28px;
}
.findManufacture .brand-cat-title .textRight p {
  font-size: 12px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16px;
  text-decoration: underline;
  cursor: pointer;
}
.findManufacture .brand-logos .logoArea {
  text-align: center;
  cursor: pointer;
}
.findManufacture .brand-logos .logoArea a{
  text-decoration: none;
}

.findManufacture .brand-logos .logoArea p {
  font-size: 13.52px;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 600;
  line-height: 23.66px;
}
.findManufacture .brand-logos .logoArea img:hover {
  opacity: 0.5;
}
</style>
