<script setup>
defineProps({
  title: {
    type: String,
    default: "メーカー別人気中古車ランキング",
  },
  rankingCars: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="usedCarPopularityRankingsByManufacturer desktop-view">
      <div class="container">
        <div class="row">
          <div class="sliderCar">
            <CommonHeading :title="title" />
            <p class="m-0 para">
              クルマ情報（中古車両）のメーカー別ランキングをご紹介します。
            </p>
          </div>

          <div class="carsSection d-flex justify-content-between my-5">
            <div class="carsArea text-center" v-for="cars in rankingCars" :key="cars.id">
              <!-- <NuxtImg
                :src="cars.carImage"
                alt="car"
                class="img-fluid"
                width="166"
                height="85"
                loading="lazy"
              />
              <p class="m-0">{{ cars.carName }}</p> -->
              <NuxtLink
                :to="`/search/mk-${cars.makerSlug}/md-${cars.modelSlug}`"
              >
                <NuxtImg
                  :src="cars.carImage"
                  alt="car"
                  class="img-fluid"
                  width="166"
                  height="85"
                  loading="lazy"
                />
                <p class="m-0">{{ cars.carName }}</p>
              </NuxtLink>
            </div>
          </div>

          <div
            class="textLink d-flex justify-content-center align-items-center"
          >
            <NuxtImg
              src="/assets/images/home/arrow-right-circle.webp"
              class="img-fluid"
              alt="arrow"
              width="24"
              height="24"
              loading="lazy"
            />
            <p class="m-0 mx-2">スズキの人気ランキングを見る</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.usedCarPopularityRankingsByManufacturer .sliderCar .para {
  color: #020408;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}
.usedCarPopularityRankingsByManufacturer .carsSection .carsArea {
  cursor: pointer;
}
.usedCarPopularityRankingsByManufacturer .carsSection .carsArea a{
  text-decoration: none;
}
.usedCarPopularityRankingsByManufacturer .carsSection .carsArea p {
  color: #020408;
  font-weight: 700;
  font-size: 14.21px;
  line-height: 20.53px;
  padding: 4px 0px;
}
.usedCarPopularityRankingsByManufacturer .textLink p {
  font-size: 12.69px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16.96px;
  text-decoration: underline;
  cursor: pointer;
}
</style>