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
                  :class="{
                    text: settingDisplayValue === '選択する',
                    'truncate-text': settingDisplayValue !== '選択する',
                  }"
                  class="m-0 settingValue"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {{ settingDisplayValue || "選択する" }}
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
                    <div v-if="showLimitPopup" class="popup-overlay">
                      <div class="popup-box">
                        <p class="popup-message">
                          You use your Maximum limit. 10/10
                        </p>
                        <button
                          class="close-btn"
                          @click="showLimitPopup = false"
                        >
                          x
                        </button>
                      </div>
                    </div>
                    <div class="modal-body px-0">
                      <div
                        class="topHeadingsTable d-flex justify-content-between text-center"
                      >
                        <p class="topHeading">Make</p>
                        <p class="topHeading">モデル</p>
                        <p class="topHeading">グレード</p>
                      </div>
                      <div
                        class="modelClearArea d-flex flex-wrap align-items-center gap-2"
                      >
                        <p
                          class="selectedAllBoxValue m-0 d-flex gap-2 flex-wrap"
                        >
                          <span
                            v-for="(tag, index) in selectedTags"
                            :key="index"
                            class="tag"
                          >
                            {{ tag }}
                            <span class="remove" @click="removeTag(tag)"
                              >×</span
                            >
                          </span>
                        </p>
                        <button class="all-clear-area" @click="clearAllTags">
                          条件をクリア
                        </button>
                      </div>
                      <div class="d-flex">
                        <!-- Make Column -->
                        <div class="left">
                          <ul>
                            <li
                              v-for="make in makes"
                              :key="make"
                              @click="selectMake(make)"
                            >
                              <NuxtImg
                                src="/assets/images/default-img.webp"
                                alt="car"
                                class="img-fluid"
                                loading="lazy"
                                width="60"
                                height="50"
                              />
                              {{ make }}
                              <span>({{ getMakeCount(make) }})</span>
                              <!-- <i class="fa fa-angle-right"></i> -->
                              <NuxtImg
                                src="/assets/icons/left-chevron.webp"
                                alt="car"
                                class="img-fluid makeLeftIcon"
                                loading="lazy"
                                width="15"
                              />
                            </li>
                          </ul>
                        </div>

                        <!-- Model Column -->
                        <!-- <div>{{ models }}</div> -->
                        <div class="center">
                          <ul v-if="selectedMake && models.length > 0">
                            <div>
                              <label class="allMakeLabel">
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  v-model="selectAllModels"
                                />
                                All {{ selectedMake }}
                              </label>
                            </div>
                            <li v-for="model in models" :key="model">
                              <label>
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  :value="model"
                                  v-model="selectedModels"
                                  :disabled="selectAllModels"
                                />
                                {{ model }}
                                <span>({{ getModelCount(model) }})</span>
                              </label>
                            </li>
                          </ul>
                        </div>

                        <!-- Grade Column -->
                        <div class="right">
                          <ul v-if="selectedModels.length > 0">
                            <li v-for="grade in grades" :key="grade">
                              <label>
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  :value="grade"
                                  v-model="selectedGrades"
                                />
                                {{ grade }}
                                <span>({{ getGradeCount(grade) }})</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div
                      class="modal-footer d-flex justify-content-center border-0"
                    >
                      <button
                        type="button"
                        class="btn btn-search"
                        data-bs-dismiss="modal"
                        @click="updateSettingDisplay(false)"
                      >
                        チェックしたメーカーの 中古車を検索する
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Grades Model Popup -->
              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">
                  モデル・<br />
                  グレード
                </p>
                <p
                  :class="[
                    'm-0',
                    'text',
                    'modeCheck',
                    'carModelFetch',
                    selectedGradesDisplay === '選択する'
                      ? 'text'
                      : 'truncate-text',
                    !isGradesButtonEnabled ? 'disabled-grades' : '',
                  ]"
                  class="m-0 text modeCheck carModelFetch"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#carModal"
                >
                  <!-- :class="{ 'disabled-grades': !isGradesButtonEnabled }" -->
                  {{ selectedGradesDisplay }}
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
                        アルファード ({{ selectedModelCount }})
                      </p>

                      <div id="carCollapse">
                        <div
                          v-for="(modelItem, index) in selectedModelsWithGrades"
                          :key="`${modelItem.make}-${modelItem.model}`"
                        >
                          <!-- Header with Model Name -->
                          <div
                            class="border-bottom py-2 d-flex align-items-center gap-3"
                          >
                            <!-- All-grades checkbox (optional behavior) -->
                            <input
                              class="form-check-input allSelected"
                              type="checkbox"
                              :checked="
                                modelItem.grades.every((g) =>
                                  modelItem.selectedGrades.includes(g)
                                )
                              "
                              @change="
                                toggleAllGradesForModel(
                                  modelItem.make,
                                  modelItem.model,
                                  $event.target.checked
                                )
                              "
                              @click.stop
                            />

                            <!-- Collapse Button -->
                            <button
                              class="btn flex-grow-1 text-start custom-label shadow-none border-0 p-0 d-flex align-items-center"
                              type="button"
                              :data-bs-target="`#collapse-${index}`"
                              data-bs-toggle="collapse"
                              aria-expanded="false"
                              :aria-controls="`collapse-${index}`"
                            >
                              <img
                                src="/assets/images/default-img.webp"
                                alt="car"
                                class="img-fluid"
                                loading="lazy"
                                width="80"
                                height="50"
                              />
                              <p class="m-0 modelCarCount">
                                {{ modelItem.model }}
                                <span>({{ modelItem.grades.length }})</span>
                              </p>
                            </button>
                          </div>

                          <!-- Grades Collapse Section -->
                          <div
                            class="collapse"
                            :id="`collapse-${index}`"
                            data-bs-parent="#carCollapse"
                          >
                            <div
                              class="pt-3 d-flex justify-content-between flex-wrap gap-3 collapseBehave"
                            >
                              <!-- Loop through grades -->
                              <div
                                class="form-check"
                                v-for="grade in modelItem.grades"
                                :key="grade"
                              >
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  :checked="
                                    modelItem.selectedGrades.includes(grade)
                                  "
                                  @change="toggleGrade(modelItem.make, grade)"
                                />
                                <label class="form-check-label gradeCheckLable">
                                  {{ grade }}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer carModelSelectedGrade">
                      <button
                        type="button"
                        class="btn btn-submitGrade"
                        data-bs-dismiss="modal"
                        @click="updateSelectedGradesDisplay"
                      >
                        検索する
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="model d-flex align-items-center gap-3 ps-4 minYear">
                <p class="m-0 title text-nowrap">年式</p>
                <select v-model="minYear" class="form-select">
                  <option value="">指定なし</option>
                  <option
                    v-for="year in filteredYearsForMin"
                    :key="year"
                    :value="String(year)"
                  >
                    {{ year }}
                  </option>
                </select>
              </div> -->

              <div class="model d-flex align-items-center gap-3 ps-4 minYear">
                <p class="m-0 title text-nowrap">年式</p>
                <select v-model="minYear" class="form-select">
                  <option value="">指定なし</option>
                  <option
                    v-for="year in years"
                    :key="year"
                    :value="String(year)"
                  >
                    {{ year }}
                  </option>
                </select>
              </div>

              <!-- <div class="model d-flex align-items-center gap-3 maxYear">
                <p class="m-0 title">~</p>
                <select v-model="maxYear" class="form-select">
                  <option value="">指定なし</option>
                  <option
                    v-for="year in filteredYearsForMax"
                    :key="year"
                    :value="String(year)"
                  >
                    {{ year }}
                  </option>
                </select>
              </div> -->

              <div class="model d-flex align-items-center gap-3 maxYear">
                <p class="m-0 title">~</p>
                <select v-model="maxYear" class="form-select">
                  <option value="">指定なし</option>
                  <option
                    v-for="year in years"
                    :key="year"
                    :value="String(year)"
                  >
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>

            <div class="manufacture d-flex align-items-center gap-4 my-2">
              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">都道府県</p>
                <p
                  :class="{
                    text: selectedPrefectureDisplay === '選択する',
                    'truncate-text': selectedPrefectureDisplay !== '選択する',
                  }"
                  class="m-0"
                  data-bs-toggle="modal"
                  data-bs-target="#myPrefectureModel"
                >
                  {{ selectedPrefectureDisplay }}
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
                        placeholder="What City you Looking for?"
                        class="form-control w-75 rounded-0 shadow-none mb-3 searchKey"
                        v-model="searchTerm"
                      />

                      <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="all"
                          v-model="selectAll"
                        />
                        <label class="form-check-label all-select" for="all"
                          >全国</label
                        >
                      </div>

                      <div
                        class="prefecture mb-3"
                        v-for="(region, regionName) in filteredRegions"
                        :key="regionName"
                      >
                        <div class="d-flex gap-2 mb-3">
                          <input
                            class="form-check-input selectAllReigon"
                            type="checkbox"
                            :id="`select-${regionName}`"
                            :checked="isRegionFullySelected(regionName)"
                            @change="toggleRegionSelection(regionName)"
                          />
                          <label
                            class="form-check-label checkboxReigon preHead"
                            :for="`select-${regionName}`"
                          >
                            {{ regionName }}
                            <span class="totalCity">({{ region.count }})</span>
                          </label>
                        </div>
                        <!-- <p class="preHead">
                          {{ regionName }}
                          <span class="totalCity">({{ region.count }})</span>
                        </p> -->
                        <div class="inner d-flex gap-3 flex-wrap">
                          <div
                            class="form-check"
                            v-for="(
                              prefecture, prefectureName
                            ) in region.prefectures"
                            :key="prefectureName"
                          >
                            <input
                              class="form-check-input"
                              type="checkbox"
                              :id="prefectureName"
                              :value="prefectureName"
                              v-model="selectedPrefectures"
                              @change="handlePrefectureChange"
                            />
                            <label
                              class="form-check-label checkBoxDynamic"
                              :for="prefectureName"
                              >{{ prefectureName }}
                              <span>({{ prefecture.count }})</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-prefecturSubmit"
                        data-bs-dismiss="modal"
                        @click="updateSelectedPrefectureText"
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
                  class="m-0 text"
                  :class="{
                    text: true,
                    'truncate-text': selectedCitiesDisplay !== '選択する',
                    'disabled-grades': !isSinglePrefectureSelected,
                  }"
                  :data-bs-toggle="isSinglePrefectureSelected ? 'modal' : null"
                  :data-bs-target="
                    isSinglePrefectureSelected ? '#myMunicipalModal' : null
                  "
                  @click.prevent="!isSinglePrefectureSelected"
                >
                  <!-- data-bs-toggle="modal"
                  data-bs-target="#myMunicipalModal" -->
                  <!-- muncip -->
                  {{ selectedCitiesDisplay }}
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
                        v-model="citySearchTerm"
                        placeholder="What Town you Looking for?"
                        class="form-control w-75 searchKey rounded-0 shadow-none mb-3"
                      />

                      <div class="form-check mb-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="allMunicipal"
                          v-model="selectAllCities"
                        />
                        <label
                          class="form-check-label all-select"
                          for="allMunicipal"
                          >全国</label
                        >
                      </div>

                      <div class="inner d-flex gap-3 flex-wrap">
                        <div
                          class="form-check"
                          v-for="city in selectedCitiesCheck"
                          :key="city.name"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            :id="city.name"
                            :value="city.name"
                            v-model="selectedCities"
                          />
                          <label
                            class="form-check-label selectBoxDynamic"
                            :for="city.name"
                            >{{ city.name }}
                            <span>({{ city.count }})</span></label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-muncipality"
                        data-bs-dismiss="modal"
                        @click="updateSelectedCitiesDisplay"
                      >
                        チェックしたメーカーの 中古車を検索する
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title text-nowrap">走行距離</p>
                <!-- <select class="form-select" v-model="minMilage">
                  <option value="">指定なし</option>
                  <option
                    v-for="m in filteredMilageForMin"
                    :key="'min-' + m"
                    :value="m"
                  >
                    {{ m }}
                  </option>
                </select> -->
                <select class="form-select" v-model="minMilage">
                  <option value="">指定なし</option>
                  <option v-for="m in milages" :key="'min-' + m" :value="m">
                    {{ m }}
                  </option>
                </select>
              </div>

              <div class="model d-flex align-items-center gap-3 mt-2">
                <p class="m-0 title">~</p>
                <!-- <select class="form-select" v-model="maxMilage">
                  <option value="">指定なし</option>
                  <option
                    v-for="m in filteredMilageForMax"
                    :key="'max-' + m"
                    :value="m"
                  >
                    {{ m }}
                  </option>
                </select> -->
                <select class="form-select" v-model="maxMilage">
                  <option value="">指定なし</option>
                  <option v-for="m in milages" :key="'max-' + m" :value="m">
                    {{ m }}
                  </option>
                </select>
              </div>
            </div>
            <div class="manufacture d-flex align-items-center gap-4 mb-2">
              <div class="model d-flex align-items-center gap-1">
                <p class="m-0 title">ミッション</p>
                <!-- <p class="m-0 text transmission">選択する</p> -->
                <div class="position-relative d-inline-block">
                  <button class="btn text" @click="toggleTransmissionTooltip">
                    {{ selectedTransmissionOption || "選択する" }}
                  </button>

                  <div
                    v-if="showTransmissionTooltip"
                    class="custom-tooltip show position-absolute"
                    ref="transmissionTooltipRef"
                    :style="{ bottom: '100%', left: '0', marginBottom: '10px' }"
                  >
                    <div
                      class="form-check form-check-inline"
                      v-for="(option, index) in transmissionOptions"
                      :key="index"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        :id="'transmissionOption' + index"
                        name="transmissionTooltipRadio"
                        :value="option"
                        v-model="selectedTransmissionOption"
                        @change="closeTransmissionTooltip"
                      />
                      <label
                        class="form-check-label"
                        :for="'transmissionOption' + index"
                      >
                        {{ option }}
                      </label>
                    </div>

                    <p
                      class="m-0 tooltip-text"
                      @click="
                        selectedTransmissionOption = '';
                        closeTransmissionTooltip();
                      "
                    >
                      条件クリア
                    </p>
                  </div>
                </div>
              </div>
              <div class="model d-flex align-items-center gap-3">
                <p class="m-0 title">駆動方式</p>
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
                <select class="form-select" v-model="minPrice">
                  <option value="">指定なし</option>
                  <option
                    v-for="p in filteredPriceForMin"
                    :key="'min-' + p"
                    :value="p"
                  >
                    {{ p }}
                  </option>
                </select>
              </div>

              <!-- Max Price -->
              <div class="model d-flex align-items-center gap-3 mt-2">
                <p class="m-0 title">~</p>
                <select class="form-select" v-model="maxPrice">
                  <option value="">指定なし</option>
                  <option
                    v-for="p in filteredPriceForMax"
                    :key="'max-' + p"
                    :value="p"
                  >
                    {{ p }}
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
                        v-model="hasSixDegree"
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
                        v-model="hasVehicleModel"
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
                        v-model="hasProperty"
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
                        v-model="hasUnregister"
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
                        v-model="hasNotRepaired"
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
                  <!-- One Owner -->
                  <div class="left">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        v-model="hasOwner"
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
              </div>
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
                <p
                  class="m-0 para"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signUpNotification"
                >
                  新しい通知にサインアップ
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Model for Signup New Notification -->
        <div
          class="modal fade"
          id="signUpNotification"
          tabindex="-1"
          aria-labelledby="signUpNotificationLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog signupNotificationModelArea">
            <div class="modal-content">
              <div class="modal-header border-0 m-0 pb-0">
                <h1 class="modal-title" id="signUpNotificationLabel">
                  新着お知らせメール 登録
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body m-0">
                <p class="m-0 text-area">
                  現在の検索条件に合った新着中古車・新車情報を、メールで毎日お知らせします。<br /><br />
                  現在の検索条件に合った新着中古車・新車情報を、メールで毎日お知らせします。<br /><br />
                </p>

                <p class="m-0 addCondition">この条件を お気に入り</p>

                <!-- <div class="d-flex align-items-center my-2 tagsArea gap-1 flex-wrap" v-if="filtersUpdated"> -->
                  <div class="d-flex align-items-center my-2 tagsArea gap-1 flex-wrap">
                  <!-- <p class="m-0 tag" v-if="selectedMake && selectedMake !== ''">{{ selectedMake }}</p>
                  <p class="m-0 tag" v-if="minYear && minYear !== ''">{{ minYear }}</p>
                  <p class="m-0 tag" v-if="maxYear && maxYear !== ''">{{ maxYear }}</p>
                  <p class="m-0 tag" v-if="minMilage && minMilage !== ''">{{ minMilage }} km</p>
                  <p class="m-0 tag" v-if="maxMilage && maxMilage !== ''">{{ maxMilage }} km</p>
                  <p class="m-0 tag" v-if="minPrice && minPrice !== ''">{{ minPrice }}</p>
                  <p class="m-0 tag" v-if="maxPrice && maxPrice !== ''">{{ maxPrice }}</p>
                  <p class="m-0 tag" v-if="selectedPrefectures && selectedPrefectures.length">{{ selectedPrefectures[0] }}</p>
                  <p class="m-0 tag" v-if="selectedCities && selectedCities.length">{{ selectedCities[0] }}</p>
                  <p class="m-0 tag" v-if="selectedTransmissionOption && selectedTransmissionOption !== ''">{{ selectedTransmissionOption }}</p>
                  <p class="m-0 tag" v-if="selectedOption && selectedOption !== ''">{{ selectedOption }}</p>
                  <p class="m-0 tag" v-if="selectedColor && selectedColor !== ''">{{ selectedColor }}</p>
                  <p class="m-0 tag" v-if="hasSixDegree">360°画像付き車両</p>
                  <p class="m-0 tag" v-if="hasVehicleModel">車両品質評価書付き</p>
                  <p class="m-0 tag" v-if="hasProperty">新着物件</p>
                  <p class="m-0 tag" v-if="hasUnregister">未登録車</p>
                  <p class="m-0 tag" v-if="hasNotRepaired">修復歴なし</p>
                  <p class="m-0 tag" v-if="hasOwner">ワンオーナー</p>
                  <p class="m-0 tag" v-if="selectedNewOption && selectedNewOption !== ''">{{ selectedNewOption }}</p>
                  <p class="m-0 tag" v-if="selectedEngineOption && selectedEngineOption !== ''">{{ selectedEngineOption }}</p>
                  <p class="m-0 tag" v-if="minEngineSize && minEngineSize !== ''">{{ minEngineSize }}</p>
                  <p class="m-0 tag" v-if="maxEngineSize && maxEngineSize !== ''">{{ maxEngineSize }}</p>
                  <p class="m-0 tag" v-if="hasRepaired">復歴あり</p>
                  <p class="m-0 tag" v-if="selectedHandleOption && selectedHandleOption !== ''">{{ selectedHandleOption }}</p>
                  <p class="m-0 tag" v-if="selectedDoorsOption && selectedDoorsOption !== ''">{{ selectedDoorsOption }}</p>
                  <p class="m-0 tag" v-if="selectedMinSeat && selectedMinSeat !== ''">{{ selectedMinSeat }}</p>
                  <p class="m-0 tag" v-if="selectedMaxSeat && selectedMaxSeat !== ''">{{ selectedMaxSeat }}</p>
                  <p class="m-0 tag" v-if="hasGurentee">含まれる</p>
                  <p class="m-0 tag" v-if="hasNotGurentee">含まれません</p>
                  <p class="m-0 tag" v-if="hasHybrid">ハイブリッド</p>
                  <p class="m-0 tag" v-if="hasCommercial">商用車</p>
                  <p class="m-0 tag" v-if="hasETC">ETC</p>
                  <p class="m-0 tag" v-if="hasSmartKey">スマートキー</p>
                  <p class="m-0 tag" v-if="hasImportedCar">輸入車</p>
                  <p class="m-0 tag" v-if="hasEV">EV</p>
                  <p class="m-0 tag" v-if="hasABS">ABS</p>
                  <p class="m-0 tag" v-if="haskeyless">キーレスエン</p>
                  <p class="m-0 tag" v-if="hasDomesticCar">国産車</p>
                  <p class="m-0 tag" v-if="hasLightAutomatic">軽自動</p>
                  <p class="m-0 tag" v-if="hasAirConditioner">エアコン</p>
                  <p class="m-0 tag" v-if="hasFogLights">フォグランプ</p>
                  <p class="m-0 tag" v-if="hasCamper">キャンピングカー</p>
                  <p class="m-0 tag" v-if="hasHydrogen">水素燃</p>
                  <p class="m-0 tag" v-if="hasPowerWindow">パワーウィンドウ</p>
                  <p class="m-0 tag" v-if="hasSunroof">サンルーフ</p> -->
                </div>

                <div class="emailSection">
                  <p class="m-0 tileEmail">メールアドレス</p>
                  <input
                    type="email"
                    class="form-control emailField"
                    placeholder="example@gmail.com"
                  />
                  <p class="m-0 latestDeal">
                    ご登録いただいたメールアドレスに、最新のお得な中古車・新車情報や、SATからのお知らせメール「＠SATニュース」をお送りしてもよろしいでしょうか。
                  </p>
                </div>

                <div class="radioButton d-flex gap-3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault1"
                      value="allow"
                      v-model="selectedOptionAllowORNot"
                    />
                    <label class="form-check-label" for="radioDefault1">
                      許可する
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="radioDefault"
                      id="radioDefault2"
                      value="deny"
                      v-model="selectedOptionAllowORNot"
                      checked
                    />
                    <label class="form-check-label" for="radioDefault2">
                      許可しない
                    </label>
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0 d-flex justify-content-center">
                <!-- <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button> -->
                <button type="button" class="btn btn-cta" :disabled="selectedOptionAllowORNot === 'deny'">
                  同意の上、登録する
                </button>
              </div>
              <div class="footerBottom mx-3">
                <p class="m-0 ctaTitle">登録</p>
                <p class="m-0 ctaDes">
                  ※ご入力いただいた情報は、SATのプライバシーポリシーに基づき適切に管理され、サービス提供以外の目的で第三者に開示することは一切ございません
                </p>
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
                  @click="handleSearchClick"
                >
                  <!-- @click="$emit('myEvent', 'okay')" -->
                  <NuxtImg
                    src="/assets/images/header/search-icon.webp"
                    class="img-fluid m-1"
                    alt="icon"
                    loading="lazy"
                    width="15"
                    height="15"
                  />
                  {{ props.total.toLocaleString() }}
                  <span
                    style="font-size: 10px; font-weight: 400; padding: 0px 3px"
                  >
                    台 検索する
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
                <p class="m-0 title">検査時間</p>
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
                <select
                  class="form-select minEngineSize"
                  v-model="minEngineSize"
                >
                  <option value="">指定なし</option>
                  <option
                    v-for="size in engineSizes"
                    :key="'min-' + size"
                    :value="size"
                  >
                    {{ size }}
                  </option>
                </select>
              </div>
              <div class="model d-flex align-items-center gap-2">
                <p class="m-0 title ms-2">~</p>
                <select
                  class="form-select maxEngineSize"
                  v-model="maxEngineSize"
                >
                  <option value="">指定なし</option>
                  <option
                    v-for="size in engineSizes"
                    :key="'max-' + size"
                    :value="size"
                  >
                    {{ size }}
                  </option>
                </select>
              </div>

              <p class="m-0 vehicleCondition ps-3">車両状態</p>

              <div class="form-check ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  v-model="hasNotRepaired"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  修復歴なし
                </label>
              </div>
              <!-- Repaired Car -->
              <div class="form-check ms-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  v-model="hasRepaired"
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
              </div> -->

              <div class="model d-flex align-items-center gap-2 ms-3">
                <p class="m-0 title text-nowrap ms-2">座 &nbsp;席</p>
                <select class="form-select minSeat" v-model="selectedMinSeat">
                  <option value="">指定なし</option>
                  <option
                    v-for="seat in seatOptions"
                    :key="'min-' + seat"
                    :value="seat"
                  >
                    {{ seat }}
                  </option>
                </select>
              </div>

              <!-- <div class="model d-flex align-items-center gap-2">
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
              </div> -->

              <div class="model d-flex align-items-center gap-2">
                <p class="m-0 title ms-2">~</p>
                <select class="form-select maxSeat" v-model="selectedMaxSeat">
                  <option value="">指定なし</option>
                  <option
                    v-for="seat in seatOptions"
                    :key="'max-' + seat"
                    :value="seat"
                  >
                    {{ seat }}
                  </option>
                </select>
              </div>

              <p class="m-0 vehicleCondition ps-3">保証</p>
              <!-- Gurente include -->
              <div class="form-check ms-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  v-model="hasGurentee"
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
                  v-model="hasNotGurentee"
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
                            v-model="hasHybrid"
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
                            v-model="hasCommercial"
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
                            v-model="hasImportedCar"
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
                            v-model="hasEV"
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
                            v-model="hasDomesticCar"
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
                            v-model="hasLightAutomatic"
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
                            v-model="hasCamper"
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
                            v-model="hasHydrogen"
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
                            v-model="hasETC"
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
                            v-model="hasSmartKey"
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
                            v-model="haskeyless"
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
                            v-model="hasPowerWindow"
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
                            v-model="hasSunroof"
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
                    @click="handleSearchClick"
                  >
                    <NuxtImg
                      src="/assets/images/header/search-icon.webp"
                      class="img-fluid m-1"
                      alt="icon"
                      loading="lazy"
                      width="15"
                      height="15"
                    />
                    {{ props.total.toLocaleString() }}
                    <span
                      style="
                        font-size: 10px;
                        font-weight: 400;
                        padding: 0px 3px;
                      "
                    >
                      <!--{{ props.total.toLocaleString() }} -->
                      台 検索する
                    </span>
                  </button>
                  <!-- 145100 -->
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
import {
  ref,
  computed,
  onMounted,
  watch,
  onBeforeUnmount,
  watchEffect,
} from "vue";
import { useRoute, useRouter } from "vue-router";
//import { debounce } from "lodash"
import { debounce } from "lodash-es";
import { useRuntimeConfig, useFetch } from "#app";

