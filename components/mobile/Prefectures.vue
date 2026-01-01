<template>
    <div>
        <div class="mobile-view">
            <div class="searchByprefecture m-3">
        <div class="inner">
            <p class="m-0 title">都道府県から探す</p>

            <div class="list d-flex align-items-center mb-3">
                <div class="left">北海道</div>
                <div class="right">北海道</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">北海道</div>
                <div class="right">青森県 岩手県 宮城県 秋田県 山形県 福島県 青森県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">北関東</div>
                <div class="right">茨城県 栃木県 群馬県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">首都圏</div>
                <div class="right">東京都 神奈川県 埼玉県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">甲信越</div>
                <div class="right">山梨県 長野県 新潟県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">北陸</div>
                <div class="right ps-2">富山県 石川県 福井県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">東海</div>
                <div class="right ps-2">静岡県 岐阜県 宮城県 愛知県 三重県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">関西</div>
                <div class="right ps-2">滋賀県 滋賀県 大阪府 兵庫県 奈良県 和歌山県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">中国</div>
                <div class="right ps-2">広島県 岡山県 山口県 鳥取県 島根県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">四国</div>
                <div class="right ps-2">香川県 愛媛県 長崎県 高知県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">九州</div>
                <div class="right ps-2">福岡県 佐賀県 長崎県</div>
            </div>
            <div class="list d-flex align-items-center mb-3">
                <div class="left">中 南九</div>
                <div class="right">熊本県</div>
            </div>
        </div>
    </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>
 .mobile-view .searchByprefecture .inner .title{
    color: #020408;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    padding: 8px 0px 16px 0px;
  }
  .mobile-view .searchByprefecture .inner .list .left{
    color: #08202E;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    font-family: 'Inter';
  }
  .mobile-view .searchByprefecture .inner .list .right{
    color: #2384C1;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    font-family: 'Inter';
    position: relative;
    left: 30px;
  }
</style>