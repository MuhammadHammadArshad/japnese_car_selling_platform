<template>
  <div>
    <div class="carArrival desktop-view">
      <div class="container">
        <div class="row">
          <div class="titleCars mb-3">
            <!-- <p class="m-0">{{ title || 'no title found' }}</p> -->
            <CommonHeading :title="title" />
          </div>

          <div
            class="col-12 col-md-3 mb-3 hoverShadow"
            v-for="arr in arrivals"
            :key="arr.id"
          >
            <div class="left py-3">
              <div class="center mb-3">
                <NuxtImg
                  :src="arr.carImage"
                  class="img-fluid w-100"
                  alt="Car"
                  loading="lazy"
                />
              </div>

              <div
                class="bottom-car d-flex justify-content-between align-items-center"
              >
                <p class="m-0 left">{{ arr.sale }}</p>
                <p class="m-0 right">{{ arr.location }}</p>
              </div>
              <div class="bottom-car-title my-2">
                <p class="m-0">{{ arr.carName }}</p>
              </div>
              <div
                class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
              >
                <p class="m-0 left">{{ arr.tax }}</p>
                <p class="m-0 right">
                  {{ arr.taxPrice }} <span class="sub">百万 円</span>
                </p>
              </div>
              <div
                class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
              >
                <p class="m-0 left">{{ arr.priceTitle }}</p>
                <p class="m-0 right" style="color: #d92d20">
                  {{ arr.price }} <span class="sub">百万 円</span>
                </p>
              </div>
              <div
                class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
              >
                <p class="m-0 left">{{ arr.model }}</p>
                <p class="m-0 right-pan">{{ arr.modalYear }}</p>
              </div>
              <div
                class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
              >
                <p class="m-0 left">{{ arr.mileageTitle }}</p>
                <p class="m-0 right-pan">{{ arr.mileage }}</p>
              </div>
            </div>
          </div>

          <div
            class="textLink d-flex justify-content-center align-items-center mb-3"
          >
            <NuxtImg
              src="/assets/images/home/arrow-right-circle.webp"
              class="img-fluid"
              alt="arrow"
              width="24"
              height="24"
              loading="lazy"
            />
            <p class="m-0 mx-2">{{ moveNext || "not found" }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ================== Mobile View =================-->
    <div class="favourites mobile_view">
      <div class="inner">
        <p class="title m-3">お気に入り</p>

        <div class="swiper favSwiper m-3">
          <div class="swiper-wrapper">
            <div class="swiper-slide rounded-2">
              <div class="top mb-2">
                <img
                  src="/assets/images/mobile/header/suv.webp"
                  alt="suv"
                  class="img-fluid"
                />
              </div>

              <div class="details w-100">
                <div
                  class="tags d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">新年セール</p>
                  <p class="m-0 right">東京</p>
                </div>

                <div class="heading my-2">
                  <p class="m-0 text-start">
                    2022 トヨタ ランドクルーザー プラド T.x.
                  </p>
                </div>

                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">車両本体価格(税込)</p>
                  <p class="m-0 right">
                    <span class="bold">189.0</span> 百万 円
                  </p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">支払総額(税込)</p>
                  <p class="m-0 right">
                    <span class="bold2">189.0</span> 百万 円
                  </p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">年式</p>
                  <p class="m-0 right">2025年(R07)</p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">走行距離</p>
                  <p class="m-0 right">10キロ</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide rounded-2">
              <div class="top mb-2">
                <img
                  src="/assets/images/mobile/header/suv.webp"
                  alt="suv"
                  class="img-fluid"
                />
              </div>

              <div class="details w-100">
                <div
                  class="tags d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">新年セール</p>
                  <p class="m-0 right">東京</p>
                </div>

                <div class="heading my-2">
                  <p class="m-0 text-start">
                    2022 トヨタ ランドクルーザー プラド T.x.
                  </p>
                </div>

                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">車両本体価格(税込)</p>
                  <p class="m-0 right">
                    <span class="bold">189.0</span> 百万 円
                  </p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">支払総額(税込)</p>
                  <p class="m-0 right">
                    <span class="bold2">189.0</span> 百万 円
                  </p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">年式</p>
                  <p class="m-0 right">2025年(R07)</p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">走行距離</p>
                  <p class="m-0 right">10キロ</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide rounded-2">
              <div class="top mb-2">
                <img
                  src="/assets/images/mobile/header/suv.webp"
                  alt="suv"
                  class="img-fluid"
                />
              </div>

              <div class="details w-100">
                <div
                  class="tags d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">新年セール</p>
                  <p class="m-0 right">東京</p>
                </div>

                <div class="heading my-2">
                  <p class="m-0 text-start">
                    2022 トヨタ ランドクルーザー プラド T.x.
                  </p>
                </div>

                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">車両本体価格(税込)</p>
                  <p class="m-0 right">
                    <span class="bold">189.0</span> 百万 円
                  </p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">支払総額(税込)</p>
                  <p class="m-0 right">
                    <span class="bold2">189.0</span> 百万 円
                  </p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">年式</p>
                  <p class="m-0 right">2025年(R07)</p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">走行距離</p>
                  <p class="m-0 right">10キロ</p>
                </div>
              </div>
            </div>

            <div class="swiper-slide rounded-2">
              <div class="top mb-2">
                <img
                  src="/assets/images/mobile/header/suv.webp"
                  alt="suv"
                  class="img-fluid"
                />
              </div>

              <div class="details w-100">
                <div
                  class="tags d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">新年セール</p>
                  <p class="m-0 right">東京</p>
                </div>

                <div class="heading my-2">
                  <p class="m-0 text-start">
                    2022 トヨタ ランドクルーザー プラド T.x.
                  </p>
                </div>

                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">車両本体価格(税込)</p>
                  <p class="m-0 right">
                    <span class="bold">189.0</span> 百万 円
                  </p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">支払総額(税込)</p>
                  <p class="m-0 right">
                    <span class="bold2">189.0</span> 百万 円
                  </p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">年式</p>
                  <p class="m-0 right">2025年(R07)</p>
                </div>
                <div
                  class="textDetails d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">走行距離</p>
                  <p class="m-0 right">10キロ</p>
                </div>
              </div>
            </div>
          </div>
          <!-- {{-- <div class="swiper-pagination"></div> --}} -->
        </div>

        <div
          class="moveTonext d-flex justify-content-center align-items-center"
        >
          <img
            src="/assets/images/mobile/header/arrow.webp"
            alt="Arrow"
            class="img-fluid"
            loading="lazy"
            width="14"
            height="14"
          />
          <p class="m-0 px-1">もっと見る</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "新着",
  },
  moveNext: {
    type: String,
    default: "新着車をすべて見る",
  },
  arrivals: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>

