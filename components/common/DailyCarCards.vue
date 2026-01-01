<script setup>
const autoCar = [
  {
    id: 1,
    image: `assets/images/home/InvestCard.webp`,
    title: "NHTSA Investigates Chevrolet Volt Over Sudden Power Loss",
    dated: "Jan 10, 1024",
  },
  {
    id: 2,
    image: `assets/images/home/InvestCard.webp`,
    title: "NHTSA Investigates Chevrolet Volt Over Sudden Power Loss",
    dated: "Jan 10, 1024",
  },
  {
    id: 3,
    image: `assets/images/home/InvestCard.webp`,
    title: "NHTSA Investigates Chevrolet Volt Over Sudden Power Loss",
    dated: "Jan 10, 1024",
  },
  {
    id: 4,
    image: `assets/images/home/InvestCard.webp`,
    title: "NHTSA Investigates Chevrolet Volt Over Sudden Power Loss",
    dated: "Jan 10, 1024",
  },
];
</script>

<template>
  <div class="col" v-for="daily in autoCar" :key="daily.id">
    <div class="investCardArea">
      <NuxtImg
        :src="daily.image"
        alt="Card"
        class="img-fluid mb-2"
        loading="lazy"
        width="216"
        height="190"
      />
      <p class="title m-0 mb-2">{{ daily.title }}</p>
      <p class="tag m-0">{{ daily.dated }}</p>
    </div>
  </div>
</template>

<style scoped>
.dailyCar .investCardArea {
  cursor: pointer;
}
.dailyCar .investCardArea .title {
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #0c1529;
}
.dailyCar .investCardArea .tag {
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 20px;
  color: #757575;
}
</style>
