<template>
  <div>
    <div class="searchUsedCarList my-3 py-4">
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="manufacture d-flex align-items-center gap-4">
              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">メーカー <br />車名</p>
                <p
                  class="m-0"
                  :class="{
                    text: selectedSummary === '選択する',
                    'truncate-text': selectedSummary !== '選択する',
                  }"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {{ selectedSummary }}
                </p>
              </div>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="searchFilterModel modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="d-flex justify-content-between">
                        <!-- Make Column -->
                        <div class="left">
                          <p class="topHeading">Make</p>
                          <ul>
                            <li
                              v-for="car in cars"
                              :key="car.make"
                              :class="{
                                active: selectedMakes.includes(car.make),
                              }"
                              @click="toggleMake(car.make)"
                            >
                              <img
                                :src="
                                  car.logo || '/assets/images/default-img.webp'
                                "
                                alt="img"
                                class="img-fluid"
                                loading="lazy"
                                width="28"
                                height="28"
                              />
                              <p class="m-0 ms-2 carText">
                                {{ car.make }} ({{
                                  car.count.toLocaleString()
                                }})
                              </p>
                              <i class="fas fa-angle-right"></i>
                            </li>
                          </ul>
                        </div>

                        <!-- Model Column -->
                        <div class="center">
                          <p class="topHeading">モデル</p>
                          <ul>
                            <li
                              v-for="model in filteredModels"
                              :key="model.name"
                              :class="{
                                active: selectedModels.includes(model.name),
                              }"
                              @click="toggleModel(model.name)"
                            >
                              <p class="m-0">
                                {{ model.name }} ({{
                                  model.count.toLocaleString()
                                }})
                              </p>
                              <i class="fa fa-left-arrow"></i>
                            </li>
                          </ul>
                        </div>

                        <!-- Grade Column -->
                        <div class="right">
                          <p class="topHeading">グレード</p>
                          <ul>
                            <li
                              v-for="grade in filteredGrades"
                              :key="grade"
                              @click="selectedGrading(grade)"
                              :class="{ selected: isGradeSelected(grade) }"
                              class="grade-box"
                            >
                              <p class="m-0">{{ grade }}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- Is k click per p tag main value store ho ge or payload bany ga
                    "make":["Honda"], "model":[{"PRIUS":[{"grade" : "X"}]}] -->
                    <div
                      class="modal-footer d-flex justify-content-center border-0"
                    >
                      <button
                        type="button"
                        class="btn btn-search"
                        data-bs-dismiss="modal"
                        @click="onFilterApply"
                      >
                        チェックしたメーカーの 中古車を検索する
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">
                  モデル・<br />
                  グレード
                </p>
                <p
                  class="m-0 modeCheck carModelFetch"
                  :class="{
                    text: submittedGrades.length === 0,
                    'truncate-text': submittedGrades.length > 0,
                    disabled: !canOpenModelModal,
                  }"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#carModal"
                  @click="submitSelectedGrades"
                >
                  <!-- {{ submittedGrades }} -->
                  {{
                    submittedGrades.length > 0
                      ? submittedGrades.join(", ")
                      : "選択する"
                  }}
                </p>
              </div>

              <!-- Modal -->
              <div
                class="modal fade"
                id="carModal"
                tabindex="-1"
                aria-labelledby="carModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-lg gradeModel">
                  <div class="modal-content rounded-0">
                    <div class="modal-header">
                      <h5 class="modal-title" id="carModalLabel">
                        モデル・グレード選択
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div
                        class="bodyText d-flex justify-content-between align-items-center"
                      >
                        <p class="m-0 subHeading">
                          モデル・グレードを選択してください
                        </p>
                        <p class="m-0 count">
                          <span class="text-bold">{{ selectedModelCount }}</span
                          >/10件選択中
                        </p>
                      </div>
                      <p class="m-0 hedingCount my-3">
                        アルファード {{ selectedModelCount }}
                      </p>
                      <!-- Accordion -->
                      <div class="accordion" id="carAccordion">
                        <!-- Accordion Item 1 -->
                        <div
                          v-for="(model, modelIndex) in selectedModels"
                          :key="modelIndex"
                          class="accordion-item rounded-0"
                        >
                          <h2
                            class="accordion-header"
                            :id="`heading-${modelIndex}`"
                          >
                            <button
                              class="accordion-button collapsed custom-label rounded-0 shadow-none"
                              type="button"
                              data-bs-toggle="collapse"
                              :data-bs-target="`#collapse-${modelIndex}`"
                              aria-expanded="false"
                              :aria-controls="`collapse-${modelIndex}`"
                            >
                              <div
                                class="form-check d-flex align-items-center gap-3"
                              >
                                <input
                                  class="form-check-input allSelected"
                                  type="checkbox"
                                  :checked="areAllGradesSelected(model)"
                                  @change="toggleAllGrades(model)"
                                />
                                <img
                                  :src="
                                    getLogoForModel(model) ||
                                    '/assets/images/default-img.webp'
                                  "
                                  alt="car"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="80"
                                  height="50"
                                />
                                <p class="m-0 modelCarCount">
                                  {{ model }}
                                  <span
                                    >({{
                                      getGradesForModel(model).length
                                    }})</span
                                  >
                                </p>
                              </div>
                            </button>
                          </h2>

                          <div
                            class="accordion-collapse collapse"
                            :id="`collapse-${modelIndex}`"
                            :aria-labelledby="`heading-${modelIndex}`"
                            data-bs-parent="#carAccordion"
                          >
                            <div
                              class="accordion-body d-flex justify-content-between align-items-center flex-wrap gap-3"
                            >
                              <!-- {{ "SG:" + selectedGrades[model]}}{{ "/" }} -->
                              <div
                                class="form-check"
                                v-for="(grade, gradeIndex) in getGradesForModel(
                                  model
                                )"
                                :key="gradeIndex"
                              >
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  :id="`grade-${modelIndex}-${gradeIndex}`"
                                  :value="grade"
                                  :checked="isGradeSelected(grade)"
                                  @change="selectedGrading(grade)"
                                />
                                <label
                                  class="form-check-label gradeCheckLable"
                                  :for="`grade-${modelIndex}-${gradeIndex}`"
                                >
                                  {{ grade }}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /Accordion -->
                    </div>
                    <div class="modal-footer carModelSelectedGrade">
                      <button
                        type="button"
                        class="btn btn-submitGrade"
                        data-bs-dismiss="modal"
                        @click="submitSelectedGrades"
                      >
                        検索する
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="model d-flex align-items-center gap-3 ps-4">
                <p class="m-0 title text-nowrap">年式</p>
                <select class="form-select">
                  <option value="指定なし">指定なし ok</option>
                </select>
              </div> -->
              <div class="model d-flex align-items-center gap-3 ps-4">
                <p class="m-0 title text-nowrap">年式</p>
                <select class="form-select" v-model="selectedMinYear">
                  <option value="">指定なし</option>
                  <option
                    v-for="year in minYearOptions"
                    :key="year"
                    :value="year"
                  >
                    {{ year }}
                  </option>
                </select>
              </div>

              <!-- <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">~</p>
                <select class="form-select">
                  <option value="指定なし">指定なし ok</option>
                </select>
              </div> -->

              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">~</p>
                <select class="form-select" v-model="selectedMaxYear">
                  <option value="">指定なし</option>
                  <option
                    v-for="year in maxYearOptions"
                    :key="year"
                    :value="year"
                    :disabled="year <= selectedMinYear"
                  >
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>

            <div class="manufacture d-flex align-items-center gap-4 my-2">
              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">都道府県</p>
                <!-- <p class="m-0 text">選択する</p> -->
                <p
                  class="m-0"
                  :class="{
                    text: selectedPrefectureLabel === '選択する',
                    'truncate-text': selectedPrefectureLabel !== '選択する',
                    selectedPrefecture: true,
                  }"
                  data-bs-toggle="modal"
                  data-bs-target="#myPrefectureModel"
                >
                  {{ selectedPrefectureLabel }}
                </p>
              </div>

              <!-- Prefecture Modal -->
              <div class="modal fade" id="myPrefectureModel" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <input
                        v-model="prefSearch"
                        placeholder="What City you Looking for?"
                        class="form-control w-75 rounded-0 shadow-none mb-3 searchKey"
                      />

                      <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="all"
                          v-model="prefAll"
                          @change="toggleAllPref"
                        />
                        <label class="form-check-label all-select" for="all"
                          >全国</label
                        >
                      </div>

                      <div
                        v-for="pref in filteredPrefectures"
                        :key="pref.prefecture"
                        class="prefecture mb-3"
                      >
                        <p class="preHead">
                          {{ pref.prefecture }} <span class="totalCity"
                            >({{ pref.cities.length }})</span
                          >
                        </p>
                        <div class="inner d-flex gap-3 flex-wrap">
                          <div
                            v-for="city in pref.cities"
                            :key="`${pref.prefecture}-${city}`"
                            class="form-check"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              :id="pref.prefecture + '-' + city"
                              :checked="isChecked(pref.prefecture, city)"
                              @change="
                                onCheckboxChange($event, pref.prefecture, city)
                              "
                            />
                            <label
                              class="form-check-label checkBoxDynamic"
                              :for="pref.prefecture + '-' + city"
                              >{{ city }}</label
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-prefecturSubmit"
                        data-bs-dismiss="modal"
                        @click="confirmPref"
                      >
                        チェックしたメーカーの 中古車を検索する
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">市区町村</p>
                <p
                  class="m-0"
                  :class="{
                    text: selectedTownsLabel === '選択する',
                    'truncate-text': selectedTownsLabel !== '選択する',
                    disabled: !selectedPrefObj,
                  }"
                  data-bs-toggle="modal"
                  data-bs-target="#myMunicipalModal"
                >
                  {{ selectedTownsLabel }}
                </p>
              </div>

              <!-- Municipality Modal -->
              <div class="modal fade" id="myMunicipalModal" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <input
                        v-model="townSearch"
                        placeholder="What Town you Looking for?"
                        class="form-control w-75 searchKey rounded-0 shadow-none mb-3"
                      />

                      <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="allMunicipal"
                          v-model="municipalityAll"
                          @change="toggleAllTowns"
                        />
                        <label
                          class="form-check-label all-select"
                          for="allMunicipal"
                          >全国</label
                        >
                      </div>

                      <div class="inner d-flex gap-3 flex-wrap">
                        <div
                          v-for="town in filteredTowns"
                          :key="town"
                          class="form-check"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            :id="town"
                            :checked="isTownChecked(town)"
                            @change="onTownCheckboxChange($event, town)"
                          />
                          <label
                            class="form-check-label selectBoxDynamic"
                            :for="town"
                            >{{ town }}</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-muncipality d-flex justify-content-center"
                        data-bs-dismiss="modal"
                        @click="confirmTowns"
                      >
                        チェックしたメーカーの 中古車を検索する
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title text-nowrap">走行距離</p>
                <select class="form-select">
                  <option value="指定なし">指定なし min km</option>
                </select>
              </div>
              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">~</p>
                <select class="form-select">
                  <option value="指定なし">指定なし max km</option>
                </select>
              </div> -->
              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title text-nowrap">走行距離</p>
                <select
                  class="form-select"
                  v-model="selectedMin"
                  @change="onMinChange"
                >
                  <option value="">指定なし</option>
                  <option
                    v-for="option in mileageOptions"
                    :key="option"
                    :value="option"
                  >
                    {{ option.toLocaleString() }} km
                  </option>
                </select>
              </div>

              <div class="model d-flex align-items-center gap-3 mt-2">
                <p class="m-0 title">~</p>
                <select
                  class="form-select"
                  v-model="selectedMax"
                  @change="onMaxChange"
                >
                  <option value="">指定なし</option>
                  <option
                    v-for="option in filteredMaxOptions"
                    :key="option"
                    :value="option"
                  >
                    {{ option.toLocaleString() }} km
                  </option>
                </select>
              </div>
            </div>
            <div class="manufacture d-flex align-items-center gap-4 mb-2">
              <div class="model d-flex align-items-center gap-1">
                <p class="m-0 title">ミッション</p>
                <p class="m-0 text">選択する</p>
              </div>
              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">駆動方式</p>
                <!-- <p class="m-0 text">選択する</p> -->
                <div class="position-relative d-inline-block">
                  <!-- The main button -->
                  <button class="btn text" @click="toggleTooltip">
                    {{ selectedOption || "選択する" }}
                  </button>

                  <!-- The tooltip panel -->
                  <div
                    v-if="showTooltip"
                    class="custom-tooltip"
                    ref="tooltipRef"
                  >
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="tooltipRadio"
                        id="option1"
                        value="2WD"
                        v-model="selectedOption"
                        @change="closeTooltip"
                      />
                      <label class="form-check-label" for="option1">2WD</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="tooltipRadio"
                        id="option2"
                        value="4WD"
                        v-model="selectedOption"
                        @change="closeTooltip"
                      />
                      <label class="form-check-label" for="option2">4WD</label>
                    </div>

                    <p
                      class="m-0 tooltip-text"
                      @click="
                        selectedOption = '';
                        closeTooltip();
                      "
                    >
                      条件クリア
                    </p>
                  </div>
                </div>
              </div>

              <!-- Min Price -->
              <div class="model d-flex align-items-center gap-4 ps-1">
                <p class="m-0 title text-nowrap">価格帯</p>
                <select
                  class="form-select"
                  v-model="selectedMinPrice"
                  @change="onMinPriceChange"
                >
                  <option value="">指定なし</option>
                  <option
                    v-for="price in priceOptions"
                    :key="price"
                    :value="price"
                  >
                    {{ price.toLocaleString() }} 円
                  </option>
                </select>
              </div>

              <!-- Max Price -->
              <div class="model d-flex align-items-center gap-3 mt-2">
                <p class="m-0 title">~</p>
                <select
                  class="form-select"
                  v-model="selectedMaxPrice"
                  @change="onMaxPriceChange"
                >
                  <option value="">指定なし</option>
                  <option
                    v-for="price in filteredMaxPriceOptions"
                    :key="price"
                    :value="price"
                  >
                    {{ price.toLocaleString() }} 円
                  </option>
                </select>
              </div>
            </div>

            <div
              class="searchBodyColor d-flex align-items-center gap-2 flex-wrap my-3"
            >
              <p class="heading m-0 ps-3">本体色</p>

              <div
                v-for="(color, index) in colors"
                :key="index"
                class="color-box"
                :class="{ active: selectedColor === color.name }"
                :style="getBoxStyle(color)"
                @click="selectedColor = color.name"
              ></div>
            </div>

            <div class="searchSATPoints">
              <div class="inner d-flex">
                <div class="col-md-12 d-flex gap-3 pe-2">
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        360°画像付き車両
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        車両品質評価書付き
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        新着物件
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                </div>

                <!-- <div class="col-md-6 d-flex gap-3">
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        新着物件
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        車両評価レポート
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                </div> -->
              </div>

              <div class="inner d-flex my-2">
                <div class="col-md-12 d-flex gap-3 pe-2">
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        未登録車
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        修復歴なし
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        ワンオーナー
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                </div>

                <!-- <div class="col-md-6 d-flex gap-3">
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        ワンオーナー
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        未登録車
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                </div> -->
              </div>

              <!-- <div class="inner d-flex">
                <div class="col-md-6 d-flex gap-3 pe-2">
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        割引車両
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        修復歴なし
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-6 d-flex gap-3">
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        オークション
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        ワンオーナー
                      </label>
                    </div>
                    <div class="right">
                      <NuxtImg
                        src="/assets/images/icons/exclaim-icon.webp"
                        alt="icon"
                        class="img-fluid"
                        loading="lazy"
                        width="15"
                        height="15"
                      />
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>

          <div class="col-md-3">
            <div class="units">
              <div
                class="favCondition my-2 py-2 d-flex flex-column gap-2 align-items-center"
              >
                <NuxtImg
                  src="/assets/images/icons/blue-star.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="24"
                  height="24"
                />
                <p class="m-0 text">この条件を お気に入り</p>
                <p class="m-0 para">検索アラートを設定する</p>
              </div>

              <div
                class="searchDisplay d-flex align-items-center text-center ps-3"
              >
                <NuxtImg
                  src="/assets/images/home/arrow-right-circle.webp"
                  alt="arrow"
                  class="img-fluid"
                  loading="lazy"
                  width="17"
                  height="17"
                />
                <p class="m-0 amount ms-2">保存した検索リストを表示する</p>
              </div>

              <div
                class="favCondition my-2 py-2 d-flex flex-column gap-2 align-items-center"
              >
                <NuxtImg
                  src="/assets/images/icons/blue-message.webp"
                  alt="star"
                  class="img-fluid"
                  loading="lazy"
                  width="24"
                  height="24"
                />
                <p class="m-0 text">メールマガジン</p>
                <p class="m-0 text2 px-2">
                  最新の中古車とお得な情報をゲット！今すぐ登録しましょう！
                </p>
                <p class="m-0 para">新しい通知にサインアップ</p>
              </div>
            </div>
          </div>
        </div>

        <div class="searchAddMoreDetails mt-4 pt-2">
          <div
            class="view-all collapsed inner d-flex justify-content-between align-items-center"
            id="toggleView"
            v-if="!isExpanded"
          >
            <div class="col-md-6">
              <div class="left d-flex align-items-center gap-2">
                <!-- Collapse toggle moved here -->
                <a
                  href="#"
                  role="button"
                  @click.prevent="toggleCollapse"
                  class="d-flex align-items-center gap-2 text-decoration-none"
                >
                  <NuxtImg
                    src="/assets/images/home/caret-down.webp"
                    alt="icon"
                    class="img-fluid"
                    loading="lazy"
                    style="width: 8px"
                  />
                  <p class="m-0 text">もっと詳細な条件を追加する</p>
                </a>
              </div>
            </div>

            <div class="col-md-6">
              <div class="right d-flex justify-content-end gap-3">
                <button
                  type="button"
                  class="btn btn-clear"
                  @click="clearFilters"
                >
                  条件をクリア
                </button>
                <button
                  type="button"
                  class="btn btn-searchFor d-flex align-items-center"
                  @click="onSearchClick"
                >
                  <NuxtImg
                    src="/assets/images/header/search-icon.webp"
                    class="img-fluid m-1"
                    alt="icon"
                    loading="lazy"
                    width="15"
                    height="15"
                  />
                  {{ totalCars.toLocaleString() }}
                  <span
                    style="font-size: 10px; font-weight: 400; padding: 0px 3px"
                  >
                    台 検索する 1
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="view-text text-center py-3">
          <div v-if="isExpanded" class="collapse show" id="collapseExample">
            <div class="manufacture d-flex align-items-center mb-3">
              <div class="model d-flex align-items-center gap-2">
                <p class="m-0 title">駆動方式</p>
                <div class="position-relative d-inline-block">
                  <!-- Tooltip-trigger button -->
                  <button class="btn text" @click="toggleNewTooltip">
                    {{ selectedNewOption || "選択する" }}
                  </button>

                  <!-- Tooltip Panel (opens upward) -->
                  <div
                    v-if="showNewTooltip"
                    class="custom-tooltip show position-absolute"
                    ref="newTooltipRef"
                    :style="{ bottom: '100%', left: '0', marginBottom: '10px' }"
                  >
                    <div
                      v-for="(option, index) in newOptions"
                      :key="index"
                      class="form-check form-check-inline"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        :id="'newOption' + index"
                        name="newTooltipRadio"
                        :value="option"
                        v-model="selectedNewOption"
                        @change="closeNewTooltip"
                      />
                      <label
                        class="form-check-label"
                        :for="'newOption' + index"
                      >
                        {{ option }}
                      </label>
                    </div>
                    <p
                      class="m-0 tooltip-text"
                      @click="
                        selectedNewOption = '';
                        closeNewTooltip();
                      "
                    >
                      条件クリア
                    </p>
                  </div>
                </div>
              </div>
              <div class="model d-flex align-items-center gap-2 ms-3">
                <p class="m-0 title">エンジン<br />タ イプ</p>
                <div class="position-relative d-inline-block">
                  <!-- <p> replaced with button for interactivity -->
                  <button class="btn text" @click="toggleEngineTooltip">
                    {{ selectedEngineOption || "選択する" }}
                  </button>

                  <!-- Tooltip -->
                  <div
                    v-if="showEngineTooltip"
                    class="custom-tooltip show position-absolute"
                    ref="engineTooltipRef"
                    :style="{
                      bottom: '100%',
                      left: '0',
                      marginBottom: '10px',
                      width: '450px',
                    }"
                  >
                    <div class="d-flex flex-wrap">
                      <div
                        v-for="(option, index) in engineOptions"
                        :key="index"
                        class="form-check mb-2"
                        style="width: 29.33%"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          :id="'engineOption' + index"
                          name="engineTooltipRadio"
                          :value="option"
                          v-model="selectedEngineOption"
                          @change="closeEngineTooltip"
                        />
                        <label
                          class="form-check-label"
                          :for="'engineOption' + index"
                        >
                          {{ option }}
                        </label>
                      </div>
                    </div>
                    <p
                      class="m-0 tooltip-text"
                      @click="
                        selectedEngineOption = '';
                        closeEngineTooltip();
                      "
                    >
                      条件クリア
                    </p>
                  </div>
                </div>
              </div>
              <div class="model d-flex align-items-center gap-2 ms-3">
                <p class="m-0 title text-nowrap">排気量</p>
                <select class="form-select">
                  <option value="指定なし">指定なし</option>
                </select>
              </div>
              <div class="model d-flex align-items-center gap-2">
                <p class="m-0 title ms-2">~</p>
                <select class="form-select">
                  <option value="指定なし">指定なし</option>
                </select>
              </div>

              <p class="m-0 vehicleCondition ps-3">車両状態</p>

              <div class="form-check ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  修復歴なし
                </label>
              </div>

              <div class="form-check ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  修復歴あり
                </label>
              </div>
            </div>

            <div class="manufacture d-flex align-items-center">
              <div class="model d-flex align-items-center gap-2">
                <p class="m-0 title">ハンドル</p>
                <!-- <p class="m-0 text">選択する ok</p> -->
                <div class="position-relative d-inline-block">
                  <button class="btn text" @click="toggleHandleTooltip">
                    {{ selectedHandleOption || "選択する" }}
                  </button>

                  <div
                    v-if="showHandleTooltip"
                    class="custom-tooltip show position-absolute"
                    ref="handleTooltipRef"
                    :style="{ bottom: '100%', left: '0', marginBottom: '10px' }"
                  >
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="handleTooltipRadio"
                        id="handleOption1"
                        value="RHD"
                        v-model="selectedHandleOption"
                        @change="closeHandleTooltip"
                      />
                      <label class="form-check-label" for="handleOption1"
                        >RHD</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="handleTooltipRadio"
                        id="handleOption2"
                        value="LHD"
                        v-model="selectedHandleOption"
                        @change="closeHandleTooltip"
                      />
                      <label class="form-check-label" for="handleOption2"
                        >LHD</label
                      >
                    </div>

                    <p
                      class="m-0 tooltip-text"
                      @click="
                        selectedHandleOption = '';
                        closeHandleTooltip();
                      "
                    >
                      条件クリア
                    </p>
                  </div>
                </div>
              </div>
              <div class="model d-flex align-items-center gap-2 ms-3">
                <p class="m-0 title ms-2 ps-1">ドア数</p>
                <!-- <p class="m-0 text">選択する</p> -->
                <div class="position-relative d-inline-block">
                  <button class="btn text" @click="toggleDoorsTooltip">
                    {{ selectedDoorsOption || "選択する" }}
                  </button>

                  <div
                    v-if="showDoorsTooltip"
                    class="custom-tooltip show position-absolute"
                    ref="doorsTooltipRef"
                    :style="{ bottom: '100%', left: '0', marginBottom: '10px' }"
                  >
                    <div
                      v-for="(option, index) in doorsOptions"
                      :key="index"
                      class="form-check form-check-inline"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        :id="'doorsOption' + index"
                        name="doorsTooltipRadio"
                        :value="option"
                        v-model="selectedDoorsOption"
                        @change="closeDoorsTooltip"
                      />
                      <label
                        class="form-check-label"
                        :for="'doorsOption' + index"
                      >
                        {{ option }}
                      </label>
                    </div>

                    <p
                      class="m-0 tooltip-text"
                      @click="
                        selectedDoorsOption = '';
                        closeDoorsTooltip();
                      "
                    >
                      条件クリア
                    </p>
                  </div>
                </div>
              </div>
              <!-- <div class="model d-flex align-items-center gap-2 ms-3">
                <p class="m-0 title text-nowrap ms-2">座 &nbsp;席</p>
                <select class="form-select">
                  <option value="指定なし">指定なし</option>
                </select>
              </div>
              <div class="model d-flex align-items-center gap-2">
                <p class="m-0 title ms-2">~</p>
                <select class="form-select">
                  <option value="指定なし">指定なし</option>
                </select>
              </div> -->
              <div class="model d-flex align-items-center gap-2 ms-3">
                <p class="m-0 title text-nowrap ms-2">座 &nbsp;席</p>
                <select class="form-select minSeat" v-model="selectedMinSeat">
                  <option value="">指定なし</option>
                  <option
                    v-for="seat in filteredMinSeats"
                    :key="'min-' + seat"
                    :value="seat"
                  >
                    {{ seat }}
                  </option>
                </select>
              </div>
              <div class="model d-flex align-items-center gap-2">
                <p class="m-0 title ms-2">~</p>
                <select class="form-select maxSeat" v-model="selectedMaxSeat">
                  <option value="">指定なし</option>
                  <option
                    v-for="seat in filteredMaxSeats"
                    :key="'max-' + seat"
                    :value="seat"
                  >
                    {{ seat }}
                  </option>
                </select>
              </div>

              <p class="m-0 vehicleCondition ps-3">保証</p>

              <div class="form-check ms-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  含まれる
                </label>
              </div>

              <div class="form-check ms-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  含まれません
                </label>
              </div>
            </div>

            <hr class="my-3" style="color: #cbd5e1" />

            <div class="typesOfCar d-flex text-start align-items-center gap-5">
              <div class="col-md-4">
                <p class="title">車のタイプ</p>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked1"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked1"
                          >
                            ハイブリッド
                          </label>
                        </div>
                      </td>
                      <td>
                        <div
                          class="form-check d-flex justify-content-end align-items-center"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked2"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked2"
                          >
                            商用車
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked3"
                          >
                            輸入車
                          </label>
                        </div>
                      </td>
                      <td>
                        <div
                          class="form-check d-flex justify-content-end align-items-center"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked4"
                          />
                          <label
                            class="form-check-label pt-1 ps-1 me-3 pe-1"
                            for="flexCheckChecked4"
                          >
                            EV
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked3"
                          >
                            国産車
                          </label>
                        </div>
                      </td>
                      <td>
                        <div
                          class="form-check d-flex justify-content-end align-items-center"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked4"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked4"
                          >
                            軽自動
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked3"
                          >
                            キャンピングカー
                          </label>
                        </div>
                      </td>
                      <td>
                        <div
                          class="form-check d-flex justify-content-end align-items-center"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked4"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked4"
                          >
                            水素燃
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-4">
                <p class="title">装備</p>

                <table class="table">
                  <tbody>
                    <tr>
                      <td>
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked1"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked1"
                          >
                            ETC
                          </label>
                        </div>
                      </td>
                      <td>
                        <div
                          class="form-check d-flex justify-content-end align-items-center"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked2"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked2"
                          >
                            スマートキー
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexCheckCheckedABS"
                            v-model="hasABS"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckCheckedABS"
                          >
                            ABS
                          </label>
                        </div>
                      </td>
                      <td>
                        <div
                          class="form-check d-flex justify-content-end align-items-center"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked4"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked4"
                          >
                            キーレスエン
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked3"
                            v-model="hasAirConditioner"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked3"
                          >
                            エアコン
                          </label>
                        </div>
                      </td>
                      <td>
                        <div
                          class="form-check d-flex justify-content-end align-items-center"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked4"
                            v-model="hasFogLights"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked4"
                          >
                            フォグランプ
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                          />
                          <label
                            class="form-check-label pt-1 ps-1"
                            for="flexCheckChecked3"
                          >
                            パワーウィンドウ
                          </label>
                        </div>
                      </td>
                      <td>
                        <div
                          class="form-check d-flex justify-content-end align-items-center"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked4"
                          />
                          <label
                            class="form-check-label pt-1 ps-1 me-2 pe-1"
                            for="flexCheckChecked4"
                          >
                            サンルーフ
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr class="my-1" style="color: #cbd5e1" />

            <div
              class="view-all pt-3 collapsed active inner d-flex justify-content-between align-items-center mt-3"
              id="toggleViewLess2"
              role="button"
              @click="toggleCollapse"
            >
              <div class="col-md-6">
                <div class="left d-flex align-items-center gap-2">
                  <NuxtImg
                    src="/assets/images/home/caret-down.webp"
                    alt="icon"
                    class="img-fluid img-rotate"
                    loading="lazy"
                    style="width: 8px"
                  />
                  <p class="m-0 text">閉じる</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="right d-flex justify-content-end gap-3">
                  <button
                    type="button"
                    class="btn btn-clear"
                    @click="clearFilters"
                  >
                    条件をクリア
                  </button>
                  <button
                    type="button"
                    class="btn btn-searchFor d-flex align-items-center"
                    @click="onSearchClick"
                  >
                    <NuxtImg
                      src="/assets/images/header/search-icon.webp"
                      class="img-fluid m-1"
                      alt="icon"
                      loading="lazy"
                      width="15"
                      height="15"
                    />

                    <span
                      style="
                        font-size: 10px;
                        font-weight: 400;
                        padding: 0px 3px;
                      "
                    >
                      {{ totalCars.toLocaleString() }}
                      台 検索する
                    </span>
                  </button>
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
import { ref, computed, onMounted, watch, onBeforeUnmount } from "vue";
import { useRouter, useRoute, useFetch } from "#app";
import { useDebounceFn } from '@vueuse/core';


