<script setup>
</script>
<template>
  <div>
    <div class="dailyCar desktop-view">
      <div class="container">
        <div class="row my-4">
          <div class="investSec">
            <CommonHeading title="毎日の自動車SAT" />
          </div>

          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 m-0"
          >
            <LazyCommonDailyCarCards />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>