const baseURL = useRuntimeConfig().public.apiBaseUrl;
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
});

const route = useRoute();
const router = useRouter();
const minYear = ref("");
const maxYear = ref("");
const minMilage = ref("");
const maxMilage = ref("");
const minPrice = ref("");
const maxPrice = ref("");
const showHandleTooltip = ref(false);
const selectedHandleOption = ref("");
const handleTooltipRef = ref(null);
const showDoorsTooltip = ref(false);
const selectedDoorsOption = ref("");
const doorsTooltipRef = ref(null);

const doorsOptions = ["3", "4", "5"];
const hasFogLights = ref(false);
const hasAirConditioner = ref(false);
const hasABS = ref(false);
const hasGurentee = ref(false);
const hasNotGurentee = ref(false);
const hasRepaired = ref(false);
const hasNotRepaired = ref(false);
const hasOwner = ref(false);
const haskeyless = ref(false);
const hasSmartKey = ref(false);
const hasUnregister = ref(false);
const hasETC = ref(false);
const hasVehicleModel = ref(false);
const hasSixDegree = ref(false);
const hasHybrid = ref(false);
const hasCommercial = ref(false);
const hasImportedCar = ref(false);
const hasDomesticCar = ref(false);
const hasEV = ref(false);
const hasLightAutomatic = ref(false);
const hasCamper = ref(false);
const hasHydrogen = ref(false);
const hasPowerWindow = ref(false);
const hasSunroof = ref(false);
const hasProperty = ref(false);
const selectedOption = ref("");
const showEngineTooltip = ref(false);
const selectedEngineOption = ref("");
const engineTooltipRef = ref(null);
const engineOptions = ["cc", "kw"];
const selectedTransmissionOption = ref("");
const showTransmissionTooltip = ref(false);
const transmissionTooltipRef = ref(null);
const transmissionOptions = ["AT", "MT"];
const showNewTooltip = ref(false);
const selectedNewOption = ref("");
const newTooltipRef = ref(null);
const newOptions = ["1year", "2year", "3year"];