<style scoped>
.carArrival .titleCars p {
  font-size: 20.21px;
  color: #353c4d;
  font-family: "Sofia-Pro";
  font-weight: 600;
  line-height: 24.27px;
}
.carArrival .hoverShadow:hover {
  background: #f6f6f6;
  border-radius: 12px;
  cursor: pointer;
}
.carArrival .left .bottom-car .left {
  background-color: #ff4b44;
  color: white;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
  padding: 4px 10px;
}
.carArrival .left .bottom-car .right {
  color: #0c1529;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
}
.carArrival .left .bottom-car-title p {
  color: #1e293b;
  font-size: 13.5px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 20px;
}
.carArrival .left .bottom-car-details .left {
  color: #0c1529;
  font-size: 12px;
  font-weight: 400;
  font-family: "Inter";
  line-height: 16px;
}
.carArrival .left .bottom-car-details .right {
  color: #0c1529;
  font-size: 14.8px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 23.12px;
}
.carArrival .left .bottom-car-details .sub {
  color: #1e293b;
  font-size: 10.57px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 19.27px;
}
.carArrival .left .bottom-car-details .right-pan {
  color: #1e293b;
  font-size: 12.69px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 19.03px;
}
.carArrival .textLink p {
  font-size: 12.69px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16.96px;
  text-decoration: underline;
  cursor: pointer;
}

/* Favourites Component Css for Mobile */
.favourites .swiper-wrapper {
  display: flex;
  align-items: center;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 6px;
  white-space: nowrap;
}
.favourites .inner .title {
  color: #020408;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

.favourites .swiper {
  width: 100%;
  height: 100%;
}

.favourites .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  flex-direction: column;
}

.favourites .inner .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.favourites .inner .favSwiper .swiper-wrapper .swiper-slide {
  border: 1px solid #cbd5e1;
  /* width: 180px; */
}
.favourites
  .inner
  .favSwiper
  .swiper-wrapper
  .swiper-slide
  .details
  .tags
  .left {
  background-color: #ff4b44;
  color: white;
  font-size: 9.7px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 12.93px;
  border-radius: 50px;
  padding: 2px 5px 0px 5px;
}
.favourites
  .inner
  .favSwiper
  .swiper-wrapper
  .swiper-slide
  .details
  .tags
  .right {
  color: #0c1529;
  font-size: 9.7px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 12.93px;
}
.favourites .inner .favSwiper .swiper-wrapper .swiper-slide .details .heading {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 600;
  font-size: 9.7px;
  line-height: 12.93px;
}
.favourites
  .inner
  .favSwiper
  .swiper-wrapper
  .swiper-slide
  .details
  .textDetails
  .left {
  color: #1e293b;
  font-size: 9.7px;
  font-weight: 400;
  font-family: "Inter";
  line-height: 12.93px;
}
.favourites
  .inner
  .favSwiper
  .swiper-wrapper
  .swiper-slide
  .details
  .textDetails
  .right {
  font-family: "Inter";
  font-weight: 500;
  font-size: 8.55px;
  line-height: 15.58px;
  color: #1e293b;
}
.favourites
  .inner
  .favSwiper
  .swiper-wrapper
  .swiper-slide
  .details
  .textDetails
  .right
  .bold {
  font-family: "Inter";
  font-weight: 700;
  font-size: 11.97px;
  line-height: 18.69px;
  color: #1e293b;
}
.favourites
  .inner
  .favSwiper
  .swiper-wrapper
  .swiper-slide
  .details
  .textDetails
  .right
  .bold2 {
  font-family: "Inter";
  font-weight: 700;
  font-size: 11.97px;
  line-height: 18.69px;
  color: #d92d20;
}
.favourites .inner .moveTonext p {
  font-size: 12px;
  font-family: "Inter";
  font-weight: 500;
  line-height: 18px;
  color: #2f2f2f;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}
</style>
