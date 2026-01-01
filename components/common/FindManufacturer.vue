<script setup>
</script>
<template>
  <div>
    <div class="findManufacture desktop-view">
      <div class="container">
        <div class="row my-4">
          <div class="col-md-12">
            <div class="brands-title mb-4">
              <LazyCommonHeading title="メーカーから探す" />
            </div>
            <div class="brand-cat-title d-flex justify-content-between">
              <div class="title">
                <p class="m-0">国産車メーカー</p>
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
                <!-- <p class="m-0">もっと見る </p> -->
                <NuxtLink to="/search?domestic=1">
                  <p class="m-0">もっと見る</p>
                </NuxtLink>
              </div>
            </div>

            <div class="brand-logos d-flex justify-content-between my-3 mx-4">
              <LazyHomeManufacturesTypesDomestic />
            </div>

            <div class="brand-cat-title d-flex justify-content-between mt-4">
              <div class="title">
                <p class="m-0">輸入車メーカー</p>
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
                <!-- <p class="m-0">もっと見る</p> -->
                <NuxtLink to="/search?imported=1">
                  <p class="m-0">もっと見る</p>
                </NuxtLink>
              </div>
            </div>

            <div class="brand-logos d-flex justify-content-between my-3 mx-4">
              <LazyHomeManufacturesTypesImported />
            </div>
          </div>
        </div>
      </div>
    </div>
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