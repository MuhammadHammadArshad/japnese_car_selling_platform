<script setup>
</script>
<template>
  <div class="searchUsedCarByBody desktop-view">
    <div class="container">
      <div class="row">
        <div class="CarBrandsSect d-flex justify-content-between">
          <div class="title">
            <CommonHeading
              title="ボディタイプから中古車を探す"
              class="m-0"
            />
          </div>
          <div
            class="textRight d-flex justify-content-between align-items-center"
          >
            <NuxtImg
              src="/assets/images/home/arrow-right-circle.webp"
              class="img-fluid"
              alt="arrow"
              width="24"
              height="24"
              loading="lazy"
            />
            <p class="m-0">もっと見る</p>
          </div>
        </div>

        <div class="carsLogoSec row row-cols-2 row-cols-md-8 g-3 m-0 gap-1">
          <LazyHomeBodyTypesCards />
        </div>
      </div>
    </div>
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