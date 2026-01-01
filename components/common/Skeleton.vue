<template>
  <div
    class="carListSection d-flex mt-4 skeleton-container"
    style="cursor: default"
  >
    <!-- Left Column (Image Section) -->
    <div class="col-md-3">
      <div class="top mb-2">
        <div class="skeleton image-main" />
      </div>
      <div class="bottom d-flex gap-1 py-2">
        <div class="skeleton image-thumb" v-for="n in 3" :key="n" />
      </div>
    </div>

    <!-- Right Column (Details & Buttons) -->
    <div class="col-md-9">
      <div class="topRight d-flex justify-content-between align-items-center mb-2">
        <div class="d-flex gap-3 mx-2">
          <div class="skeleton badge-s" />
          <div class="skeleton badge-s" />
          <div class="skeleton badge-s" />
        </div>
        <div class="skeleton icon-circle" />
      </div>

      <div class="heading mx-2 mb-2">
        <div class="skeleton title-line" />
      </div>

      <div class="modelYear d-flex mx-2 justify-content-between">
        <div class="left w-50">
          <div class="skeleton text-line" v-for="i in 3" :key="'left-'+i" />
        </div>
        <div class="right w-50 ps-4">
          <div class="top d-flex gap-4 mt-3">
            <div class="skeleton price-box" />
            <div class="skeleton price-box" />
          </div>
          <div class="bottom d-flex gap-3 mt-3 pt-4">
            <div class="skeleton btn-skeleton" />
            <div class="skeleton btn-skeleton" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed for the skeleton
</script>

<style scoped>
.skeleton {
  background: #ddd;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.skeleton::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, transparent 0%, #eaeaea 50%, transparent 100%);
  animation: loading 1.5s infinite;
}

@keyframes loading {
  100% {
    left: 100%;
  }
}

/* Image Sizes */
.image-main {
  width: 100%;
  height: 180px;
  border-radius: 8px;
}

.image-thumb {
  width: 73px;
  height: 70px;
  border-radius: 4px;
}

/* Right column elements */
.badge-s {
  width: 80px;
  height: 20px;
}

.icon-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.title-line {
  width: 60%;
  height: 20px;
  margin-bottom: 8px;
}

.text-line {
  width: 100%;
  height: 14px;
  margin-bottom: 10px;
}

.price-box {
  width: 153px;
  height: 92px;
  border-radius: 6px;
}

.btn-skeleton {
  width: 120px;
  height: 36px;
  border-radius: 20px;
}
</style>