// Flags to track if user interacted
const absTouched = ref(false);
const fogTouched = ref(false);
const acTouched = ref(false);
const gurenteeTouched = ref(false);
const notGurenteeTouched = ref(false);
const repairedTouched = ref(false);
const notRepairedTouched = ref(false);
const ownerTouched = ref(false);
const keylessTouched = ref(false);
const smartKeyTouched = ref(false);
const unregisterTouched = ref(false);
const etcTouched = ref(false);
const vehicleModelTouched = ref(false);
const sixDegreeTouched = ref(false);
const hybridTouched = ref(false);
const commercialTouched = ref(false);
const importedCarTouched = ref(false);
const domesticCarTouched = ref(false);
const camperTouched = ref(false);
const evTouched = ref(false);
const lightAutomaticTouched = ref(false);
const hydrogenTouched = ref(false);
const powerWindowTouched = ref(false);
const sunRoofTouched = ref(false);
const propertyTouched = ref(false);
const CAR_MAKES_CACHE_KEY = "car_makes_cache";

const emit = defineEmits(["myEvent", "carData"]);
const currentYear = new Date().getFullYear();
const isExpanded = ref(false);
//const filtersUpdated = ref(false); //ye variable jitney filter ho ge un ko model or page k end per value ko show krway ga

const selectedOptionAllowORNot = ref('deny') // default value — matches checked radio


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
// ========================= Start Make Model and Grades Code
// const carData = ref({});
const selectedMake = ref(null);
// const selectedGrades = ref([]);
// const makes = ref([]);
const models = ref([]);
const grades = ref([]);
const selectAllModelsMap = ref({});
const selectedModelsMap = ref({});
const selectedGradesMap = ref({});
const showLimitPopup = ref(false);

const selectedGrades = computed({
  get() {
    return selectedGradesMap.value[selectedMake.value] || [];
  },
  set(val) {
    selectedGradesMap.value[selectedMake.value] = val;
  },
});

const {
  data: makesResponse,
  pending: makesPending,
  error: makesError,
} = useFetch(`${baseURL}/get-car-makes`);

const carData = computed(() => {
  if (makesResponse.value?.status) {
    emit("carData", { ...makesResponse?.value?.data });
    return makesResponse.value.data;
  }
  return {};
});

const makes = computed(() => {
  return Object.keys(carData.value);
});

const selectMake = (make) => {
  selectedMake.value = make;
  models.value = Object.keys(carData.value[make]?.models || []);
  grades.value = []; //reset grades ho jaye ge model main se jo aye ge
  // console.log("Models ki value mili k nai:", models.value);
  if (selectAllModels.value) {
    selectedModels.value = [...models.value];
  }
};

//yaha per make ka total count milay ga Like Honda (123) Toyota (321)
const getMakeCount = (make) => {
  return carData.value[make]?.count || 0;
};

//yaha per model ka total count milay ga Like City (123) Prius (321)
const getModelCount = (model) => {
  return carData.value[selectedMake.value]?.models[model]?.count || 0;
};
//yaha per grade ka total count milay ga Like X (123) Z (321)
const getGradeCount = (grade) => {
  if (!selectedMake.value || selectedModels.value.length === 0) return 0;

  let total = 0;

  selectedModels.value.forEach((model) => {
    const count =
      carData.value[selectedMake.value]?.models?.[model]?.grades?.[grade] || 0;
    total += count;
  });

  return total;
};

//ye code main model ki base per grades show ho ge or agar grades checked hai to jab model uncheck ho ga to grades b uncheck ho jaye ge
const selectedModels = computed({
  get() {
    return selectedModelsMap.value[selectedMake.value] || [];
  },
  set(newSelectedModels) {
    const make = selectedMake.value;
    const prevSelectedModels = selectedModelsMap.value[make] || [];

    // Find removed models (is main model uncheck ho jaye ga)
    const removedModels = prevSelectedModels.filter(
      (model) => !newSelectedModels.includes(model)
    );

    // Remove grades related to removed models (agar checkbox check hai grade k to wo b uncheck ho jaye ge)
    if (removedModels.length && carData.value[make]) {
      const gradesToKeep = new Set();

      // Loop through remaining selected models to get all valid grades (ye foreach check kry gay k model baqi k check hai wo to remove nahi howy)
      newSelectedModels.forEach((model) => {
        const modelGrades = Object.keys(
          carData.value[make]?.models?.[model]?.grades || {}
        );
        modelGrades.forEach((grade) => gradesToKeep.add(grade));
      });

      // Filter selected grades and keep only those that still exist in remaining models (models jo exist krty hai wo show ho ge)
      const currentGrades = selectedGradesMap.value[make] || [];
      selectedGradesMap.value[make] = currentGrades.filter((grade) =>
        gradesToKeep.has(grade)
      );
    }
    // Update selected models (ye update kry ga har model check or uncheck per)
    selectedModelsMap.value[make] = newSelectedModels;
  },
});

const selectAllModels = computed({
  get() {
    return !!selectAllModelsMap.value[selectedMake.value];
  },
  set(val) {
    selectAllModelsMap.value[selectedMake.value] = val;

    if (val) {
      selectedModels.value = [...models.value]; // Select all models of current make
      selectedGrades.value = []; //all make select hai to grades b remvoe ho jaye ge
    } else {
      selectedModels.value = []; // Deselect all
    }
  },
});

//Ye values push kry ga oper p tag main

const selectedTags = ref([]);

// Recalculate tags jab reactive values change hon
watchEffect(() => {
  try {
    const tags = [];

    if (makes.value && Array.isArray(makes.value)) {
      for (const make of makes.value) {
        // All models selected
        if (selectAllModelsMap.value[make]) {
          tags.push(`All ${make}`);
          continue;
        }

        // Add models
        const models = selectedModelsMap.value[make] || [];
        if (Array.isArray(models)) {
          models.forEach((model) => {
            if (model && typeof model === "string") {
              tags.push(`${make} - ${model}`);
            }
          });
        }

        // Add grades (if needed)
        // const grades = selectedGradesMap.value[make] || [];
        // grades.forEach((grade) => {
        //   tags.push(`${make} - ${grade}`);
        // });
      }
    }

    // Manually assign tags
    selectedTags.value = tags;
  } catch (error) {
    console.error("Error in selectedTags watchEffect:", error);
    selectedTags.value = [];
  }
});

//remove tag kro list main se
const removeTag = (tag) => {
  try {
    if (!tag || typeof tag !== "string") return;

    if (tag.startsWith("All ")) {
      const make = tag.replace("All ", "");
      if (
        selectAllModelsMap.value &&
        typeof selectAllModelsMap.value === "object"
      ) {
        selectAllModelsMap.value[make] = false;
      }
      if (
        selectedModelsMap.value &&
        typeof selectedModelsMap.value === "object"
      ) {
        selectedModelsMap.value[make] = [];
      }
      if (
        selectedGradesMap.value &&
        typeof selectedGradesMap.value === "object"
      ) {
        selectedGradesMap.value[make] = [];
      }
      return;
    }

    const [make, value] = tag.split(" - ");
    if (!make || !value) return;

    const modelGrades = carData.value?.[make]?.models?.[value]?.grades;

    if (selectedModelsMap.value?.[make]?.includes(value)) {
      selectedModelsMap.value[make] = selectedModelsMap.value[make].filter(
        (m) => m !== value
      );

      // Remove associated grades
      if (modelGrades) {
        const gradeKeys = Object.keys(modelGrades);
        if (selectedGradesMap.value?.[make]) {
          selectedGradesMap.value[make] = (
            selectedGradesMap.value[make] || []
          ).filter((g) => !gradeKeys.includes(g));
        }
      }

      if (
        selectAllModelsMap.value &&
        typeof selectAllModelsMap.value === "object"
      ) {
        selectAllModelsMap.value[make] = false;
      }
      return;
    }

    if (selectedGradesMap.value?.[make]?.includes(value)) {
      selectedGradesMap.value[make] = selectedGradesMap.value[make].filter(
        (g) => g !== value
      );
    }
  } catch (error) {
    console.error("Error in removeTag:", error);
  }
};

const clearAllTags = () => {
  try {
    if (selectedTags.value && Array.isArray(selectedTags.value)) {
      selectedTags.value.forEach((tag) => {
        removeTag(tag); // reuse kr raha hai existing logic
      });
    }

    selectedTags.value = [];

    // Optionally, make sure  kr raha hai all maps cleaned up properly ho gaye hai k nai
    if (
      selectAllModelsMap.value &&
      typeof selectAllModelsMap.value === "object"
    ) {
      for (const key in selectAllModelsMap.value) {
        selectAllModelsMap.value[key] = false;
      }
    }

    if (
      selectedModelsMap.value &&
      typeof selectedModelsMap.value === "object"
    ) {
      for (const key in selectedModelsMap.value) {
        selectedModelsMap.value[key] = [];
      }
    }

    if (
      selectedGradesMap.value &&
      typeof selectedGradesMap.value === "object"
    ) {
      for (const key in selectedGradesMap.value) {
        selectedGradesMap.value[key] = [];
      }
    }
  } catch (error) {
    console.error("Error in clearAllTags:", error);
  }
};

//Ye jab button per click kry ge tab All Toyota main se Toyota or Honda-N Box main se N Box Extract kr k settingValue class mian print krwa de ga
const settingDisplayValue = ref("選択する");

