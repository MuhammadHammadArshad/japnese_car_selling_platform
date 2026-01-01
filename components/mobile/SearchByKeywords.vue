<template>
    <div>
        <div class="mobile-view">
            <div class="searchForcarBykeywords m-3">
        <div class="inner">
            <p class="m-0 title my-4">キーワードでクルマを探す</p>
            <div class="buttonTabs">
                <p class="m-0">アイサイト</p>
                <p class="m-0">衝突防止</p>
                <p class="m-0">電気自動車</p>
                <p class="m-0">PHV</p>
                <p class="m-0">クリーンディーゼル</p>
                <p class="m-0">アラウンドビューモニター</p>
                <p class="m-0">自動ブレーキ</p>
                <p class="m-0">未使用車</p>
                <p class="m-0">自動運転</p>
                <p class="m-0">福祉車両</p>
                <p class="m-0">ハイブリッド</p>
            </div>
        </div>
    </div>
        </div>

    </div>
</template>

<script setup>
    
</script>

<style scoped>
.mobile-view .searchForcarBykeywords .inner .title{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
  }
  .mobile-view .searchForcarBykeywords .inner .buttonTabs{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .mobile-view .searchForcarBykeywords .inner .buttonTabs p{
    border: 1px solid #D4D4D4;
    border-radius: 50px;
    padding: 8px 24px;
    color: #154F74;
    background: #F6F6F6;
    margin: 0px 0px 10px 0px !important;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    font-family: 'Inter';
    cursor: pointer;
  }
</style>