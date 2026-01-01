<template>
    <div>
        <div class="mobile-view">
            <div class="searchCondition m-3">
        <div class="inner">
            <p class="m-0 title my-3">特定の条件で検索</p>

            <div class="searchArea d-flex justify-content-between">
                <div class="item text-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBodyType" aria-controls="offcanvasBodyType">
                    <img src="/assets/images/mobile/header/car.webp" alt="car" class="img-fluid" loading="lazy" width="38" height="35">
                    <p class="m-0">体型</p>
                </div>
                <div class="item text-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasPrice" aria-controls="offcanvasPrice">
                    <img src="/assets/images/mobile/header/yen.webp" alt="car" class="img-fluid" loading="lazy" width="38" height="35">
                    <p class="m-0">価格</p>
                </div>
                <div class="item text-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasPosition" aria-controls="offcanvasPosition">
                    <img src="/assets/images/mobile/header/pin.webp" alt="car" class="img-fluid" loading="lazy" width="38" height="35">
                    <p class="m-0">位置</p>
                </div>
            </div>

            <div class="moveTonext d-flex justify-content-center align-items-center my-2">
                <img src="/assets/images/mobile/header/arrow.webp" alt="Arrow" class="img-fluid" loading="lazy" width="14" height="14">
                <p class="m-0 px-1">複数の条件で検索</p>
            </div>
        </div>

    </div>

    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBodyType" aria-labelledby="offcanvasBodyTypeLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasBodyTypeLabel">ボディタイプから中古車を探す</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
          <div class="carModel d-flex flex-wrap align-items-center text-center gap-1">
            <div class="carBox">
                <img src="/assets/images/cars-logo/1.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">SUV</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/2.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">クーペ</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/3.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">福祉車両</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/4.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">ステーションワゴン</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/5.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">ミニバン</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/6.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">コンパクトカー</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/7.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">EV</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/8.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">ハイブリッド</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/9.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">オープンカー</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/10.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0"> キャンピングカー</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/11.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">セダン</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/12.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">軽自動車</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/13.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">ハッチバック</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/14.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">選び出す</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/15.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">商用車</p>
            </div>
            <div class="carBox">
                <img src="/assets/images/cars-logo/16.webp" alt="car" class="img-fluid" loading="lazy">
                <p class="m-0">トラック</p>
            </div>
          </div>
        </div>
      </div>


      <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasPrice" aria-labelledby="offcanvasPriceLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasPriceLabel">車両価格から探す</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
          <div class="modelList">
            <p class="m-0 left">1〜20万円</p>
            <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="8" height="8">
          </div>

          <div class="modelList">
            <p class="m-0 left">20〜50万円</p>
            <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="8" height="8">
          </div>

          <div class="modelList">
            <p class="m-0 left">50〜100万円</p>
            <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="8" height="8">
          </div>

          <div class="modelList">
            <p class="m-0 left">100〜150万円</p>
            <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="8" height="8">
          </div>

          <div class="modelList">
            <p class="m-0 left">150〜500万円</p>
            <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="8" height="8">
          </div>

          <div class="modelList">
            <p class="m-0 left">1000万円以上</p>
            <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="8" height="8">
          </div>
        </div>
      </div>


      <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasPosition" aria-labelledby="offcanvasPositionLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasPositionLabel">位置</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
            <div class="topSearch d-flex justify-content-between align-items-center">
                <input type="text" class="form-control border-0 shadow-none" placeholder="検索場所">
                <img src="/assets/images/mobile/header/search.webp" alt="search" class="img-fluid" loading="lazy" width="16" height="16">
            </div>

            <div class="title my-3">
                <p class="m-0">関東</p>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            東京
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            埼玉
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            神奈川
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            千葉
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            茨城
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            群馬
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            栃木
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>


            <div class="title my-3">
                <p class="m-0">関西</p>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            東京
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            埼玉
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            神奈川
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            千葉
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>

            <div class="checkBox d-flex justify-content-between align-items-center">
                <div class="left">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            茨城
                        </label>
                      </div>
                </div>
                <div class="right d-flex align-items-center gap-2">
                    <p class="m-0">(441)</p>
                    <img src="/assets/images/mobile/header/right-arrow.webp" alt="arrow" class="img-fluid" loading="lazy" width="6" height="6">
                </div>
            </div>
            
            
            <div class="positionButton d-flex gap-2 mt-4">
                <button class="btn btn-left">クリア</button>
                <button class="btn btn-right">条件判定</button>
            </div>
        </div>
      </div>
        </div>
    
    </div>
