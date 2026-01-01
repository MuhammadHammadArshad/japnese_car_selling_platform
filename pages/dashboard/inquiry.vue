<script setup>
definePageMeta({
  layout: "dashboard",
  breadcrumb: "お問い合わせ履歴",
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
    <div class="searchStand-desktop desktop-view">
      <div class="container-fluid">
        <div class="row">
          <div class="searchListCar">
            <div class="carListSection d-flex mt-4 rounded-1">
              <div class="col-md-3">
                <div class="top">
                  <NuxtImg
                    src="/assets/images/inquiryCar.webp"
                    alt="car"
                    class="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
              <div class="col-md-9">
                <div
                  class="topRight d-flex justify-content-between align-items-center"
                >
                  <div class="center d-flex gap-2 mx-2">
                    <div class="left d-flex align-items-center gap-2">
                      <p class="m-0">車両品質評価書付き</p>
                    </div>
                    <div class="right">
                      <p class="m-0">ディーラー保証</p>
                    </div>
                  </div>
                </div>

                <div class="heading">
                  <p class="mx-2 mb-0 mt-2">
                    ハスラー 660 ハイブリッド G 届出済未使用車 現行型
                  </p>
                </div>

                <div class="modelYear d-flex mx-2 justify-content-between">
                  <div class="left w-50">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td class="model">年式</td>
                          <td class="year">2025 (R07)</td>
                          <td class="model">走行距離</td>
                          <td class="year">5km</td>
                        </tr>
                        <tr>
                          <td class="model">車検</td>
                          <td class="year">2026年8月</td>
                          <td class="model">修復歴</td>
                          <td class="year">インパネCVT</td>
                        </tr>
                        <tr>
                          <td class="model">排気量</td>
                          <td class="year">660CC</td>
                          <td class="model">修復歴</td>
                          <td class="year">なし</td>
                        </tr>
                        <tr>
                          <td class="model">燃料</td>
                          <td class="year">ガソリン</td>
                          <td class="model">在庫ID</td>
                          <td class="year">sat:5412542</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="right w-50 ps-4">
                    <div class="top d-flex gap-4 mt-3">
                      <div class="totalPayment p-2">
                        <p class="m-0 title pb-2">支払総額</p>
                        <p class="m-0 amount">
                          149.9 <span class="yen">万円</span>
                        </p>
                      </div>
                      <div class="vehicalePrice p-2">
                        <p class="m-0 title pb-2">車両本体価格</p>
                        <p class="m-0 amount">
                          149.9 <span class="yen">万円</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="searchListCar">
            <div class="carListSection d-flex mt-4 rounded-1">
              <div class="col-md-3">
                <div class="top">
                  <NuxtImg
                    src="/assets/images/inquiryCar.webp"
                    alt="car"
                    class="img-fluid"
                    loading="lazy"
                  />
                </div>
              </div>
              <div class="col-md-9">
                <div
                  class="topRight d-flex justify-content-between align-items-center"
                >
                  <div class="center d-flex gap-2 mx-2">
                    <div class="left d-flex align-items-center gap-2">
                      <p class="m-0">車両品質評価書付き</p>
                    </div>
                    <div class="right">
                      <p class="m-0">ディーラー保証</p>
                    </div>
                  </div>
                </div>

                <div class="heading">
                  <p class="mx-2 mb-0 mt-2">
                    ハスラー 660 ハイブリッド G 届出済未使用車 現行型
                  </p>
                </div>

                <div class="modelYear d-flex mx-2 justify-content-between">
                  <div class="left w-50">
                    <table class="table table-borderless mb-0">
                      <tbody>
                        <tr>
                          <td class="model">年式</td>
                          <td class="year">2025 (R07)</td>
                          <td class="model">走行距離</td>
                          <td class="year">5km</td>
                        </tr>
                        <tr>
                          <td class="model">車検</td>
                          <td class="year">2026年8月</td>
                          <td class="model">修復歴</td>
                          <td class="year">インパネCVT</td>
                        </tr>
                        <tr>
                          <td class="model">排気量</td>
                          <td class="year">660CC</td>
                          <td class="model">修復歴</td>
                          <td class="year">なし</td>
                        </tr>
                        <tr>
                          <td class="model">燃料</td>
                          <td class="year">ガソリン</td>
                          <td class="model">在庫ID</td>
                          <td class="year">sat:5412542</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="right w-50 ps-4">
                    <div class="top d-flex gap-4 mt-3">
                      <div class="totalPayment p-2">
                        <p class="m-0 title pb-2">支払総額</p>
                        <p class="m-0 amount">
                          149.9 <span class="yen">万円</span>
                        </p>
                      </div>
                      <div class="vehicalePrice p-2">
                        <p class="m-0 title pb-2">車両本体価格</p>
                        <p class="m-0 amount">
                          149.9 <span class="yen">万円</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.searchStand-desktop {
  height: 70vh;
}
.searchStand-desktop .searchListCar .carListSection {
  border: 1px solid #cbd5e1;
  padding: 10px;
}
.searchStand-desktop .searchListCar .carListSection .topRight .center .left {
  background-color: #f1892b;
  color: white;
  border-radius: 50px;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 16px;
}
.searchStand-desktop .searchListCar .carListSection .topRight .center .right {
  background-color: #a576f1;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50px;
  padding: 3px 10px;
  line-height: 16px;
}
.searchStand-desktop .searchListCar .carListSection .heading {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
.searchStand-desktop .searchListCar .carListSection .modelYear .left .table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .left
  .table
  .model {
  background-color: #f6f6f8;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .left
  .table
  .year {
  font-weight: 500;
  color: #334155;
  font-size: 12px;
  line-height: 18px;
  font-family: "Inter";
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .left
  .table
  > :not(caption)
  > *
  > * {
  padding: 3px 10px 0px 13px;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .right
  .totalPayment {
  background-color: #ecf5ff;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .right
  .totalPayment
  .title {
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 20px;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .right
  .totalPayment
  .amount {
  font-size: 28px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #2384c1;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .right
  .totalPayment
  .yen {
  font-size: 18px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 28px;
  color: #0f172a;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .right
  .vehicalePrice {
  background-color: #f6f6f8;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .right
  .vehicalePrice
  .title {
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 20px;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .right
  .vehicalePrice
  .amount {
  font-size: 28px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #334155;
}
.searchStand-desktop
  .searchListCar
  .carListSection
  .modelYear
  .right
  .vehicalePrice
  .yen {
  font-size: 18px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 28px;
  color: #0f172a;
}
</style>