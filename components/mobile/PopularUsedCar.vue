<template>
    <div>
        <div class="mobile-view">
             <div class="popularUsedCar m-3">
        <div class="inner">
            <p class="m-0 title">メーカー別人気中古車ランキング</p>
            <p class="m-0 desc my-2">クルマ情報（中古車両）のメーカー別ランキングをご紹介します。</p>
            
            <div class="swiper popularCarMobileSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide rounded-2">
                    <div class="carsArea">
                        <img src="/assets/images/cars/1.png" alt="car" class="img-fluid mb-2 mb-2">
                        <p class="m-0">トヨタ ヴォクシー</p>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="carsArea">
                        <img src="/assets/images/cars/2.png" alt="car" class="img-fluid mb-2">
                        <p class="m-0">トヨタ プリウス</p>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="carsArea">
                        <img src="/assets/images/cars/3.png" alt="car" class="img-fluid mb-2">
                        <p class="m-0">ホンダ N-BOX</p>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="carsArea">
                        <img src="/assets/images/cars/4.png" alt="car" class="img-fluid mb-2">
                        <p class="m-0">スズキ ハスラー</p>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="carsArea">
                        <img src="/assets/images/cars/5.png" alt="car" class="img-fluid mb-2">
                        <p class="m-0">トヨタ アクア</p>
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
    align-items: center;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    gap: 12px;
    white-space: nowrap;
    margin: 20px 0px;
}
 .mobile-view .popularUsedCar .inner .title{
    color: #020408;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  }
 .mobile-view .popularUsedCar .inner .desc{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
 .mobile-view .popularUsedCar .inner .popularCarMobileSwiper .swiper-slide{
    width: 120px !important;
  }
 .mobile-view .popularUsedCar .inner .carsArea{
    text-align: center;
  }
 .mobile-view .popularUsedCar .inner .carsArea p{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }
</style>