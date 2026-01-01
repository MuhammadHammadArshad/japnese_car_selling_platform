<template>
  <div>
    <div class="mobile_view">
      <div class="browsingHistory">
        <div class="inner">
          <p class="title m-3">お気に入り</p>

          <div class="swiper favSwiper m-3">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
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
                </div>
              </div>
              <div class="swiper-slide">
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
                </div>
              </div>

              <div class="swiper-slide">
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
  </div>
</template>

<script setup></script>

<style scoped>
.mobile_view .swiper-wrapper {
  display: flex;
  align-items: center;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 6px;
  white-space: nowrap;
}
.mobile_view .browsingHistory .inner .title {
  color: #020408;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

.mobile_view .browsingHistory .swiper {
  width: 100%;
  height: 100%;
}

.mobile_view .browsingHistory .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  flex-direction: column;
}

.mobile_view .browsingHistory .inner .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.mobile_view .browsingHistory .inner .favSwiper .swiper-wrapper .swiper-slide {
  background-color: #f6f6f8;
  width: 240px !important;
}
.mobile_view
  .browsingHistory
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
.mobile_view
  .browsingHistory
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
.mobile_view
  .browsingHistory
  .inner
  .favSwiper
  .swiper-wrapper
  .swiper-slide
  .details
  .heading {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 600;
  font-size: 9.7px;
  line-height: 12.93px;
}

.mobile_view .browsingHistory .inner .moveTonext p {
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
