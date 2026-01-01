<template>
  <div>
    <section class="desktop-view">
      <div class="sliderArea position-relative">
        <div class="inner position-relative">
          <NuxtImg
            src="/assets/images/home/slider.webp"
            width="1425"
            height="477"
            alt="Slider"
            class="img-fluid hero-image"
            fetchpriority="high"
          />
        </div>

        <div class="searchFormSlider">
          <div class="container innerModel position-relative">
            <div class="row">
              <form action="javascript:;" class="position-absolute d-flex">
                <div
                  role="button"
                  class="left d-flex align-items-center bg-white px-3 justify-content-between rounded-start-3"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <p class="m-0">
                    メーカー車名<span class="searchText">を選択する</span>
                  </p>
                  <NuxtImg
                    src="/assets/images/home/caret-right.webp"
                    alt="caret"
                    class="img-fluid"
                    loading="lazy"
                    width="5"
                    height="9"
                  />
                </div>
                <div
                  class="left d-flex align-items-center bg-white px-3 justify-content-between"
                >
                  <p class="m-0">
                    地域を<span class="searchText">選択する</span>
                  </p>
                  <NuxtImg
                    src="/assets/images/home/caret-right.webp"
                    alt="caret"
                    class="img-fluid"
                    loading="lazy"
                    width="5"
                    height="9"
                  />
                </div>
                <div
                  class="left d-flex align-items-center bg-white px-3 justify-content-between"
                >
                  <p class="m-0">
                    価格を<span class="searchText">設定する</span>
                  </p>
                  <NuxtImg
                    src="/assets/images/home/caret-right.webp"
                    alt="caret"
                    class="img-fluid"
                    loading="lazy"
                    width="5"
                    height="9"
                  />
                </div>
                <div class="left border-0">
                  <button class="submit-form" @click="navigation">
                    検索する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="searchModal"
          tabindex="-1"
          aria-labelledby="searchModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body p-0">
                <NuxtImg
                  src="/assets/images/home/close.webp"
                  alt="close"
                  class="img-fluid btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
                <div class="tabs">
                  <ul class="tabs-nav">
                    <!-- <li
                      class="nav-link"
                      :class="{ active: activeTab === 'メーカー車名' }"
                      id="tab1-tab"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-controls="tab1"
                      :aria-selected="activeTab === 'メーカー車名'"
                      @click="activeTab = 'メーカー車名'"
                    >
                      メーカー車名 <span class="tabText">を選択する</span>
                      <NuxtImg
                        src="/assets/images/home/caret-right.webp"
                        alt="caret"
                        class="img-fluid"
                        loading="lazy"
                        width="5"
                        height="9"
                      />
                    </li> -->
                    <li
                      class="nav-link"
                      :class="{ active: activeTab === 'メーカー車名' }"
                      id="tab1-tab"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-controls="tab1"
                      :aria-selected="activeTab === 'メーカー車名'"
                      @click="activeTab = 'メーカー車名'"
                      style="list-style: none; cursor: pointer"
                    >
                      <template v-if="selectedBrand">
                        {{ selectedBrand }}
                        <span
                          class="ms-2"
                          @click.stop="clearBrand"
                          style="cursor: pointer; color: red"
                        >
                          ✖
                        </span>
                      </template>
                      <template v-else>
                        メーカー車名 <span class="tabText">を選択する</span>
                        <NuxtImg
                          src="/assets/images/home/caret-right.webp"
                          alt="caret"
                          class="img-fluid"
                          loading="lazy"
                          width="5"
                          height="9"
                        />
                      </template>
                    </li>

                    <li
                      class="nav-link"
                      :class="{ active: activeTab === '地域を' }"
                      id="tab2-tab"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-controls="tab2"
                      :aria-selected="activeTab === '地域を'"
                      @click="activeTab = '地域を'"
                    >
                      地域を <span class="tabText">選択する</span>
                      <NuxtImg
                        src="/assets/images/home/caret-right.webp"
                        alt="caret"
                        class="img-fluid"
                        loading="lazy"
                        width="5"
                        height="9"
                      />
                    </li>
                    <li
                      class="nav-link"
                      :class="{ active: activeTab === '価格を' }"
                      id="tab3-tab"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-controls="tab3"
                      :aria-selected="activeTab === '価格を'"
                      @click="activeTab = '価格を'"
                    >
                      価格を <span class="tabText">設定する</span>
                      <NuxtImg
                        src="/assets/images/home/caret-right.webp"
                        alt="caret"
                        class="img-fluid"
                        loading="lazy"
                        width="5"
                        height="9"
                      />
                    </li>
                    <li
                      class="nav-link submitBtnTab rounded-0"
                      :class="{ active: activeTab === '検索する' }"
                      id="tab4-tab"
                      data-bs-toggle="tab"
                      type="button"
                      role="tab"
                      aria-controls="tab4"
                      :aria-selected="activeTab === '検索する'"
                      @click="activeTab = '検索する'"
                    >
                      検索する
                    </li>
                  </ul>
                  <div class="tabs-stage">
                    <div
                      :class="
                        activeTab === 'メーカー車名'
                          ? 'search-active'
                          : 'd-none'
                      "
                      id="tab1"
                    >
                      <!-- <div class="searchBox d-block d-flex">
                        <input type="text" placeholder="Search Makes" />
                        <NuxtImg
                          src="/assets/images/home/searchIcon.webp"
                          alt="Search"
                          class="img-fluid"
                          loading="lazy"
                          width="16"
                          height="16"
                        />
                      </div> -->

                      <div class="filterTopHeading">
                        <h4 class="head">価格を設定する</h4>
                      </div>

                      <div class="row topMakes" v-show="!showBottom">
                        <div class="col-12 col-md-6">
                          <div class="domestic d-block">
                            <h4 class="my-3">日本車</h4>
                            <div
                              class="next-tab d-flex justify-content-between flex-wrap gap-5"
                            >
                              <!-- <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/1.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />
                                <p class="m-0">レクサス</p>
                              </div> -->
                              <div
                                class="logoArea d-block"
                                @click="selectBrand('レクサス')"
                                style="cursor: pointer"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/1.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />
                                <p class="m-0">レクサス</p>
                              </div>

                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/2.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">トヨタ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/3.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ホンダ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/4.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ホンダ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/5.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">鈴木</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/6.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ダイハツ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/7.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">マツダ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/8.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">スバル</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/9.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">三菱</p>
                              </div>

                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/9.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">三菱</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/9.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">三菱</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/9.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">三菱</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/9.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">三菱</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/9.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">三菱</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-12 col-md-6">
                          <div class="domestic d-block">
                            <h4 class="mt-3 pb-2">外国車</h4>
                            <div
                              class="next-tab d-flex justify-content-between flex-wrap gap-5"
                            >
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/10.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">メルセデス</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/11.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">BMW</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/12.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">フォルクスワーゲン</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/13.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">アウディ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/14.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ミニ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/15.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ポルシェ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/16.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ウーリン</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/17.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">プジョー</p>
                              </div>

                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="buttonNew d-flex align-items-center gap-2 justify-content-center mt-5 pt-4"
                        @click="toggleMakes"
                        :class="{ 'move-up': showBottom }"
                      >
                        <p class="btn-text m-0">
                          {{
                            showBottom
                              ? "すべてのメーカーを見る"
                              : "他のメーカー"
                          }}
                        </p>
                        <NuxtImg
                          src="/assets/icons/arrow-circle.webp"
                          alt="arrow"
                          class="image"
                          loading="lazy"
                          width="24"
                          height="24"
                          :class="{ 'rotate-up': showBottom }"
                        />
                      </div>

                      <div class="row bottomMakes" v-show="showBottom">
                        <div class="col-md-12">
                          <div class="localCars">
                            <p class="m-0 title">日本</p>
                            <div
                              class="next-tab d-flex justify-content-between flex-wrap gap-5"
                            >
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/10.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">メルセデス</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/11.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">BMW</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/12.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">フォルクスワーゲン</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/13.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">アウディ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/14.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ミニ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/15.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ポルシェ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/16.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ウーリン</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/17.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">プジョー</p>
                              </div>

                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="localCars py-3">
                            <p class="m-0 title">ドイツ</p>
                            <div
                              class="next-tab d-flex justify-content-between flex-wrap gap-5"
                            >
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/10.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">メルセデス</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/11.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">BMW</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/12.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">フォルクスワーゲン</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/13.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">アウディ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/14.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ミニ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/15.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ポルシェ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/16.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">ウーリン</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="/assets/images/brands/17.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">プジョー</p>
                              </div>

                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                              <div
                                class="logoArea d-block"
                                @click="activeTab = '地域を'"
                              >
                                <NuxtImg
                                  src="assets/images/brands/18.webp"
                                  alt="Logo"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="51"
                                  height="51"
                                />

                                <p class="m-0">テスラ</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      :class="
                        activeTab === '地域を' ? 'search-active' : 'd-none'
                      "
                      id="tab2"
                    >
                      <div class="bodyType d-block">
                        <div
                          class="topNavigator d-flex justify-content-between align-items-center"
                        >
                          <div class="left d-flex align-items-center gap-3">
                            <NuxtImg
                              src="assets/images/icons/back-arrow.webp"
                              alt="arrow-back"
                              class="img-fluid"
                              width="8"
                              height="8"
                            />
                            <p class="m-0">メーカーへ戻る</p>
                          </div>
                          <div class="center">
                            <p class="m-0">"Make"の車種を選択</p>
                          </div>
                          <div class="right">
                            <p class="m-0">地域から選ぶ</p>
                          </div>
                        </div>
                        <h2 class="my-3">ボディタイプから選ぶ</h2>
                      </div>

                      <div class="modelCars d-flex justify-content-between">
                        <div
                          class="carsLogoArea text-center d-flex"
                          :class="{ active: isLogoActive }"
                          @click="toggleLogo"
                        >
                          <NuxtImg
                            src="/assets/images/cars-logo/1.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">SUV</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/2.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">クーペ</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/3.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">福祉車両</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/4.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">ステーションワゴン</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/5.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">ミニバン</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/6.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">コンパクトカー</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/7.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">EV</h2>
                        </div>
                      </div>

                      <div
                        class="modelCars d-flex justify-content-between mt-2"
                      >
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/1.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">SUV</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/2.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">クーペ</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/3.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">福祉車両</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/4.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">ステーションワゴン</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/5.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">ミニバン</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/6.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">コンパクトカー</h2>
                        </div>
                        <div class="carsLogoArea text-center d-flex">
                          <NuxtImg
                            src="/assets/images/cars-logo/7.webp"
                            alt="car-logo"
                            class="img-fluid"
                            width="46"
                            height="32"
                          />

                          <h2 class="m-0">EV</h2>
                        </div>
                      </div>

                      <!-- <div
                        class="searchBox d-block d-flex mt-4"
                        style="display: none"
                      >
                        <input
                          type="text"
                          placeholder="What car you Looking for?"
                        />
                        <NuxtImg
                          src="/assets/images/home/searchIcon.webp"
                          alt="Search"
                          class="img-fluid"
                          loading="lazy"
                          width="16"
                          height="16"
                        />
                      </div> -->
                      <div class="popularCarTag">
                        <div class="inner">
                          <p class="m-0 firstText">人気車</p>
                          <div
                            class="arrowText d-flex align-items-center gap-2"
                          >
                            <p class="m-0">英数</p>
                            <NuxtImg
                              src="assets/images/icons/arrow-down-blue.webp"
                              alt="arrow"
                              class="img-fluid"
                              width="12"
                              height="6"
                            />
                          </div>
                          <div
                            class="arrowText d-flex align-items-center gap-2"
                          >
                            <p class="m-0">ア行</p>
                            <NuxtImg
                              src="assets/images/icons/arrow-down-blue.webp"
                              alt="arrow"
                              class="img-fluid"
                              width="12"
                              height="6"
                            />
                          </div>
                          <div
                            class="arrowText d-flex align-items-center gap-2"
                          >
                            <p class="m-0">ア行</p>
                            <NuxtImg
                              src="assets/images/icons/arrow-down-blue.webp"
                              alt="arrow"
                              class="img-fluid"
                              width="12"
                              height="6"
                            />
                          </div>
                          <div
                            class="arrowText d-flex align-items-center gap-2"
                          >
                            <p class="m-0">ア行</p>
                            <NuxtImg
                              src="assets/images/icons/arrow-down-blue.webp"
                              alt="arrow"
                              class="img-fluid"
                              width="12"
                              height="6"
                            />
                          </div>
                          <div
                            class="arrowText d-flex align-items-center gap-2"
                          >
                            <p class="m-0">サ行</p>
                            <NuxtImg
                              src="assets/images/icons/arrow-down-blue.webp"
                              alt="arrow"
                              class="img-fluid"
                              width="12"
                              height="6"
                            />
                          </div>
                          <div
                            class="arrowText d-flex align-items-center gap-2"
                          >
                            <p class="m-0">サ行</p>
                            <NuxtImg
                              src="assets/images/icons/arrow-down-blue.webp"
                              alt="arrow"
                              class="img-fluid"
                              width="12"
                              height="6"
                            />
                          </div>
                          <div
                            class="arrowText d-flex align-items-center gap-2"
                          >
                            <p class="m-0">サ行</p>
                            <NuxtImg
                              src="assets/images/icons/arrow-down-blue.webp"
                              alt="arrow"
                              class="img-fluid"
                              width="12"
                              height="6"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="bodyType d-block mt-3 mb-4">
                        <h2>人気車</h2>
                      </div>

                      <div
                        class="next-tab textModel d-flex justify-content-between flex-wrap"
                        v-if="isLogoActive"
                      >
                        <div @click="activeTab = '価格を'">
                          <NuxtImg
                            src="/assets/images/cars/carImg.webp"
                            alt="Search"
                            class="img-fluid"
                            loading="lazy"
                            width="189"
                            height="118"
                          />
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label class="form-check-label" for="defaultCheck1">
                              プリウス <span>(6521)</span>
                            </label>
                          </div>
                        </div>
                        <div @click="activeTab = '価格を'">
                          <NuxtImg
                            src="/assets/images/cars/carImg.webp"
                            alt="Search"
                            class="img-fluid"
                            loading="lazy"
                            width="189"
                            height="118"
                          />
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label class="form-check-label" for="defaultCheck1">
                              プリウス <span>(6521)</span>
                            </label>
                          </div>
                        </div>

                        <div @click="activeTab = '価格を'">
                          <NuxtImg
                            src="/assets/images/cars/carImg.webp"
                            alt="Search"
                            class="img-fluid"
                            loading="lazy"
                            width="189"
                            height="118"
                          />
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label class="form-check-label" for="defaultCheck1">
                              プリウス <span>(6521)</span>
                            </label>
                          </div>
                        </div>
                        <div @click="activeTab = '価格を'">
                          <NuxtImg
                            src="/assets/images/cars/carImg.webp"
                            alt="Search"
                            class="img-fluid"
                            loading="lazy"
                            width="189"
                            height="118"
                          />
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label class="form-check-label" for="defaultCheck1">
                              プリウス <span>(6521)</span>
                            </label>
                          </div>
                        </div>

                        <div @click="activeTab = '価格を'">
                          <NuxtImg
                            src="/assets/images/cars/carImg.webp"
                            alt="Search"
                            class="img-fluid"
                            loading="lazy"
                            width="189"
                            height="118"
                          />
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label class="form-check-label" for="defaultCheck1">
                              プリウス <span>(6521)</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div v-else>
                        <p class="text-danger">❌ Nothing to found</p>
                      </div>
                    </div>
                    <div
                      :class="
                        activeTab === '価格を' ? 'search-active' : 'd-none'
                      "
                      id="tab3"
                    >
                      <!-- <div class="searchBox d-block d-flex">
                        <input
                          type="text"
                          placeholder="What City you Looking for?"
                        />
                        <NuxtImg
                          src="/assets/images/home/searchIcon.webp"
                          alt="Search"
                          class="img-fluid"
                          loading="lazy"
                          width="16"
                          height="16"
                        />
                      </div> -->

                      <div
                        class="topNavigator d-flex justify-content-between align-items-center"
                      >
                        <div class="left d-flex align-items-center gap-3">
                          <NuxtImg
                            src="assets/images/icons/back-arrow.webp"
                            alt="arrow-back"
                            class="img-fluid"
                            width="8"
                            height="8"
                          />
                          <p class="m-0">メーカーへ戻る</p>
                        </div>
                        <div class="center">
                          <p class="m-0">"Make"の車種を選択</p>
                        </div>
                        <div class="right">
                          <p class="m-0">地域から選ぶ</p>
                        </div>
                      </div>

                      <div class="checkBoxModel d-block mt-4 mb-3">
                        <h2>関東 <span class="checkNo">(7141)</span></h2>
                      </div>

                      <div class="next-tab checkBox d-flex">
                        <div class="checkboxModel d-flex">
                          <p
                            class="m-0 checkBoxTick"
                            @click="activeTab = '検索する'"
                          ></p>
                          <p class="m-0 labelCheck mx-2">
                            東京 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            埼玉 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            神奈川 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            千葉 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            茨城 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            群馬 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            栃木 <span class="checkText">(441)</span>
                          </p>
                        </div>
                      </div>

                      <div class="checkBoxModel d-block mt-4 mb-3">
                        <h2>関西 <span class="checkNo">(956)</span></h2>
                      </div>

                      <div class="next-tab checkBox d-flex">
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            大阪 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            兵庫 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            京都 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            滋賀 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            奈良 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            和歌山 <span class="checkText">(441)</span>
                          </p>
                        </div>
                      </div>

                      <div class="checkBoxModel d-block mt-4 mb-3">
                        <h2>関西 <span class="checkNo">(956)</span></h2>
                      </div>

                      <div class="next-tab checkBox d-flex">
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            大阪 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            兵庫 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            京都 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            滋賀 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            奈良 <span class="checkText">(441)</span>
                          </p>
                        </div>
                        <div class="checkboxModel d-flex">
                          <p class="m-0 checkBoxTick"></p>
                          <p class="m-0 labelCheck mx-2">
                            和歌山 <span class="checkText">(441)</span>
                          </p>
                        </div>
                      </div>
                      <div class="checkBoxModel d-block mt-4 mb-3">
                        <h2>関西 <span class="checkNo">(956)</span></h2>
                      </div>
                    </div>
                    <div
                      :class="
                        activeTab === '検索する' ? 'search-active' : 'd-none'
                      "
                      id="tab4"
                    >
                      <div
                        class="topNavigator d-flex justify-content-between align-items-center"
                      >
                        <div class="left d-flex align-items-center gap-3">
                          <NuxtImg
                            src="assets/images/icons/back-arrow.webp"
                            alt="arrow-back"
                            class="img-fluid"
                            width="8"
                            height="8"
                          />
                          <p class="m-0">メーカーへ戻る</p>
                        </div>
                        <div class="center">
                          <p class="m-0">"Make"の車種を選択</p>
                        </div>
                        <div class="right">
                          <p class="m-0">地域から選ぶ</p>
                        </div>
                      </div>

                      <div class="price-range">
                        <div
                          class="col-md-12 d-flex justify-content-between gap-3"
                        >
                          <div class="col-md-6">
                            <div class="slider-container">
                              <!-- <div class="slider-values">
                                <span>Min: {{ min }}</span>
                                <span>Max: {{ max }}</span>
                              </div> -->
                              <p class="m-0 topHead">車両価格</p>

                              <div class="slider-wrapper">
                                <!-- Background track -->
                                <div class="slider-track-bg"></div>

                                <!-- Active range highlight -->
                                <div
                                  class="slider-track-fill"
                                  :style="trackStyle"
                                ></div>

                                <!-- Range Inputs -->
                                <input
                                  type="range"
                                  min="0"
                                  max="1000"
                                  step="1"
                                  v-model.number="min"
                                  @input="validateMin"
                                  class="thumb thumb-min"
                                />
                                <input
                                  type="range"
                                  min="0"
                                  max="1000"
                                  step="1"
                                  v-model.number="max"
                                  @input="validateMax"
                                  class="thumb thumb-max"
                                />
                              </div>

                              <!-- Hidden inputs for form -->
                              <form>
                                <input
                                  type="hidden"
                                  name="min-value"
                                  :value="min"
                                />
                                <input
                                  type="hidden"
                                  name="max-value"
                                  :value="max"
                                />
                              </form>
                            </div>

                            <div
                              class="next-tab selectArea d-flex justify-content-between"
                            >
                              <div class="inner-select d-block">
                                <select
                                  v-model.number="min"
                                  @change="validateMin"
                                  class="form-select"
                                >
                                  <option
                                    v-for="value in rangeOptions"
                                    :key="value"
                                    :value="value"
                                  >
                                    {{ value }}
                                  </option>
                                </select>
                              </div>
                              <div class="tilda">~</div>
                              <div class="inner-select d-block">
                                <select
                                  v-model.number="max"
                                  @change="validateMax"
                                  class="form-select"
                                >
                                  <option
                                    v-for="value in rangeOptions"
                                    :key="value"
                                    :value="value"
                                  >
                                    {{ value }}
                                  </option>
                                </select>
                              </div>
                            </div>

                            <!-- Milage Range Slider -->
                            <div class="slider-container">
                              <p class="m-0 topHead">年式</p>
                              <div class="slider-wrapper">
                                <div class="slider-track-bg"></div>
                                <div
                                  class="slider-track-fill"
                                  :style="mileageTrackStyle"
                                ></div>

                                <input
                                  type="range"
                                  min="0"
                                  max="100000"
                                  step="100"
                                  v-model.number="minMileage"
                                  @input="validateMinMileage"
                                  class="thumb thumb-min"
                                />
                                <input
                                  type="range"
                                  min="0"
                                  max="100000"
                                  step="100"
                                  v-model.number="maxMileage"
                                  @input="validateMaxMileage"
                                  class="thumb thumb-max"
                                />
                              </div>

                              <form>
                                <input
                                  type="hidden"
                                  name="min-mileage"
                                  :value="minMileage"
                                />
                                <input
                                  type="hidden"
                                  name="max-mileage"
                                  :value="maxMileage"
                                />
                              </form>
                            </div>

                            <div
                              class="next-tab selectArea d-flex justify-content-between"
                            >
                              <div class="inner-select d-block">
                                <select
                                  v-model.number="minMileage"
                                  @change="validateMinMileage"
                                  class="form-select"
                                >
                                  <option
                                    v-for="value in mileageOptions"
                                    :key="value"
                                    :value="value"
                                  >
                                    {{ value }}
                                  </option>
                                </select>
                              </div>
                              <div class="tilda">~</div>
                              <div class="inner-select d-block">
                                <select
                                  v-model.number="maxMileage"
                                  @change="validateMaxMileage"
                                  class="form-select"
                                >
                                  <option
                                    v-for="value in mileageOptions"
                                    :key="value"
                                    :value="value"
                                  >
                                    {{ value }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="slider-container">
                              <p class="m-0 topHead">走行距離</p>
                              <div class="slider-wrapper">
                                <div class="slider-track-bg"></div>
                                <div
                                  class="slider-track-fill"
                                  :style="yearTrackStyle"
                                ></div>

                                <input
                                  type="range"
                                  :min="yearMin"
                                  :max="yearMax"
                                  step="1"
                                  v-model.number="minYear"
                                  @input="validateMinYear"
                                  class="thumb thumb-min"
                                />
                                <input
                                  type="range"
                                  :min="yearMin"
                                  :max="yearMax"
                                  step="1"
                                  v-model.number="maxYear"
                                  @input="validateMaxYear"
                                  class="thumb thumb-max"
                                />
                              </div>

                              <form>
                                <input
                                  type="hidden"
                                  name="min-year"
                                  :value="minYear"
                                />
                                <input
                                  type="hidden"
                                  name="max-year"
                                  :value="maxYear"
                                />
                              </form>
                            </div>

                            <div
                              class="next-tab selectArea d-flex justify-content-between"
                            >
                              <div class="inner-select d-block">
                                <select
                                  v-model.number="minYear"
                                  @change="validateMinYear"
                                  class="form-select"
                                >
                                  <option
                                    v-for="year in yearOptions"
                                    :key="year"
                                    :value="year"
                                  >
                                    {{ year }}
                                  </option>
                                </select>
                              </div>
                              <div class="tilda">~</div>
                              <div class="inner-select d-block">
                                <select
                                  v-model.number="maxYear"
                                  @change="validateMaxYear"
                                  class="form-select"
                                >
                                  <option
                                    v-for="year in yearOptions"
                                    :key="year"
                                    :value="year"
                                  >
                                    {{ year }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p class="heading m-0 pt-4 fw-bold">本体色</p>
                      <div
                        class="searchBodyColor d-flex align-items-center gap-2 flex-wrap my-3"
                      >
                        <div
                          v-for="(color, index) in colors"
                          :key="index"
                          class="color-box"
                          :class="{ active: selectedColor === color.name }"
                          :style="getBoxStyle(color)"
                          @click="selectedColor = color.name"
                        ></div>
                      </div>

                      <!-- 
                      <div
                        class="selectorList d-flex justify-content-between align-items-center"
                        style="display: none"
                      >
                        <div class="col-md-3 d-block" style="display: none">
                          <div
                            class="selectorSec d-block mt-3"
                            style="display: none"
                          >
                            <h2>送信</h2>
                          </div>
                          <div
                            class="innerSelectorArea d-flex justify-content-between align-items-center gap-1"
                            style="display: none"
                          >
                            <div
                              class="inner-select d-block"
                              style="display: none"
                            >
                              <select name="" id="" class="form-select">
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 d-block mx-2"
                          style="display: none"
                        >
                          <div
                            class="selectorSec d-block mt-3"
                            style="display: none"
                          >
                            <h2>操舵</h2>
                          </div>
                          <div
                            class="innerSelectorArea d-flex justify-content-between align-items-center gap-1"
                            style="display: none"
                          >
                            <div
                              class="inner-select d-block"
                              style="display: none"
                            >
                              <select name="" id="" class="form-select">
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3 d-block" style="display: none">
                          <div
                            class="selectorSec d-block mt-3"
                            style="display: none"
                          >
                            <h2>燃料</h2>
                          </div>
                          <div
                            class="innerSelectorArea d-flex justify-content-between align-items-center gap-1"
                            style="display: none"
                          >
                            <div
                              class="inner-select d-block"
                              style="display: none"
                            >
                              <select name="" id="" class="form-select">
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-md-3 d-block mx-1"
                          style="display: none"
                        >
                          <div
                            class="selectorSec d-block mt-3"
                            style="display: none"
                          >
                            <h2>エンジン</h2>
                          </div>
                          <div
                            class="innerSelectorArea d-flex justify-content-between align-items-center gap-1 mx-1"
                            style="display: none"
                          >
                            <div
                              class="inner-select d-block"
                              style="display: none"
                            >
                              <select name="" id="" class="form-select">
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div> -->

                      <div
                        class="selectorList d-flex justify-content-between align-items-center"
                        style="display: none"
                      >
                        <div class="col-md-3 d-block" style="display: none">
                          <div
                            class="selectorSec d-block mt-3"
                            style="display: none"
                          >
                            <h2>乗車定員</h2>
                          </div>
                          <div
                            class="innerSelectorArea d-flex justify-content-between align-items-center gap-1"
                            style="display: none"
                          >
                            <div
                              class="inner-select d-block"
                              style="display: none"
                            >
                              <select name="" id="" class="form-select">
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div
                          class="col-md-3 d-block mx-2"
                          style="display: none"
                        >
                          <div
                            class="selectorSec d-block mt-3"
                            style="display: none"
                          >
                            <h2>定員数</h2>
                          </div>
                          <div
                            class="innerSelectorArea d-flex justify-content-between align-items-center gap-1"
                            style="display: none"
                          >
                            <div
                              class="inner-select d-block"
                              style="display: none"
                            >
                              <select name="" id="" class="form-select">
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3 d-block" style="display: none">
                          <div
                            class="selectorSec d-block mt-3"
                            style="display: none"
                          >
                            <h2>カーナビ</h2>
                          </div>
                          <div
                            class="innerSelectorArea d-flex justify-content-between align-items-center gap-1"
                            style="display: none"
                          >
                            <div
                              class="inner-select d-block"
                              style="display: none"
                            >
                              <select name="" id="" class="form-select">
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-md-3 d-block mx-1"
                          style="display: none"
                        >
                          <div
                            class="selectorSec d-block mt-3"
                            style="display: none"
                          >
                            <h2>車検残</h2>
                          </div>
                          <div
                            class="innerSelectorArea d-flex justify-content-between align-items-center gap-1 mx-1"
                            style="display: none"
                          >
                            <div
                              class="inner-select d-block"
                              style="display: none"
                            >
                              <select name="" id="" class="form-select">
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                                <option value="選択">選択</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="modal-footer border-0 d-flex justify-content-center">
                <button role="button" class="btn btn-submitForm">
                  これらの条件で検索
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const activeTab = ref("メーカー車名");
// const selectedBrand = ref(null)
const selectedBrand = ref(null);

// Select brand
const selectBrand = (brand) => {
  selectedBrand.value = brand;
  activeTab.value = "地域を";
};

// Clear brand
const clearBrand = () => {
  selectedBrand.value = null;
  activeTab.value = "メーカー車名";
};

const isLogoActive = ref(false);

const toggleLogo = () => {
  isLogoActive.value = !isLogoActive.value;
};

// filter button toggle for makes

const showBottom = ref(false);

const toggleMakes = () => {
  showBottom.value = !showBottom.value;
};

//Range slider price filter here
const min = ref(0);
const max = ref(1000);
const minGap = 1;
const rangeOptions = Array.from({ length: 1001 }, (_, i) => i);

const validateMin = () => {
  if (min.value >= max.value - minGap) {
    min.value = max.value - minGap;
  }
};

const validateMax = () => {
  if (max.value <= min.value + minGap) {
    max.value = min.value + minGap;
  }
};

const trackStyle = computed(() => {
  const left = (min.value / 1000) * 100;
  const width = ((max.value - min.value) / 1000) * 100;
  return {
    left: `${left}%`,
    width: `${width}%`,
  };
});

//Range slider milage filter here
const minMileage = ref(0);
const maxMileage = ref(100000);
const mileageMinGap = 100;

const mileageOptions = Array.from({ length: 1001 }, (_, i) => i * 100); // 0 to 100000 in steps of 100

const validateMinMileage = () => {
  if (minMileage.value >= maxMileage.value - mileageMinGap) {
    minMileage.value = maxMileage.value - mileageMinGap;
  }
};

const validateMaxMileage = () => {
  if (maxMileage.value <= minMileage.value + mileageMinGap) {
    maxMileage.value = minMileage.value + mileageMinGap;
  }
};

const mileageTrackStyle = computed(() => {
  const left = (minMileage.value / 100000) * 100;
  const width = ((maxMileage.value - minMileage.value) / 100000) * 100;
  return {
    left: `${left}%`,
    width: `${width}%`,
  };
});

//Range Slider year code here
const yearMin = 2000;
const yearMax = 2025;
const minYear = ref(yearMin);
const maxYear = ref(yearMax);
const yearMinGap = 1;

const yearOptions = Array.from(
  { length: yearMax - yearMin + 1 },
  (_, i) => yearMin + i
);

const validateMinYear = () => {
  if (minYear.value >= maxYear.value - yearMinGap) {
    minYear.value = maxYear.value - yearMinGap;
  }
};

const validateMaxYear = () => {
  if (maxYear.value <= minYear.value + yearMinGap) {
    maxYear.value = minYear.value + yearMinGap;
  }
};

const yearTrackStyle = computed(() => {
  const left = ((minYear.value - yearMin) / (yearMax - yearMin)) * 100;
  const width = ((maxYear.value - minYear.value) / (yearMax - yearMin)) * 100;
  return {
    left: `${left}%`,
    width: `${width}%`,
  };
});

// Define colors and their hex or gradient values
const selectedColor = ref(null);

const colors = [
  { name: "green", value: "#008000" },
  { name: "grey", value: "#d3d3d3" },
  { name: "red", value: "#ff0000" },
  { name: "orange", value: "#ffa500" },
  { name: "purple", value: "#800080" },
  { name: "blue", value: "#0000ff" },
  { name: "pink", value: "#ffc0cb" },
  { name: "yellow", value: "#ffff00" },
  { name: "gold", value: "#ffd700" },
  { name: "white", value: "#ffffff" },
  { name: "dark-grey", value: "#808080" },
  { name: "black", value: "#000000" },
  {
    name: "multi-color",
    value:
      "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
  },
];
// Helper function to apply background style
function getBoxStyle(color) {
  if (color.value.startsWith("linear-gradient")) {
    return {
      backgroundImage: color.value,
    };
  }
  return {
    backgroundColor: color.value,
  };
}
</script>

<style scoped>
.search-active {
  display: block;
}
.sliderArea .inner .hero-image {
  width: 100%;
}
.sliderArea .searchFormSlider .innerModel form {
  bottom: 12px;
}
.sliderArea .searchFormSlider .innerModel form .left {
  width: 100%;
  height: 68px;
  border-right: 1px solid;
  border-color: #94a3b8;
}
.sliderArea .searchFormSlider .innerModel form .left p {
  color: #3a3a3a;
  font-size: 16px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 24px;
}
.sliderArea .searchFormSlider .innerModel form .left .searchText {
  color: #3a3a3a;
  font-size: 16px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 24px;
}
.sliderArea .searchFormSlider .innerModel form .left button {
  width: 100%;
  height: 68px;
  background: #2a9fe8;
  color: white;
  border-radius: 0px 10px 10px 0px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.sliderArea .modal-content {
  width: 1000px;
  right: 280px;
  top: 81px;
  /* background-color: #ecf5ff; */
  height: 630px;
}
.sliderArea .modal-content .btn-close {
  position: absolute;
  top: -40px;
  right: 3px;
  background-color: white;
  opacity: 1;
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
}

.tabs-nav {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.tabs-nav li {
  /* width: 25%; */
  width: 300px !important;
  list-style: none;
  background-color: white;
  position: relative;
  /* border-right: 1px solid;
  border-color: #94a3b8; */
}
.tabs-nav li {
  display: flex;
  align-items: center;
  padding: 15px;
  color: black;
  text-decoration: none;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  /* justify-content: center; */
}
.tabs-nav .tabText {
  font-family: "Inter";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.tabs-nav .submitBtnTab {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  background: #2a9fe8;
  font-weight: bold;
  width: max-content !important;
}
.tabs-nav .submitBtnTab {
  color: white;
}
.tabs-nav li img {
  position: absolute;
  right: 5%;
}
/*ul:after
  {
      clear: left;
      display: block;
      content: "";
  } */
.tabs-nav li:first-child {
  border-start-start-radius: 8px;
}
.tabs-nav li:last-child {
  border-start-end-radius: 8px;
}
.tabs-nav li:first-child {
  border-right: 0;
  border-top-left-radius: 6px;
}
.tabs-nav li:last-child {
  border-top-right-radius: 6px;
}

ul li.active {
  background: #ecf5ff !important;
  border-bottom-color: transparent;
  color: black;
  cursor: default;
  width: 100%;
  display: flex;
}
ul li.active:last-child {
  background-color: #2a9fe8 !important;
  display: flex;
  justify-content: center;
}
.tabs-stage {
  /* border: 1px solid #cecfd5; */
  border-radius: 0 0 6px 6px;
  border-top: 0;
  clear: both;
  padding: 15px 30px;
  position: relative;
  top: -1px;
}
.tabs-stage .searchBox {
  background-color: white;
  width: 458px;
  height: 34px;
  border: 1px solid #e2e2e2;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.tabs-stage .searchBox input {
  font-family: "Inter";
  color: #626262;
  font-weight: 600;
  font-size: 10.53px;
  line-height: 14.04px;
  width: 457px;
  height: 30px;
  outline: none;
  box-sizing: none;
}
.tabs-stage .filterTopHeading .head {
  color: #3a3a3a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
.tabs-stage .domestic h4 {
  color: #020408;
  font-family: "Sofia-Pro";
  font-size: 21.05px;
  font-weight: 600;
  line-height: 28.07px;
}
.tabs-stage .domestic .next-tab .logoArea {
  text-align: center;
  cursor: pointer;
}
.tabs-stage .domestic .next-tab .logoArea:hover {
  opacity: 0.5;
}
.tabs-stage .domestic .next-tab .logoArea p {
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  color: #353c4d;
  line-height: 16px;
}
.topNavigator .left p {
  color: #3a3a3a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
}
.topNavigator .center p {
  color: #3a3a3a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
}
.topNavigator .right p {
  color: #3a3a3a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
}
.tabs-stage .bodyType h2 {
  color: #020408;
  font-family: "Sofia-Pro";
  font-size: 19.87px;
  font-weight: 600;
  line-height: 23.86px;
}
.tabs-stage .carsLogoArea {
  background: #ffffff;
  width: 130px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10.65px;
  padding: 16px 10px;
  border: 1px solid #dcdae2;
  cursor: pointer;
}
.tabs-stage .carsLogoArea:hover {
  background-color: transparent;
}
.tabs-stage .carsLogoArea:hover img {
  filter: brightness(0) saturate(100%) invert(42%) sepia(84%) saturate(490%)
    hue-rotate(159deg) brightness(92%) contrast(89%);
}
.tabs-stage .carsLogoArea.active {
  background-color: transparent;
}
.tabs-stage .carsLogoArea.active img {
  filter: brightness(0) saturate(100%) invert(42%) sepia(84%) saturate(490%)
    hue-rotate(159deg) brightness(92%) contrast(89%);
}

.tabs-stage .carsLogoArea h2 {
  color: #1e293b;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
  padding: 10px 0px;
}
.tabs-stage .textModel {
  overflow: auto;
  white-space: nowrap;
  height: 150px;
}
.tabs-stage .textModel .form-check-label {
  color: #2384c1;
  font-family: "Inter";
  font-weight: bold;
  font-size: 19.86px;
  line-height: 28.68px;
}
.tabs-stage .textModel .form-check-label span {
  color: #2384c1;
  font-family: "Inter";
  font-weight: bold;
  font-size: 14.86px;
  line-height: 28.68px;
}
.popularCarTag .inner {
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #f6f6f8;
  margin: 10px 0px;
  padding: 10px 10px;
  border-radius: 5px;
}
.popularCarTag .inner .firstText {
  border-right: 1px solid black;
  padding-right: 10px;
}
.popularCarTag .inner p {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}
.tabs-stage .textModel p {
  color: #131313;
  font-weight: 400;
  font-family: "Inter";
  font-size: 14.04px;
  line-height: 21.05px;
  cursor: pointer;
}
.tabs-stage .textModel .seeModelTag {
  color: #2384c1;
  font-weight: 400;
  font-family: "Inter";
  font-size: 14.04px;
  line-height: 21.05px;
}
.tabs-stage .checkBoxModel h2 {
  font-weight: 600;
  font-family: "Inter";
  font-size: 17.54px;
  line-height: 24.56px;
  color: #1e293b;
}
.tabs-stage .checkBoxModel .checkNo {
  font-weight: 500;
  font-family: "Inter";
  font-size: 12.28px;
  line-height: 17.54px;
  color: #2384c1;
}
.tabs-stage .checkBox .checkboxModel .checkBoxTick {
  border: 2.34px solid #858a94;
  padding: 2px;
  width: 23.39px;
  height: 23.39px;
  border-radius: 5.85px;
}
.tabs-stage .checkBox .checkboxModel .labelCheck {
  color: #131313;
  font-weight: 400;
  font-size: 14.04px;
  line-height: 21.05px;
  font-family: "Inter";
}
.tabs-stage .checkBox .checkboxModel .checkText {
  color: #2384c1;
  font-weight: 500;
  font-size: 10.53px;
  line-height: 15.79px;
  font-family: "Inter";
}
.tabs-stage .checkBox .checkboxModel {
  margin-right: 32px;
}
.tabs-stage .selectorSec h2 {
  font-family: "Inter";
  font-size: 15.76px;
  font-weight: 600;
  line-height: 22.81px;
  color: #1e293b;
}
.tabs-stage .selectArea .inner-select {
  width: 154.33px;
  margin-right: 5px;
}
.tabs-stage .selectArea .inner-select select {
  width: 100%;
  height: 32px;
  border: 1px solid #aeb1b8;
  color: #353c4d;
  font-family: "Inter";
  font-size: 12.28px;
  font-weight: 500;
  line-height: 17.54px;
}
.tabs-stage .selectArea .inner-select .form-select {
  border-radius: unset;
  --bs-form-select-bg-img: url("/assets/images/home/caret-down.webp");
  background-repeat: no-repeat;
  background-size: 9px;
}
.tabs-stage .selectorList .inner-select {
  width: 100%;
}
.tabs-stage .selectorList .inner-select .form-select {
  border-radius: unset;
  --bs-form-select-bg-img: url("/assets/images/home/caret-down.webp");
  background-repeat: no-repeat;
  background-size: 9px;
}
.tabs-stage .selectorList .inner-select select {
  width: 100%;
  height: 32px;
  border: 1px solid #aeb1b8;
  color: #353c4d;
  font-family: "Inter";
  font-size: 12.28px;
  font-weight: 500;
  line-height: 17.54px;
}

.sliderArea .modal-footer .btn-submitForm {
  background-color: #2384c1;
  color: white;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14.04px;
  line-height: 21.05px;
  padding: 10px 25px;
}
.buttonNew {
  cursor: pointer;
}
.buttonNew .btn-text {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14.04px;
  line-height: 21.05px;
}
.move-up {
  margin-top: 0 !important;
  padding-top: 0 !important;
  transition: all 0.3s ease;
}
.rotate-up {
  transform: rotate(180deg);
}
.bottomMakes {
  overflow: auto;
  height: 475px;
  white-space: nowrap;
}
.bottomMakes .localCars .title {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 21.16px;
  line-height: 28.22px;
  padding: 10px 0px;
}
.bottomMakes .localCars .next-tab .logoArea {
  text-align: center;
  cursor: pointer;
}
.bottomMakes .localCars .next-tab .logoArea p {
  color: #353c4d;
  font-weight: 600;
  font-size: 17.11px;
  line-height: 22.82px;
  padding: 10px 0px;
}

.slider-container {
  /* width: 300px; */
  margin: 30px 0px 0px 0px;
  font-family: "Inter";
}
.slider-container .topHead {
  color: #1e293b;
  font-family: "Inter";
  font-weight: bold;
  font-size: 16px;
  line-height: 24.56px;
}

.slider-values {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.slider-wrapper {
  position: relative;
  height: 40px;
}

.slider-track-bg {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #ccc;
  transform: translateY(-50%);
  border-radius: 4px;
  z-index: 1;
}

.slider-track-fill {
  position: absolute;
  top: 50%;
  height: 4px;
  background-color: #e4e6e7;
  transform: translateY(-50%);
  border-radius: 4px;
  z-index: 2;
}

.thumb {
  position: absolute;
  pointer-events: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  height: 40px;
  background: none;
  z-index: 3;
}

.thumb::-webkit-slider-thumb {
  pointer-events: all;
  width: 16px;
  height: 16px;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  -webkit-appearance: none;
}

.thumb::-moz-range-thumb {
  pointer-events: all;
  width: 16px;
  height: 16px;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.color-box {
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.color-box.active {
  border: 2px solid #000; /* Active highlight */
}
</style>
