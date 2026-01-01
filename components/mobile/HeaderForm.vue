<template>
    <div>
        <div class="mobile_view">
             <div class="mobileHeader position-relative">
        <div class="slider">
            <img src="/assets/images/mobile/header/slider.webp" alt="slider" class="img-fluid w-100" loading="lazy">
        </div>
        <!-- {{-- <div class="iconHeader py-2">
            <img src="/assets/images/mobile/header/clock.webp" alt="icon" class="img-fluid" loading="lazy" width="30" height="30">
            <img src="/assets/images/mobile/header/heart.webp" alt="icon" class="img-fluid" loading="lazy" width="30" height="30">
            <img src="/assets/images/mobile/header/burger.webp" alt="icon" class="img-fluid" loading="lazy" width="30" height="30">
        </div> --}} -->
    </div>

    <div class="formArea">
        <form action="javascript:;">
            <div class="searchArea m-3">
                <label>年</label>
                <div class="search d-flex align-items-center rounded-2">
                    <input type="text" class="form-control border-0 shadow-none" placeholder="車名、販売店名などで中古車検索">
                    <img src="/assets/images/home/searchIcon.webp" alt="search" class="img-fluid">
                </div>
            </div>

            <div class="bottom d-flex align-items-center m-3 gap-1">
                <div class="col-6">
                    <div class="left">
                        <label>送信</label>
                        <select class="form-select border-0 shadow-none">
                            <option value="選択">選択</option>
                        </select>
                    </div>
                </div>
                <div class="col-6">
                    <div class="right">
                        <label>送信</label>
                        <select class="form-select border-0 shadow-none">
                            <option value="選択">選択</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="actionBtn text-center">
                <button class="btn btn-submit">この条件で検索</button>
            </div>
        </form>
    </div>
        </div>

    </div>
</template>

<script setup>
    
</script>

<style scoped>
 .mobile_view .formArea .searchArea label{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 0px 0px 6px 0px;
    color: #1E293B;
 }
 .mobile_view .formArea .searchArea .search{
   background-color: #F1F5F9;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 12px;
   line-height: 16px;
   padding: 5px;
 }
 .mobile_view .formArea .searchArea input{
   background-color: #F1F5F9;
   color: #94A3B8;
   font-size: 12px;
   font-weight: 400;
   line-height: 16px;
   font-family: 'Inter';
 }
 .mobile_view .formArea .searchArea .search img{
    width: 16px;
    height: 16px;
    position: relative;
    right: 6px;
 }

 .mobile_view .formArea .bottom .left label{
    color: #1E293B;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 0px 0px 6px 0px;
 }

 .mobile_view .formArea .bottom .left select{
    background-color: #F1F5F9;
    color: #353C4D;
    font-size: 12.28px;
    font-weight: 500;
    line-height: 17.54px;
    padding: 9px;
 }

 .mobile_view .formArea .bottom .right label{
    color: #1E293B;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 0px 0px 6px 0px;
 }
 .mobile_view .formArea .bottom .right select{
    background-color: #F1F5F9;
    color: #353C4D;
    font-size: 12.28px;
    font-weight: 500;
    line-height: 17.54px;
    padding: 9px;
 }
 .mobile_view .formArea .bottom .left .form-select{
    border-radius: unset;
    --bs-form-select-bg-img: url(/assets/images/home/caret-down.webp);
    background-repeat: no-repeat;
    background-size: 9px;
 }
 .mobile_view .formArea .bottom .right .form-select{
    border-radius: unset;
    --bs-form-select-bg-img: url(/assets/images/home/caret-down.webp);
    background-repeat: no-repeat;
    background-size: 9px;
 }
 .mobile_view .formArea .actionBtn .btn-submit{
    background-color: #2384C1;
    color: white;
    font-weight: 600;
    font-family: 'Inter';
    font-size: 14.04px;
    line-height: 21.05px;
 }
</style>