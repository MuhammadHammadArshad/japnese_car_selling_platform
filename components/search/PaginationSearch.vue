<script setup>
// defineProps({
//   showText: {
//     type: Boolean,
//     default: true
//   }
// })

// const props = defineProps({
//   currentPage: Number,
//   totalPages: Number,
//   perPage: Number,
//   perPageOptions: {
//     type: Array,
//     default: () => [10, 20, 30],
//   },
// })

// const visiblePages = computed(() => {
//   const pages = []
//   const range = 2
//   for (
//     let i = Math.max(1, props.currentPage - range);
//     i <= Math.min(props.totalPages, props.currentPage + range);
//     i++
//   ) {
//     pages.push(i)
//   }
//   return pages
// })

import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  },
  perPageOptions: {
    type: Array,
    default: () => [10, 20, 30]
  }
})

const visiblePages = computed(() => {
  const pages = []
  const range = 2
  for (
    let i = Math.max(1, props.currentPage - range);
    i <= Math.min(props.totalPages, props.currentPage + range);
    i++
  ) {
    pages.push(i)
  }
  return pages
})
</script>
<template>
    <div style="width: 100%;">
   <div v-if="totalPages > 1" class="paginate d-flex align-items-center mt-4">
    <!-- Left Info -->
    <div class="col-md-3">
      <div class="stand" v-if="showText">
        <p class="m-0">
          {{ totalItems.toLocaleString() }}
          <span>台</span>
        </p>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="col-md-9">
      <div class="former d-flex justify-content-between align-items-center flex-wrap gap-3">
        <!-- Page Numbers -->
        <div class="pagination d-flex gap-3 align-items-center flex-wrap">
          <p
            v-for="page in visiblePages"
            :key="page"
            class="m-0"
            :class="{ active: page === currentPage }"
            style="cursor: pointer"
            @click="$emit('pageChange', page)"
          >
            {{ page }}
          </p>
        </div>

        <!-- Previous -->
        <div class="previous d-flex align-items-center" style="cursor: pointer" @click="$emit('pageChange', currentPage - 1)" :class="{ 'opacity-50': currentPage === 1 }">
          <NuxtImg
            src="/assets/images/icons/left-arrow.webp"
            alt="arrow"
            class="img-fluid"
            loading="lazy"
          />
          <p class="m-0 ps-2">前の</p>
        </div>

        <!-- Next -->
        <div class="next d-flex align-items-center" style="cursor: pointer" @click="$emit('pageChange', currentPage + 1)" :class="{ 'opacity-50': currentPage === totalPages }">
          <p class="m-0 pe-2">次のページ</p>
          <NuxtImg
            src="/assets/images/icons/right-arrow.webp"
            alt="arrow"
            class="img-fluid"
            loading="lazy"
          />
        </div>

        <!-- Per Page Dropdown -->
        <div class="noOfItems">
          <select class="form-select" :value="perPage" @change="$emit('perPageChange', +$event.target.value)">
            <option
              v-for="option in perPageOptions"
              :key="option"
              :value="option"
            >
              1ページあたりの項目数:&nbsp;&nbsp;&nbsp;{{ option }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>

        <!-- <div class="paginate d-flex align-items-center">
              <div class="col-md-3">
                  <div class="stand" v-if="showText">
                    <p class="m-0">503,429<span>台</span></p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div
                    class="former d-flex justify-content-between align-items-center"
                  >
                    <div class="pagination d-flex gap-4 align-items-center">
                      <p class="m-0 active">1</p>
                      <p class="m-0">2</p>
                      <p class="m-0">3</p>
                      <p class="m-0">4</p>
                      <p class="m-0">5</p>
                      <p class="m-0">6</p>
                      <p class="m-0">7</p>
                      <p class="m-0">8</p>
                      <p class="m-0">9</p>
                      <p class="m-0">10</p>
                    </div>

                    <div class="previous d-flex align-items-center">
                      <NuxtImg
                        src="/assets/images/icons/left-arrow.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                      />
                      <p class="m-0 ps-2">前の</p>
                    </div>
                    <div class="next d-flex align-items-center">
                      <p class="m-0 pe-2">次のページ</p>
                      <NuxtImg
                        src="/assets/images/icons/right-arrow.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                      />
                    </div>

                    <div class="noOfItems">
                      <select class="form-select">
                        <option value="1ページあたりの項目数:20">
                          1ページあたりの項目数:&nbsp;&nbsp;&nbsp;20
                        </option>
                        <option value="1ページあたりの項目数:20">
                          1ページあたりの項目数:&nbsp;&nbsp;&nbsp;20
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
        </div> -->
    </div>
</template>



<style scoped>
.paginate .stand p {
    color: #141817;
    font-family: "Sofia-Pro";
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
}
.paginate .stand span {
    color: #141817;
    font-size: 12px;
    font-weight: 500;
    font-family: "Inter";
    line-height: 18px;
}
.paginate .former .pagination p.active {
    background-color: #ecf5ff;
    color: #2a9fe8;
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 14.14px;
    width: 18px;
    height: 18px;
    padding: 3px 0px 0px 6px;
}
.paginate .former .pagination p {
    color: #5d6370;
    font-family: "Inter";
    font-size: 14px;
    font-weight: 400;
    line-height: 14.14px;
}
.paginate .former .previous p {
    color: #5d6370;
    font-family: "Inter";
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
}
.paginate .former .next p {
    color: #2a9fe8;
    font-family: "Inter";
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
}
.paginate .former .noOfItems .form-select {
    color: #5d6370;
    border: 1px solid #cbd5e1;
    border-radius: 2px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 9.8px;
    line-height: 14.71px;
    --bs-form-select-bg-img: url(/assets/images/home/caret-down.webp);
    background-repeat: no-repeat;
    background-size: 9px;
}
</style>