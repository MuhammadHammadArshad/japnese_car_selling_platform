<template>
  <div>
    <div class="desktop-view">
      <div class="search-details">
        <LazyCommonBreadCrumbs />
        <div class="topHeading">
          <div class="container">
            <p class="m-0 title">
              {{ car.search_text }}
              <!-- <span
              >660 M バックカメラ シートヒーター オーディオ（ブラック）</span
            > -->
            </p>

            <div class="bottomSection d-flex align-items-center gap-3 py-2">
              <div class="left d-flex align-items-center gap-2">
                <img
                  src="/assets/images/icons/coin.webp"
                  alt="coin"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0">100 ロイヤルティポイント</p>
              </div>
              <div class="center">
                <p class="m-0">新車</p>
              </div>
              <div class="right">
                <p class="m-0">プレミアムカー</p>
              </div>
            </div>
          </div>
        </div>

        <div class="searchDetailsSection">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                <ClientOnly>
                  <LazyDetailCarSlider :galleryImages="galleryImages" />
                </ClientOnly>
                <div
                  class="selectionCriteria d-flex justify-content-between align-items-center my-3 p-3"
                >
                  <div class="col-md-4">
                    <div class="left d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/ball-icon.webp"
                        alt="Ball"
                        class="img-fluid me-3"
                        loading="lazy"
                        width="17"
                        height="17"
                      />
                      <p class="m-0 me-2">360°ビュー</p>
                      <NuxtImg
                        src="/assets/images/icons/arrow-upper-icon.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="center d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/car-skull-icon.webp"
                        alt="Ball"
                        class="img-fluid me-3"
                        loading="lazy"
                        width="17"
                        height="17"
                      />
                      <p class="m-0 me-2">アンダーキャリッジ</p>
                      <NuxtImg
                        src="/assets/images/icons/arrow-upper-icon.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="right d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/car-tyre-icon.webp"
                        alt="Ball"
                        class="img-fluid me-3"
                        loading="lazy"
                        width="17"
                        height="17"
                      />
                      <p class="m-0 me-2">タイヤ</p>
                      <NuxtImg
                        src="/assets/images/icons/arrow-upper-icon.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                </div>

                <div class="healthCondition">
                  <div class="headArea d-flex align-items-center py-3">
                    <p class="m-0 left me-2">状態</p>
                    <p class="m-0 right">(三菱 eKワゴン 660 M 佐賀県)</p>
                  </div>
                  <div class="table-responsive rounded-4 border p-0 m-0">
                    <table class="table table-bordered p-0 m-0">
                      <tbody>
                        <tr>
                          <td class="left">年式（初度登録）</td>
                          <td class="right">2018(平成30)年</td>
                          <td class="left">走行距離</td>
                          <td class="right">8.8万km</td>
                        </tr>
                        <tr>
                          <td class="left">修復歴</td>
                          <td class="right">なし</td>
                          <td class="left">車検</td>
                          <td class="right">2026(令和8)年8月</td>
                        </tr>
                        <tr>
                          <td class="left">禁煙車</td>
                          <td class="right">－</td>
                          <td class="left">ワンオーナー</td>
                          <td class="right">はい</td>
                        </tr>
                        <tr>
                          <td class="left">輸入認定中古車</td>
                          <td class="right"><input type="radio" /></td>
                          <td class="left">記録簿</td>
                          <td class="right">はい</td>
                        </tr>
                        <tr>
                          <td class="left">登録済未使用車</td>
                          <td class="right">－</td>
                          <td class="left">輸入経路</td>
                          <td class="right">UK</td>
                        </tr>
                        <tr>
                          <td class="left">レンタカーアップ</td>
                          <td class="right"><input type="radio" /></td>
                          <td class="left">キャンピングカー</td>
                          <td class="right"><input type="radio" /></td>
                        </tr>
                        <tr>
                          <td class="left">福祉車両</td>
                          <td class="right">-</td>
                          <td class="left">レンタカーアップ</td>
                          <td class="right">-</td>
                        </tr>
                        <tr>
                          <td class="left">法定整備</td>
                          <td colspan="3" class="right">
                            法定整備無<br />
                            車両の状態については販売店にご確認ください
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="content">
                  <div
                    class="topHead d-flex justify-content-between align-items-center"
                  >
                    <div class="col-md-6">
                      <div class="left">
                        <p class="m-0 text">
                          支払総額
                          <NuxtImg
                            src="/assets/images/icons/exclaim-icon.webp"
                            alt="exclaim"
                            class="img-fluid ms-4"
                            loading="lazy"
                            width="22"
                            height="22"
                          />
                        </p>
                        <p class="m-0 my-3 count">
                          149.9 <span class="currency">万円</span>
                        </p>
                        <p class="m-0 amount">諸経費90,000円含む</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="right">
                        <p class="m-0 text d-flex align-items-center">
                          車両本体価格
                          <NuxtImg
                            src="/assets/images/icons/exclaim-icon.webp"
                            alt="exclaim"
                            class="img-fluid"
                            loading="lazy"
                            width="22"
                            height="22"
                          />
                        </p>
                        <p class="m-0 my-3 count">
                          149.9 <span class="currency">万円</span>
                        </p>
                        <div class="priceVersion d-flex align-items-center">
                          <NuxtImg
                            src="/assets/images/home/arrow-right-circle.webp"
                            alt="arrow"
                            class="img-fluid"
                            loading="lazy"
                            width="17"
                            height="17"
                          />
                          <p class="m-0 amount ms-2 text-decoration-underline">
                            価格見直しメールを受け取る
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="loanPrice d-flex justify-content-between align-items-center"
                  >
                    <div class="col-md-5">
                      <div class="left">
                        <p class="m-0 py-2 ps-3">通常 ローン価格</p>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="center">
                        <p class="m-0 text-center ps-1">
                          月々 <span class="amount me-1">23,200</span>円
                        </p>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div
                        class="right d-flex align-items-center ms-2 position-relative"
                      >
                        <NuxtImg
                          src="/assets/images/home/arrow-right-circle.webp"
                          alt="arrow"
                          class="img-fluid position-absolute"
                          loading="lazy"
                          width="17"
                          height="17"
                          style="right: 1rem"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div class="modelYear">
                    <div class="table-responsive">
                      <table class="table table-borderless m-0">
                        <tbody>
                          <tr>
                            <td class="left">年式</td>
                            <td class="right">{{ car.price || "" }}</td>
                            <td class="left">走行距離</td>
                            <td class="right">{{ car.milage || "" }}</td>
                          </tr>
                          <tr>
                            <td class="left">車検</td>
                            <td class="right">{{ car.body_type || "" }}</td>
                            <td class="left">走行距離</td>
                            <td class="right">{{ car.make || "" }}</td>
                          </tr>

                          <tr>
                            <td class="left">年式</td>
                            <td class="right">{{ car.engine_type || "" }}</td>
                            <td class="left">走行距離</td>
                            <td class="right">{{ car.model || "" }}</td>
                          </tr>

                          <tr>
                            <td class="left">年式</td>
                            <td class="right">{{ car.steering || "" }}</td>
                            <td class="left">走行距離</td>
                            <td class="right">{{ car.transmission || "" }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="content2 mt-3">
                  <div class="tophead2">
                    <p class="m-0 p-3">メールでのお問い合わせ</p>
                  </div>
                  <div class="textSection p-3">
                    <p class="m-0 text-center">
                      販売店から最短即日、メールで返答！
                    </p>

                    <button
                      type="button"
                      class="btn btn-storeReserve my-3"
                      style="background-color: #2a9fe8"
                    >
                      来店予約をする
                    </button>
                    <button
                      type="button"
                      class="btn btn-storeMoney"
                      style="background-color: #2384c1; color: #fff"
                    >
                      在庫確認・見積依頼をする
                    </button>
                    <button type="button" class="btn btn-storeMoney mt-3">
                      <NuxtImg
                        src="/assets/images/icons/money-circle.webp"
                        alt="Money"
                        class="img-fluid me-2"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      今すぐ購入
                    </button>
                  </div>
                </div>

                <div class="content2 mt-3">
                  <div class="tophead2">
                    <p class="m-0 p-3">お電話でのお問い合わせ</p>
                  </div>
                  <div class="textSection2 px-3 py-1">
                    <p class="m-0 text-center">
                      <NuxtImg
                        src="/assets/images/icons/phone-icon.webp"
                        alt="phone"
                        class="img-fluid"
                        loading="lazy"
                        width="25"
                        height="25"
                      />
                      0078-6002-262408
                    </p>
                    <div class="qrCheck d-flex align-items-center">
                      <div class="right">
                        <p class="m-0 time pt-3">営業時間 10:00～18:00</p>
                      </div>
                    </div>

                    <hr style="color: #e2e8f0" />
                    <div class="bottom-btn">
                      <p class="text m-0">
                        販売店名：<span> シャインオート</span>
                      </p>
                      <p
                        class="m-0 fw-bold py-2"
                        style="color: #0f172a; font-size: 16px"
                      >
                        住所:
                      </p>
                      <p class="text2 m-0 pb-2">
                        〒971-8183 福島県いわき市泉町字畑中156-1
                      </p>
                    </div>

                    <p
                      class="m-0 caption text-center py-2 text-decoration-underline"
                    >
                      <NuxtImg
                        src="/assets/images/icons/arrow-left.webp"
                        alt="arrow-left"
                        class="img-fluid me-2"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      店舗在庫リストを見る
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Api Data -->

      <div class="container">
        <div class="row">
          <div class="detailed-information">
            <div class="title mb-3">
              <p class="m-0 pt-3">車両品質評価詳細情報</p>
            </div>

            <div class="details">
              <p class="m-0 text">
                この車は、カーセンサー認定評価を受けた車両です。
                (検査日：2024/12/19)
              </p>

              <div class="register-year d-flex align-items-center my-3">
                <div
                  class="left d-flex justify-content-between align-items-center pe-2"
                >
                  <p class="text m-0 position-relative">年式(初度登録年)</p>
                  <p class="year m-0 mx-3">5</p>
                  <p class="score m-0">点</p>
                </div>
                <div
                  class="center d-flex justify-content-between align-items-center ps-2"
                >
                  <p class="text m-0">内装 :</p>
                  <p
                    class="year mt-2 mx-3"
                    style="color: #0f172a; font-size: 15px; font-weight: 500"
                  >
                    A
                  </p>
                  <p class="text m-0">内装 :</p>
                  <p
                    class="year mt-2 mx-3"
                    style="color: #0f172a; font-size: 15px; font-weight: 500"
                  >
                    A
                  </p>
                  <p class="text m-0">修復歴：無</p>
                </div>
              </div>
            </div>

            <div
              class="range-slider d-flex justify-content-between align-items-center"
            >
              <div class="left w-100 px-3">
                <div
                  class="top d-flex justify-content-between align-items-center pb-3"
                >
                  <p class="m-0 no">R</p>
                  <p class="m-0 no">1</p>
                  <p class="m-0 no">2</p>
                  <p class="m-0 no">3</p>
                </div>
              </div>
              <div class="center w-100 px-3">
                <div
                  class="top d-flex justify-content-between align-items-center pb-3"
                >
                  <p class="m-0 no">3.5</p>
                  <p class="m-0 no">5</p>
                  <p class="m-0 no">4.5</p>
                </div>
              </div>
              <div class="right w-100">
                <div
                  class="top d-flex justify-content-between align-items-center pb-3"
                >
                  <p class="m-0 no active position-relative">5</p>
                  <p class="m-0 no">6</p>
                  <p class="m-0 no">S</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="phoneInquiries my-4 py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="left">
                <p class="m-0 title pb-2">お電話でのお問い合わせ</p>
                <p class="m-0 phNo">0078-6002-262408</p>
                <p class="m-0 caption pt-5 mt-5">
                  <NuxtImg
                    src="/assets/images/icons/arrow-left.webp"
                    alt="arrow-left"
                    class="img-fluid me-2"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                  店舗在庫リストを見る
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right">
                <p class="m-0 title pb-3" style="color: #2384c1">
                  販売店から最短即日、メールで返答！
                </p>

                <button
                  type="button"
                  class="btn btn-storeReserve my-2"
                  style="background-color: #2a9fe8"
                >
                  来店予約をする
                </button>
                <button
                  type="button"
                  class="btn btn-storeMoney my-2"
                  style="background-color: #2384c1; color: #fff"
                >
                  在庫確認・見積依頼をする
                </button>
                <button type="button" class="btn btn-storeMoney my-2">
                  <NuxtImg
                    src="/assets/images/icons/money-circle.webp"
                    alt="Money"
                    class="img-fluid me-2"
                    loading="lazy"
                    width="20"
                    height="20"
                  />
                  今すぐ購入
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="feature">
            <div class="row">
              <div class="col-md-7">
                <div
                  class="title tabBase d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 py-3 left">装備</p>
                  <p class="m-0 py-3 right">装備略号／用語解説</p>
                </div>
                <div class="feature-tabs">
                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">
                        エアバッグ：運転席/助手席/サイド
                      </p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">スライドドア</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">ABS</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">エアコン</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">パワーステアリング</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">パワーウィンドウ</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">Bluetooth接続</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">スライドドア</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">サンルーフ</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">Wエアコン</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">リフトアップ</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">
                        ダウンヒルアシストコントロール
                      </p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">
                        ダウンヒルアシストコントロール
                      </p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">アイドリングストップ</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">ドライブレコーダー</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">USB入力端子</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">100V電源</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">クリーンディーゼル</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">レンタカーアップ</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">展示・試乗車</p>
                    </div>
                  </div>

                  <hr />
                </div>

                <div
                  class="title tabBase d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 py-2 left">外装・内装</p>
                  <p class="m-0 py-2 right">装備略号／用語解説</p>
                </div>
                <div class="feature-tabs">
                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">カーナビ：SDナビ</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">TV：フルセグ</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">
                        オーディオ：CDまたはCDチェンジャー
                      </p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">ヘッドライトウォッシャー</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">革シート</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">ハーフレザーシート</p>
                    </div>

                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">キーレス</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">LEDヘッドランプ</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">HID(キセノンライト)</p>
                    </div>

                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">バックカメラ</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">ETC</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">アイドリングストップ</p>
                    </div>

                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">ドライブレコーダー</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">USB入力端子</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">100V電源</p>
                    </div>

                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">クリーンディーゼル</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">レンタカーアップ</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">展示・試乗車</p>
                    </div>
                  </div>

                  <hr />
                </div>

                <div
                  class="title tabBase d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 py-2 left">運転支援</p>
                  <p class="m-0 py-2 right">装備略号／用語解説</p>
                </div>

                <div class="feature-tabs">
                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">
                        エアバッグ：運転席/助手席/サイド
                      </p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">スライドドア</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">ABS</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">エアコン</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">パワーステアリング</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">パワーウィンドウ</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">Bluetooth接続</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">スライドドア</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">サンルーフ</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">Wエアコン</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">リフトアップ</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">
                        ダウンヒルアシストコントロール
                      </p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">
                        ダウンヒルアシストコントロール
                      </p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">アイドリングストップ</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">ドライブレコーダー</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">USB入力端子</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">100V電源</p>
                    </div>
                  </div>

                  <div class="checks d-flex mt-3 gap-5">
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">クリーンディーゼル</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">レンタカーアップ</p>
                    </div>
                    <div class="ticks d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/check.webp"
                        alt="check"
                        class="img-fluid"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                      <p class="m-0 ps-2 text">展示・試乗車</p>
                    </div>
                  </div>

                  <hr />
                </div>

                <div class="purchasePlan">
                  <div class="purchasePlanDetail">
                    <div class="headArea d-flex align-items-center py-3">
                      <p class="m-0 left me-2">状態</p>
                      <p class="m-0 right">(三菱 eKワゴン 660 M 佐賀県)</p>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td class="left">年式(初度登録年)</td>
                            <td class="right">2024(R06)</td>
                            <td class="left">ハンドル</td>
                            <td class="right">右</td>
                          </tr>
                          <tr>
                            <td class="left">排気量</td>
                            <td class="right">1000cc</td>
                            <td class="left">燃料</td>
                            <td class="right">ガソリン</td>
                          </tr>
                          <tr>
                            <td class="left">ミッション</td>
                            <td class="right">AT</td>
                            <td class="left">色</td>
                            <td class="right">カガミメタリック</td>
                          </tr>
                          <tr>
                            <td class="left">駆動方式</td>
                            <td class="right">2WD</td>
                            <td class="left">車台番号下3桁</td>
                            <td class="right">893</td>
                          </tr>
                          <tr>
                            <td class="left">乗車定員</td>
                            <td class="right">4名</td>
                            <td class="left">ドア数</td>
                            <td class="right">5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-5">
                <div class="content3 mt-4">
                  <div class="tophead2 p-3">
                    <p class="m-0 p-3">販売店情報</p>
                  </div>
                  <div class="textSection2 px-3">
                    <div class="customerService d-flex align-items-center mb-2">
                      <p class="m-0 fw-bold" style="color: #2384c1">
                        シャインオート
                      </p>
                    </div>

                    <div class="pinkCard">
                      <NuxtImg
                        src="/assets/images/home/InvestCard.webp"
                        alt="card"
                        class="img-fluid"
                        loading="lazy"
                      />
                    </div>

                    <div class="afterSale">
                      <p class="m-0 py-2">
                        アフター東海エリア最大級の軽届出済未使用車専門店豊田市、安城市、豊橋市、四日市市で展開中：4.6
                      </p>
                    </div>

                    <div class="viewStoreMap">
                      <button type="button" class="btn btn-viewStoreMap">
                        お店の地図を見る
                      </button>
                    </div>

                    <div class="inquriyByPhone">
                      <p class="m-0 py-3 title">住所:</p>
                      <div class="freeCharge d-flex mb-2">
                        <p class="m-0">
                          〒971-8183 福島県いわき市泉町字畑中156-1
                        </p>
                      </div>
                      <hr class="m-0" style="color: #a7aaad" />

                      <div class="freeCharge d-flex my-2">
                        <p class="m-0" style="color: #475569">
                          スマホ・携帯で地図を見るならコチラ
                        </p>
                      </div>
                      <hr class="m-0" style="color: #a7aaad" />

                      <p
                        class="m-0 py-3"
                        style="
                          color: #2384c1;
                          font-size: 28px;
                          font-family: 'Inter';
                          font-weight: 700;
                        "
                      >
                        <NuxtImg
                          src="/assets/images/icons/phone-icon.webp"
                          alt="phone"
                          class="img-fluid me-2"
                          loading="lazy"
                          width="25"
                          height="25"
                        />
                        0078-6002-262408
                      </p>

                      <p class="m-0 time pb-3">営業時間 10:00～18:00</p>
                    </div>

                    <hr class="m-0" style="color: #a7aaad" />

                    <div
                      class="endPoint d-flex align-items-center justify-content-center gap-3"
                    >
                      <p class="m-0 caption py-3">
                        <NuxtImg
                          src="/assets/images/icons/arrow-left.webp"
                          alt="arrow-left"
                          class="img-fluid me-2"
                          loading="lazy"
                          width="20"
                          height="20"
                        />
                        店舗在庫一覧
                      </p>
                      <p class="m-0 caption py-3">
                        <NuxtImg
                          src="/assets/images/icons/arrow-left.webp"
                          alt="arrow-left"
                          class="img-fluid me-2"
                          loading="lazy"
                          width="20"
                          height="20"
                        />
                        販売店ホームページ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carPickSection">
        <div class="container">
          <div class="row">
            <div class="titleCars my-3">
              <p class="m-0">人気の車</p>
            </div>

            <div class="col-12 col-md-3 mb-3 hoverShadow">
              <div class="left py-3">
                <div class="center mb-3">
                  <img
                    src="/assets/images/home/car.webp"
                    class="img-fluid w-100"
                    alt="Car"
                    loading="lazy"
                  />
                </div>

                <div
                  class="bottom-car d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">新年セール</p>
                  <p class="m-0 right">東京</p>
                </div>
                <div class="bottom-car-title my-2">
                  <p class="m-0">2022 トヨタ ランドクルーザー プラド T.x.</p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">車両本体価格(税込)</p>
                  <p class="m-0 right">
                    189.0 <span class="sub">百万 円</span>
                  </p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">支払総額(税込)</p>
                  <p class="m-0 right" style="color: #d92d20">
                    189.0 <span class="sub">百万 円</span>
                  </p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">年式</p>
                  <p class="m-0 right-pan">2025年(R07)</p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">走行距離</p>
                  <p class="m-0 right-pan">10キロ</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3 mb-3 hoverShadow">
              <div class="left py-3">
                <div class="center mb-3">
                  <img
                    src="/assets/images/home/car.webp"
                    class="img-fluid w-100"
                    alt="Car"
                    loading="lazy"
                  />
                </div>

                <div
                  class="bottom-car d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">新年セール</p>
                  <p class="m-0 right">東京</p>
                </div>
                <div class="bottom-car-title my-2">
                  <p class="m-0">2022 トヨタ ランドクルーザー プラド T.x.</p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">車両本体価格(税込)</p>
                  <p class="m-0 right">
                    189.0 <span class="sub">百万 円</span>
                  </p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">支払総額(税込)</p>
                  <p class="m-0 right" style="color: #d92d20">
                    189.0 <span class="sub">百万 円</span>
                  </p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">年式</p>
                  <p class="m-0 right-pan">2025年(R07)</p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">走行距離</p>
                  <p class="m-0 right-pan">10キロ</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3 mb-3 hoverShadow">
              <div class="left py-3">
                <div class="center mb-3">
                  <img
                    src="/assets/images/home/car.webp"
                    class="img-fluid w-100"
                    alt="Car"
                    loading="lazy"
                  />
                </div>

                <div
                  class="bottom-car d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">新年セール</p>
                  <p class="m-0 right">東京</p>
                </div>
                <div class="bottom-car-title my-2">
                  <p class="m-0">2022 トヨタ ランドクルーザー プラド T.x.</p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">車両本体価格(税込)</p>
                  <p class="m-0 right">
                    189.0 <span class="sub">百万 円</span>
                  </p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">支払総額(税込)</p>
                  <p class="m-0 right" style="color: #d92d20">
                    189.0 <span class="sub">百万 円</span>
                  </p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">年式</p>
                  <p class="m-0 right-pan">2025年(R07)</p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">走行距離</p>
                  <p class="m-0 right-pan">10キロ</p>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3 mb-3 hoverShadow">
              <div class="left py-3">
                <div class="center mb-3">
                  <img
                    src="/assets/images/home/car.webp"
                    class="img-fluid w-100"
                    alt="Car"
                    loading="lazy"
                  />
                </div>

                <div
                  class="bottom-car d-flex justify-content-between align-items-center"
                >
                  <p class="m-0 left">新年セール</p>
                  <p class="m-0 right">東京</p>
                </div>
                <div class="bottom-car-title my-2">
                  <p class="m-0">2022 トヨタ ランドクルーザー プラド T.x.</p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">車両本体価格(税込)</p>
                  <p class="m-0 right">
                    189.0 <span class="sub">百万 円</span>
                  </p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">支払総額(税込)</p>
                  <p class="m-0 right" style="color: #d92d20">
                    189.0 <span class="sub">百万 円</span>
                  </p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">年式</p>
                  <p class="m-0 right-pan">2025年(R07)</p>
                </div>
                <div
                  class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
                >
                  <p class="m-0 left">走行距離</p>
                  <p class="m-0 right-pan">10キロ</p>
                </div>
              </div>
            </div>

            <div
              class="textLink d-flex justify-content-center align-items-center"
            >
              <img
                src="/assets/images/home/arrow-right-circle.webp"
                class="img-fluid"
                alt="arrow"
                width="24"
                height="24"
                loading="lazy"
              />
              <p class="m-0 mx-2">人気の車をすべて見る</p>
            </div>
          </div>
        </div>
      </div>

      <div class="customerReviewDetails">
        <div class="container">
          <div class="row">
            <div class="reviewSec mb-2">
              <p class="m-0 title">この車種のクチコミ</p>
            </div>

            <div class="col-md-6">
              <div class="reviewLeft">
                <div
                  class="top d-flex justify-content-between align-items-center mt-3"
                >
                  <p class="m-0 textArea">ホンダ　フリード</p>
                  <div class="reward d-flex align-items-center">
                    <p class="m-0 author">総合評価</p>
                    <img
                      src="/assets/images/home/star.webp"
                      alt="stars"
                      class="img-fluid px-1"
                      width="75"
                      height="18"
                    />
                  </div>
                </div>

                <div class="titleMain">
                  <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                </div>

                <div class="para">
                  <p class="m-0 pt-2">
                    車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                  </p>
                </div>

                <div class="bottom d-flex mt-2">
                  <p class="m-0">投稿日：2025/02/15</p>
                  <p class="m-0 mx-5">投稿者：Bu3</p>
                </div>
              </div>

              <div class="reviewLeft">
                <div
                  class="top d-flex justify-content-between align-items-center mt-4"
                >
                  <p class="m-0 textArea">ホンダ　フリード</p>
                  <div class="reward d-flex align-items-center">
                    <p class="m-0 author">総合評価</p>
                    <img
                      src="/assets/images/home/star.webp"
                      alt="stars"
                      class="img-fluid px-1"
                      width="75"
                      height="18"
                    />
                  </div>
                </div>

                <div class="titleMain">
                  <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                </div>

                <div class="para">
                  <p class="m-0 pt-2">
                    車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                  </p>
                </div>

                <div class="bottom d-flex mt-2">
                  <p class="m-0">投稿日：2025/02/15</p>
                  <p class="m-0 mx-5">投稿者：Bu3</p>
                </div>
              </div>

              <div class="reviewLeft">
                <div
                  class="top d-flex justify-content-between align-items-center mt-4"
                >
                  <p class="m-0 textArea">ホンダ　フリード</p>
                  <div class="reward d-flex align-items-center">
                    <p class="m-0 author">総合評価</p>
                    <img
                      src="/assets/images/home/star.webp"
                      alt="stars"
                      class="img-fluid px-1"
                      width="75"
                      height="18"
                    />
                  </div>
                </div>

                <div class="titleMain">
                  <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                </div>

                <div class="para">
                  <p class="m-0 pt-2">
                    車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                  </p>
                </div>

                <div class="bottom d-flex mt-2">
                  <p class="m-0">投稿日：2025/02/15</p>
                  <p class="m-0 mx-5">投稿者：Bu3</p>
                </div>
              </div>

              <div class="reviewLeft">
                <div
                  class="top d-flex justify-content-between align-items-center mt-4"
                >
                  <p class="m-0 textArea">ホンダ　フリード</p>
                  <div class="reward d-flex align-items-center">
                    <p class="m-0 author">総合評価</p>
                    <img
                      src="/assets/images/home/star.webp"
                      alt="stars"
                      class="img-fluid px-1"
                      width="75"
                      height="18"
                    />
                  </div>
                </div>

                <div class="titleMain">
                  <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                </div>

                <div class="para">
                  <p class="m-0 pt-2">
                    車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                  </p>
                </div>

                <div class="bottom d-flex mt-2">
                  <p class="m-0">投稿日：2025/02/15</p>
                  <p class="m-0 mx-5">投稿者：Bu3</p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="reviewLeft">
                <div
                  class="top d-flex justify-content-between align-items-center mt-3"
                >
                  <p class="m-0 textArea">ホンダ　フリード</p>
                  <div class="reward d-flex align-items-center">
                    <p class="m-0 author">総合評価</p>
                    <img
                      src="/assets/images/home/star.webp"
                      alt="stars"
                      class="img-fluid px-1"
                      width="75"
                      height="18"
                    />
                  </div>
                </div>

                <div class="titleMain">
                  <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                </div>

                <div class="para">
                  <p class="m-0 pt-2">
                    車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                  </p>
                </div>

                <div class="bottom d-flex mt-2">
                  <p class="m-0">投稿日：2025/02/15</p>
                  <p class="m-0 mx-5">投稿者：Bu3</p>
                </div>
              </div>

              <div class="reviewLeft">
                <div
                  class="top d-flex justify-content-between align-items-center mt-4"
                >
                  <p class="m-0 textArea">ホンダ　フリード</p>
                  <div class="reward d-flex align-items-center">
                    <p class="m-0 author">総合評価</p>
                    <img
                      src="/assets/images/home/star.webp"
                      alt="stars"
                      class="img-fluid px-1"
                      width="75"
                      height="18"
                    />
                  </div>
                </div>

                <div class="titleMain">
                  <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                </div>

                <div class="para">
                  <p class="m-0 pt-2">
                    車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                  </p>
                </div>

                <div class="bottom d-flex mt-2">
                  <p class="m-0">投稿日：2025/02/15</p>
                  <p class="m-0 mx-5">投稿者：Bu3</p>
                </div>
              </div>

              <div class="reviewLeft">
                <div
                  class="top d-flex justify-content-between align-items-center mt-4"
                >
                  <p class="m-0 textArea">ホンダ　フリード</p>
                  <div class="reward d-flex align-items-center">
                    <p class="m-0 author">総合評価</p>
                    <img
                      src="/assets/images/home/star.webp"
                      alt="stars"
                      class="img-fluid px-1"
                      width="75"
                      height="18"
                    />
                  </div>
                </div>

                <div class="titleMain">
                  <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                </div>

                <div class="para">
                  <p class="m-0 pt-2">
                    車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                  </p>
                </div>

                <div class="bottom d-flex mt-2">
                  <p class="m-0">投稿日：2025/02/15</p>
                  <p class="m-0 mx-5">投稿者：Bu3</p>
                </div>
              </div>

              <div class="reviewLeft">
                <div
                  class="top d-flex justify-content-between align-items-center mt-4"
                >
                  <p class="m-0 textArea">ホンダ　フリード</p>
                  <div class="reward d-flex align-items-center">
                    <p class="m-0 author">総合評価</p>
                    <img
                      src="/assets/images/home/star.webp"
                      alt="stars"
                      class="img-fluid px-1"
                      width="75"
                      height="18"
                    />
                  </div>
                </div>

                <div class="titleMain">
                  <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                </div>

                <div class="para">
                  <p class="m-0 pt-2">
                    車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                  </p>
                </div>

                <div class="bottom d-flex mt-2">
                  <p class="m-0">投稿日：2025/02/15</p>
                  <p class="m-0 mx-5">投稿者：Bu3</p>
                </div>
              </div>
            </div>

            <div
              class="textLink d-flex justify-content-center align-items-center mt-5"
            >
              <img
                src="/assets/images/home/arrow-right-circle.webp"
                class="img-fluid"
                alt="arrow"
                width="24"
                height="24"
                loading="lazy"
              />
              <p class="m-0 mx-2">すべてのレビューを見る</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ======================== Mobile View ===================-->

    <div class="search_detail_mobile mobile_view">
      <div class="inner">
        <p class="topTitle m-0 p-2 px-3">
          eKワゴン　660 M　届出済未使用車 衝突被害軽減B キーレス
        </p>
        <p class="m-0 topPara px-3 mb-2">
          1.2 G FOUR レザーエディション 4WD （ブリリアントシルバー）全周囲カメラ
          シートヒーター 黒革シート
        </p>

        <div class="carDetailMobile px-2 px-3">
          <img
            src="/assets/images/fotorama/1.webp"
            alt="car"
            class="img-fluid"
            loading="lazy"
          />
          <p class="m-0 carDetail py-2">
            左右にスワイプすると、この中古車の内外装を360°好きな角度から確認できます
          </p>

          <div
            class="imgClassification d-flex justify-content-between align-items-center"
          >
            <p class="m-0">画像カテゴリーすべて</p>
            <img
              src="/assets/images/mobile/header/downArrow.webp"
              alt="Arrow"
              class="img-fluid"
              loading="lazy"
              width="12"
              height="4"
            />
          </div>

          <div
            class="carModels d-flex justify-content-between text-center my-2 gap-3"
          >
            <div class="left w-100">
              <p class="m-0 title">年式</p>
              <p class="m-0 para py-2">2024 <span>(R06)</span></p>
            </div>
            <div class="center w-100">
              <p class="m-0 title">走行距離</p>
              <p class="m-0 para py-2">570 <span>km</span></p>
            </div>
            <div class="right w-100">
              <p class="m-0 title">保証</p>
              <p class="m-0 para py-2">付き<br />3ヵ月<br />距離無制限</p>
            </div>
          </div>

          <div
            class="carModels d-flex justify-content-between text-center my-2 gap-3"
          >
            <div class="left w-100">
              <p class="m-0 title">車検有無</p>
              <p class="m-0 para2 py-2">2027(R09)</p>
            </div>
            <div class="center w-100">
              <p class="m-0 title">修復歴</p>
              <p class="m-0 para2 py-2">なし</p>
            </div>
            <div class="right w-100">
              <p class="m-0 title">法定整備</p>
              <p class="m-0 para py-2">付き<br />3ヵ月<br />距離無制限</p>
            </div>
          </div>

          <div class="imageSlider">
            <img
              src="/assets/images/fotorama/2.webp"
              alt="image"
              class="img-fluid"
              loading="lazy"
              width="50"
              height="50"
            />
            <img
              src="/assets/images/fotorama/3.webp"
              alt="image"
              class="img-fluid"
              loading="lazy"
              width="50"
              height="50"
            />
            <img
              src="/assets/images/fotorama/4.webp"
              alt="image"
              class="img-fluid"
              loading="lazy"
              width="50"
              height="50"
            />
            <img
              src="/assets/images/fotorama/5.webp"
              alt="image"
              class="img-fluid"
              loading="lazy"
              width="50"
              height="50"
            />
            <img
              src="/assets/images/fotorama/6.webp"
              alt="image"
              class="img-fluid"
              loading="lazy"
              width="50"
              height="50"
            />
            <img
              src="/assets/images/fotorama/7.webp"
              alt="image"
              class="img-fluid"
              loading="lazy"
              width="50"
              height="50"
            />
            <img
              src="/assets/images/fotorama/8.webp"
              alt="image"
              class="img-fluid"
              loading="lazy"
              width="50"
              height="50"
            />
            <img
              src="/assets/images/fotorama/9.webp"
              alt="image"
              class="img-fluid"
              loading="lazy"
              width="50"
              height="50"
            />
          </div>

          <div
            class="stockInvest d-flex align-items-center my-2 justify-content-center"
          >
            <p class="m-0 left p-2 w-100 text-center py-3">
              今すぐ在庫確認・見積依頼
            </p>
            <div
              class="phone d-flex align-items-center w-100 justify-content-center"
            >
              <img
                src="/assets/images/mobile/header/phone.webp"
                alt="phone"
                class="img-fluid"
                loading="lazy"
                width="13"
                height="13"
              />
              <p class="m-0 ms-2 callText">電話する</p>
            </div>
          </div>

          <div class="totalPayment d-flex justify-content-between gap-3">
            <div class="left">
              <div class="totalPaymentAmount w-100">
                <p class="m-0 title pb-1">支払総額</p>
                <p class="m-0 price">149.9 <span>万円</span></p>
              </div>
              <p class="m-0 MY">Aプラン 221.5万円</p>
            </div>
            <div class="right">
              <div class="totalPaymentAmount2 w-100">
                <p class="m-0 title pb-1">車両本体価格</p>
                <p class="m-0 price">149.9 <span>万円</span></p>
              </div>
              <p class="m-0 MY">Bプラン 221.6万円</p>
            </div>
          </div>

          <div
            class="standardLoanPrice d-flex align-items-center justify-content-between my-2"
          >
            <div class="left">
              <p class="m-0 px-1">通常ローン価格</p>
            </div>
            <div class="center">
              <p class="m-0">月々 <span>23,200</span> 円</p>
            </div>
            <div class="right d-flex align-items-center px-1">
              <img
                src="/assets/images/home/arrow-right-circle.webp"
                alt="arrow"
                class="img-fluid me-1"
                loading="lazy"
                width="17"
                height="17"
              />
              <p class="m-0">詳細を見る</p>
            </div>
          </div>

          <div class="content2 my-3">
            <div class="tophead2">
              <p class="m-0 p-2 px-3 text-center">メールでのお問い合わせ</p>
            </div>
            <div class="textSection p-3">
              <p class="m-0">販売店から最短即日、メールで返答！</p>

              <button type="button" class="btn btn-storeReserve p-2 my-2">
                来店予約をする
              </button>
              <button type="button" class="btn btn-storeReserve p-2 my-2">
                在庫確認・見積依頼をする
              </button>
              <button type="button" class="btn btn-storeMoney p-1 my-2">
                <img
                  src="/assets/images/icons/money-circle.webp"
                  alt="Money"
                  class="img-fluid me-2"
                  loading="lazy"
                  width="20"
                  height="20"
                />
                今すぐ購入
              </button>
            </div>
          </div>

          <div class="content2 my-3">
            <div class="tophead2">
              <p class="m-0 p-2 px-3 text-center">お電話でのお問い合わせ</p>
            </div>
            <div class="textSection p-3">
              <p
                class="m-0 fw-bold pb-3"
                style="color: #2384c1; font-size: 24x"
              >
                <img
                  src="/assets/images/icons/phone-icon.webp"
                  alt="phone"
                  class="img-fluid me-2"
                  loading="lazy"
                  width="18"
                  height="18"
                />
                0078-6002-262408
              </p>
              <p class="m-0">営業時間 10:00～18:00</p>

              <hr style="color: #e2e8f0" />

              <div class="bottom-btn">
                <p class="text m-0">
                  販売店名：<span style="color: #2384c1"> シャインオート</span>
                </p>
                <p
                  class="m-0 fw-bold py-3"
                  style="color: #2f2f2f; font-size: 12px"
                >
                  住所:
                </p>
                <p class="text2 m-0 pb-2">
                  〒971-8183 福島県いわき市泉町字畑中156-1
                </p>
              </div>

              <p
                class="m-0 caption text-center pt-2 fw-bold text-decoration-underline"
              >
                <img
                  src="/assets/images/icons/arrow-left.webp"
                  alt="arrow-left"
                  class="img-fluid me-2"
                  loading="lazy"
                  width="20"
                  height="20"
                />
                店舗在庫リストを見る
              </p>
            </div>
          </div>

          <div class="condition">
            <div class="top d-flex align-items-center mb-3">
              <p class="m-0 title">状状態状態態</p>
              <p class="m-0 para ps-2" style="color: #0f172a">
                (三菱 eKワゴン 660 M 佐賀県)
              </p>
            </div>

            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td class="first">年式（初度登録）</td>
                  <td class="second">2018(平成30)年</td>
                </tr>
                <tr>
                  <td class="first">
                    走行距離
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second fw-bold">8.8万km</td>
                </tr>

                <tr>
                  <td class="first">
                    修復歴
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">なし</td>
                </tr>

                <tr>
                  <td class="first">
                    車検
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">2026(令和8)年8月</td>
                </tr>

                <tr>
                  <td class="first">
                    禁煙車
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">-</td>
                </tr>

                <tr>
                  <td class="first">
                    ワンオーナー
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">はい</td>
                </tr>

                <tr>
                  <td class="first">
                    輸入認定中古車
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault1"
                        style="border: 1px solid black"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="first">
                    記録簿
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">はい</td>
                </tr>

                <tr>
                  <td class="first">
                    登録済未使用車
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault1"
                        style="border: 1px solid black"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="first">
                    正規輸入車
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">UK</td>
                </tr>

                <tr>
                  <td class="first">
                    レンタカーアップ
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault1"
                        style="border: 1px solid black"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="first">
                    キャンピングカー
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="radioDefault"
                        id="radioDefault1"
                        style="border: 1px solid black"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td class="first">
                    福祉車両
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">-</td>
                </tr>

                <tr>
                  <td class="first">
                    レンタカーアップ
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">-</td>
                </tr>

                <tr>
                  <td class="first">
                    法定整備
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">
                    法定整備無<br />車両の状態については販売店<br />にご確認ください
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="detailVehicle">
            <p class="m-0 top mb-2">車両品質評価詳細情報</p>
            <p class="m-0 para mb-2">
              この車は、カーセンサー認定評価を受けた車両です。
            </p>
            <p class="m-0 score mb-3">
              評価点 <span>5</span> 点 &nbsp; 内装 : A &nbsp;&nbsp;&nbsp; 外装：
              A
            </p>
          </div>

          <div
            class="range-slider d-flex justify-content-between align-items-center"
          >
            <div class="left w-100 px-3">
              <div
                class="top d-flex justify-content-between align-items-center"
              >
                <p class="m-0 no">R</p>
                <p class="m-0 no">1</p>
                <p class="m-0 no">2</p>
                <p class="m-0 no">3</p>
              </div>
            </div>
            <div class="center w-100 pe-3">
              <div
                class="top d-flex justify-content-between align-items-center"
              >
                <p class="m-0 no">3.5</p>
                <p class="m-0 no">5</p>
                <p class="m-0 no">4.5</p>
              </div>
            </div>
            <div class="right w-100">
              <div
                class="top d-flex justify-content-between align-items-center"
              >
                <p class="m-0 no active position-relative">5</p>
                <p class="m-0 no">6</p>
                <p class="m-0 no">S</p>
              </div>
            </div>
          </div>

          <div class="interior">
            <div class="top d-flex align-items-center gap-2">
              <p class="m-0">内装</p>
              <div class="stars d-flex">
                <img
                  src="/assets/images/icons/star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="13"
                  height="13"
                />
                <img
                  src="/assets/images/icons/star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="13"
                  height="13"
                />
                <img
                  src="/assets/images/icons/star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="13"
                  height="13"
                />
                <img
                  src="/assets/images/icons/star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="13"
                  height="13"
                />
              </div>
            </div>

            <p class="m-0 paras py-3">
              無キズ、もしくは痛みや汚れなどがほぼ無い、とても綺麗な状態です。
            </p>
          </div>

          <div class="interior mt-2">
            <div class="top d-flex align-items-center gap-2">
              <p class="m-0">内装</p>
              <div class="stars d-flex">
                <img
                  src="/assets/images/icons/star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="13"
                  height="13"
                />
                <img
                  src="/assets/images/icons/star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="13"
                  height="13"
                />
                <img
                  src="/assets/images/icons/star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="13"
                  height="13"
                />
                <img
                  src="/assets/images/icons/star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="13"
                  height="13"
                />
              </div>
            </div>

            <p class="m-0 paras py-3">
              無キズ、もしくは痛みや汚れなどがほぼ無い、とても綺麗な状態です。
            </p>
          </div>

          <div class="condition mt-3">
            <div
              class="top d-flex align-items-center justify-content-between mb-3 pb-2"
              style="border-bottom: 1px solid #2384c1"
            >
              <p class="m-0 title">装備</p>
              <p class="m-0 para">装備略号／用語解説</p>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">エアバッグ：運転席/助手席/サイド</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">スライドドア</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ABS</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">エアコン</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">パワーステアリング</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">パワーウィンドウ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">Bluetooth接続</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">スライドドア</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">サンルーフ</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">Wエアコン</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">リフトアップ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ダウンヒルアシストコントロール</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ダウンヒルアシストコントロール</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">アイドリングストップ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ドライブレコーダー</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">USB入力端子</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">100V電源</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">クリーンディーゼル</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">レンタカーアップ</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">展示・試乗車</p>
              </div>
            </div>
          </div>

          <div class="condition mt-3">
            <div
              class="top d-flex align-items-center justify-content-between mb-3 pb-2"
              style="border-bottom: 1px solid #2384c1"
            >
              <p class="m-0 title">外装・内装</p>
              <p class="m-0 para">装備略号／用語解説</p>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">エアバッグ：運転席/助手席/サイド</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">スライドドア</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ABS</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">エアコン</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">パワーステアリング</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">パワーウィンドウ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">Bluetooth接続</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">スライドドア</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">サンルーフ</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">Wエアコン</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">リフトアップ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ダウンヒルアシストコントロール</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ダウンヒルアシストコントロール</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">アイドリングストップ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ドライブレコーダー</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">USB入力端子</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">100V電源</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">クリーンディーゼル</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">レンタカーアップ</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">展示・試乗車</p>
              </div>
            </div>
          </div>

          <div class="condition mt-3">
            <div
              class="top d-flex align-items-center justify-content-between mb-3 pb-2"
              style="border-bottom: 1px solid #2384c1"
            >
              <p class="m-0 title">運転支援</p>
              <p class="m-0 para">装備略号／用語解説</p>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">エアバッグ：運転席/助手席/サイド</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">スライドドア</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ABS</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">エアコン</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">パワーステアリング</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">パワーウィンドウ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">Bluetooth接続</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">スライドドア</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">サンルーフ</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">Wエアコン</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">リフトアップ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ダウンヒルアシストコントロール</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ダウンヒルアシストコントロール</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">アイドリングストップ</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">ドライブレコーダー</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">USB入力端子</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">100V電源</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">クリーンディーゼル</p>
              </div>
            </div>

            <div class="checks d-flex mt-3 gap-5">
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">レンタカーアップ</p>
              </div>
              <div class="ticks d-flex align-items-center">
                <img
                  src="/assets/images/icons/check.webp"
                  alt="check"
                  class="img-fluid"
                  loading="lazy"
                  width="16"
                  height="16"
                />
                <p class="m-0 ps-2 text">展示・試乗車</p>
              </div>
            </div>
          </div>

          <div class="condition mt-3">
            <div
              class="top d-flex align-items-center justify-content-between mb-3"
            >
              <p class="m-0 title">状態</p>
            </div>

            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td class="first">年式(初度登録年)</td>
                  <td class="second">2024(R06)</td>
                </tr>
                <tr>
                  <td class="first">
                    ハンドル
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second fw-bold">右</td>
                </tr>

                <tr>
                  <td class="first">
                    排気量
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">1000cc</td>
                </tr>

                <tr>
                  <td class="first">
                    燃料
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">ガソリン</td>
                </tr>

                <tr>
                  <td class="first">
                    ミッション
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">AT</td>
                </tr>

                <tr>
                  <td class="first">
                    色
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">カガミメタリック</td>
                </tr>

                <tr>
                  <td class="first">
                    駆動方式
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">2WD</td>
                </tr>

                <tr>
                  <td class="first">
                    車台番号下3桁
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">893</td>
                </tr>

                <tr>
                  <td class="first">
                    乗車定員
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">4名</td>
                </tr>

                <tr>
                  <td class="first">
                    ドア数
                    <img
                      src="/assets/images/icons/exclaim-icon.webp"
                      alt="exclaim"
                      class="img-fluid"
                      loading="lazy"
                      width="12"
                      height="12"
                    />
                  </td>
                  <td class="second">5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="reviewDealership">
            <div class="topReview">
              <p class="m-0 title pb-2">この販売店のクチコミ</p>
              <div class="overallRating d-flex align-items-center gap-2 my-1">
                <p class="m-0">クチコミ総合評価：<span>4.6</span></p>
                <div class="stars d-flex">
                  <img
                    src="/assets/images/icons/star.webp"
                    alt="star"
                    class="img-fluid"
                    loading="lazy"
                    width="16"
                    height="16"
                  />
                  <img
                    src="/assets/images/icons/star.webp"
                    alt="star"
                    class="img-fluid"
                    loading="lazy"
                    width="16"
                    height="16"
                  />
                  <img
                    src="/assets/images/icons/star.webp"
                    alt="star"
                    class="img-fluid"
                    loading="lazy"
                    width="16"
                    height="16"
                  />
                  <img
                    src="/assets/images/icons/star.webp"
                    alt="star"
                    class="img-fluid"
                    loading="lazy"
                    width="16"
                    height="16"
                  />
                </div>
              </div>
              <p class="m-0 cs my-2">
                接客 : <span>4.6</span> 雰囲気 : <span>4.6</span> アフター :
                <span>4.6</span> 品質 : <span>4.6</span>
              </p>
            </div>

            <div class="reviewCarModel">
              <div class="top mt-3">
                <p class="m-0 title">この車種のクチコミ</p>
                <div
                  class="honda d-flex align-items-center justify-content-between my-2"
                >
                  <p class="m-0 title">ホンダ　フリード</p>
                  <div class="head d-flex align-items-center gap-2">
                    <p class="m-0 para">総合評価</p>
                    <div class="stars d-flex">
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                    </div>
                  </div>
                </div>
                <p class="m-0 heading pb-2">ナビの出来の悪さ以外はそれなり。</p>
                <p class="m-0 paring">
                  車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                </p>

                <div class="posted d-flex align-items-center my-1 gap-4">
                  <p class="m-0">投稿日： <span>2025/02/15</span></p>
                  <p class="m-0">投稿者： <span>Bu3</span></p>
                </div>
              </div>
            </div>

            <div class="reviewCarModel">
              <div class="top mt-3">
                <div
                  class="honda d-flex align-items-center justify-content-between my-2"
                >
                  <p class="m-0 title">ホンダ　フリード</p>
                  <div class="head d-flex align-items-center gap-2">
                    <p class="m-0 para">総合評価</p>
                    <div class="stars d-flex">
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                    </div>
                  </div>
                </div>
                <p class="m-0 heading pb-2">ナビの出来の悪さ以外はそれなり。</p>
                <p class="m-0 paring">
                  車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                </p>

                <div class="posted d-flex align-items-center my-1 gap-4">
                  <p class="m-0">投稿日： <span>2025/02/15</span></p>
                  <p class="m-0">投稿者： <span>Bu3</span></p>
                </div>
              </div>
            </div>

            <div class="reviewCarModel">
              <div class="top mt-3">
                <div
                  class="honda d-flex align-items-center justify-content-between my-2"
                >
                  <p class="m-0 title">ホンダ　フリード</p>
                  <div class="head d-flex align-items-center gap-2">
                    <p class="m-0 para">総合評価</p>
                    <div class="stars d-flex">
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                      <img
                        src="/assets/images/icons/star.webp"
                        alt="star"
                        class="img-fluid"
                        loading="lazy"
                        width="12"
                        height="12"
                      />
                    </div>
                  </div>
                </div>
                <p class="m-0 heading pb-2">ナビの出来の悪さ以外はそれなり。</p>
                <p class="m-0 paring">
                  車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。
                </p>

                <div class="posted d-flex align-items-center my-1 gap-4">
                  <p class="m-0">投稿日： <span>2025/02/15</span></p>
                  <p class="m-0">投稿者： <span>Bu3</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { createError } from "nuxt/app";
import { useLoader } from '~/composables/useLoader'
const { showLoader, hideLoader } = useLoader()

const route = useRoute();
const slug = route.params.slug;
if (!slug) {
  throw createError({
    statusCode: 400,
    statusMessage: "Missing car slug",
    fatal: true,
  });
}
const { data, error, pending } = await useFetch(`/car/details/${slug}`, {
  baseURL: useRuntimeConfig().public.apiBaseUrl,
  server: true, // allow SSR
  key: `car-detail-${slug}`,
});

if (error.value || !data.value?.data) {
  throw createError({
    statusCode: error.value?.statusCode || 404,
    statusMessage: "Car not found or API error",
    fatal: true,
  });
}
// Parse gallery
const galleryImages = computed(() => {
  try {
    return JSON.parse(data.value.data.gallery || "[]");
  } catch (e) {
    console.error("Invalid gallery JSON", e);
    return [];
  }
});
const car = computed(() => data.value?.data ?? {});

onMounted(() => {
  showLoader()
  setTimeout(() => {
    hideLoader()
  }, 2000) // simulate loading
})
</script>

<style scoped>
/* ====================== Start Search Detail Page Css */

.search-details .topHeading .title {
  color: #353c4d;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
.search-details .topHeading .title span {
  color: #353c4d;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
}
.search-details .topHeading .bottomSection .left {
  background: #f1892b;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  padding: 2px 6px;
}
.search-details .topHeading .bottomSection .center {
  background: #ff4b44;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  padding: 2px 10px;
}
.search-details .topHeading .bottomSection .right {
  background: #a576f1;
  padding: 2px 10px;
  border-radius: 50px;
  font-size: 12px;
  color: white;
  font-weight: 600;
  line-height: 16px;
}
.fotorama__nav-wrap {
  display: none;
}
.searchDetailsSection .selectionCriteria {
  background-color: #f6f6f8;
}
.searchDetailsSection .selectionCriteria .left {
  cursor: pointer;
}
.searchDetailsSection .selectionCriteria .left p {
  color: #0c1529;
  font-family: "Inter";
  font-size: 12.1px;
  font-weight: 700;
  line-height: 18.16px;
}
.searchDetailsSection .selectionCriteria .center {
  cursor: pointer;
  position: relative;
  left: 8%;
}
.searchDetailsSection .selectionCriteria .center p {
  color: #0c1529;
  font-family: "Inter";
  font-size: 12.1px;
  font-weight: 700;
  line-height: 18.16px;
}
.searchDetailsSection .selectionCriteria .right {
  cursor: pointer;
  position: relative;
  left: 25%;
}
.searchDetailsSection .selectionCriteria .right p {
  color: #0c1529;
  font-family: "Inter";
  font-size: 12.1px;
  font-weight: 700;
  line-height: 18.16px;
}
.searchDetailsSection .imageCategory {
  background: #f6f6f8;
  padding: 15px;
}
.searchDetailsSection .imageCategory .categoryInner .topHead p {
  color: #1e293b;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.searchDetailsSection .imageCategory .categoryInner .topHead select {
  width: 200px;
  height: 32px;
  border: 1px solid #aeb1b8;
  color: #353c4d;
  font-family: "Inter";
  font-size: 12.28px;
  font-weight: 500;
  line-height: 17.54px;
  background-color: transparent;
}
.searchDetailsSection .imageCategory .categoryInner .topHead .form-select {
  border-radius: unset;
  --bs-form-select-bg-img: url(/assets/images/home/caret-down.webp);
  background-repeat: no-repeat;
  background-size: 9px;
}

.searchDetailsSection .evaluationPoint p {
  color: #64748b;
  font-family: "Inter";
  font-size: 12.1px;
  font-weight: 700;
  line-height: 18.16px;
}
.searchDetailsSection .healthCondition .headArea .left {
  color: #020408;
  font-family: "Sofia-pro";
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.searchDetailsSection .healthCondition .headArea .right {
  color: #020408;
  font-family: "Sofia-pro";
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
}
.searchDetailsSection .healthCondition .table .left {
  background-color: #eaecf0;
  font-family: "Inter";
  font-weight: 500;
  font-size: 11.5px;
  line-height: 18px;
  width: 137px;
  height: 56px;
  vertical-align: middle;
}
.searchDetailsSection .healthCondition .table .right {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 137px;
  height: 56px;
  vertical-align: middle;
}
.searchDetailsSection .content {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 18px;
  border-radius: 12px;
  /* width: 430px; */
  padding-bottom: 0;
}
.searchDetailsSection .content .topHead .left .text {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 23.92px;
  line-height: 34.17px;
}
.searchDetailsSection .content .topHead .left .count {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 34.17px;
  line-height: 47.84px;
}
.searchDetailsSection .content .topHead .left .currency {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 47.84px;
}
.searchDetailsSection .content .topHead .left .amount {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}

.searchDetailsSection .content .topHead .right .text {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 23.92px;
  line-height: 34.17px;
}

.searchDetailsSection .content .topHead .right .text img {
  position: relative;
  left: 10px;
}
.searchDetailsSection .content .topHead .right .count {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 700;
  font-size: 34.17px;
  line-height: 47.84px;
}
.searchDetailsSection .content .topHead .right .currency {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 20px;
  line-height: 47.84px;
}
.searchDetailsSection .content .topHead .right .amount {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 11px;
  line-height: 16px;
}
.searchDetailsSection .content .loanPrice {
  background-color: #ecf5ff;
  margin: 20px 0px;
  border-radius: 10px;
}
.searchDetailsSection .content .loanPrice .left {
  background-color: #2384c1;
  padding: 5px;
  border-radius: 10px 0px 0px 10px;
  font-weight: 600;
  font-family: "Inter";
  font-size: 15px;
  line-height: 24px;
  color: white;
}
.searchDetailsSection .content .loanPrice .center p {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.searchDetailsSection .content .loanPrice .center .amount {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
}
.searchDetailsSection .content .loanPrice .right p {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.searchDetailsSection .content .modelYear .table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
.searchDetailsSection .content .modelYear .table .left {
  background-color: #f6f6f8;
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}
.searchDetailsSection .content .modelYear .table .right {
  color: #334155;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.searchDetailsSection .content2 {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;
  /* width: 430px; */
  padding-bottom: 0;
}
.searchDetailsSection .content2 .tophead2 {
  background-color: #f6f6f8;
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.searchDetailsSection .content2 .textSection p {
  font-family: "Inter";
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
.searchDetailsSection .content2 .textSection .btn-storeReserve {
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: white;
  background: #2384c1;
  width: 100%;
}
.searchDetailsSection .content2 .textSection .btn-storeMoney {
  font-family: "Inter";
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: #2384c1;
  width: 100%;
  border: 1px solid #2384c1;
}
.searchDetailsSection .content2 .textSection .bottom-btn {
  border-bottom: 1px solid #e2e8f0;
}

.searchDetailsSection .content2 .textSection .caption {
  font-family: "Inter";
  color: #0f172a;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.searchDetailsSection .content2 .textSection2 {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
}
.searchDetailsSection .content2 .textSection2 .time {
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0f172a;
}
.searchDetailsSection .content2 .textSection2 .bottom-btn {
  border-bottom: 1px solid #e2e8f0;
}
.searchDetailsSection .content2 .textSection2 .bottom-btn .text {
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0f172a;
}
.searchDetailsSection .content2 .textSection2 .bottom-btn .text span {
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2384c1;
}
.searchDetailsSection .content2 .textSection2 .bottom-btn .text2 {
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #0f172a;
}
.searchDetailsSection .content2 .textSection2 .caption {
  font-family: "Inter";
  color: #2f2f2f;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.feature .title .left {
  color: #020408;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.feature .title .right {
  color: #2384c1;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.feature .tabBase {
  border-bottom: 1px solid #2384c1;
}
.feature .title p {
  font-family: "Sofia-pro";
  color: #020408;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.feature .feature-tabs .checks .ticks .text {
  color: #353c4d;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.feature .feature-tabs .accordion .accordion-item .accordion-header {
  border-bottom: 1px solid #cbd5e1;
}
.feature .feature-tabs .accordion .accordion-item .accordion-header button {
  color: #060b15;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}
.feature
  .feature-tabs
  .accordion
  .accordion-item
  .accordion-body
  .feature-items
  p {
  color: #060b15;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}
.feature .accordion-button:not(.collapsed) {
  color: #2384c1 !important;
  background: transparent;
}
.feature .accordion-button:focus {
  box-shadow: none;
}

.feature .content3 {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;
  /* width: 430px; */
  padding-bottom: 0;
  position: relative;
}
.feature .content3 .tophead2 p {
  background-color: #f6f6f8;
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.feature .content3 .textSection2 .textAreaDetail p {
  background: #2384c1;
  color: white;
  font-size: 12px;
  padding: 2px 4px;
  font-weight: 500;
  line-height: 18px;
  font-family: "Inter";
}
.feature .content3 .textSection2 .bottom-btn .text2 {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.feature .content3 .textSection2 .bottom-btn .textLight {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.feature .content3 .textSection2 .starLightDetails .overallrating {
  font-size: 6.91px;
  background-color: #eaecf0;
  color: black;
  padding: 10px;
}
.feature .content3 .textSection2 .starLightDetails .overallrating::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #eaecf0;
  right: -6px;
  position: absolute;
  bottom: 4px;
}
.feature .content3 .textSection2 .starLightDetails .rating {
  color: #2384c1;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
}
.feature .content3 .textSection2 .starLightDetails .points {
  color: #0f172a;
  font-size: 10.49px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18.89px;
}
.feature .content3 .textSection2 .customerService p {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.feature .content3 .textSection2 .pinkCard img {
  width: 100%;
  height: 195px;
}
.feature .content3 .textSection2 .afterSale p {
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #475569;
}
.feature .content3 .textSection2 .expiryDate .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.feature .content3 .textSection2 .expiryDate .para {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.feature .content3 .textSection2 .validity p {
  color: #475569;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.feature .content3 .textSection2 .viewStoreMap {
  border: 1.69px solid #cbd5e1;
  border-radius: 6.77px;
  text-align: center;
}
.feature .content3 .textSection2 .viewStoreMap .btn-viewStoreMap {
  color: #131313;
  font-family: "Inter";
  font-weight: 500;
  font-size: 20.3px;
  line-height: 30.44px;
}
.feature .content3 .textSection2 .clickToView p {
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.feature .content3 .textSection2 .inquriyByPhone .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.feature .content3 .textSection2 .inquriyByPhone .freeCharge .left {
  background: #2384c1;
  color: white;
  padding: 6px;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.feature .content3 .textSection2 .inquriyByPhone .freeCharge .right {
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2384c1;
}
.feature .content3 .textSection2 .inquriyByPhone .scanPhoneNumber .text .point {
  background-color: #eaecf0;
  font-family: "Inter";
  font-weight: 500;
  font-size: 6.91px;
  line-height: 12.43px;
  width: max-content;
  padding: 7px;
}
.feature
  .content3
  .textSection2
  .inquriyByPhone
  .scanPhoneNumber
  .text
  .pointText {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.feature .content3 .textSection2 .caption {
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #2f2f2f;
}
.detailed-information .title p {
  font-family: "Sofia-pro";
  color: #020408;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.detailed-information .details .text {
  color: #0f172a;
  font-size: 10.49px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 20px;
}
.detailed-information .details .register-year .left .text {
  background-color: #eaecf0;
  padding: 10px;
}
.detailed-information .details .register-year .left .text::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #eaecf0;
  right: -6px;
  position: absolute;
}
.detailed-information .details .register-year .left .year {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 29.38px;
  line-height: 37.78px;
}
.detailed-information .details .register-year .left .score {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 10.49px;
  line-height: 18.89px;
}
.detailed-information .details .register-year .left {
  border-right: 1px solid #e2e8f0;
}
.detailed-information .details .register-year .center .text {
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.59px;
  line-height: 18.89px;
}
.detailed-information .details .para {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.detailed-information .range-slider {
  border-top: 2px solid #94a3b8;
}
.detailed-information .range-slider .left {
  border-right: 1px solid #94a3b8;
  padding: 10px 10px 10px 0px;
}
.detailed-information .range-slider .center {
  border-right: 1px solid #94a3b8;
  padding: 10px 10px 10px 0px;
}
.detailed-information .range-slider .left .top .no {
  color: #020617;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.detailed-information .range-slider .center .top .no {
  color: #020617;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.detailed-information .range-slider .right .top .no {
  color: #020617;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.detailed-information .range-slider .right .top .no.active {
  background: #1c6a9b;
  color: white;
  padding: 10px 20px;
  border-radius: 0px 0px 4px 4px;
}
.detailed-information .range-slider .right .top .no.active::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #1c6a9b;
  position: absolute;
  right: 15px;
  bottom: 50px;
  border-radius: 3.35px;
}
.detailed-information .range-slider .left .bottom {
  color: #020617;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.45px;
  line-height: 24px;
  position: relative;
  top: 11px;
}
.detailed-information .range-slider .center .bottom {
  color: #020617;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.45px;
  line-height: 24px;
  position: relative;
  top: 11px;
}
.detailed-information .range-slider .right .bottom.active {
  color: #1c6a9b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.45px;
  line-height: 24px;
}

.phoneInquiries {
  background-color: #ecf5ff;
}
.phoneInquiries .left .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 18.93px;
  line-height: 30.29px;
}
.phoneInquiries .left .phNo {
  color: #2384c1;
  font-size: 37.836px;
  font-weight: 700;
  line-height: 53.01px;
  font-family: "Inter";
}
.phoneInquiries .left .text {
  font-family: "Inter";
  font-weight: 400;
  font-size: 22.72px;
  line-height: 30.29px;
  color: #0f172a;
}
.phoneInquiries .left .caption {
  font-size: 22.72px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 30.29px;
  color: #2f2f2f;
}
.phoneInquiries .right .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 18.93px;
  line-height: 30.29px;
}
.phoneInquiries .right .quickResponse {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16.91px;
  line-height: 27.06px;
}
.phoneInquiries .right .btn-storeReserve {
  background-color: #2384c1;
  color: #fff;
  border-radius: 6.77px;
  width: 368.7px;
  height: 44.53px;
}
.phoneInquiries .right .btn-storeMoney {
  background-color: transparent;
  color: #2384c1;
  border: 1px solid #2384c1;
  border-radius: 6.77px;
  width: 368.7px;
  height: 44.53px;
}
.phoneInquiries .right .btn-storeMoney1 {
  background-color: transparent;
  color: #2384c1;
  border: 1px solid #2384c1;
  border-radius: 6.77px;
  width: 215.83px;
  height: 44.53px;
}
.phoneInquiries .right .btn-storeMoney2 {
  background-color: transparent;
  color: #2384c1;
  border: 1px solid #2384c1;
  border-radius: 6.77px;
  width: 139.35px;
  height: 44.53px;
}
.purchasePlan .purchasePlanDetail .headArea .left {
  font-family: "Sofia-pro";
  color: #020408;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.purchasePlan .purchasePlanDetail .headArea .right {
  color: #020408;
  font-family: "Sofia-pro";
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
}
.purchasePlan .purchasePlanDetail .table .lefthead {
  background-color: #eaecf0;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
}
.purchasePlan .purchasePlanDetail .table .righthead {
  background-color: #eaecf0;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
}
.purchasePlan .purchasePlanDetail .table .left {
  background-color: #eaecf0;
  font-size: 12px;
  font-weight: 500;
  color: #0f172a;
  line-height: 18px;
}
.purchasePlan .purchasePlanDetail .table .right {
  font-size: 12px;
  font-weight: 500;
  color: #0f172a;
  line-height: 18px;
}
.purchasePlan .purchasePlanDetail .table .right .digit {
  font-family: "Inter";
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
  line-height: 36px;
}
.purchasePlan .purchasePlanDetail .table .right .digit2 {
  font-family: "Inter";
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
  line-height: 36px;
}
.purchasePlan .purchasePlanDetail .table .row-end-table {
  vertical-align: middle;
}

.state_condition .state .headArea .left {
  font-family: "Sofia-pro";
  color: #020408;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
}
.state_condition .state .headArea .right {
  color: #020408;
  font-family: "Sofia-pro";
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
}
.state_condition .state .table .left {
  background-color: #eaecf0;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 137px;
  height: 56px;
  vertical-align: middle;
}
.state_condition .state .table .right {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 137px;
  height: 56px;
  vertical-align: middle;
}

.carPickSection .titleCars p {
  color: #020408;
  font-family: "Sofia-pro";
  font-weight: 600;
  font-size: 20.21px;
  line-height: 24.27px;
}
.carPickSection .hoverShadow:hover {
  background: #f6f6f6;
  border-radius: 12px;
  cursor: pointer;
}
.carPickSection .left .bottom-car .left {
  background-color: #ff4b44;
  color: white;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
  padding: 4px 10px;
}
.carPickSection .left .bottom-car .right {
  color: #0c1529;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
}
.carPickSection .left .bottom-car-title p {
  color: #1e293b;
  font-size: 13.5px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 20px;
}
.carPickSection .left .bottom-car-details .left {
  color: #0c1529;
  font-size: 12px;
  font-weight: 400;
  font-family: "Inter";
  line-height: 16px;
}
.carPickSection .left .bottom-car-details .right {
  color: #0c1529;
  font-size: 14.8px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 23.12px;
}
.carPickSection .left .bottom-car-details .sub {
  color: #1e293b;
  font-size: 10.57px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 19.27px;
}
.carPickSection .left .bottom-car-details .right-pan {
  color: #1e293b;
  font-size: 12.69px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 19.03px;
}
.carPickSection .textLink p {
  font-size: 12.69px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16.96px;
  text-decoration: underline;
  cursor: pointer;
}

.customerReviewDetails .reviewSec .title {
  color: #020408;
  font-family: "Sofia-Pro";
  font-size: 24px;
  font-weight: 600;
  line-height: 28.82px;
}
.customerReviewDetails .reviewLeft .top .textArea {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  font-family: "Inter";
  color: #0c1529;
}
.customerReviewDetails .reviewLeft .top .author {
  color: #475569;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18px;
}
.customerReviewDetails .reviewLeft .titleMain p:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  cursor: pointer;
}
.customerReviewDetails .reviewLeft .titleMain {
  color: #2384c1;
  font-size: 14px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 20px;
}
.customerReviewDetails .reviewLeft .para {
  color: #1e293b;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18px;
}
.customerReviewDetails .reviewLeft .bottom {
  color: #1e293b;
  font-size: 10px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18px;
}
.customerReviewDetails .textLink p {
  font-size: 12.69px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16.96px;
  text-decoration: underline;
  cursor: pointer;
}
.relatedServicesDetails .relatedService .title {
  color: #020408;
  font-family: "Sofia-Pro";
  font-size: 24px;
  font-weight: 600;
  line-height: 28.82px;
}
.relatedServicesDetails .relatedDetails .title {
  font-size: 18px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 26px;
}
.relatedServicesDetails .relatedDetails .relatedImg .para {
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #0c1529;
}
.relatedServicesDetails .relatedDetails .relatedImg .textRight p {
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-decoration: underline;
  color: #2f2f2f;
  cursor: pointer;
}
/* ====================== End Search Detail Page Css */

/* =========== Start Search Details Page Css For Mobile Page */
.search_detail_mobile .inner .topTitle {
  color: #1c6a9b;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .topPara {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .carDetailMobile .carDetail {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .imgClassification {
  border: 1px solid #1e293b;
  padding: 8px 6px;
  border-radius: 4px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
}
.search_detail_mobile .inner .carModels .left .title {
  background-color: #f6f6f8;
  color: #020408;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 0px;
}
.search_detail_mobile .inner .carModels .left .para {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20.54px;
}
.search_detail_mobile .inner .carModels .left .para2 {
  color: #020408;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 20.54px;
}
.search_detail_mobile .inner .carModels .left .para span {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 20.54px;
}

.search_detail_mobile .inner .carModels .center .title {
  background-color: #f6f6f8;
  color: #020408;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 0px;
}
.search_detail_mobile .inner .carModels .center .para {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20.54px;
}
.search_detail_mobile .inner .carModels .center .para2 {
  color: #020408;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 20.54px;
}
.search_detail_mobile .inner .carModels .center .para span {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 20.54px;
}

.search_detail_mobile .inner .carModels .right .title {
  background-color: #f6f6f8;
  color: #020408;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 0px;
}
.search_detail_mobile .inner .carModels .right .para {
  color: #020408;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 20.54px;
}
.search_detail_mobile .inner .imageSlider {
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  gap: 4px;
}

.search_detail_mobile .inner .stockInvest {
  background-color: #ecf5ff;
  border-radius: 6px;
}
.search_detail_mobile .inner .stockInvest .left {
  background-color: #2384c1;
  color: #fff;
  border-radius: 6px 0px 0px 6px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 11.97px;
  line-height: 13px;
  white-space: nowrap;
}
.search_detail_mobile .inner .stockInvest .phone .callText {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  font-size: 11.97px;
  line-height: 11.97px;
}
.search_detail_mobile .inner .totalPayment .left {
  background-color: #ecf5ff;
  width: 100%;
  border-radius: 4px;
  padding: 10px;
}
.search_detail_mobile .inner .totalPayment .left .totalPaymentAmount .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .totalPayment .left .totalPaymentAmount .price {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
}
.search_detail_mobile
  .inner
  .totalPayment
  .left
  .totalPaymentAmount
  .price
  span {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 28px;
}
.search_detail_mobile .inner .totalPayment .left .MY {
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .totalPayment .right {
  background-color: #f6f6f8;
  width: 100%;
  border-radius: 4px;
  padding: 10px;
}
.search_detail_mobile .inner .totalPayment .right .totalPaymentAmount2 .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .totalPayment .right .totalPaymentAmount2 .price {
  color: #334155;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
}
.search_detail_mobile
  .inner
  .totalPayment
  .right
  .totalPaymentAmount2
  .price
  span {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 28px;
}
.search_detail_mobile .inner .totalPayment .right .MY {
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .standardLoanPrice {
  border: 1px solid #2384c1;
  border-radius: 4px;
}
.search_detail_mobile .inner .standardLoanPrice .left {
  background-color: #2384c1;
  padding: 4px;
  color: white;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.search_detail_mobile .inner .standardLoanPrice .center {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 8.9px;
  line-height: 13.46px;
}
.search_detail_mobile .inner .standardLoanPrice .center span {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 700;
  font-size: 17.95px;
  line-height: 22.44px;
}
.search_detail_mobile .inner .standardLoanPrice .right {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .content2 {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;
  padding-bottom: 0;
}
.search_detail_mobile .inner .content2 .tophead2 {
  background-color: #f6f6f8;
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .content2 .textSection p {
  font-family: "Inter";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.search_detail_mobile .inner .content2 .textSection .btn-storeReserve {
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: white;
  background: #2384c1;
  width: 100%;
}
.search_detail_mobile .inner .content2 .textSection .btn-storeMoney {
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #2384c1;
  width: 100%;
  border: 1px solid #2384c1;
}
.search_detail_mobile .inner .content2 .textSection .bottom-btn {
  border-bottom: 1px solid #e2e8f0;
}
.search_detail_mobile .inner .content2 .textSection .evaluationScore .left p {
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile
  .inner
  .content2
  .textSection
  .evaluationScore
  .left
  p
  span {
  color: #2384c1;
  font-weight: 700;
  font-size: 14px;
  line-height: 33.69px;
}
.search_detail_mobile .inner .content2 .textSection .evaluationScore .center p {
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .content2 .textSection .evaluationScore .right p {
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .content2 .textSection .repairHistory p {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .condition .checks .ticks .text {
  color: #353c4d;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .condition .top .title {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .condition .top .para {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .condition .table .first {
  background-color: #eaecf0;
  color: #0f172a;
  position: relative;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  width: 50%;
}
.search_detail_mobile .inner .condition .table .first img {
  position: absolute;
  right: 10px;
}
.search_detail_mobile .inner .condition .table .second {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  width: 50%;
}
.search_detail_mobile .inner .detailVehicle .top {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .detailVehicle .para {
  color: #64748b;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .detailVehicle .score {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .detailVehicle .score span {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 20px;
  line-height: 37.78px;
}
.search_detail_mobile .inner .range-slider {
  border-top: 2px solid #94a3b8;
}
.search_detail_mobile .inner .range-slider .left {
  padding: 10px 10px 10px 0px;
}
.search_detail_mobile .inner .range-slider .left .top .no {
  color: #020617;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
}
.search_detail_mobile .inner .range-slider .center {
  padding: 10px 10px 10px 0px;
}
.search_detail_mobile .inner .range-slider .center .top .no {
  color: #020617;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
}
.search_detail_mobile .inner .range-slider .right .top .no {
  color: #020617;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
}
.search_detail_mobile .inner .range-slider .right .top .no.active {
  background: #1c6a9b;
  color: white;
  padding: 10px 20px;
  border-radius: 0px 0px 4px 4px;
}
.search_detail_mobile .inner .range-slider .right .top .no.active::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid #1c6a9b;
  position: absolute;
  right: 15px;
  bottom: 50px;
  border-radius: 3.35px;
}
.search_detail_mobile .inner .excelentCondition p {
  color: #020617;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .interior .top p {
  color: #020617;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .interior .paras {
  color: #020617;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  border-bottom: 1px solid #94a3b8;
}
.search_detail_mobile .inner .interior2 {
  border-bottom: 1px solid #94a3b8;
}
.search_detail_mobile .inner .interior2 .history {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .interior2 .nun {
  color: #020617;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .plan .title {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .plan .totalPayable {
  border-bottom: 1px solid #94a3b8;
}
.search_detail_mobile .inner .plan .totalPayable .left p {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .plan .totalPayable .center p {
  color: #020617;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .plan .totalPayable .center p span {
  color: #1c6a9b;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
}
.search_detail_mobile .inner .plan .inquriryAction .btn-inq {
  border: 1px solid #64748b;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #64748b;
}
.search_detail_mobile .inner .reviewDealership .topReview .title {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .reviewDealership .topReview .overallRating {
  color: #020408;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .reviewDealership .topReview .overallRating span {
  color: #1c6a9b;
  font-family: "Inter";
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
}
.search_detail_mobile .inner .reviewDealership .topReview .cs {
  font-family: "Inter";
  color: #475569;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile .inner .reviewDealership .topReview .cs span {
  font-family: "Inter";
  color: #1c6a9b;
  font-weight: 700;
  font-size: 16px;
  line-height: 18.75px;
}
.search_detail_mobile .inner .reviewDealership .reviewCarModel .top .title {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.search_detail_mobile
  .inner
  .reviewDealership
  .reviewCarModel
  .top
  .honda
  .title {
  color: #020408;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
}
.search_detail_mobile
  .inner
  .reviewDealership
  .reviewCarModel
  .top
  .honda
  .head
  .para {
  color: #475569;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.search_detail_mobile .inner .reviewDealership .reviewCarModel .top .heading {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .reviewDealership .reviewCarModel .top .paring {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
}
.search_detail_mobile .inner .reviewDealership .reviewCarModel .top .posted p {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
}
.search_detail_mobile
  .inner
  .reviewDealership
  .reviewCarModel
  .top
  .posted
  span {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;
}
/* =========== End Search Details Page Css For Mobile Page */
</style>