const isExpanded = ref(false);

const toggleCollapse = () => {
  isExpanded.value = !isExpanded.value;
};

const selectedColor = ref("");

// Define colors and their hex or gradient values
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

// ============================================== Start Make Model Grade with disable Model Cars =========================================

const config = useRuntimeConfig();
const {
  data: apiData,
  pending,
  error,
} = await useFetch(`${config.public.apiBaseUrl}/get-car-makes`);

const cars = computed(() => {
  const raw = apiData.value?.data || {};

  return Object.entries(raw).map(([make, makeData]) => ({
    make,
    count: makeData.count,
    models: Object.entries(makeData.models || {}).map(
      ([modelName, modelData]) => ({
        name: modelName,
        count: modelData.count,
        grade: Object.keys(modelData.grades || {}),
      })
    ),
  }));
});

const selectedMakes = ref([]);
const selectedModels = ref([]);
const selectedGrades = ref([]);
const selectedSummary = ref("選択する");

const router = useRouter();
const route = useRoute();

const filteredModels = computed(() => {
  let models = [];
  selectedMakes.value.forEach((make) => {
    const car = cars.value.find((c) => c.make === make);
    if (car) models.push(...car.models);
  });
  return models;
});

const filteredGrades = computed(() => {
  let grades = [];
  selectedModels.value.forEach((model) => {
    filteredModels.value.forEach((m) => {
      if (m.name === model) {
        grades.push(...m.grade);
      }
    });
  });
  return grades;
});