</template>

<script setup>
    
</script>

<style scoped>
  .mobile-view .searchCondition .inner .title{
    color:#020408;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
  .mobile-view .searchCondition .inner .searchArea .item{
    border: 1px solid #2384C1;
    padding: 10px 30px;
    border-radius: 12px;
    cursor: pointer;
  }
  .mobile-view .searchCondition .inner .searchArea .item p{
    font-size: 12px;
    font-weight: 500;
    font-family: 'Inter';
    line-height: 18px;
    padding: 10px 0px 0px 0px;
  }
  .mobile-view .searchCondition .inner .moveTonext{
    border: 1px solid #154F74;
    border-radius: 4px;
    padding: 10px 20px;
    font-family: 'Inter';
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    cursor: pointer;
  }

  /* =================== Offcanves Css */
#offcanvasBodyType{
  height: 100vh;
  border: none;
}
#offcanvasBodyType .offcanvas-header{
 background-color: #F6F6F8;
}
#offcanvasBodyType .offcanvas-header .offcanvas-title{
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #020408;
 }

 #offcanvasBodyType .offcanvas-body .carModel .carBox{
  border: 1px solid #DCDAE2;
  width: 104.21px;
  height: 70.87px;
  border-radius: 12px;
  gap: 5.45px;
  display: flex;
  flex-direction: column;
 }
 #offcanvasBodyType .offcanvas-body .carModel .carBox img{
  width: 41px;
  height: 29px;
  margin: 10px 29px 0px 29px;
  object-fit: contain;
 }
 #offcanvasBodyType .offcanvas-body .carModel .carBox p{
  font-family: 'Inter';
  font-weight: 600;
  font-size: 10.9px;
  line-height: 14.54px;
 }
 #offcanvasBodyType .offcanvas-body .carModel .carBox:hover{
  background-color: #ECF5FF;
 }
 #offcanvasBodyType .offcanvas-body .carModel .carBox:hover img{
  filter: invert(34%) sepia(57%) saturate(926%) hue-rotate(165deg) brightness(87%) contrast(88%);
 }


 #offcanvasPrice{
  height: 100vh;
  border: none;
}
#offcanvasPrice .offcanvas-header{
 background-color: #F6F6F8;
}
#offcanvasPrice .offcanvas-header .offcanvas-title{
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #020408;
 }
#offcanvasPrice .offcanvas-body .modelList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #F6F6F8;
  padding: 5px 0px;
  margin: 0px 0px 10px 0px;
  cursor: pointer;
 }
#offcanvasPrice .offcanvas-body .modelList .left{
  color: #154F74;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
 }



 #offcanvasPosition{
  height: 100vh;
  border: none;
}
#offcanvasPosition .offcanvas-header{
 background-color: #F6F6F8;
}
#offcanvasPosition .offcanvas-header .offcanvas-title{
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #020408;
 }
 #offcanvasPosition .offcanvas-body .topSearch{
  background-color: #F1F5F9;
  border-radius: 4px;
  padding: 5px;
 }
 #offcanvasPosition .offcanvas-body .topSearch input{
  color: #94A3B8;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  background: #F1F5F9;
 }
 #offcanvasPosition .offcanvas-body .title p{
  color: #1E293B;
  font-size: 17.54px;
  font-weight: 600;
  font-family: 'Inter';
  line-height: 24.56px;
 }

 .form-check-input:checked{
  background-color: #2A9FE8 !important;
  border-color: #2A9FE8 !important;
 }
 .form-check-input:focus{
  box-shadow: unset;
 }
 .form-check-input:checked[type=checkbox] {
  --bs-form-check-bg-image: url('/assets/images/mobile/header/tick.webp') !important;
  background-size: 9px;
}

#offcanvasPosition .offcanvas-body .checkBox{
  border-bottom: 1px solid #CBD5E1;
  margin-bottom: 15px;
}
#offcanvasPosition .offcanvas-body .checkBox .left .form-check label{
  color: #131313;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
#offcanvasPosition .offcanvas-body .checkBox .right p{
  color: #2384C1;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
}

#offcanvasPosition .offcanvas-body .positionButton .btn-left{
  width: 25%;
  color: #334155;
  border: 1px solid #334155;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
#offcanvasPosition .offcanvas-body .positionButton .btn-right{
  width: 75%;
  background-color: #2384C1;
  color: white;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
</style>