const updateSettingDisplay = (updateList = true) => {
  try {
    // console.log("calling updateSettingDisplay", selectedTags);
    const result = [];
    if (selectedTags.value && Array.isArray(selectedTags.value)) {
      selectedTags.value.forEach((tag) => {
        if (tag && typeof tag === "string") {
          if (tag.startsWith("All ")) {
            result.push(tag.replace("All ", "").trim());
          } else {
            const [make, value] = tag.split(" - ");
            if (
              make &&
              value &&
              selectedModelsMap.value[make]?.includes(value)
            ) {
              result.push(value.trim());
            }
          }
        }
      });
    }
    settingDisplayValue.value = result.join(", ") || "選択する";
    if (typeof updateFilters === "function") {
      //  filtersUpdated.value = true;
      updateFilters?.(updateList);
    }
  } catch (error) {
    console.error("Error in updateSettingDisplay:", error);
    settingDisplayValue.value = "選択する";
  }
};

//ye p tag main make model or grades ki value ko | All Make | Model | Grades | ki value ko show krwaye ga or 10 limit pora honey per wo msg de ga k 10 se zayada nai select kr skty

watch(
  [selectedModelsMap, selectedGradesMap, selectAllModelsMap],
  () => {
    const tagCount = selectedTags.value.length;

    if (tagCount > 10) {
      showLimitPopup.value = true;

      const make = selectedMake.value;

      // Agar grades select hue hain, to unka last wale ko remove karo
      if ((selectedGradesMap.value[make] || []).length > 0) {
        selectedGradesMap.value[make].pop();
        // Vue ko reactivity trigger karne ke liye reassign karo
        selectedGradesMap.value = { ...selectedGradesMap.value };
      }
      // Agar grades nahi hain to models ka last wale ko remove karo
      else if ((selectedModelsMap.value[make] || []).length > 0) {
        selectedModelsMap.value[make].pop();
        // Vue ko reactivity trigger karne ke liye reassign karo
        selectedModelsMap.value = { ...selectedModelsMap.value };
      }
      // Agar models bhi nahi hain lekin All Make select tha to usko off kar do
      else if (selectAllModelsMap.value[make]) {
        selectAllModelsMap.value[make] = false;
        selectAllModelsMap.value = { ...selectAllModelsMap.value };
      }
    }
  },
  { deep: true }
);

watch([selectedModels, selectAllModels], ([models, allSelected]) => {
  if (allSelected) {
    grades.value = [];
    return;
  }

  if (models.length > 0 && selectedMake.value) {
    let allGrades = [];

    models.forEach((model) => {
      const modelGrades =
        carData.value[selectedMake.value]?.models?.[model]?.grades;
      if (modelGrades) {
        allGrades.push(...Object.keys(modelGrades));
      }
    });

    grades.value = [...new Set(allGrades)];
  } else {
    grades.value = [];
  }
});

//Next Grades ka Model hai yaha se only Grades ka code shuru ho ga

//ye code model button ko enable kry ga is condition per k agar make model select hai to enable ager sirf make select hai to model disable
//agar model select hai tab enable ho ga or by default disabled
const isGradesButtonEnabled = computed(() => {
  let hasMake = false;
  let hasModel = false;

  selectedTags.value.forEach((tag) => {
    if (tag.startsWith("All ")) {
      hasMake = true;
    } else {
      const [make, value] = tag.split(" - ");
      const isModel = selectedModelsMap.value[make]?.includes(value);
      if (isModel) {
        hasModel = true;
      }
    }
  });

  return hasModel; // Model hona chahiye (make ho ya na ho)
});

const selectedModelCount = computed(() => {
  const selectedModelTags = new Set(
    selectedTags.value
      .filter((tag) => tag.includes(" - "))
      .map((tag) => tag.trim())
  );

  let count = 0;

  for (const make in selectedModelsMap.value) {
    const models = selectedModelsMap.value[make];

    models.forEach((model) => {
      const tag = `${make} - ${model}`;
      if (selectedModelTags.has(tag)) {
        count++;
      }
    });
  }

  return count;
});

const selectedModelsWithGrades = computed(() => {
  try {
    const result = [];

    // Step 1: Collect selected model tags (e.g., "Toyota - Corolla")
    const selectedModelTags = new Set();
    if (selectedTags.value && Array.isArray(selectedTags.value)) {
      selectedTags.value
        .filter((tag) => tag && typeof tag === "string" && tag.includes(" - "))
        .forEach((tag) => selectedModelTags.add(tag.trim()));
    }

    // Step 2: Loop through selectedModelsMap
    if (
      selectedModelsMap.value &&
      typeof selectedModelsMap.value === "object"
    ) {
      for (const make in selectedModelsMap.value) {
        const selectedModels = selectedModelsMap.value[make];

        if (Array.isArray(selectedModels)) {
          selectedModels.forEach((model) => {
            if (!model || typeof model !== "string") return;

            // Step 3: Only continue if this make-model is actually selected via tag
            const tag = `${make} - ${model}`;
            if (!selectedModelTags.has(tag)) return;

            const modelData = carData.value?.[make]?.models?.[model];
            // console.log(modelData);
            if (modelData) {
              const grades = Object.keys(modelData.grades || {});
              const rawData = selectedGradesMap.value?.[make];

              // Handle both flat and structured formats
              let selectedGrades = [];
              if (Array.isArray(rawData)) {
                // Flat structure - filter grades that belong to this model
                const validGradesForModel = Object.keys(modelData.grades || {});
                selectedGrades = rawData.filter((grade) =>
                  validGradesForModel.includes(grade)
                );
              } else if (rawData && typeof rawData === "object") {
                // Structured format
                selectedGrades = rawData[model] || [];
              }

              result.push({
                make,
                model,
                grades,
                selectedGrades,
              });
            }
          });
        }
        console.log("selectedGradesMap", {
          ...selectedGradesMap.value?.[make],
        });
      }
    }
    // console.log("selectedModelsWithGrades", result);
    return result;
  } catch (error) {
    console.error("Error in selectedModelsWithGrades computed:", error);
    return [];
  }
});

const toggleGrade = (make, grade) => {
  try {
    if (!make || !grade) return;

    // Initialize if not exists
    if (!selectedGradesMap.value[make]) {
      selectedGradesMap.value[make] = [];
    }

    let selected = selectedGradesMap.value[make] || [];
    // console.log("toggleGrade  ", selected);

    // Handle both flat and structured formats
    if (Array.isArray(selected)) {
      // Flat structure
      if (selected.includes(grade)) {
        selectedGradesMap.value[make] = selected.filter((g) => g !== grade);
      } else {
        selectedGradesMap.value[make] = [...selected, grade];
      }
    } else if (typeof selected === "object" && selected !== null) {
      // Structured format - convert to flat for consistency
      let newSelected = [];
      for (let key in selected) {
        if (Array.isArray(selected[key])) {
          newSelected = [...newSelected, ...selected[key]];
        }
      }

      if (newSelected.includes(grade)) {
        newSelected = newSelected.filter((g) => g !== grade);
      } else {
        newSelected.push(grade);
      }

      selectedGradesMap.value[make] = newSelected;
    }

    // Remove duplicates and normalize
    const resultSet = new Set();
    selectedGradesMap.value[make].forEach((value) => {
      if (typeof value === "string") {
        if (/^[a-z]$/.test(value)) {
          resultSet.add(value.toUpperCase());
        } else {
          resultSet.add(value);
        }
      }
    });
    const uniqueArray = [...new Set(resultSet)];
    selectedGradesMap.value[make] = Array.from(uniqueArray);

    // console.log("toggleGrade selectedGradesMap", selectedGradesMap.value);
  } catch (error) {
    console.error("Error in toggleGrade:", error);
  }
};

//ye all select input checkbox hai is per click krney se collaps main jitnay checkbox ho ge
//wo check or uncheck ho jaye
const toggleAllGradesForModel = (make, model, isChecked) => {
  try {
    if (!make || !model) return;

    const modelGrades = Object.keys(
      carData.value?.[make]?.models?.[model]?.grades || {}
    );
    if (!modelGrades.length) return;

    // Initialize if not exists
    if (!selectedGradesMap.value[make]) {
      selectedGradesMap.value[make] = [];
    }

    let existingGrades = selectedGradesMap.value[make] || [];

    // Handle both flat and structured formats
    if (Array.isArray(existingGrades)) {
      // Flat structure
      if (isChecked) {
        // Add all grades (merge with existing)
        const updatedGrades = Array.from(
          new Set([...existingGrades, ...modelGrades])
        );
        selectedGradesMap.value[make] = updatedGrades;
      } else {
        // Remove only grades of this model
        const updatedGrades = existingGrades.filter(
          (g) => !modelGrades.includes(g)
        );
        selectedGradesMap.value[make] = updatedGrades;
      }
    } else if (typeof existingGrades === "object" && existingGrades !== null) {
      // Structured format - convert to flat for consistency
      let flatGrades = [];
      for (let key in existingGrades) {
        if (Array.isArray(existingGrades[key])) {
          flatGrades = [...flatGrades, ...existingGrades[key]];
        }
      }

      if (isChecked) {
        // Add all grades (merge with existing)
        const updatedGrades = Array.from(
          new Set([...flatGrades, ...modelGrades])
        );
        selectedGradesMap.value[make] = updatedGrades;
      } else {
        // Remove only grades of this model
        const updatedGrades = flatGrades.filter(
          (g) => !modelGrades.includes(g)
        );
        selectedGradesMap.value[make] = updatedGrades;
      }
    }
  } catch (error) {
    console.error("Error in toggleAllGradesForModel:", error);
  }
};

//is function k call per checkbox k value p tag main show ho jaye ge grades model ka code hai
// const selectedGradesDisplay = ref("選択する");
const selectedGradesDisplay = computed(() => {
  try {
    // console.log("calling selectedGradesDisplay", selectedGradesMap.value);
    const selectedGrades = [];

    if (
      selectedGradesMap.value &&
      typeof selectedGradesMap.value === "object"
    ) {
      for (const make in selectedGradesMap.value) {
        const grades = selectedGradesMap.value[make] || [];

        if (Array.isArray(grades)) {
          // Handle flat structure (for backward compatibility)
          grades.forEach((grade) => {
            if (grade && typeof grade === "string") {
              selectedGrades.push(grade);
            }
          });
        } else if (typeof grades === "object" && grades !== null) {
          // Handle structured format
          for (const model in grades) {
            const modelGrades = grades[model] || [];
            if (Array.isArray(modelGrades)) {
              modelGrades.forEach((grade) => {
                if (grade && typeof grade === "string") {
                  selectedGrades.push(grade);
                }
              });
            }
          }
        }
      }
    }

    return selectedGrades.length > 0 ? selectedGrades.join(", ") : "選択する";
  } catch (error) {
    console.error("Error in selectedGradesDisplay computed:", error);
    return "選択する";
  }
});

const updateSelectedGradesDisplay = () => {
  try {
    // console.log("calling updateSelectedGradesDisplay");
    // The selectedGradesDisplay computed property will automatically update
    // based on changes to selectedGradesMap.value, so we don't need to
    // manually assign values to it. Just trigger the filter update.
    if (typeof updateFilters === "function") {
      updateFilters(false);
    }
  } catch (error) {
    console.error("Error in updateSelectedGradesDisplay:", error);
  }
};
// ========================= End Make Model and Grades Code

//========================== Start Prefecture and Municipality
const {
  data: regionsData,
  pending,
  error,
} = useFetch(`${baseURL}/get-cars-prefectures-and-cities`);
const regions = computed(() => {
  if (regionsData.value?.status) {
    return regionsData.value.data;
  }
  return {};
});

//all prefecture per click krney se prefecture checkbox sary check or uncheck ho jaye ge

const selectedPrefectures = ref([]);
const selectAll = ref(false);

// Toggle all prefectures on selectAll change
watch(selectAll, (val) => {
  selectedPrefectures.value = [];

  if (val) {
    for (const region of Object.values(regions.value)) {
      for (const [prefectureName] of Object.entries(region.prefectures)) {
        selectedPrefectures.value.push(prefectureName);
      }
    }
  }
});

//Keep "All" checkbox in sync
function handlePrefectureChange() {
  // Total prefectures available
  const totalPrefectures = [];
  for (const region of Object.values(regions.value)) {
    for (const [prefectureName] of Object.entries(region.prefectures)) {
      totalPrefectures.push(prefectureName);
    }
  }

  // agar all selected hai, check "selectAll", otherwise uncheck
  selectAll.value =
    selectedPrefectures.value.length === totalPrefectures.length;
}

//search input per prefecture search ho gey
const searchTerm = ref("");