const selectGradeses = ref([]);
function selectedGrading(grade) {
  const index = selectGradeses.value.indexOf(grade);

  if (index === -1) {
    // Grade not selected, add it
    selectGradeses.value.push(grade);
  } else {
    // Grade already selected, remove it (toggle)
    selectGradeses.value.splice(index, 1);
  }
  selectedGrades.value["model1"] = [...selectGradeses.value];

  // console.log("Kya value aa rahi hai", selectedGrades.value['model1']);

  console.log("Selected Grades Array:", selectGradeses.value);
}
function isGradeSelected(grade) {
  return selectGradeses.value.includes(grade);
}

watch(filteredGrades, (grades) => {
  const updated = new Set([...selectedGrades.value, ...grades]);
  selectedGrades.value = Array.from(updated);
});

function toggleMake(make) {
  const index = selectedMakes.value.indexOf(make);
  if (index > -1) {
    selectedMakes.value.splice(index, 1);
    selectedModels.value = selectedModels.value.filter(
      (model) =>
        !cars.value
          .find((c) => c.make === make)
          ?.models.some((m) => m.name === model)
    );
  } else {
    selectedMakes.value.push(make);
  }
}

function toggleModel(model) {
  const index = selectedModels.value.indexOf(model);
  if (index > -1) {
    selectedModels.value.splice(index, 1);
  } else {
    selectedModels.value.push(model);
  }
}

