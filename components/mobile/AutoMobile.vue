<template>
    <div>
        <div class="mobile-view">
             <div class="dailyAutomobileSat m-3">
        <div class="inner">
            <p class="m-0 title mt-4 mb-3">毎日の自動車SAT</p>

            <div class="swiper dailyAutomobileSwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide rounded-2">
                    <div class="investCardArea">
                        <img src="/assets/images/home/InvestCard.webp" alt="Card" class="img-fluid mb-2" loading="lazy">
                        <p class="title m-0 mb-2">NHTSA Investigates Chevrolet Volt Over Sudden Power Loss</p>
                        <p class="tag m-0">Jan 10, 1024</p>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="investCardArea">
                        <img src="/assets/images/home/InvestCard.webp" alt="Card" class="img-fluid mb-2" loading="lazy">
                        <p class="title m-0 mb-2">NHTSA Investigates Chevrolet Volt Over Sudden Power Loss</p>
                        <p class="tag m-0">Jan 10, 1024</p>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="investCardArea">
                        <img src="/assets/images/home/InvestCard.webp" alt="Card" class="img-fluid mb-2" loading="lazy">
                        <p class="title m-0 mb-2">NHTSA Investigates Chevrolet Volt Over Sudden Power Loss</p>
                        <p class="tag m-0">Jan 10, 1024</p>
                    </div>
                  </div>
                  <div class="swiper-slide rounded-2">
                    <div class="investCardArea">
                        <img src="/assets/images/home/InvestCard.webp" alt="Card" class="img-fluid mb-2" loading="lazy">
                        <p class="title m-0 mb-2">NHTSA Investigates Chevrolet Volt Over Sudden Power Loss</p>
                        <p class="tag m-0">Jan 10, 1024</p>
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
    overflow: auto;
    white-space: nowrap;
    gap: 6px;
    scrollbar-width: none;
}
.mobile-view .dailyAutomobileSat .inner .title{
  color: #020408;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  white-space: normal;
}
.mobile-view .dailyAutomobileSat .inner .dailyAutomobileSwiper .swiper-slide{
  width: 130px !important;
}
.mobile-view .dailyAutomobileSat .inner .dailyAutomobileSwiper .investCardArea .tag{
  color: #757575;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.mobile-view .dailyAutomobileSat .inner .moveTonext p {
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