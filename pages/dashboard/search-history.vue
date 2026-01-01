<script setup>
definePageMeta({
  layout: "dashboard",
  breadcrumb: "検索履歴",
  //TODO: middleware: 'auth'
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
    <div class="search-history-desktop desktop-view">
      <div class="inner">
        <div class="topHead d-flex justify-content-around align-items-center">
          <p class="m-0">検索日時</p>
          <p class="m-0">検索条件</p>
          <p class="m-0">通知</p>
        </div>

        <div
          class="history-section d-flex justify-content-around align-items-center border rounded-1 my-4"
        >
          <div class="left">
            <p class="m-0">2025/04/07</p>
          </div>
          <div class="center">
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/car.webp"
                alt="car"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/map-pin.webp"
                alt="map"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">東京都</p>
            </div>
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/money-currency.webp"
                alt="currency"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
            <div class="list d-flex align-items-center gap-2 my-2">
              <NuxtImg
                src="/assets/icons/more.webp"
                alt="more"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
          </div>
          <div class="right">
            <button type="button" class="btn btn-submit">新着メール受信</button>
          </div>
        </div>

        <div
          class="history-section d-flex justify-content-around align-items-center border rounded-1 my-4"
        >
          <div class="left">
            <p class="m-0">2025/04/07</p>
          </div>
          <div class="center">
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/car.webp"
                alt="car"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/map-pin.webp"
                alt="map"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">東京都</p>
            </div>
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/money-currency.webp"
                alt="currency"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
            <div class="list d-flex align-items-center gap-2 my-2">
              <NuxtImg
                src="/assets/icons/more.webp"
                alt="more"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
          </div>
          <div class="right">
            <button type="button" class="btn btn-submit">新着メール受信</button>
          </div>
        </div>

        <div
          class="history-section d-flex justify-content-around align-items-center border rounded-1 my-4"
        >
          <div class="left">
            <p class="m-0">2025/04/07</p>
          </div>
          <div class="center">
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/car.webp"
                alt="car"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/map-pin.webp"
                alt="map"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">東京都</p>
            </div>
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/money-currency.webp"
                alt="currency"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
            <div class="list d-flex align-items-center gap-2 my-2">
              <NuxtImg
                src="/assets/icons/more.webp"
                alt="more"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
          </div>
          <div class="right">
            <button type="button" class="btn btn-submit">新着メール受信</button>
          </div>
        </div>

        <div
          class="history-section d-flex justify-content-around align-items-center border rounded-1 my-4"
        >
          <div class="left">
            <p class="m-0">2025/04/07</p>
          </div>
          <div class="center">
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/car.webp"
                alt="car"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/map-pin.webp"
                alt="map"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">東京都</p>
            </div>
            <div class="list d-flex align-items-center gap-2 mt-2">
              <NuxtImg
                src="/assets/icons/money-currency.webp"
                alt="currency"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
            <div class="list d-flex align-items-center gap-2 my-2">
              <NuxtImg
                src="/assets/icons/more.webp"
                alt="more"
                class="img-fluid"
                loading="lazy"
                width="18"
                height="18"
              />
              <p class="m-0">未設定</p>
            </div>
          </div>
          <div class="right">
            <button type="button" class="btn btn-submit">新着メール受信</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-history-desktop .inner .topHead {
  background-color: #f6f6f8;
  border: 1px solid #dfdddd;
  padding: 8px 24px;
}
.search-history-desktop .inner .topHead p {
  color: #475569;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search-history-desktop .inner .left p {
  color: #08202e;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search-history-desktop .inner .center .list p {
  color: #08202e;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search-history-desktop .inner .right .btn-submit {
  border: 1px solid #d0d5dd;
  padding: 9px 30px;
  border-radius: 0px;
  color: #08202e;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
</style>