function updateSelectionSummary() {
  let summary = [];
  const hasModels = selectedModels.value.length > 0;

  if (hasModels) {
    summary.push(selectedModels.value.join(", "));
  } else if (selectedMakes.value.length > 0) {
    summary.push(selectedMakes.value.join(", "));
  }
  selectedSummary.value = summary.length ? summary.join(" | ") : "選択する";
}

const canOpenModelModal = computed(() => {
  return (
    selectedMakes.value.length > 0 && selectedModels.value.length > 0
    // filteredGrades.value.length > 0
  );
});

function getGradesForModel(model) {
  let grades = [];

  filteredModels.value.forEach((m) => {
    if (m.name === model) {
      if (Array.isArray(m.grade)) {
        grades.push(...m.grade);
      } else if (typeof m.grade === "string") {
        grades.push(m.grade);
      }
    }
  });
  return grades;
}

function getLogoForModel(modelName) {
  for (const car of cars.value) {
    if (car.models.some((m) => m.name === modelName)) {
      return car.logo;
    }
  }
  return "/assets/images/default-car.webp"; // fallback image
}

function toggleAllGrades(model) {
  const grades = getGradesForModel(model);
  const modelGrades = selectedGrades.value[model] || [];
  const allSelected = grades.every((grade) => modelGrades.includes(grade));

  if (allSelected) {
    selectedGrades.value[model] = [];
    selectGradeses.value = selectGradeses.value.filter(
      (grade) => !grades.includes(grade)
    );
  } else {
    selectedGrades.value[model] = [...grades];
    grades.forEach((grade) => {
      if (!selectGradeses.value.includes(grade)) {
        selectGradeses.value.push(grade);
      }
    });
  }
}