const filteredRegions = computed(() => {
  if (!searchTerm.value) {
    return regions.value;
  }

  const result = {};
  const term = searchTerm.value.toLowerCase();

  for (const [regionName, region] of Object.entries(regions.value)) {
    const regionNameMatch = regionName.toLowerCase() === term;
    const filteredPrefectures = {};

    for (const [prefectureName, prefecture] of Object.entries(
      region.prefectures
    )) {
      const prefectureMatch = prefectureName.toLowerCase() === term;

      if (prefectureMatch || regionNameMatch) {
        filteredPrefectures[prefectureName] = prefecture;
      }
    }

    if (Object.keys(filteredPrefectures).length > 0) {
      result[regionName] = {
        ...region,
        prefectures: filteredPrefectures,
      };
    }
  }

  return result;
});

//ye code prefecture jo select ho gaye hai us ki value ko p tag main show krwa de ga

const selectedPrefectureDisplay = ref("選択する");

function updateSelectedPrefectureText() {
  if (selectAll.value) {
    selectedPrefectureDisplay.value = "全国";
  }
  // Check if area is selected directly via slug (even if no prefectures)
  else if (
    selectedAreas.value.length > 0 &&
    selectedPrefectures.value.length === 0
  ) {
    selectedPrefectureDisplay.value = selectedAreas.value.join(", ");
  }
  // Normal region check when prefectures selected
  else if (isAnyFullRegionSelected()) {
    selectedPrefectureDisplay.value = selectedAreas.value.join(", ");
  } else if (selectedPrefectures.value.length > 0) {
    selectedPrefectureDisplay.value = selectedPrefectures.value.join(", ");
  } else {
    selectedPrefectureDisplay.value = "選択する";
  }
  //  filtersUpdated.value = true;
  updateFilters(false);
}

//agar region select hai to us k prefecture select kry ga
function isRegionFullySelected(regionName) {
  const region = regions.value[regionName];
  if (!region) return false;

  const prefectureNames = Object.keys(region.prefectures);
  return prefectureNames.every((name) =>
    selectedPrefectures.value.includes(name)
  );
}

function toggleRegionSelection(regionName) {
  const region = regions.value[regionName];
  if (!region) return;

  const prefectureNames = Object.keys(region.prefectures);
  const allSelected = prefectureNames.every((name) =>
    selectedPrefectures.value.includes(name)
  );

  if (allSelected) {
    // Deselect all of this region's prefectures
    selectedPrefectures.value = selectedPrefectures.value.filter(
      (name) => !prefectureNames.includes(name)
    );
  } else {
    // Select all of this region's prefectures
    const set = new Set(selectedPrefectures.value);
    prefectureNames.forEach((name) => set.add(name));
    selectedPrefectures.value = Array.from(set);
  }

  // Also update the 'selectAll' checkbox state
  handlePrefectureChange();
}

//Ye selected area ka payload banaye ga

const selectedAreas = ref([]);

// Watch for changes in selectedPrefectures and update areas
watch(selectedPrefectures, () => {
  const areas = new Set();

  for (const [regionName, regionData] of Object.entries(regions.value)) {
    const prefectureNames = Object.keys(regionData.prefectures);
    const hasSelectedPrefecture = prefectureNames.some((pref) =>
      selectedPrefectures.value.includes(pref)
    );
    if (hasSelectedPrefecture) {
      areas.add(regionName);
    }
  }

  selectedAreas.value = Array.from(areas);
});

//ye check krey ga k agar reigon select hai to us k prefectue ka payload b jaye or agar sirf prefecture select hai to sirf prefecture ka payload
//bany ga na k reigon b sath payload main show ho ga
function isAnyFullRegionSelected() {
  for (const [regionName, regionData] of Object.entries(regions.value)) {
    const prefectureNames = Object.keys(regionData.prefectures);
    const allSelected = prefectureNames.every((name) =>
      selectedPrefectures.value.includes(name)
    );
    if (allSelected) {
      return true; // At least one full region is selected
    }
  }
  return false;
}
//yaha se muncipality/city ka code start ho raha hai

//enable and disalbe agar 1 se zayada prefecture select hai tab disable agar sirf ek hi select hai tab
//enable ho jaye ga model
const isSinglePrefectureSelected = computed(
  () => selectedPrefectures.value.length === 1
);

const selectedCities = ref([]);

//agar prefecture 1 select hai tab api se get krey ga k ek prefecture ki value kya hai
const selectedPrefectureName = computed(() =>
  selectedPrefectures.value.length === 1 ? selectedPrefectures.value[0] : null
);

//ye code extract kry ga cities ki value api se
const selectedCitiesList = computed(() => {
  if (!selectedPrefectureName.value) return [];

  for (const region of Object.values(regions.value)) {
    const prefectures = region.prefectures;
    if (prefectures[selectedPrefectureName.value]) {
      const cities = prefectures[selectedPrefectureName.value].cities;
      return Object.entries(cities).map(([cityName, count]) => ({
        name: cityName,
        count,
      }));
    }
  }

  return [];
});

//agar select all kry ga to sary checkbox select ho jaye ge or dobara select per unselect
const selectAllCities = ref(false);
watch(selectAllCities, (isChecked) => {
  if (isChecked) {
    selectedCities.value = selectedCitiesList.value.map((city) => city.name);
  } else {
    selectedCities.value = [];
  }
});

//ye search city kry ga agar city main search bar per search kro ge to result show ho gay if available
const citySearchTerm = ref("");
const selectedCitiesCheck = computed(() => {
  if (!citySearchTerm.value) {
    return selectedCitiesList.value; // poori cities ki list jab search empty ho
  }
  const term = citySearchTerm.value.toLowerCase();
  // filtered cities based on search term
  return selectedCitiesList.value.filter((city) =>
    city.name.toLowerCase().includes(term)
  );
});

