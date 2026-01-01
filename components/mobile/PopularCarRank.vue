<template>
    <div>
        <div class="mobile-view">
            <div class="popularCarRanking m-3">
        <div class="inner">
            <p class="m-0 title">人気車ランキング</p>
            <div class="swiper carRankingSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide rounded-2">
                    <div class="cardDeckArea px-3 pt-3 pb-1 my-3">
                        <div class="top d-flex align-items-center">
                            <img src="/assets/images/deck/1.webp" alt="car" class="img-fluid" loading="lazy" width="46" height="32">
                            <p class="m-0 ms-3">軽自動車</p>
                        </div>
    
                        <div class="details">
                            <ol class="px-3">
                                <li class="pt-3">ダイハツ タント</li>
                                <li class="pt-3">スズキ ジムニー</li>
                                <li class="pt-3">スズキ&nbsp;ハスラー</li>
                            </ol>
                        </div>
                    </div>

                    <div class="cardDeckArea px-3 pt-3 pb-1 my-3">
                        <div class="top d-flex align-items-center">
                            <img src="/assets/images/deck/5.webp" alt="car" class="img-fluid" loading="lazy" width="46" height="32">
                            <p class="m-0 ms-3">ステーションワゴン</p>
                        </div>
    
                        <div class="details">
                            <ol class="px-3">
                                <li class="pt-3">トヨタ カローラツーリング</li>
                                <li class="pt-3">スバル レヴォーグ</li>
                                <li class="pt-3">MINI MINI</li>
                            </ol>
                        </div>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="cardDeckArea px-3 pt-3 pb-1 my-3">
                        <div class="top d-flex align-items-center">
                            <img src="/assets/images/deck/2.webp" alt="car" class="img-fluid" loading="lazy" width="46" height="32">
                            <p class="m-0 ms-3">コンパクトカー</p>
                        </div>
    
                        <div class="details">
                            <ol class="px-3">
                                <li class="pt-1">ホンダ フィット</li>
                                <li class="pt-3">トヨタ アクア</li>
                                <li class="pt-3">スズキ&nbsp;ワゴンR</li>
                            </ol>
                        </div>
                    </div>

                    <div class="cardDeckArea px-3 pt-3 pb-1 my-3">
                        <div class="top d-flex align-items-center">
                            <img src="/assets/images/deck/6.webp" alt="car" class="img-fluid" loading="lazy" width="46" height="32">
                            <p class="m-0 ms-3">SUV</p>
                        </div>
    
                        <div class="details">
                            <ol class="px-3">
                                <li class="pt-3">トヨタ ハリア</li>
                                <li class="pt-3">日産 エクストレイル</li>
                                <li class="pt-3">レクサス&nbsp;RX</li>
                            </ol>
                        </div>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="cardDeckArea px-3 pt-3 pb-1 my-3">
                        <div class="top d-flex align-items-center">
                            <img src="/assets/images/deck/1.webp" alt="car" class="img-fluid" loading="lazy" width="46" height="32">
                            <p class="m-0 ms-3">軽自動車</p>
                        </div>
    
                        <div class="details">
                            <ol class="px-3">
                                <li class="pt-3">ダイハツ タント</li>
                                <li class="pt-3">スズキ ジムニー</li>
                                <li class="pt-3">スズキ&nbsp;ハスラー</li>
                            </ol>
                        </div>
                    </div>

                    <div class="cardDeckArea px-3 pt-3 pb-1 my-3">
                        <div class="top d-flex align-items-center">
                            <img src="/assets/images/deck/5.webp" alt="car" class="img-fluid" loading="lazy" width="46" height="32">
                            <p class="m-0 ms-3">ステーションワゴン</p>
                        </div>
    
                        <div class="details">
                            <ol class="px-3">
                                <li class="pt-3">トヨタ カローラツーリング</li>
                                <li class="pt-3">スバル レヴォーグ</li>
                                <li class="pt-3">MINI MINI</li>
                            </ol>
                        </div>
                    </div>
                  </div>
                
                </div>
                <!-- {{-- <div class="swiper-pagination"></div> --}} -->
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
    overflow: auto;
    white-space: nowrap;
    gap: 6px;
    scrollbar-width: none;
}
  .mobile-view .popularCarRanking .inner .title{
    color: #020408;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  }
  .mobile-view .popularCarRanking .inner .carRankingSwiper .swiper-slide{
    width: 220px !important;
  }
  .mobile-view .popularCarRanking .inner .carRankingSwiper .cardDeckArea{
    background-color: #F6F6F6;
    height: 165px;
    width:214px;
  }
  .mobile-view .popularCarRanking .inner .carRankingSwiper .cardDeckArea .top p{
   color: #0F172A;
   font-family: 'Inter';
   font-weight: 600;
   font-size: 14px;
   line-height: 20px;
  }
  .mobile-view .popularCarRanking .inner .carRankingSwiper .cardDeckArea .details ol li{
    color: #154F74;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    font-family: 'Inter';
    cursor: pointer;
  }
</style>