function areAllGradesSelected(model) {
  const grades = getGradesForModel(model);
  const modelGrades = selectedGrades.value[model] || [];
  return grades.every((grade) => modelGrades.includes(grade));
}

const submittedGrades = ref([]);

function submitSelectedGrades() {
  const selectedOnly = {};

  for (const [model, grades] of Object.entries(selectedGrades.value)) {
    if (Array.isArray(grades) && grades.length > 0) {
      selectedOnly[model] = grades;
    }
  }

  submittedGrades.value = Object.values(selectedOnly).flat().filter(Boolean);
  console.log("Final Submitted Grades:", submittedGrades.value);
}

const selectedModelCount = computed(() => {
  return Math.min(selectedModels.value.length, 10);
});

const toggleGrade = (model, grade) => {
  if (!Array.isArray(selectGradeses.value[model])) {
    selectGradeses.value[model] = [];
  }

  const grades = selectGradeses.value[model];
  const index = grades.indexOf(grade);

  if (index === -1) {
    grades.push(grade);
  } else {
    grades.splice(index, 1);
  }
};

function onFilterApply() {
  submittedFilters.makes = [...selectedMakes.value];
  submittedFilters.models = [...selectedModels.value];
  submittedFilters.grades = [...selectGradeses.value];

  updateSelectionSummary();
}

// ============================================== End Make Model Grade with disable Model Cars =========================================

// Min and Max Year Funcionality Apply

// Get current year dynamically
const currentYear = new Date().getFullYear();

// Reactive selected years
const selectedMinYear = ref("");
const selectedMaxYear = ref("");

// Generate min year options: 1950 to (current year - 1)
const minYearOptions = computed(() => {
  const end = currentYear - 1;
  const years = [];
  for (let y = 1950; y <= end; y++) {
    years.push(y);
  }
  return years;
});

// Generate max year options: (selectedMinYear + 1) to current year
const maxYearOptions = computed(() => {
  const min = selectedMinYear.value
    ? parseInt(selectedMinYear.value) + 1
    : 1951;
  const years = [];
  for (let y = min; y <= currentYear; y++) {
    years.push(y);
  }
  return years;
});

// Watch for invalid max year on minYear change
watch([selectedMinYear, selectedMaxYear], ([min, max]) => {
  if (min && max && parseInt(max) <= parseInt(min)) {
    selectedMaxYear.value = ""; // reset to default option
  }
});

// Prefecture and Muncipality Code

// Fetch data from API
const {
  data: prefData,
  prefPending,
  prefError,
} = await useFetch(
  `${config.public.apiBaseUrl}/get-cars-prefectures-and-cities`
);

// Convert API format
const prefecturesRaw = prefData.value?.data || [];

const prefectures = Object.entries(prefecturesRaw)
  .filter(([key]) => key !== "")
  .map(([prefecture, value]) => {
    const cities = Object.keys(value.cities).filter((c) => c !== "");
    return {
      prefecture,
      cities,
      towns: cities,
    };
  });

// Prefecture-related refs
const prefSearch = ref("");
const citySelections = ref([]);
const prefAll = ref(false);
const selectedPrefObj = ref(null);

// Municipality-related refs
const townSearch = ref("");
const townSelections = ref([]);
const municipalityAll = ref(false);

// Computed filtered prefectures
const filteredPrefectures = computed(() => {
  if (!prefSearch.value) return prefectures;
  return prefectures
    .map((p) => ({
      ...p,
      cities: p.cities.filter((c) =>
        c.toLowerCase().includes(prefSearch.value.toLowerCase())
      ),
    }))
    .filter((p) => p.cities.length > 0);
});

// Check if a city is selected
function isChecked(pref, city) {
  return citySelections.value.some(
    (sel) => sel.pref === pref && sel.city === city
  );
}

// Handle checkbox change manually
function onCheckboxChange(event, pref, city) {
  const exists = citySelections.value.find(
    (sel) => sel.pref === pref && sel.city === city
  );

  if (event.target.checked && !exists) {
    citySelections.value.push({ pref, city });
  } else if (!event.target.checked && exists) {
    citySelections.value = citySelections.value.filter(
      (sel) => !(sel.pref === pref && sel.city === city)
    );
  }
}

// Toggle all prefecture cities
function toggleAllPref() {
  if (prefAll.value) {
    const allSelections = filteredPrefectures.value.flatMap((p) =>
      p.cities.map((c) => ({ pref: p.prefecture, city: c }))
    );
    citySelections.value = allSelections;
  } else {
    citySelections.value = [];
  }
}

// Confirm selection and update towns
function confirmPref() {
  if (citySelections.value.length) {
    const uniquePrefs = [...new Set(citySelections.value.map((s) => s.pref))];
    if (prefAll.value) {
      selectedPrefObj.value = {
        prefecture: "All",
        towns: prefectures.flatMap((p) => p.towns),
      };
    } else {
      const firstPref = uniquePrefs[0];
      const prefData = prefectures.find((p) => p.prefecture === firstPref);
      selectedPrefObj.value = {
        prefecture: prefData.prefecture,
        towns: prefData.towns,
      };
    }
  } else {
    selectedPrefObj.value = null;
  }

  townSelections.value = [];
  municipalityAll.value = false;
}

// Label for selected cities
const selectedPrefectureLabel = computed(() => {
  return selectedPrefObj.value
    ? citySelections.value.map((s) => s.city).join(", ")
    : "選択する";
});
// Show selected towns label
const selectedTownsLabel = computed(() => {
  return townSelections.value.length
    ? townSelections.value.join(", ")
    : "選択する";
});

// Computed: Filtered towns based on search
const filteredTowns = computed(() => {
  if (!selectedPrefObj.value || !selectedPrefObj.value.towns) return [];
  if (!townSearch.value) return selectedPrefObj.value.towns;
  return selectedPrefObj.value.towns.filter((town) =>
    town.toLowerCase().includes(townSearch.value.toLowerCase())
  );
});

