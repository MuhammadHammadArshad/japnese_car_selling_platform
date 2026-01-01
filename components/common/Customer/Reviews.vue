<script setup>
</script>
<template>
  <div>
    <div class="customerReviews desktop-view">
      <div class="container">
        <div class="row">
          <div class="reviewSec">
            <CommonHeading title="お客様からのレビュー" class="m-0" />
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-3 m-0">
            <LazyCommonCustomerCards />
          </div>
          <div
            class="textLink d-flex justify-content-center align-items-center mt-5"
          >
            <NuxtImg
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
</template>