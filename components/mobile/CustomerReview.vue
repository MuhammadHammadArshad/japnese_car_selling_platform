<template>
    <div>
        <div class="mobile-view">
            <div class="customerReviews m-3">
        <div class="inner">
            <p class="m-0 title">お客様からのレビュー</p>

            <div class="swiper customerReviewSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide rounded-2">
                    <div class="reviewArea px-2">
                        <div class="top d-flex justify-content-between align-items-center mt-3 py-1">
                            <p class="m-0 textArea">ホンダ　フリード</p>
                            <div class="reward d-flex align-items-center">
                                <p class="m-0 author">総合評価</p>
                                <img src="/assets/images/home/star.webp" alt="stars" class="img-fluid px-1" width="75" height="18">
                            </div>
                        </div>
    
                        <div class="titleMain">
                            <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                        </div>
    
                        <div class="para">
                            <p class="m-0 pt-2">
                                車は分かっていて買っているから問題ない。ナビの 不出来が全て。せめて上級モデルと遜色ない機能を 使えるディスプレイオーディオを選べたら良かった。
                            </p>
                        </div>
    
                        <div class="bottom d-flex py-2">
                            <p class="m-0">投稿日：2025/02/15</p>
                            <p class="m-0 mx-5">投稿者：Bu3</p>
                        </div>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="reviewArea px-2">
                        <div class="top d-flex justify-content-between align-items-center mt-3 py-1">
                            <p class="m-0 textArea">ホンダ　フリード</p>
                            <div class="reward d-flex align-items-center">
                                <p class="m-0 author">総合評価</p>
                                <img src="/assets/images/home/star.webp" alt="stars" class="img-fluid px-1" width="75" height="18">
                            </div>
                        </div>
    
                        <div class="titleMain">
                            <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                        </div>
    
                        <div class="para">
                            <p class="m-0 pt-2">
                                車は分かっていて買っているから問題ない。ナビの 不出来が全て。せめて上級モデルと遜色ない機能を 使えるディスプレイオーディオを選べたら良かった。
                            </p>
                        </div>
    
                        <div class="bottom d-flex py-2">
                            <p class="m-0">投稿日：2025/02/15</p>
                            <p class="m-0 mx-5">投稿者：Bu3</p>
                        </div>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="reviewArea px-2">
                        <div class="top d-flex justify-content-between align-items-center mt-3 py-1">
                            <p class="m-0 textArea">ホンダ　フリード</p>
                            <div class="reward d-flex align-items-center">
                                <p class="m-0 author">総合評価</p>
                                <img src="/assets/images/home/star.webp" alt="stars" class="img-fluid px-1" width="75" height="18">
                            </div>
                        </div>
    
                        <div class="titleMain">
                            <p class="m-0 mt-2">ナビの出来の悪さ以外はそれなり。</p>
                        </div>
    
                        <div class="para">
                            <p class="m-0 pt-2">
                                車は分かっていて買っているから問題ない。ナビの 不出来が全て。せめて上級モデルと遜色ない機能を 使えるディスプレイオーディオを選べたら良かった。
                            </p>
                        </div>
    
                        <div class="bottom d-flex py-2">
                            <p class="m-0">投稿日：2025/02/15</p>
                            <p class="m-0 mx-5">投稿者：Bu3</p>
                        </div>
                    </div>
                  </div>
                
                </div>
                <!-- {{-- <div class="swiper-pagination"></div> --}} -->
              </div>

              <div class="moveTonext d-flex justify-content-center align-items-center my-3">
                <img src="/assets/images/mobile/header/arrow.webp" alt="Arrow" class="img-fluid" loading="lazy" width="14" height="14">
                <p class="m-0 px-1">すべてのレビューを見る</p>
            </div>
        </div>
    </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
 .mobile-view .swiper-wrapper{
     display: flex;
    align-items: center;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    gap: 6px;
    white-space: nowrap;
 }
 .mobile-view .customerReviews .inner .title{
    color: #020408;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Inter';
    line-height: 16px;
    white-space: normal;
  }
 /* .mobile-view .customerReviews .inner .customerReviewSwiper .swiper-slide{
    width: 300px !important;
  } */
 .mobile-view .customerReviews .inner .customerReviewSwiper .reviewArea{
    background-color: #F6F6F8;
  }
 .mobile-view .customerReviews .inner .customerReviewSwiper .reviewArea .textArea{
    color: #0C1529;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
  }
 .mobile-view .customerReviews .inner .customerReviewSwiper .reviewArea .author{
    color: #475569;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
 .mobile-view .customerReviews .inner .customerReviewSwiper .reviewArea .titleMain p{
    color: #2384C1;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
 .mobile-view .customerReviews .inner .customerReviewSwiper .reviewArea .para p{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    display: -webkit-box;          /* flex box jaisa container */
    -webkit-line-clamp: 3;         /* max 3 lines */
    -webkit-box-orient: vertical;  /* vertical stacking */
    overflow: hidden;              /* extra text hide karo */
    text-overflow: ellipsis;       /* ellipsis show karo */
    white-space: normal; 
  }
 .mobile-view .customerReviews .inner .customerReviewSwiper .reviewArea .bottom p{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 10px;
    line-height: 18px;
  }
 .mobile-view .customerReviews .inner .moveTonext p {
    font-size: 12px;
    font-family: 'Inter';
    font-weight: 500;
    line-height: 18px;
    color: #2F2F2F;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
}
</style>