// Helper: Is town checked
function isTownChecked(town) {
  return townSelections.value.includes(town);
}

// Handle checkbox change manually
function onTownCheckboxChange(event, town) {
  if (event.target.checked && !townSelections.value.includes(town)) {
    townSelections.value.push(town);
  } else if (!event.target.checked) {
    townSelections.value = townSelections.value.filter((t) => t !== town);
  }
}

// Toggle all towns
function toggleAllTowns() {
  if (municipalityAll.value && selectedPrefObj.value?.towns) {
    townSelections.value = [...selectedPrefObj.value.towns];
  } else {
    townSelections.value = [];
  }
}

// Finalize town selections
function confirmTowns() {
  console.log("Selected towns:", townSelections.value);
  // You can store or emit this data as needed
}
//End Prefecture code

//Milage selection code here

// Reactive mileage range (500 to 50000 in steps of 500)
const mileageOptions = Array.from({ length: 100 }, (_, i) => (i + 1) * 500);

const selectedMin = ref("");
const selectedMax = ref("");

// Computed: Filter max options to be strictly greater than selectedMin
const filteredMaxOptions = computed(() => {
  if (!selectedMin.value) return mileageOptions;
  return mileageOptions.filter((km) => km > Number(selectedMin.value));
});

// Watch: If selectedMax is invalid, reset it
watch([selectedMin, selectedMax], () => {
  if (selectedMin.value && selectedMax.value) {
    if (Number(selectedMax.value) <= Number(selectedMin.value)) {
      selectedMax.value = "";
    }
  }
});

// Optional: callbacks (if needed)
function onMinChange() {
  // Logic already handled by watcher
}

function onMaxChange() {
  // If min is greater than max, reset min (or max — in this case, max is reset)
}

// Price Range Code

// Create price options: 50,000 to 10,000,000 yen
const priceOptions = Array.from({ length: 200 }, (_, i) => (i + 1) * 50000);

const selectedMinPrice = ref("");
const selectedMaxPrice = ref("");

// Filter max price options to be strictly greater than min
const filteredMaxPriceOptions = computed(() => {
  if (!selectedMinPrice.value) return priceOptions;
  return priceOptions.filter((price) => price > Number(selectedMinPrice.value));
});

// Auto-reset max if invalid
watch([selectedMinPrice, selectedMaxPrice], () => {
  if (selectedMinPrice.value && selectedMaxPrice.value) {
    if (Number(selectedMaxPrice.value) <= Number(selectedMinPrice.value)) {
      selectedMaxPrice.value = "";
    }
  }
});

function onMinPriceChange() {
  // Logic handled by watcher
}

function onMaxPriceChange() {
  // Optional logic, already safe
}

//Drive System Radio Button Code
const showTooltip = ref(false);
const selectedOption = ref("");
const tooltipRef = ref(null);

function toggleTooltip() {
  showTooltip.value = !showTooltip.value;
}

function closeTooltip() {
  showTooltip.value = false;
}

function handleClickOutside(event) {
  if (
    tooltipRef.value &&
    !tooltipRef.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    showTooltip.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

//Inspection Year tooltip code here

const showNewTooltip = ref(false);
const selectedNewOption = ref("");
const newTooltipRef = ref(null);
const newOptions = ["1 year", "2 year", "3 year"];

function toggleNewTooltip() {
  showNewTooltip.value = !showNewTooltip.value;
}

function closeNewTooltip() {
  showNewTooltip.value = false;
}

function handleClickOutsideNew(event) {
  if (
    newTooltipRef.value &&
    !newTooltipRef.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    showNewTooltip.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutsideNew);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutsideNew);
});

//Engine Type Tooltip code here

const showEngineTooltip = ref(false);
const selectedEngineOption = ref("");
const engineTooltipRef = ref(null);
const engineOptions = [
  "ガソリン",
  "ディーゼル",
  "3 ハイブリッド",
  "電気自動車",
  " 水素",
];

function toggleEngineTooltip() {
  showEngineTooltip.value = !showEngineTooltip.value;
}

function closeEngineTooltip() {
  showEngineTooltip.value = false;
}

function handleClickOutsideEngine(event) {
  if (
    engineTooltipRef.value &&
    !engineTooltipRef.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    showEngineTooltip.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutsideEngine);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutsideEngine);
});

//Car handle tooltip code here

const showHandleTooltip = ref(false);
const selectedHandleOption = ref("");
const handleTooltipRef = ref(null);

function toggleHandleTooltip() {
  showHandleTooltip.value = !showHandleTooltip.value;
}

function closeHandleTooltip() {
  showHandleTooltip.value = false;
}

function handleClickOutsideHandle(event) {
  if (
    handleTooltipRef.value &&
    !handleTooltipRef.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    showHandleTooltip.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutsideHandle);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutsideHandle);
});

//number of doors tooltip code here

const showDoorsTooltip = ref(false);
const selectedDoorsOption = ref("");
const doorsTooltipRef = ref(null);

const doorsOptions = ["3", "4", "5"];

function toggleDoorsTooltip() {
  showDoorsTooltip.value = !showDoorsTooltip.value;
}

function closeDoorsTooltip() {
  showDoorsTooltip.value = false;
}

function handleClickOutsideDoors(event) {
  if (
    doorsTooltipRef.value &&
    !doorsTooltipRef.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    showDoorsTooltip.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutsideDoors);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutsideDoors);
});

// Start Minimun Seats and Maximum Seats
const seatOptions = [2, 3, 4, 5];

const selectedMinSeat = ref("");
const selectedMaxSeat = ref("");

const filteredMaxSeats = computed(() => {
  if (!selectedMinSeat.value) return seatOptions;
  return seatOptions.filter((seat) => seat > Number(selectedMinSeat.value));
});

const filteredMinSeats = computed(() => {
  if (!selectedMaxSeat.value) return seatOptions;
  return seatOptions.filter((seat) => seat < Number(selectedMaxSeat.value));
});

watch([selectedMinSeat, selectedMaxSeat], () => {
  const min = Number(selectedMinSeat.value);
  const max = Number(selectedMaxSeat.value);
  if (min && max && min >= max) {
    selectedMaxSeat.value = "";
  }
});

//Fog Ligh Checkbox
const hasFogLights = ref(false);

//Air Condition
const hasAirConditioner = ref(false);

//ABS
const hasABS = ref(false);

// Flags to track if user interacted
const absTouched = ref(false);
const fogTouched = ref(false);
const acTouched = ref(false);

// Track interaction using watchers
watch(hasABS, () => {
  absTouched.value = true;
});
watch(hasFogLights, () => {
  fogTouched.value = true;
});
watch(hasAirConditioner, () => {
  acTouched.value = true;
});

// Filter API For Search Real Time

// Runtime config
// Filters
const submittedFilters = reactive({
  makes: [],
  models: [],
  grades: [],
});

const isRefreshing = ref(false);

// Debounced API call function
// const debouncedRefresh = useDebounceFn(async () => {
//   if (isRefreshing.value) return;
//   isRefreshing.value = true;
//   try {
//     await refresh();
//   } catch (e) {
//     console.error("Filter API failed:", e);
//   } finally {
//     isRefreshing.value = false;
//   }
// }, 500); 
const debouncedRefresh = useDebounceFn(async () => {
  if (isRefreshing.value || isManualSearch.value) return; 
  isRefreshing.value = true;
  try {
    await refresh();
  } catch (e) {
    console.error("Filter API failed:", e);
  } finally {
    isRefreshing.value = false;
  }
}, 500);

// Only watch specific filters that cause multiple updates
watch(
  [
    () => submittedFilters.makes,
    () => submittedFilters.models,
    () => submittedFilters.grades
  ],
  ([newMakes, newModels, newGrades]) => {
    if (!newMakes?.length) return;
    debouncedRefresh();
  },
  { deep: true }
);



