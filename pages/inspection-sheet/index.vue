<template>
    <div>
        <div class="inspectionSheet-page-desktop desktop-view">
    <div class="inner">
        <div class="bredcrumbs">
            <div class="container">
                <div class="row">
                    <ul class="list-unstyled d-flex py-3">
                        <li class="pe-1">中古車トップ &gt; 中古車検索：メーカー一覧 &gt; ダイハツの中古車 &gt; タフトの中古車 タフト &gt; 香川県の中古車 <span style="color: #353C4D;"> &gt; タフト&nbsp;660&nbsp;X&nbsp;届出済未使用車</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="aboutSheet">
                    <p class="m-0 title pb-2">私たちについて</p>
                    <p class="m-0 para">
                        私たちは、福島県いわき市に拠点を置く、日本を代表する中古車輸出プラットフォームです。世界中のお客様が当社のサービスを通じて、スムーズで簡単なお車購入を実現できるよう努めています。世界200カ国に拠点を構えていることを誇りに思います。
                        <br/><br/>
                        私たちは2002年の設立以来、歴史を刻んできました。お客様に最高のサービスを提供するというコミットメントと、独自の視点により、世界中に顧客基盤を築いてきました。
                    </p>

                    <div class="carSheet my-4 text-center">
                        <img src="/assets/images/car-sheet.webp" alt="sheet" class="img-fluid" loading="lazy" width="936" height="1325" />
                    <button type="button" class="btn btn-print my-3">印刷する</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>


<!-- ============================ Mobile View ============================ -->

<div class="inspectionSheet-page-mobile mobile_view">
    <div class="inner m-3">
        <p class="m-0 title pb-3">私たちについて</p>
        <p class="m-0 para">
            私たちは、福島県いわき市に拠点を置く、日本を代表する中古車輸出プラットフォームです。世界中のお客様が当社のサービスを通じて、スムーズで簡単なお車購入を実現できるよう努めています。世界200カ国に拠点を構えていることを誇りに思います。
            <br/><br/>
            私たちは2002年の設立以来、歴史を刻んできました。お客様に最高のサービスを提供するというコミットメントと、独自の視点により、世界中に顧客基盤を築いてきました。
        </p>

        <div class="carSheet my-4 text-center">
            <img src="/assets/images/car-sheet.webp" alt="sheet" class="img-fluid" loading="lazy" />
        <button type="button" class="btn btn-print my-3 px-4 py-2">印刷する</button>
        </div>
    </div>
</div>
    </div>
</template>



<style scoped>
/* =========== Start Inspection Sheet Page Css */
 .inspectionSheet-page-desktop .inner .bredcrumbs ul li {
    color: #353C4D;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}
.inspectionSheet-page-desktop .inner .bredcrumbs ul li:last-of-type {
    color: #2A9FE8;
}
.inspectionSheet-page-desktop .inner .aboutSheet .title{
    color: #101828;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
}
.inspectionSheet-page-desktop .inner .aboutSheet .para{
    color: #353C4D;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}
.inspectionSheet-page-desktop .inner .aboutSheet .carSheet .btn-print{
    background-color: #2384C1;
    color: #fff;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    padding: 10px 100px;
}
.inspectionSheet-page-desktop .inner .relatedService .title{
    color: #020408;
    font-family: 'Sofia-Pro';
    font-size: 24px;
    font-weight: 600;
    line-height: 28.82px;
}
.inspectionSheet-page-desktop .inner .relatedDetails .title{
    font-size: 18px;
    font-weight: 600;
    font-family: 'Inter';
    line-height: 26px;
}
.inspectionSheet-page-desktop .inner .relatedDetails .relatedImg .para {
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #0C1529;
}
.inspectionSheet-page-desktop .inner .relatedDetails .relatedImg .textRight p {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-decoration: underline;
    color: #2f2f2f;
    cursor: pointer;
}
  /* =========== End Inspection Sheet Page Css */

/* =========== Start Mobile Inspection Sheet Page Css */
.inspectionSheet-page-mobile .inner .title{
  color: #020408;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.inspectionSheet-page-mobile .inner .para{
  color: #667085;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.inspectionSheet-page-mobile .inner .carSheet .btn-print{
  background-color: #2384C1;
  color: #fff;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
/* =========== End Mobile Inspection Sheet Page Css */
</style>