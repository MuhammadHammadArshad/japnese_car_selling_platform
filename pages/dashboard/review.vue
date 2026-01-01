<script setup>
definePageMeta({
  layout: "dashboard",
  breadcrumb: "私のレビュー",
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
    <div class="review-desktop desktop-view">
      <div class="col-md-12">
        <div class="row">
          <p class="m-0 title">忙しそう</p>
          <div class="no_of_reviews d-flex align-items-center gap-4 my-2">
            <div class="review d-flex gap-3 align-items-center">
              <p class="m-0 light">クチコミ件数</p>
              <p class="m-0 dark">10<span>件</span></p>
            </div>
            <div class="rating d-flex gap-3 align-items-center">
              <p class="m-0 light">総合評価</p>
              <NuxtImg
                src="/assets/images/stars.webp"
                alt="stars"
                class="img-fluid"
                loading="lazy"
              />
              <p class="m-0 dark">4.7</p>
            </div>
            <div class="customService d-flex gap-3 align-items-center">
              <p class="m-0 light">接客：</p>
              <p class="m-0 dark">4.7</p>
            </div>
            <p class="m-0 dot">•</p>
            <div class="atmoshpare d-flex gap-3 align-items-center">
              <p class="m-0 light">雰囲気：</p>
              <p class="m-0 dark">4.6</p>
            </div>
            <div class="afterService d-flex gap-3 align-items-center">
              <p class="m-0 light">アフター：</p>
              <p class="m-0 dark">4.1</p>
            </div>
            <p class="m-0 dot">•</p>
            <div class="quality d-flex gap-3 align-items-center">
              <p class="m-0 light">品質：</p>
              <p class="m-0 dark">4.4</p>
            </div>
          </div>

          <p class="m-0 para">
            好きな車を安くいいところで買えてすごく満足です。これからもお世話になると思いますので、よろしくお願いします。
          </p>

          <div class="posted my-3 d-flex align-items-center">
            <p class="m-0 by">投稿者：</p>
            <p class="m-0 name">マーチ</p>
          </div>

          <hr />

          <!-- ============== Second Review ================ -->

          <p class="m-0 title">忙しそう</p>
          <div class="no_of_reviews d-flex align-items-center gap-4 my-2">
            <div class="review d-flex gap-3 align-items-center">
              <p class="m-0 light">クチコミ件数</p>
              <p class="m-0 dark">10<span>件</span></p>
            </div>
            <div class="rating d-flex gap-3 align-items-center">
              <p class="m-0 light">総合評価</p>
              <NuxtImg
                src="/assets/images/stars.webp"
                alt="stars"
                class="img-fluid"
                loading="lazy"
              />
              <p class="m-0 dark">4.7</p>
            </div>
            <div class="customService d-flex gap-3 align-items-center">
              <p class="m-0 light">接客：</p>
              <p class="m-0 dark">4.7</p>
            </div>
            <p class="m-0 dot">•</p>
            <div class="atmoshpare d-flex gap-3 align-items-center">
              <p class="m-0 light">雰囲気：</p>
              <p class="m-0 dark">4.6</p>
            </div>
            <div class="afterService d-flex gap-3 align-items-center">
              <p class="m-0 light">アフター：</p>
              <p class="m-0 dark">4.1</p>
            </div>
            <p class="m-0 dot">•</p>
            <div class="quality d-flex gap-3 align-items-center">
              <p class="m-0 light">品質：</p>
              <p class="m-0 dark">4.4</p>
            </div>
          </div>

          <p class="m-0 para">
            好きな車を安くいいところで買えてすごく満足です。これからもお世話になると思いますので、よろしくお願いします。
          </p>

          <div class="posted my-3 d-flex align-items-center">
            <p class="m-0 by">投稿者：</p>
            <p class="m-0 name">マーチ</p>
          </div>

          <hr />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.review-desktop {
  height: 50vh;
}
.review-desktop .title {
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}
.review-desktop .no_of_reviews .review .light {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.review-desktop .no_of_reviews .review .dark {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}
.review-desktop .no_of_reviews .review .dark span {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.review-desktop .no_of_reviews .rating .light {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.review-desktop .no_of_reviews .rating img {
  width: 100px;
}
.review-desktop .no_of_reviews .rating .dark {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}
.review-desktop .no_of_reviews .customService .light {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.review-desktop .no_of_reviews .customService .dark {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}
.review-desktop .no_of_reviews .dot {
  color: #6f6f6f;
}
.review-desktop .no_of_reviews .atmoshpare .light {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.review-desktop .no_of_reviews .atmoshpare .dark {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}
.review-desktop .no_of_reviews .afterService .light {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.review-desktop .no_of_reviews .afterService .dark {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}
.review-desktop .no_of_reviews .quality .light {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.review-desktop .no_of_reviews .quality .dark {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}
.review-desktop .para {
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.review-desktop .posted .by {
  color: #64748b;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.review-desktop .posted .name {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
}
.review-desktop hr {
  color: #cbd5e1;
}
</style>