const payload = computed(() => {
  const p = {};

 if (submittedFilters.makes.length) {
    p.make = submittedFilters.makes.map((m) => m.toLowerCase());
  }

  if (submittedFilters.models.length) {
    p.model = submittedFilters.models.map((model) => ({
      [model.toLowerCase()]: submittedFilters.grades.length
        ? submittedFilters.grades.map((grade) => ({ grade: grade.toLowerCase() }))
        : [],
    }));
  }

  if (selectedHandleOption.value)
    p.steering = selectedHandleOption.value.toLowerCase();

  if (selectedMinPrice.value)
    p.min_price = Number(selectedMinPrice.value);

  if (selectedMaxPrice.value)
    p.max_price = Number(selectedMaxPrice.value);

  if (selectedMinYear.value)
    p.min_year = Number(selectedMinYear.value);

  if (selectedMaxYear.value)
    p.max_year = Number(selectedMaxYear.value);

  if (selectedMin.value)
    p.min_milage = Number(selectedMin.value);

  if (selectedMax.value)
    p.max_milage = Number(selectedMax.value);

  if (selectedColor.value)
    p.color = selectedColor.value.toLowerCase();

  if (selectedEngineOption.value)
    p.engine = selectedEngineOption.value.toLowerCase();

  if (selectedDoorsOption.value)
    p.doors = selectedDoorsOption.value;

  if (selectedMaxSeat.value)
    p.seats = Number(selectedMaxSeat.value);

  if (hasFogLights.value)
    p.fog_lights = true;

  if (hasAirConditioner.value)
    p.is_ac = true;

  if (hasABS.value)
    p.is_abs = true;

  return p;
});

watch(payload, (val) => {
  console.log('Payload main value ye hai ab:', JSON.stringify(val, null, 2));
});

// useFetch - delay first API call
const { data, errors, refresh } = useFetch(
  () => `${config.public.apiBaseUrl}/filter`,
  {
    method: "POST",
    body: payload,
    immediate: false,
  }
);

// Total cars from API
const totalCars = computed(() => {
  return data.value?.data?.total || 0;
});



// Clear filters and force API refresh
const clearFilters = async () => {
  selectedMakes.value = [];
  selectedModels.value = [];
  submittedGrades.value = [];
  selectedHandleOption.value = null;
  selectedMinPrice.value = "";
  selectedMaxPrice.value = "";
  selectedMinYear.value = "";
  selectedMaxYear.value = "";
  selectedMin.value = "";
  selectedMax.value = "";
  selectedColor.value = "";
  selectedEngineOption.value = "";
  selectedDoorsOption.value = "";
  selectedMinSeat.value = "";
  selectedMaxSeat.value = "";
  selectedSummary.value = "選択する";
  hasFogLights.value = false;
  hasAirConditioner.value = false;
  hasABS.value = false;

  await router.push("/search");
  // Optional: If you want to reset the results or refresh url /search/ and rerender page
  refresh();
};

//Router Query Parameter for the url
const generateSearchUrl = () => {
  const p = payload.value;
  const pathParts = [];

  // Makes (e.g., mk-toyota-honda)
  if (p.make?.length) {
    pathParts.push(
      "mk-" + p.make.map((m) => m.toLowerCase().replace(/\s+/g, "-")).join("-")
    );
  }

  // Models (e.g., md-prius-fit)
  if (p.model?.length) {
    const allModels = p.model.map((obj) => Object.keys(obj)[0]); // ["prius", "fit"]
    pathParts.push(
      "md-" + allModels.map((m) => m.toLowerCase().replace(/\s+/g, "-")).join("-")
    );
  }

  // Grades (e.g., gr-a-c-g)
  if (p.model?.length) {
    const allGrades = p.model
      .map((obj) => Object.values(obj)[0])
      .flat()
      .map((g) => g.grade);
    if (allGrades.length) {
      pathParts.push(
        "gr-" + allGrades.map((g) => g.toLowerCase().replace(/\s+/g, "-")).join("-")
      );
    }
  }

  // Year
  if (p.min_year || p.max_year) {
    const yr = `yr-${p.min_year || ""}-${p.max_year || ""}`;
    pathParts.push(yr);
  }

  // Price
  if (p.min_price || p.max_price) {
    const pr = `pr-${p.min_price || ""}-${p.max_price || ""}`;
    pathParts.push(pr);
  }

  // Mileage
  if (p.min_milage || p.max_milage) {
    const ml = `ml-${p.min_milage || ""}-${p.max_milage || ""}`;
    pathParts.push(ml);
  }

  // Query parameters
  const query = {};
  if (p.steering) query.handle = p.steering;
  if (p.color) query.color = p.color;
  if (p.engine) query.engine = p.engine;
  if (p.doors) query.doors = p.doors;
  if (p.seats) query.seats = p.seats;
  if (p.fog_lights) query.fog = "1";
  if (p.is_ac) query.ac = "1";
  if (p.is_abs) query.abs = "1";

  return {
    path: "/search/" + pathParts.join("/"),
    query,
  };
};

onMounted(() => {
  const pathParts = route.path.split("/");

  pathParts.forEach((part) => {
    if (part.startsWith("mk-")) {
      selectedMakes.value = part
        .replace("mk-", "")
        .split("-")
        .map((v) => v.charAt(0).toUpperCase() + v.slice(1));
    }
    if (part.startsWith("md-")) {
      selectedModels.value = part
        .replace("md-", "")
        .split("-")
        .map((v) => v.charAt(0).toUpperCase() + v.slice(1));
    }
    if (part.startsWith("yr-")) {
      const [, min, max] = part.split("-");
      selectedMinYear.value = min || "";
      selectedMaxYear.value = max || "";
    }
    if (part.startsWith("pr-")) {
      const [, min, max] = part.split("-");
      selectedMinPrice.value = min || "";
      selectedMaxPrice.value = max || "";
    }
    if (part.startsWith("ml-")) {
      const [, min, max] = part.split("-");
      selectedMin.value = min || "";
      selectedMax.value = max || "";
    }
    if (part.startsWith("gr-")) {
      submittedGrades.value = part
        .replace("gr-", "")
        .split("-")
        .map((v) => v.toUpperCase());
    }
  });

  // query param: ?handle=RHD
  if (route.query.handle) {
    selectedHandleOption.value = route.query.handle.toUpperCase();
  }
  if (route.query.color) {
    selectedColor.value = route.query.color.toLowerCase();
  }
  if (route.query.engine) {
    selectedEngineOption.value = route.query.engine;
  }
  if (route.query.doors) {
    selectedDoorsOption.value = route.query.doors;
  }
  if (route.query.seats) {
    selectedMaxSeat.value = route.query.seats;
  }
  if (route.query.fog) {
    hasFogLights.value = route.query.fog === "1";
  }
  if (route.query.ac) {
    hasAirConditioner.value = route.query.ac === "1";
  }
  if (route.query.abs) {
    hasABS.value = route.query.abs === "1";
  }

  updateSelectionSummary();
  refresh(); // trigger API
});

// const onSearchClick = () => {
//   const url = generateSearchUrl();
//   router.push(url); // Navigate to generated URL
//   refresh(); // Call the API
// };

watch(data, (newVal) => {
  if (newVal?.data?.cars?.length) {
    carStore.setCars(newVal.data.cars); //store default or filtered response
  }
});
const onSearchClick = () => {
  const url = generateSearchUrl();

  // ✅ Save current API response cars (if available)
  if (data.value?.data?.cars) {
    carStore.setCars(data.value.data.cars);
    carStore.setFilters(payload.value);
  }

  // ✅ Set flag to skip API call temporarily
  isManualSearch.value = true;

  // ✅ Only update URL
  router.push(url).finally(() => {
    // ✅ Reset the manual search flag after route change
    isManualSearch.value = false;
  });

};
</script>

