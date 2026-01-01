<script setup>
const state = reactive({
  HomeFavouritesSearch: [{}],
  newArrivals: [
    {
      id: 1,
      carName: "2022 トヨタ ランドクルーザー プラド T.x.",
      carImage: `assets/images/home/car.webp`,
      sale: "新年セール",
      location: "東京",
      priceTitle: "支払総額(税込)",
      price: "189.0",
      tax: "車両本体価格(税込)",
      taxPrice: "189.0",
      model: "年式",
      modalYear: "2025年(R07)",
      mileageTitle: "走行距離",
      mileage: "10kg",
    },
    {
      id: 2,
      carName: "2022 トヨタ ランドクルーザー プラド T.x.",
      carImage: `assets/images/home/car.webp`,
      sale: "新年セール",
      location: "東京",
      priceTitle: "支払総額(税込)",
      price: "189.0",
      tax: "車両本体価格(税込)",
      taxPrice: "189.0",
      model: "年式",
      modalYear: "2025年(R07)",
      mileageTitle: "走行距離",
      mileage: "10kg",
    },
    {
      id: 3,
      carName: "2022 トヨタ ランドクルーザー プラド T.x.",
      carImage: `assets/images/home/car.webp`,
      sale: "新年セール",
      location: "東京",
      priceTitle: "支払総額(税込)",
      price: "189.0",
      tax: "車両本体価格(税込)",
      taxPrice: "189.0",
      model: "年式",
      modalYear: "2025年(R07)",
      mileageTitle: "走行距離",
      mileage: "10kg",
    },
    {
      id: 4,
      carName: "2022 トヨタ ランドクルーザー プラド T.x.",
      carImage: `assets/images/home/car.webp`,
      sale: "新年セール",
      location: "東京",
      priceTitle: "支払総額(税込)",
      price: "189.0",
      tax: "車両本体価格(税込)",
      taxPrice: "189.0",
      model: "年式",
      modalYear: "2025年(R07)",
      mileageTitle: "走行距離",
      mileage: "10kg",
    },
  ],
  findCarsUsingKeywords: [
    {
      id: 1,
      value: "アイサイト",
    },
    {
      id: 2,
      value: "衝突防止",
    },
    {
      id: 3,
      value: "電気自動車",
    },
    {
      id: 4,
      value: "PHV",
    },
    {
      id: 5,
      value: "クリーンディーゼル",
    },
    {
      id: 6,
      value: "アラウンドビューモニター",
    },
    {
      id: 7,
      value: "自動ブレーキ",
    },
    {
      id: 8,
      value: "未使用車",
    },
    {
      id: 9,
      value: "自動運転",
    },
    {
      id: 10,
      value: "福祉車両",
    },
    {
      id: 11,
      value: "ハイブリッド",
    },
  ],

  usedCarRankings: [
    {
      id: 1,
      carImage: "assets/images/cars/1.png",
      carName: "トヨタ ヴォクシー",
      makerSlug: "toyota",
      modelSlug: "voxy",
    },
    {
      id: 2,
      carImage: "assets/images/cars/2.png",
      carName: "トヨタ プリウス",
      makerSlug: "toyota",
      modelSlug: "prius",
    },
    {
      id: 3,
      carImage: "assets/images/cars/3.png",
      carName: "ホンダ N-BOX",
      makerSlug: "honda",
      modelSlug: "n-box",
    },
    {
      id: 4,
      carImage: "assets/images/cars/4.png",
      carName: "スズキ ハスラー",
      makerSlug: "suzuki",
      modelSlug: "hustler",
    },
    {
      id: 5,
      carImage: "assets/images/cars/5.png",
      carName: "トヨタ アクア",
      makerSlug: "toyota",
      modelSlug: "aqua",
    },
  ],
  furtherReading: {
    catalog: [],
    usedCarMarketPrice: [],
    fuelEfficientVehicles: [],
    aboutSat: [],
  },
});

useHead({
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});
</script>
<template>
  <div>
    <LazyHomeHeroSection />
    <!-- <div class="onlyMobile md:block">
      <LazyMobileHeaderForm />
    </div> -->
    <LazyHomeFavourite />
    <ClientOnly>
      <LazyCommonFindManufacturer />
    </ClientOnly>

    <LazyCommonCarsArrival title="新着" :arrivals="state.newArrivals" />
    <div class="hidden md:block">
      <LazyCommonCarsArrival title="人気の車" :arrivals="state.newArrivals" />
    </div>
    <!-- 
    <div class="onlyMobile md:block">
      <LazyMobileBrowseringHistory />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobileSearchManufacture />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobileSearchCondition />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobilePopularUsedCar />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobileCommonArrivels />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobilePrefectures />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobileSearchByKeywords />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobilePopularCarRank />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobileCustomerReview />
    </div>
    <div class="onlyMobile md:block">
      <LazyMobileAutoMobile />
    </div>-->
    <ClientOnly>
      <LazyCommonSearchUsedCarByBody />
    </ClientOnly>
    <LazyCommonSearchByPrefecture :prefecture="state.searchByPrefecture" />
    <ClientOnly>
      <LazyCommonSearchByConditions />
    </ClientOnly>
    <ClientOnly>
      <LazyHomeFindCarsUsingKeywords
        :keywordSearch="state.findCarsUsingKeywords"
      />
    </ClientOnly>
    <ClientOnly>
      <LazyHomeUsedCarPopularityRankingsByManufacturer
        :rankingCars="state.usedCarRankings"
      />
    </ClientOnly>
    <ClientOnly>
      <LazyCommonPopularCarRanking />
    </ClientOnly>

    <ClientOnly>
      <LazyCommonCustomerReviews />
    </ClientOnly>

    <ClientOnly>
      <LazyCommonDailyCar />
    </ClientOnly>

    <ClientOnly>
      <LazyCommonOtherContent />
    </ClientOnly>
  </div>
</template>

<style scoped>
.onlyMobile {
  display: none;
}
@media (max-width: 991px) {
  .hidden {
    display: none;
  }
  .onlyMobile {
    display: block;
  }
}
</style>