//is function k call hoty jo value checked hai wo p tag main show ho jaye ge
const selectedCitiesDisplay = ref("選択する");
function updateSelectedCitiesDisplay() {
  if (selectedCities.value.length > 0) {
    selectedCitiesDisplay.value = selectedCities.value.join(", ");
  } else {
    selectedCitiesDisplay.value = "選択する";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
}

//ye watch check kry ga agar 1 se zayad prefectre select hai ya all prefecture ya 1 reigon ya multiple reigon to city/muncipality k value reset kr de ga

watch(selectedPrefectures, (newPrefectures) => {
  if (newPrefectures.length !== 1) {
    // Reset municipality selection when not exactly 1 prefecture is selected
    selectedCities.value = [];
    selectedCitiesDisplay.value = "選択する";
    citySearchTerm.value = "";
    selectAllCities.value = false;
  }
});
//========================== End Prefecture and Municipality

// Full year range from 1950 to current year
const years = computed(() => {
  const y = [];
  for (let i = 1950; i <= currentYear; i++) {
    y.push(i);
  }
  return y;
});

// No filtering of dropdowns now

// Validate when minYear changes
watch(minYear, (newVal) => {
  if (
    newVal !== "" &&
    maxYear.value !== "" &&
    parseInt(newVal) > parseInt(maxYear.value)
  ) {
    // Reset maxYear if invalid
    maxYear.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});

// Validate when maxYear changes
watch(maxYear, (newVal) => {
  if (
    newVal !== "" &&
    minYear.value !== "" &&
    parseInt(newVal) < parseInt(minYear.value)
  ) {
    // Reset minYear if invalid
    minYear.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});

//Min Milage and Max Milage code

const milages = computed(() => {
  const m = [];
  for (let i = 10000; i <= 100000; i += 5000) {
    m.push(i);
  }
  return m;
});


// Validate when minMilage changes
watch(minMilage, (newVal) => {
  if (
    newVal !== "" &&
    maxMilage.value !== "" &&
    parseInt(newVal) > parseInt(maxMilage.value)
  ) {
    // Reset maxMilage if invalid
    maxMilage.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});

// Validate when maxMilage changes
watch(maxMilage, (newVal) => {
  if (
    newVal !== "" &&
    minMilage.value !== "" &&
    parseInt(newVal) < parseInt(minMilage.value)
  ) {
    // Reset minMilage if invalid
    minMilage.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});
// End Min Milage and maxMilage

//Min Price and Max Price code

const prices = computed(() => {
  const p = [];
  for (let i = 10000; i <= 100000; i += 5000) {
    p.push(i);
  }
  return p;
});

const filteredPriceForMin = prices;
const filteredPriceForMax = prices;

watch(minPrice, (newVal) => {
  if (
    newVal !== "" &&
    maxPrice.value !== "" &&
    parseInt(newVal) > parseInt(maxPrice.value)
  ) {
    maxPrice.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(maxPrice, (newVal) => {
  if (
    newVal !== "" &&
    minPrice.value !== "" &&
    parseInt(newVal) < parseInt(minPrice.value)
  ) {
    minPrice.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});

//End MinPrice and maxPrice

const selectedMinSeat = ref("");
const selectedMaxSeat = ref("");

// Fixed seat options: 2 to 5
const seatOptions = [2, 3, 4, 5];

// Watchers to validate selections
watch(selectedMinSeat, (newVal) => {
  if (
    newVal !== "" &&
    selectedMaxSeat.value !== "" &&
    parseInt(newVal) > parseInt(selectedMaxSeat.value)
  ) {
    selectedMaxSeat.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(selectedMaxSeat, (newVal) => {
  if (
    newVal !== "" &&
    selectedMinSeat.value !== "" &&
    parseInt(newVal) < parseInt(selectedMinSeat.value)
  ) {
    selectedMinSeat.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});

const minEngineSize = ref("");
const maxEngineSize = ref("");

// Engine size options in cc (customize if needed)
const engineSizes = [500, 660, 1000, 1500, 2000, 2500, 3000, 3500, 4000];

watch(minEngineSize, (newVal) => {
  if (
    maxEngineSize.value &&
    newVal !== "" &&
    parseInt(newVal) > parseInt(maxEngineSize.value)
  ) {
    maxEngineSize.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false); // if you're using this
});

watch(maxEngineSize, (newVal) => {
  if (
    minEngineSize.value &&
    newVal !== "" &&
    parseInt(newVal) < parseInt(minEngineSize.value)
  ) {
    minEngineSize.value = "";
  }
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(selectedColor, () => {
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(selectedHandleOption, () => {
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(selectedDoorsOption, () => {
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(selectedEngineOption, () => {
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(selectedTransmissionOption, () => {
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasABS, () => {
  absTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasAirConditioner, () => {
  acTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasFogLights, () => {
  fogTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasGurentee, () => {
  gurenteeTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasRepaired, () => {
  repairedTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasNotRepaired, () => {
  notRepairedTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasOwner, () => {
  ownerTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasVehicleModel, () => {
  vehicleModelTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(selectedOption, () => {
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(haskeyless, () => {
  keylessTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasUnregister, () => {
  unregisterTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasETC, () => {
  etcTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasSixDegree, () => {
  sixDegreeTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasHybrid, () => {
  hybridTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasCommercial, () => {
  commercialTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasImportedCar, () => {
  importedCarTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasDomesticCar, () => {
  domesticCarTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasEV, () => {
  evTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasLightAutomatic, () => {
  lightAutomaticTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});
watch(hasCamper, () => {
  camperTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasHydrogen, () => {
  hydrogenTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasNotGurentee, () => {
  notGurenteeTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasSmartKey, () => {
  smartKeyTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasPowerWindow, () => {
  powerWindowTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasSunroof, () => {
  sunRoofTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(hasProperty, () => {
  propertyTouched.value = true;
  // filtersUpdated.value = true;
  updateFilters(false);
});

watch(selectedNewOption, () => {
  // filtersUpdated.value = true;
  updateFilters(false);
});
// Ye UpdateFilter ka function call ho ga
//ye function payload send kry ga make model grade minYear, maxYear, minMilage, maxMilage or query params ki value change per or realtime data button per show ho ga
// {{ props.total.toLocaleString() }}per

const updateFilters = debounce((updateList = true) => {
  try {
    const payload = {};
    payload.make_model_map = {};
    //==================== Start Make model and grade ka payload =====================
    if (
      selectedModelsMap.value &&
      typeof selectedModelsMap.value === "object"
    ) {
      for (const make of Object.keys(selectedModelsMap.value)) {
        const selectedModels = selectedModelsMap.value[make] || [];

        // If 'All Make' is selected then skip models/grades
        if (selectAllModelsMap.value[make]) {
          payload.make_model_map[make] = {};
          continue;
        }

        if (selectedModels.length > 0) {
          payload.make_model_map[make] = {};

          selectedModels.forEach((model) => {
            // Default to empty array for this model
            payload.make_model_map[make][model] = [];

            // Handle both flat and structured formats for grades
            let modelGrades = [];
            const rawGradesData = selectedGradesMap.value?.[make];

            if (Array.isArray(rawGradesData)) {
              // Flat structure - filter grades that belong to this model
              const validGradesForModel = Object.keys(
                carData.value?.[make]?.models?.[model]?.grades || {}
              );
              modelGrades = rawGradesData.filter((grade) =>
                validGradesForModel.includes(grade)
              );
            } else if (rawGradesData && typeof rawGradesData === "object") {
              // Structured format
              modelGrades = rawGradesData[model] || [];
            }

            // console.log("modelGrades", modelGrades);
            // Add grades if any
            if (modelGrades.length > 0) {
              payload.make_model_map[make][model] = [...modelGrades];
            }
          });
        }
      }
    }

    //==================== End Make model and grade ka payload ======================

    if (minYear.value) payload.min_year = Number(minYear.value);
    if (maxYear.value) payload.max_year = Number(maxYear.value);
    if (minMilage.value) payload.min_milage = Number(minMilage.value);
    if (maxMilage.value) payload.max_milage = Number(maxMilage.value);
    if (minPrice.value) payload.min_price = Number(minPrice.value);
    if (maxPrice.value) payload.max_price = Number(maxPrice.value);
    if (selectedMinSeat.value)
      payload.min_seats = Number(selectedMinSeat.value);
    if (selectedMaxSeat.value)
      payload.max_seats = Number(selectedMaxSeat.value);
    if (minEngineSize.value)
      payload.min_engine_size = Number(minEngineSize.value);

    if (maxEngineSize.value)
      payload.max_engine_size = Number(maxEngineSize.value);
    if (selectedColor.value) payload.color = selectedColor.value;
    if (selectedHandleOption.value)
      payload.steering = selectedHandleOption.value;
    if (selectedDoorsOption.value) {
      payload.doors = selectedDoorsOption.value;
    }
    if (selectedEngineOption.value) {
      payload.engine_type = selectedEngineOption.value;
    }
    if (selectedTransmissionOption.value) {
      payload.transmission = selectedTransmissionOption.value;
    }
    if (absTouched.value && hasABS.value === true) {
      payload.is_abs = true;
    }
    if (acTouched.value && hasAirConditioner.value === true)
      payload.is_ac = true;

    if (fogTouched.value && hasFogLights.value === true)
      payload.is_fog_lights = true;

    if (absTouched.value && hasABS.value === true) payload.is_abs = true;

    if (gurenteeTouched.value && hasGurentee.value === true)
      payload.is_gurantee_included = true;

    if (notGurenteeTouched.value && hasNotGurentee.value === true) {
      payload.is_guaranteed_not_included = true;
    }

    if (repairedTouched.value && hasRepaired.value === true)
      payload.is_repaired = true;

    if (notRepairedTouched.value && hasNotRepaired.value === true) {
      payload.is_not_repaired = true;
    }

    if (ownerTouched.value && hasOwner.value === true)
      payload.is_single_owner = true;

    if (vehicleModelTouched.value && hasVehicleModel.value === true)
      payload.is_vqe_report = true;

    if (keylessTouched.value && haskeyless.value === true)
      payload.is_keyless_entry = true;

    if (smartKeyTouched.value && hasSmartKey.value === true) {
      payload.is_keyless_entry = true;
    }

    if (unregisterTouched.value && hasUnregister.value === true)
      payload.is_unregistered = true;

    if (etcTouched.value && hasETC.value === true) payload.is_esc = true;

    if (sixDegreeTouched.value && hasSixDegree.value === true) {
      payload.three_sixty_view = true;
    }
    if (hybridTouched.value && hasHybrid.value === true) {
      payload.is_hybrid = true;
    }

    if (commercialTouched.value && hasCommercial.value === true) {
      payload.is_commercial = true;
    }

    if (importedCarTouched.value && hasImportedCar.value === true) {
      payload.is_imported = true;
    }

    if (evTouched.value && hasEV.value === true) {
      payload.is_ev = true;
    }

    if (domesticCarTouched.value && hasDomesticCar.value === true) {
      payload.is_domestic = true;
    }

    if (lightAutomaticTouched.value && hasLightAutomatic.value === true) {
      payload.is_light_automatic = true;
    }

    if (camperTouched.value && hasCamper.value === true) {
      payload.is_camper = true;
    }

    if (hydrogenTouched.value && hasHydrogen.value === true) {
      payload.is_hydrogen_fule = true;
    }

    if (powerWindowTouched.value && hasPowerWindow.value === true) {
      payload.is_power_window = true;
    }

    if (sunRoofTouched.value && hasSunroof.value === true) {
      payload.is_sunroof = true;
    }

    if (propertyTouched.value && hasProperty.value === true) {
      payload.is_property = true;
    }

    if (selectedOption.value) {
      payload.drive_train = selectedOption.value;
    }

    if (selectedNewOption.value) {
      payload.duration = selectedNewOption.value;
    }

    if (isAnyFullRegionSelected()) {
      // Agar koi poora region select hua hai, to sirf area bhejo
      payload.area = selectedAreas.value; // sirf region names
    } else if (selectedPrefectures.value.length > 0) {
      // Agar koi poora region nahi hai, lekin prefectures hain, to sirf prefectures bhejo
      payload.prefecture = selectedPrefectures.value;
    }
    if (selectedCities.value.length > 0) payload.city = selectedCities.value;
    // console.log("myevent", payload)

    // Only emit if updateList is true
    if (typeof emit === "function" && !updateList) {
      emit("myEvent", { payload, updateList });
    }
  } catch (error) {
    console.error("Error in updateFilters:", error);
  }
}, 300);

onMounted(() => {
  try {
    const slug = route.params.slug;
    let yrParam = "";
    let mlParam = "";
    let prParam = "";
    let seatParam = "";
    let engineParam = "";

    //Start URL Param se data set ho ga make model and grades ka

    const segments = Array.isArray(slug) ? slug : slug.split("/");

    const makesSegment = segments.find((seg) => seg.startsWith("mk-"));
    const modelsSegment = segments.find((seg) => seg.startsWith("md-"));
    const gradesSegment = segments.find((seg) => seg.startsWith("gr-"));

    // Clear previous
    selectAllModelsMap.value = {};
    selectedModelsMap.value = {};
    selectedGradesMap.value = {};

    // --- Makes ---
    if (makesSegment) {
      const makeParts = makesSegment.replace("mk-", "").split(",");
      makeParts.forEach((make) => {
        const formattedMake = make.charAt(0).toUpperCase() + make.slice(1);
        selectAllModelsMap.value[formattedMake] = true;

        // Add all makes initially with empty array (important fix)
        if (!selectedModelsMap.value[formattedMake]) {
          selectedModelsMap.value[formattedMake] = [];
        }
      });
    }

    // --- Models ---
    if (modelsSegment) {
      const modelParts = modelsSegment.replace("md-", "").split(",");
      modelParts.forEach((modelSlug) => {
        for (const make in carData.value) {
          const models = carData.value[make]?.models || {};
          for (const modelName in models) {
            const slug = modelName.toLowerCase().replace(/\s+/g, "-");
            if (slug === modelSlug) {
              if (!selectedModelsMap.value[make]) {
                selectedModelsMap.value[make] = [];
              }
              if (!selectedModelsMap.value[make].includes(modelName)) {
                selectedModelsMap.value[make].push(modelName);
              }
              selectAllModelsMap.value[make] = false;
            }
          }
        }
      });
    }

    // --- Grades ---
    if (gradesSegment) {
      const gradeParts = gradesSegment.replace("gr-", "").split(",");
      gradeParts.forEach((gradeSlug) => {
        // First, try to find the grade in the flat structure (for backward compatibility)
        for (const make in selectedModelsMap.value) {
          const models = selectedModelsMap.value[make];
          models.forEach((modelName) => {
            const grades =
              carData.value?.[make]?.models?.[modelName]?.grades || {};
            for (const gradeName in grades) {
              const slug = gradeName.toLowerCase().replace(/\s+/g, "-");
              if (slug === gradeSlug) {
                // Initialize the flat structure for backward compatibility
                if (!selectedGradesMap.value[make]) {
                  selectedGradesMap.value[make] = [];
                }
                if (!selectedGradesMap.value[make].includes(gradeName)) {
                  selectedGradesMap.value[make].push(gradeName);
                }

                // Also maintain the structured format for the UI
                if (!selectedGradesMap.value[make]) {
                  selectedGradesMap.value[make] = {};
                }
                if (!selectedGradesMap.value[make][modelName]) {
                  selectedGradesMap.value[make][modelName] = [];
                }
                if (
                  !selectedGradesMap.value[make][modelName].includes(gradeName)
                ) {
                  selectedGradesMap.value[make][modelName].push(gradeName);
                }
              }
            }
          });
        }
      });
    }

    //End URL Param se data set ho ga make model and grades ka

    if (Array.isArray(slug)) {
      yrParam = slug.find((p) => p.startsWith("yr-"));
    } else if (typeof slug === "string" && slug.startsWith("yr-")) {
      yrParam = slug;
    }

    if (yrParam) {
      const parts = yrParam.replace("yr-", "").split("-");
      if (parts.length === 1 && years.value.includes(Number(parts[0]))) {
        minYear.value = parts[0];
      } else if (parts.length === 2) {
        const [min, max] = parts.map(Number);
        if (years.value.includes(min)) minYear.value = String(min);
        if (years.value.includes(max)) maxYear.value = String(max);
      }
    }

    //Milage parameter
    if (Array.isArray(slug)) {
      mlParam = slug.find((p) => p.startsWith("ml-"));
    } else if (typeof slug === "string" && slug.startsWith("ml-")) {
      mlParam = slug;
    }

    if (mlParam) {
      const parts = mlParam.replace("ml-", "").split("-");
      if (parts.length === 1 && milages.value.includes(Number(parts[0]))) {
        minMilage.value = parts[0];
      } else if (parts.length === 2) {
        const [min, max] = parts.map(Number);
        if (milages.value.includes(min)) minMilage.value = String(min);
        if (milages.value.includes(max)) maxMilage.value = String(max);
      }
    }

    //Price parameter
    if (Array.isArray(slug)) {
      prParam = slug.find((p) => p.startsWith("pr-"));
    } else if (typeof slug === "string" && slug.startsWith("pr-")) {
      prParam = slug;
    }

    if (prParam) {
      const parts = prParam.replace("pr-", "").split("-");
      if (parts.length === 1 && prices.value.includes(Number(parts[0]))) {
        minPrice.value = parts[0];
      } else if (parts.length === 2) {
        const [min, max] = parts.map(Number);
        if (prices.value.includes(min)) minPrice.value = String(min);
        if (prices.value.includes(max)) maxPrice.value = String(max);
      }
    }

    //Seats Parameter

    if (Array.isArray(slug)) {
      seatParam = slug.find((p) => p.startsWith("seat-"));
    } else if (typeof slug === "string" && slug.startsWith("seat-")) {
      seatParam = slug;
    }

    if (seatParam) {
      const parts = seatParam.replace("seat-", "").split("-");
      const seatValues = [2, 3, 4, 5]; //abhi 5 tak value set ki hai

      if (parts.length === 1 && seatValues.includes(Number(parts[0]))) {
        selectedMinSeat.value = String(parts[0]);
      } else if (parts.length === 2) {
        const [min, max] = parts.map(Number);
        if (seatValues.includes(min)) selectedMinSeat.value = String(min);
        if (seatValues.includes(max)) selectedMaxSeat.value = String(max);
      }
    }

    //Engine Size
    if (Array.isArray(slug)) {
      engineParam = slug.find((p) => p.startsWith("enginesize-"));
    } else if (typeof slug === "string" && slug.startsWith("enginesize-")) {
      engineParam = slug;
    }

    if (engineParam) {
      const parts = engineParam.replace("enginesize-", "").split("-");
      const allowedEngineSizes = engineSizes;

      if (parts.length === 1 && allowedEngineSizes.includes(Number(parts[0]))) {
        minEngineSize.value = String(parts[0]);
      } else if (parts.length === 2) {
        const [min, max] = parts.map(Number);
        if (allowedEngineSizes.includes(min)) minEngineSize.value = String(min);
        if (allowedEngineSizes.includes(max)) maxEngineSize.value = String(max);
      }
    }

    //Start Area, Prefecture, City

    if (Array.isArray(slug)) {
      if (slug.includes("all")) {
        selectAll.value = true;
      } else {
        selectAll.value = false;

        // area-
        const areaParam = slug.find((p) => p.startsWith("area-"));
        if (areaParam) {
          const areas = areaParam.replace("area-", "").split(",");
          selectedAreas.value = areas;

          // Auto-select all prefectures of the selected regions
          let allPrefs = [];
          areas.forEach((areaName) => {
            const region = regions.value[areaName];
            if (region) {
              allPrefs = allPrefs.concat(Object.keys(region.prefectures));
            }
          });
          selectedPrefectures.value = [...new Set(allPrefs)];
        }

        // pref-
        const prefParam = slug.find((p) => p.startsWith("pref-"));
        if (prefParam) {
          const prefs = prefParam.replace("pref-", "").split(",");
          selectedPrefectures.value = prefs;
        }

        // city-
        const cityParam = slug.find((p) => p.startsWith("city-"));
        if (cityParam) {
          const cities = cityParam.replace("city-", "").split(",");
          selectedCities.value = cities;
        }
      }
    } else if (typeof slug === "string") {
      if (slug === "all") {
        selectAll.value = true;
      }
    }

    const currentPath = route.params.slug; // <-- Get slug here
    // console.log("Slug from URL:", currentPath);
    if (!route?.query?.q) {
      updateSelectedPrefectureText();
      updateSelectedCitiesDisplay();
    }

    //End Area, Prefecture, City

    const queryColor = route.query?.color;
    if (queryColor && typeof queryColor === "string") {
      const colorNames = colors.map((c) => c.name);
      if (colorNames.includes(queryColor)) {
        selectedColor.value = queryColor;
      }
    }

    const querySteering = route.query?.steering;
    if (querySteering) {
      const steeringUpper = querySteering.toUpperCase();
      if (steeringUpper === "RHD" || steeringUpper === "LHD") {
        selectedHandleOption.value = steeringUpper;
      }
    }
    const queryDrivetrain = route.query?.drivetrain;

    if (queryDrivetrain) {
      const drivetrainUpper = queryDrivetrain.toUpperCase();
      if (drivetrainUpper === "2WD" || drivetrainUpper === "4WD") {
        selectedOption.value = drivetrainUpper;
      }
    }

    const queryDoors = route.query?.doors;
    if (queryDoors && ["3", "4", "5"].includes(queryDoors)) {
      selectedDoorsOption.value = queryDoors;
    }

    const queryEngine = route.query?.engine;
    if (queryEngine && engineOptions.includes(queryEngine)) {
      selectedEngineOption.value = queryEngine;
    }
    const queryTransmission = route.query?.transmission;

    if (
      queryTransmission &&
      (queryTransmission === "AT" || queryTransmission === "MT")
    ) {
      selectedTransmissionOption.value = queryTransmission;
    }

    const queryDuration = route.query?.duration
      ?.toLowerCase()
      ?.replace(/\+/g, " ");

    if (
      queryDuration === "1year" ||
      queryDuration === "2year" ||
      queryDuration === "3year"
    ) {
      selectedNewOption.value = queryDuration;
    }

    const queryABS = route.query?.abs;

    if (queryABS === "1") {
      hasABS.value = true;
    }

    const queryAC = route.query?.ac;
    if (queryAC === "1") {
      hasAirConditioner.value = true;
    }
    const queryFOG = route.query?.fog;

    if (queryFOG === "1") {
      hasFogLights.value = true;
    }

    const queryGurentee = route.query?.gurentee;

    if (queryGurentee === "1") {
      hasGurentee.value = true;
    }
    const queryNotGurentee = route.query?.not_gurentee;
    if (queryNotGurentee === "1") {
      hasNotGurentee.value = true;
    }
    const queryRepaired = route.query?.repaired;

    if (queryRepaired === "1") {
      hasRepaired.value = true;
    }
    const queryNotRepaired = route.query?.not_repaired;
    if (queryNotRepaired === "1") {
      hasNotRepaired.value = true;
    }
    const queryOwner = route.query?.owner;

    if (queryOwner === "1") {
      hasOwner.value = true;
    }
    const queryVehicleModel = route.query?.vehicle_model;

    if (queryVehicleModel === "1") {
      hasVehicleModel.value = true;
    }

    const queryKeyless = route.query?.keyless;

    if (queryKeyless === "1") {
      haskeyless.value = true;
    }
    const querySmartKey = route.query?.smart_key;
    if (querySmartKey === "1") {
      hasSmartKey.value = true;
    }
    const queryUnregister = route.query?.unregister;

    if (queryUnregister === "1") {
      hasUnregister.value = true;
    }

    const queryETC = route.query?.etc;

    if (queryETC === "1") {
      hasETC.value = true;
    }

    const querySixDegree = route.query?.six_degree;

    if (querySixDegree === "1") {
      hasSixDegree.value = true;
    }

    const queryHybrid = route.query?.hybrid;

    if (queryHybrid === "1") {
      hasHybrid.value = true;
    }

    const queryCommercial = route.query?.commercial;

    if (queryCommercial === "1") {
      hasCommercial.value = true;
    }

    const queryImported = route.query?.imported;

    if (queryImported === "1") {
      hasImportedCar.value = true;
    }

    const queryEV = route.query?.ev;

    if (queryEV === "1") {
      hasEV.value = true;
    }

    const queryDomestic = route.query?.domestic;

    if (queryDomestic === "1") {
      hasDomesticCar.value = true;
    }

    const queryLightAutomatic = route.query?.light_automatic;

    if (queryLightAutomatic === "1") {
      hasLightAutomatic.value = true;
    }

    const queryCamper = route.query?.camper;

    if (queryCamper === "1") {
      hasCamper.value = true;
    }

    const queryHydrogen = route.query?.hydrogen;

    if (queryHydrogen === "1") {
      hasHydrogen.value = true;
    }

    const queryPowerWindow = route.query?.pw;
    if (queryPowerWindow === "1") {
      hasPowerWindow.value = true;
    }

    const querySunroof = route.query?.sunroof;

    if (querySunroof === "1") {
      hasSunroof.value = true;
    }

    const queryProperty = route.query?.property;

    if (queryProperty === "1") {
      hasProperty.value = true;
    }

    // fetchMake();

    let hydrated = false;
    watchEffect(
      () => {
        // Ensure carData is ready and tags are computed
        const hasData = carData.value && Object.keys(carData.value).length > 0;
        if (!hydrated && hasData) {
          const currentPath = route.params.slug; // <-- Get slug here
          // console.log("Slug from URL:", currentPath);
          if (!route?.query?.q) {
            // console.log("executing updateSettingDisplay");
            updateSettingDisplay();
          } // Now display is updated
          hydrated = true; // Prevent re-running
        }
      },
      { flush: "post" }
    );
  } catch (error) {
    console.error("Error in onMounted:", error);
  }
});

//onMounte yaha khatam howa

function handleSearchClick() {
  try {
    const payload = {};
    const slugParts = ["/search"];
    // ===================== Start Make Mode and Grade url yaha banay ge
    const makes = [];
    const models = new Set();
    const grades = new Set();

    for (const make in selectedModelsMap.value) {
      const selectedModels = selectedModelsMap.value[make] || [];

      if (selectAllModelsMap.value[make]) {
        // If "Select All Models" selected for this make then skip models/grades
        makes.push(make);
        continue;
      }

      if (selectedModels.length > 0) {
        makes.push(make);

        for (const model of selectedModels) {
          models.add(model);

          // Handle both flat and structured formats for grades
          let modelGrades = [];
          const rawGradesData = selectedGradesMap.value?.[make];

          if (Array.isArray(rawGradesData)) {
            // Flat structure - filter grades that belong to this model
            const validGradesForModel = Object.keys(
              carData.value?.[make]?.models?.[model]?.grades || {}
            );
            modelGrades = rawGradesData.filter((grade) =>
              validGradesForModel.includes(grade)
            );
          } else if (rawGradesData && typeof rawGradesData === "object") {
            // Structured format
            modelGrades = rawGradesData[model] || [];
          }

          // Add grades
          for (const grade of modelGrades) {
            grades.add(grade);
          }
        }
      }
    }

    // Slugify + push make slug
    if (makes.length) {
      const makeSlugs = makes.map((m) =>
        m
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "")
          .replace(/\-\-+/g, "-")
      );
      slugParts.push(`mk-${makeSlugs.join(",")}`);
      payload.makes = makes;
    }

    // Slugify + push model slug
    if (models.size > 0) {
      const modelSlugs = [...models].map((m) =>
        m
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "")
          .replace(/\-\-+/g, "-")
      );
      slugParts.push(`md-${modelSlugs.join(",")}`);
      payload.models = [...models];
    }

    // Slugify + push grade slug
    if (grades.size > 0) {
      const gradeSlugs = [...grades].map((g) =>
        g
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w\-]+/g, "")
          .replace(/\-\-+/g, "-")
      );
      slugParts.push(`gr-${gradeSlugs.join(",")}`);
      payload.grades = [...grades];
    }

    // ===================== End Make Mode and Grade url yaha banay ge

    let yrPath = "";
    if (minYear.value && maxYear.value) {
      yrPath = `yr-${minYear.value}-${maxYear.value}`;
      payload.min_year = Number(minYear.value);
      payload.max_year = Number(maxYear.value);
    } else if (minYear.value) {
      yrPath = `yr-${minYear.value}`;
      payload.min_year = Number(minYear.value);
    } else if (maxYear.value) {
      yrPath = `yr-${maxYear.value}`;
      payload.max_year = Number(maxYear.value);
    }

    let mlPath = "";
    if (minMilage.value && maxMilage.value) {
      mlPath = `ml-${minMilage.value}-${maxMilage.value}`;
      payload.min_milage = Number(minMilage.value);
      payload.max_milage = Number(maxMilage.value);
    } else if (minMilage.value) {
      mlPath = `ml-${minMilage.value}`;
      payload.min_milage = Number(minMilage.value);
    } else if (maxMilage.value) {
      mlPath = `ml-${maxMilage.value}`;
      payload.max_milage = Number(maxMilage.value);
    }

    let prPath = "";
    if (minPrice.value && maxPrice.value) {
      prPath = `pr-${minPrice.value}-${maxPrice.value}`;
      payload.min_price = Number(minPrice.value);
      payload.max_price = Number(maxPrice.value);
    } else if (minPrice.value) {
      prPath = `pr-${minPrice.value}`;
      payload.min_price = Number(minPrice.value);
    } else if (maxPrice.value) {
      prPath = `pr-${maxPrice.value}`;
      payload.max_price = Number(maxPrice.value);
    }

    let seatPath = "";

    if (selectedMinSeat.value && selectedMaxSeat.value) {
      seatPath = `seat-${selectedMinSeat.value}-${selectedMaxSeat.value}`;
      payload.min_seats = Number(selectedMinSeat.value);
      payload.max_seats = Number(selectedMaxSeat.value);
    } else if (selectedMinSeat.value) {
      seatPath = `seat-${selectedMinSeat.value}`;
      payload.min_seats = Number(selectedMinSeat.value);
    } else if (selectedMaxSeat.value) {
      seatPath = `seat-${selectedMaxSeat.value}`;
      payload.max_seats = Number(selectedMaxSeat.value);
    }

    let enginePath = "";

    if (minEngineSize.value && maxEngineSize.value) {
      enginePath = `enginesize-${minEngineSize.value}-${maxEngineSize.value}`;
      payload.min_engine_size = Number(minEngineSize.value);
      payload.max_engine_size = Number(maxEngineSize.value);
    } else if (minEngineSize.value) {
      enginePath = `enginesize-${minEngineSize.value}`;
      payload.min_engine_size = Number(minEngineSize.value);
    } else if (maxEngineSize.value) {
      enginePath = `enginesize-${maxEngineSize.value}`;
      payload.max_engine_size = Number(maxEngineSize.value);
    }

    // Area Prefecture and City

    if (selectAll.value) {
      slugParts.push("all");
      payload.all = true;
    } else if (isAnyFullRegionSelected()) {
      if (selectedAreas.value.length > 0) {
        slugParts.push("area-" + selectedAreas.value.join(","));
        payload.area = selectedAreas.value;
      }
    }

    if (selectedPrefectures.value.length > 0) {
      slugParts.push("pref-" + selectedPrefectures.value.join(","));
      payload.prefecture = selectedPrefectures.value;
    }

    if (selectedCities.value.length > 0) {
      slugParts.push("city-" + selectedCities.value.join(","));
      payload.city = selectedCities.value;
    }

    //End Area Prefecture and City

    if (selectedColor.value) {
      payload.color = selectedColor.value;
    }
    if (selectedHandleOption.value) {
      payload.steering = selectedHandleOption.value;
    }
    if (selectedDoorsOption.value) {
      payload.doors = selectedDoorsOption.value;
    }

    if (yrPath) slugParts.push(yrPath);
    if (mlPath) slugParts.push(mlPath);
    if (prPath) slugParts.push(prPath);
    if (seatPath) slugParts.push(seatPath);
    if (enginePath) slugParts.push(enginePath);
    const queryParams = {};
    if (selectedColor.value)
      queryParams.color = selectedColor.value.toLowerCase();
    if (selectedHandleOption.value)
      queryParams.steering = selectedHandleOption.value.toLowerCase();
    if (selectedDoorsOption.value)
      queryParams.doors = selectedDoorsOption.value.toLowerCase();
    if (selectedOption.value) {
      queryParams.drivetrain = selectedOption.value.toLowerCase();
    }
    if (selectedEngineOption.value) {
      queryParams.engine = selectedEngineOption.value.toLowerCase();
    }
    if (selectedTransmissionOption.value) {
      queryParams.transmission = selectedTransmissionOption.value;
    }
    if (selectedNewOption.value) {
      queryParams.duration = selectedNewOption.value.toLowerCase();
    }

    if (absTouched.value && hasABS.value === true) {
      queryParams.abs = 1;
    }
    if (acTouched.value && hasAirConditioner.value === true) queryParams.ac = 1;

    if (fogTouched.value && hasFogLights.value === true) queryParams.fog = 1;

    if (absTouched.value && hasABS.value === true) queryParams.abs = 1;

    if (gurenteeTouched.value && hasGurentee.value === true)
      queryParams.gurentee = 1;

    if (notGurenteeTouched.value && hasNotGurentee.value === true) {
      queryParams.not_gurentee = 1;
    }

    if (repairedTouched.value && hasRepaired.value === true)
      queryParams.repaired = 1;

    if (notRepairedTouched.value && hasNotRepaired.value === true) {
      queryParams.not_repaired = 1;
    }

    if (ownerTouched.value && hasOwner.value === true) queryParams.owner = 1;

    if (vehicleModelTouched.value && hasVehicleModel.value === true)
      queryParams.vehicle_model = 1;

    if (keylessTouched.value && haskeyless.value === true)
      queryParams.keyless = 1;

    if (smartKeyTouched.value && hasSmartKey.value === true) {
      queryParams.smart_key = 1;
    }

    if (unregisterTouched.value && hasUnregister.value === true)
      queryParams.unregister = 1;

    if (etcTouched.value && hasETC.value === true) queryParams.etc = 1;

    if (sixDegreeTouched.value && hasSixDegree.value === true) {
      queryParams.six_degree = 1;
    }

    if (hybridTouched.value && hasHybrid.value === true) {
      queryParams.hybrid = 1;
    }

    if (commercialTouched.value && hasCommercial.value === true) {
      queryParams.commercial = 1;
    }

    if (importedCarTouched.value && hasImportedCar.value === true) {
      queryParams.imported = 1;
    }

    if (evTouched.value && hasEV.value === true) {
      queryParams.ev = 1;
    }

    if (domesticCarTouched.value && hasDomesticCar.value === true) {
      queryParams.domestic = 1;
    }

    if (lightAutomaticTouched.value && hasLightAutomatic.value === true) {
      queryParams.light_automatic = 1;
    }

    if (camperTouched.value && hasCamper.value === true) {
      queryParams.camper = 1;
    }

    if (powerWindowTouched.value && hasPowerWindow.value === true) {
      queryParams.pw = 1;
    }

    if (sunRoofTouched.value && hasSunroof.value === true) {
      queryParams.sunroof = 1;
    }

    if (propertyTouched.value && hasProperty.value === true) {
      queryParams.property = 1;
    }

    if (hydrogenTouched.value && hasHydrogen.value === true) {
      queryParams.hydrogen = 1;
    }

    // const newPath = newSlug.join("/");
    const newPath = slugParts.join("/");
    // console.log("Button Clicked - Sending Payload:", payload);

    // console.log("Button Clicked - Sending newPath:", newPath);

    // console.log("Button Clicked - Sending queryParams:", queryParams);

    router.push({
      path: newPath,
      query: queryParams,
    });
  } catch (error) {
    console.error("Error in handleSearchClick:", error);
  }
}

const clearFilters = async () => {
  selectedHandleOption.value = null;
  selectedDoorsOption.value = null;
  selectedOption.value = null;
  minYear.value = "";
  maxYear.value = "";
  minMilage.value = "";
  maxMilage.value = "";
  minPrice.value = "";
  maxPrice.value = "";
  selectedMinSeat.value = "";
  selectedMaxSeat.value = "";
  minEngineSize.value = "";
  maxEngineSize.value = "";
  selectedColor.value = "";
  hasFogLights.value = null;
  hasAirConditioner.value = null;
  hasABS.value = null;
  hasGurentee.value = null;
  hasNotGurentee.value = null;
  hasRepaired.value = null;
  hasNotRepaired.value = null;
  hasOwner.value = null;
  hasVehicleModel.value = null;
  haskeyless.value = null;
  hasSmartKey.value = null;
  hasUnregister.value = null;
  hasETC.value = null;
  hasSixDegree.value = null;
  hasHybrid.value = null;
  hasCommercial.value = null;
  hasImportedCar.value = null;
  hasDomesticCar.value = null;
  hasLightAutomatic.value = null;
  hasCamper.value = null;
  hasEV.value = null;
  hasPowerWindow.value = null;
  hasSunroof.value = null;
  hasProperty.value = null;
  hasHydrogen.value = null;
  selectedEngineOption.value = "";
  selectedTransmissionOption.value = "";
  selectedNewOption.value = null;

  await router.push({
    path: "/search",
    query: {},
  });
};

//Drive System Radio Button Code
const showTooltip = ref(false);

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

//Transmission Tooltip code here
function toggleTransmissionTooltip() {
  showTransmissionTooltip.value = !showTransmissionTooltip.value;
}

// Close tooltip
function closeTransmissionTooltip() {
  showTransmissionTooltip.value = false;
}

// Handle outside click
function handleClickOutsideTransmission(event) {
  if (
    transmissionTooltipRef.value &&
    !transmissionTooltipRef.value.contains(event.target) &&
    !event.target.closest("button")
  ) {
    showTransmissionTooltip.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutsideTransmission);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutsideTransmission);
});
//Car handle tooltip code here

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
.searchFilterModel .center .allMakeLabel {
  color: #131313;
  font-size: 12.98px;
  line-height: 19.46px;
  font-weight: 400;
  font-family: "Inter";
}
.searchFilterModel .left ul li {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px 0px;
  position: relative;
  color: #3a3a3a;
  font-size: 14.7px;
  font-weight: 500;
  line-height: 22.19px;
  font-family: "Inter";
}
.searchFilterModel .left ul li span {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0px 5px;
  position: relative;
  color: #3a3a3a;
  font-size: 10px;
  font-weight: 500;
  line-height: 22.19px;
  font-family: "Inter";
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
  color: #36a0de;
}

.searchFilterModel .left ul li:hover span {
  color: #36a0de;
}
.searchFilterModel .left ul li:hover .makeLeftIcon {
  filter: brightness(0) saturate(100%) invert(45%) sepia(68%) saturate(343%)
    hue-rotate(173deg) brightness(96%) contrast(87%);
}
.searchFilterModel .center ul li {
  cursor: pointer;
  padding: 10px 20px;
}
.searchFilterModel .center ul li label {
  color: #131313;
  font-size: 12.98px;
  line-height: 19.46px;
  font-weight: 400;
  font-family: "Inter";
}
.searchFilterModel .center ul li label span {
  color: #2384c1;
  font-family: "Inter";
  font-size: 10px;
  font-weight: 500;
  line-height: 14.6px;
}

.searchFilterModel .center ul li:hover {
  background-color: #f5fbff;
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
.searchFilterModel .right ul li label {
  color: #131313;
  font-size: 12.98px;
  line-height: 19.46px;
  font-weight: 400;
  font-family: "Inter";
}
.searchFilterModel .right ul li label span {
  color: #2384c1;
  font-family: "Inter";
  font-size: 10px;
  font-weight: 500;
  line-height: 14.6px;
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
  right: 56px; /* Room for arrow */
  color: #2384c1;
}

.custom-label::after {
  content: "";
  position: absolute;
  right: 36px;
  /*top: 50%;*/
  transform: translateY(-50%);
  width: 12px; /* Adjust as needed */
  height: 12px; /* Adjust as needed */
  background-image: url("http://localhost:3000/assets/images/home/caret-down.webp");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
  margin: 10px 0px 0px 0px;
}
.custom-label[aria-expanded="true"]::after {
  transform: rotate(180deg);
}
.collapseBehave {
  height: 250px;
  overflow: auto;
}
/* .custom-label:not(.collapsed)::after {
  top: -5px;
} */
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
  display: flex;
  align-items: center;
}
#myPrefectureModel .prefecture .preHead span {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  padding: 0px 8px;
}
#myPrefectureModel .prefecture .checkBoxDynamic {
  color: #131313;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14.04px;
  line-height: 21.25px;
}
#myPrefectureModel .prefecture .checkBoxDynamic span {
  color: #2384c1;
  font-size: 10.53px;
  font-weight: 500;
  line-height: 15.79px;
  padding: 0px 8px;
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
  line-height: 21px;
}
#myMunicipalModal .selectBoxDynamic span {
  color: #2384c1;
  font-weight: 500;
  font-size: 10.53px;
  line-height: 15.79px;
  font-family: "Inter";
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

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* dark background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.popup-box {
  background-color: white;
  padding: 14px 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  /* max-width: 90%; */
  /* width: 300px; */
  animation: fadeIn-842fc8ac 0.3s ease;
  border: 1px solid #de6f0f;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 17px;
}

.popup-message {
  font-weight: 500;
  margin-bottom: 20px;
  color: #dc6803;
  font-size: 14px;
  font-family: "Inter", "Inter Fallback: Arial";
  margin: 0px;
  white-space: nowrap;
}

.popup-overlay .popup-box .close-btn {
  background-color: transparent;
  color: white;
  border: none;
  padding: 2px 9px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  color: #e17c24;
  font-size: 20px;
  position: relative;
  bottom: 17px;
  left: 29px;
}

/* .close-btn:hover {
  background-color: #0056b3;
} */

@keyframes fadeIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.selectedAllBoxValue .remove {
  cursor: pointer;
  color: black;
  font-size: 15px;
}
.modelClearArea {
  background: #f6f6f8;
  margin: 0;
  padding: 15px 10px 20px 10px;
}
.modelClearArea .selectedAllBoxValue .tag {
  border: 0.92px solid #98a2b3;
  padding: 2.7px 6.4px;
  border-radius: 1.8px;
  font-size: 12px;
  white-space: nowrap;
  color: #2384c1;
  font-weight: 600;
  background: #f6f6f8;
}
.all-clear-area {
  color: white;
  background: #98a2b3;
  border: 1px solid #98a2b3;
  padding: 2.57px 6.4px;
  border-radius: 1.8px;
}
.topHeadingsTable .topHeading {
  width: 100%;
}
.disabled-grades {
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed;
}
.makeLeftIcon {
  position: absolute;
  right: 0;
}

/* SignupModelArea css */
.signupNotificationModelArea .modal-content .modal-header .modal-title {
  color: #0c1529;
  font-family: "Inter";
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}
.signupNotificationModelArea .modal-content .modal-header .btn-close {
  font-size: 12px;
}
#signUpNotification .signupNotificationModelArea {
  max-width: 700px;
}
.signupNotificationModelArea .modal-content .modal-body .text-area {
  color: #0c1529;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.signupNotificationModelArea .modal-content .modal-body .addCondition {
  color: #020617;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.tagsArea .tag {
  font-size: 14px;
  font-weight: 400;
  font-family: "Inter";
  color: #353c4d;
  background-color: #ecf5ff;
  padding: 2px 7px;
}
.emailSection .tileEmail {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 7px 0px;
}
.emailSection .emailField {
  background-color: #f1f5f9;
  color: #94a3b8;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}
.emailSection .latestDeal {
  color: #0c1529;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 0px;
}
.radioButton .form-check-label {
  color: #131313;
  font-family: "Inter";
  font-size: 14px;
  line-height: 21px;
}
.btn-cta {
  background-color: #2384c1;
  color: white;
  padding: 8px 42px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  font-family: "Inter";
}
.ctaTitle {
  color: #0c1529;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 0px;
}
.ctaDes {
  color: #0c1529;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 0px 0px 20px 0px;
}
</style>