<style scoped>
.color-box {
  width: 26px;
  height: 26px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

/* Pink border for selected box */
.color-box.active {
  border-color: pink;
}

/* Optional: Add slight shadow for visibility on white/light colors */
.color-box {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
}

.searchUsedCarList {
  background-color: #ecf5ff;
}
.searchUsedCarList .manufacture .model .title {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
}

.searchUsedCarList .manufacture .model .text {
  background: #ffffff;
  padding: 5px 24px;
  color: #353c4d;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  font-family: "Inter", "Inter Fallback: Arial";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  width: 100px;
}

.searchUsedCarList .manufacture .model .truncate-text {
  display: inline-block;
  max-width: 99.13px;
  color: #216ca5;
  background-color: transparent;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.2em;
  max-height: 2.4em;
  padding: 0;
  text-decoration: underline;
  font-weight: 500;
  font-size: 12.28px;
  width: 100px;
}
.searchUsedCarList .manufacture .model .form-select {
  color: #353c4d;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  --bs-form-select-bg-img: url(/assets/images/home/caret-down.webp);
  background-repeat: no-repeat;
  background-size: 9px;
  width: 100px;
}
.searchBodyColor .heading {
  color: #0f172a;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 14px;
}
.searchBodyColor .heading {
  color: #0f172a;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 14px;
}
.searchBodyColor img {
  cursor: pointer;
}
.searchSATPoints .inner .left {
  position: relative;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.searchSATPoints .inner .left .form-check-input[type="checkbox"] {
  height: 20px;
  width: 20px;
  border-radius: 0px;
  border: 1.67px solid #cbcbcb;
}
.form-check-input:checked[type="checkbox"] {
  background-image: url(/assets/images/mobile/header/tick.webp) !important;
  background-size: 9px;
}

.searchSATPoints .inner .left .form-check .form-check-label {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.form-check-input:checked {
  background-color: #2a9fe8 !important;
  border-color: #2a9fe8 !important;
}
.units {
  border: 1px solid #cbd5e1;
  padding: 8px;
  border-radius: 4px;
  background-color: white;
}
.units .favCondition {
  background-color: #f6f6f8;
  text-align: center;
  border-radius: 4px;
}
.units .favCondition .text {
  color: #020617;
  text-align: center;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.units .favCondition .para {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
}
.units .searchDisplay .amount {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  font-size: 8.97px;
  line-height: 11.97px;
}
.units .favCondition {
  background-color: #f6f6f8;
  text-align: center;
  border-radius: 4px;
}
.units .favCondition .text2 {
  color: #020617;
  text-align: center;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.units .favCondition .para {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
}
.searchAddMoreDetails .inner .left .text {
  color: #0e354d;
  font-size: 11.97px;
  font-weight: 500;
  line-height: 13px;
}
.searchAddMoreDetails .inner .right .btn-clear {
  border: 1px solid #2384c1;
  color: #2384c1;
  font-size: 11.97px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 13px;
  width: 130px;
  height: 36px;
}
.searchAddMoreDetails .inner .right .btn-searchFor {
  background-color: #2384c1;
  color: white;
  font-size: 14px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 13px;
  width: 182px;
  height: 36px;
}

.view-text .vehicleCondition {
  font-family: "Inter";
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}
.view-text .form-check .form-check-input {
  height: 20px;
  width: 20px;
  border-radius: 0px;
  border: 1.67px solid #cbcbcb;
}
.view-text .form-check .form-check-label {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.view-text .typesOfCar .title {
  color: #141817;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.view-text .typesOfCar .table td {
  background-color: transparent;
  border: none;
  padding: 6px 0px;
}
.searchFilterModel .topHeading {
  text-align: center;
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}
.searchFilterModel .left,
.searchFilterModel .center,
.searchFilterModel .right {
  width: 33.33%;
}
.searchFilterModel .left ul,
.searchFilterModel .center ul,
.searchFilterModel .right ul {
  list-style: none;
  padding: 0;
  height: 500px;
  overflow: auto;
}
.searchFilterModel .left ul li {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 10px;
  position: relative;
}
.searchFilterModel .left ul li i {
  position: absolute;
  right: 5px;
}
.searchFilterModel .carText {
  color: #353c4d;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
.searchFilterModel .left ul li.active {
  background-color: #f5fbff;
  color: white;
}
.searchFilterModel .left ul li.active .carText {
  color: #2384c1;
  font-weight: 500;
}
.searchFilterModel .left ul li.active i {
  color: #2384c1;
}
.searchFilterModel .left ul li:hover {
  background-color: #f5fbff;
}
.searchFilterModel .center ul li {
  cursor: pointer;
  padding: 10px 20px;
}
.searchFilterModel .center ul li p {
  padding: 10px 0px;
}
.searchFilterModel .center ul li.active p {
  background-color: #f5fbff;
}
.searchFilterModel .right ul li {
  cursor: pointer;
  padding: 5px 20px;
}
.searchFilterModel .modal-footer .btn-search {
  background-color: #2384c1;
  color: white;
  font-weight: bold;
}
.gradeModel .modal-title {
  color: #3a3a3a;
  font-size: 20px;
  font-family: "Inter";
  font-weight: 600;
  line-height: 28px;
}
.gradeModel .subHeading {
  color: #3a3a3a;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 500;
  line-height: 20px;
}
.gradeModel .count {
  color: #3a3a3a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.gradeModel .count span {
  color: #3a3a3a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
.gradeModel .hedingCount {
  color: #3a3a3a;
  font-family: "Inter";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
.gradeModel .modelCarCount {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 19px;
  line-height: 28px;
}
.gradeModel .modelCarCount span {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
}
.gradeModel .gradeCheckLable {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
}
.gradeModel .carModelSelectedGrade {
  display: flex;
  justify-content: center;
  background: #ecf5ff80;
}
.gradeModel .btn-submitGrade {
  background-color: #2a9fe8;
  color: white;
  border-radius: 4px;
  padding: 10px 100px;
}
.custom-label::before {
  content: "グレード絞り込み";
  margin-right: 8px;
  font-weight: bold;
  position: absolute;
  right: 36px;
  color: #2384c1;
}
.custom-label::after {
  color: #353c4d;
  font-family: "Inter", "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  background-image: url(/assets/images/home/caret-down.webp);
  background-repeat: no-repeat;
  background-size: 13px 8px;
  position: relative;
  top: 5px;
}
.custom-label:not(.collapsed)::after {
  top: -5px;
}
.disabled {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
#myPrefectureModel .all-select {
  color: #131313;
  font-family: "Inter";
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
}
#myPrefectureModel .prefecture .preHead {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 600;
  font-size: 17.54px;
  line-height: 24.56px;
}
#myPrefectureModel .prefecture .preHead span {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
}
#myPrefectureModel .prefecture .checkBoxDynamic {
  color: #131313;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14.04px;
  line-height: 21.25px;
}
#myPrefectureModel .modal-footer .btn-prefecturSubmit {
  background-color: #2384c1;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 25px;
  border: none;
}
#myPrefectureModel .modal-body {
  height: 500px;
  overflow: auto;
}
#myPrefectureModel .searchKey {
  color: #626262;
  font-weight: 600;
  font-size: 10.53px;
  line-height: 14.04px;
}
#myPrefectureModel .form-check-input[type="checkbox"] {
  border: 2.34px solid #858a94;
}
#myMunicipalModal .modal-dialog .modal-content {
  height: 500px;
  overflow: auto;
}
#myMunicipalModal .form-check-input[type="checkbox"] {
  border: 2.34px solid #858a94;
}
#myMunicipalModal .searchKey {
  color: #626262;
  font-weight: 600;
  font-size: 10.53px;
  line-height: 14.04px;
}
#myMunicipalModal .selectBoxDynamic {
  color: #131313;
  font-weight: 400;
  font-size: 14.04px;
  line-height: 14.04px;
}
#myMunicipalModal .modal-footer .btn-muncipality {
  background-color: #2384c1;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 25px;
  border: none;
}
.custom-tooltip {
  position: absolute;
  bottom: 100%;
  left: 0;
  transform: translateY(-0.5rem);
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
  white-space: nowrap;
}
.custom-tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 10px;
  background-image: url(/assets/images/icons/tooltip-arrow.webp);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.custom-tooltip label {
  color: #131313 !important;
  font-weight: 500 !important;
  font-family: "Inter" !important;
  font-size: 17.75px !important;
  line-height: 25.35px !important;
}
.custom-tooltip .tooltip-text {
  color: #131313;
  font-weight: 400;
  font-family: "Inter";
  font-size: 13.22px;
  line-height: 17.63px;
  text-decoration: underline;
  padding: 15px 0px 0px 0px;
  text-align: left;
  cursor: pointer;
}
.custom-tooltip .form-check-input {
  border-radius: 50px !important;
}

.grade-box.selected {
  background-color: #f5fbff;
}
</style>
