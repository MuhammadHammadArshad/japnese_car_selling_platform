<template>
    <div>
<div class="form-page-desktop desktop-view">
    <div class="inner">
        <div class="bannerImage">
            <img src="/assets/images/faq-banner.webp" alt="banner" class="img-fluid" loading="lazy" />
        </div>

        <div class="container">
            <div class="row">

                <div class="col-md-8">
                    <div class="inquriyForm my-4">
                        <p class="title m-0 mb-3">お問い合わせ</p>
                        <p class="m-0 para mb-3">詳細を共有していただければ、当社のアドバイザーがステップごとにご案内いたします。</p>
                        <p class="m-0 linkMail">いつでもご連絡ください <span>example@gmail.com</span></p>
                    </div>

                    <div class="phoneDirectory d-flex justify-content-between">
                        <div class="left d-flex align-items-center gap-3">
                            <div class="image">
                                <img src="/assets/images/icons/phone.webp" alt="phone" class="img-fluid" loading="lazy" width="27" height="27" />
                            </div>
                            <div class="detail">
                                <p class="m-0 head">電話番号</p>
                                <p class="m-0 bottom">+92 00 0000 000</p>
                            </div>
                        </div>
                        <div class="right d-flex align-items-center gap-3">
                            <div class="image">
                                <img src="/assets/images/icons/envelop.webp" alt="phone" class="img-fluid" loading="lazy" width="27" height="27" />
                            </div>
                            <div class="detail">
                                <p class="m-0 head">メール</p>
                                <p class="m-0 bottom">example@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="phoneDirectory d-flex justify-content-between mt-4">
                        <div class="left d-flex align-items-center gap-3">
                            <div class="image">
                                <img src="/assets/images/icons/web.webp" alt="phone" class="img-fluid" loading="lazy" width="27" height="27" />
                            </div>
                            <div class="detail">
                                <p class="m-0 head">URL</p>
                                <p class="m-0 bottom">https://www.satjapan.com</p>
                            </div>
                        </div>
                        <div class="right d-flex align-items-center gap-3">
                            <div class="image">
                                <img src="/assets/images/icons/loc.webp" alt="phone" class="img-fluid" loading="lazy" width="27" height="27" />
                            </div>
                            <div class="detail">
                                <p class="m-0 head">Location</p>
                                <p class="m-0 bottom">31.591649, 74.334191</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="satConnect my-4">
                        <p class="m-0 title pb-3">SATとつながりましょう</p>
                        <form action="#">
                            <div class="name d-flex gap-2">
                                <div class="firstName">
                                    <label for="">ファーストネーム</label>
                                    <input type="text" class="form-control" placeholder="ファーストネーム">
                                </div>
                                <div class="LastName">
                                    <label for="">苗字</label>
                                    <input type="text" class="form-control" placeholder="苗字">
                                </div>
                            </div>
                            <div class="firstName mt-3">
                                <label for="">メール</label>
                                <input type="text" class="form-control" placeholder="you@company.com">
                            </div>

                            <div class="firstName mt-3">
                                <label for="">電話番号</label>
                                <input type="text" class="form-control" placeholder="+1 (555) 000-0000">
                            </div>

                            <div class="firstName mt-3">
                                <label for="">メッセージ</label>
                                <input type="text" class="form-control pb-5" placeholder="メッセージを残してください...">
                            </div>

                            <div class="firstName mt-3">
                            <button type="button" class="btn btn-submit w-100">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="faqCarSensor my-4">
                    <div class="faqAccordion">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed shadow-none" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFirst" aria-expanded="false"
                                        aria-controls="collapseFirst">
                                        グー鑑定について
                                    </button>
                                </h2>
                                <div id="collapseFirst" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body p-0">
                                        <!-- Nested Accordion -->
                                        <div class="accordion mt-3" id="nestedAccordionOne">

                                            <!-- Nested Accordion Item 2 -->
                                            <div class="accordion-item mb-2">
                                                <h2 class="accordion-header" id="nestedHeadingTwo">
                                                    <button class="accordion-button collapsed shadow-none"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#nestedCollapseTwo" aria-expanded="false"
                                                        aria-controls="nestedCollapseTwo">
                                                        Q.レビューを削除したいです。手続方法を教えてください
                                                    </button>
                                                </h2>
                                                <div id="nestedCollapseTwo" class="accordion-collapse collapse"
                                                    aria-labelledby="nestedHeadingTwo"
                                                    data-bs-parent="#nestedAccordionOne">
                                                    <div class="accordion-body">
                                                        レビュー投稿については同車両につき、1回までとなっているため、複数のレビュー投稿のご連絡を差し上げることはございません。別車両についての案内メールでございましたら、対象見積の見送りを行って下さい。また、ご不明な際は、グーお客様センターへお問合せ頂ければ幸いでございます。
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Nested Accordion Item 3 -->
                                            <div class="accordion-item mb-2">
                                                <h2 class="accordion-header" id="nestedHeadingThree">
                                                    <button class="accordion-button collapsed shadow-none"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#nestedCollapseThree" aria-expanded="false"
                                                        aria-controls="nestedCollapseThree">
                                                        Q.レビューを削除したいです。手続方法を教えてください
                                                    </button>
                                                </h2>
                                                <div id="nestedCollapseThree" class="accordion-collapse collapse"
                                                    aria-labelledby="nestedHeadingThree"
                                                    data-bs-parent="#nestedAccordionOne">
                                                    <div class="accordion-body">
                                                        レビュー投稿については同車両につき、1回までとなっているため、
                                                        複数のレビュー投稿のご連絡を差し上げることはございません。
                                                        別車両についての案内メールでございましたら、対象見積の見送りを行って下さい。
                                                        また、ご不明な際は、グーお客様センターへお問合せ頂ければ幸いでございます。
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- Nested Accordion Item 4 -->
                                            <div class="accordion-item mb-2">
                                                <h2 class="accordion-header" id="nestedHeadingFour">
                                                    <button class="accordion-button collapsed shadow-none"
                                                        type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#nestedCollapseFour" aria-expanded="false"
                                                        aria-controls="nestedCollapseFour">
                                                        Q.レビューを削除したいです。手続方法を教えてください
                                                    </button>
                                                </h2>
                                                <div id="nestedCollapseFour" class="accordion-collapse collapse"
                                                    aria-labelledby="nestedHeadingFour"
                                                    data-bs-parent="#nestedAccordionOne">
                                                    <div class="accordion-body">
                                                        レビュー投稿については同車両につき、1回までとなっているため、
                                                        複数のレビュー投稿のご連絡を差し上げることはございません。
                                                        別車両についての案内メールでございましたら、対象見積の見送りを行って下さい。
                                                        また、ご不明な際は、グーお客様センターへお問合せ頂ければ幸いでございます。
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <!-- End of Nested Accordion -->
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed shadow-none" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        レビュー掲載について
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        レビュー投稿については同車両につき、1回までとなっているため、
                                        複数のレビュー投稿のご連絡を差し上げることはございません。
                                        別車両についての案内メールでございましたら、対象見積の見送りを行って下さい。
                                        また、ご不明な際は、グーお客様センターへお問合せ頂ければ幸いでございます。
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed shadow-none" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        配信メールを停止したい
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        レビュー投稿については同車両につき、1回までとなっているため、
                                        複数のレビュー投稿のご連絡を差し上げることはございません。
                                        別車両についての案内メールでございましたら、対象見積の見送りを行って下さい。
                                        また、ご不明な際は、グーお客様センターへお問合せ頂ければ幸いでございます。
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed shadow-none" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        グープラス、グー保証について
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        レビュー投稿については同車両につき、1回までとなっているため、
                                        複数のレビュー投稿のご連絡を差し上げることはございません。
                                        別車両についての案内メールでございましたら、対象見積の見送りを行って下さい。
                                        また、ご不明な際は、グーお客様センターへお問合せ頂ければ幸いでございます。
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed shadow-none" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                        aria-expanded="false" aria-controls="collapseFive">
                                        ポイントキャンペーンについて
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        レビュー投稿については同車両につき、1回までとなっているため、
                                        複数のレビュー投稿のご連絡を差し上げることはございません。
                                        別車両についての案内メールでございましたら、対象見積の見送りを行って下さい。
                                        また、ご不明な際は、グーお客様センターへお問合せ頂ければ幸いでございます。
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed shadow-none" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                        aria-controls="collapsesix">
                                        その他配信メールについて
                                    </button>
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        レビュー投稿については同車両につき、1回までとなっているため、
                                        複数のレビュー投稿のご連絡を差し上げることはございません。
                                        別車両についての案内メールでございましたら、対象見積の見送りを行って下さい。
                                        また、ご不明な際は、グーお客様センターへお問合せ頂ければ幸いでございます。
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="phoneInquiries my-4 py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="left">
                            <p class="m-0 title pb-2">お電話でのお問い合わせ</p>
                            <p class="m-0 phNo ps-3">0078-6002-262408</p>
                            <p class="m-0 text py-3">※一部ダイヤル回線、IP・光回線は利用<br>不可</p>
                            <p class="m-0 caption text-center pt-3">
                                <img src="/assets/images/icons/arrow-left.webp" alt="arrow-left"
                                    class="img-fluid me-2" loading="lazy" width="32" height="32" />
                                店舗在庫リストを見る
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="right">
                            <p class="m-0 title pb-3">販売店から最短即日、メールで返答！</p>
                            <p class="m-0 quickResponse ps-5">販売店から最短即日、メールで返答！</p>

                            <button type="button" class="btn btn-storeReserve my-2">来店予約をする</button>
                            <button type="button" class="btn btn-storeMoney my-2 bg-white">
                                <img src="/assets/images/icons/money-circle.webp" alt="Money"
                                    class="img-fluid me-2" loading="lazy" width="20" height="20" />
                                在庫確認・見積依頼をする</button>
                            <div class="bottom-btn d-flex align-items-center gap-3">
                                <button type="button" class="btn btn-storeMoney1 my-2 bg-white">車両状態を確認する</button>
                                <button type="button" class="btn btn-storeMoney2 my-2 bg-white">その他</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>


<!-- ================== Mobile View ================== -->

<div class="form-page-mobile mobile_view">
    <div class="inner">
       <div class="container">
        <div class="row">
            <img src="/assets/images/mobile/header/form-page-mobile.webp" alt="hero" class="img-fluid" loading="lazy" />
        <div class="inquirey">
            <p class="m-0 title my-3">お問い合わせ</p>
            <p class="m-0 para">
                詳細を共有していただければ、当社のアドバイザーがステップごとにご案内いたします。
            </p>
            <p class="m-0 para my-2">
                いつでもご連絡ください <span>example@gmail.com</span>
            </p>


            <table class="table table-borderless">
                <tbody>
                    <tr>
                      <td><img src="/assets/images/icons/phone.webp" alt="icon" class="img-fluid" loading="lazy" width="20" height="20" /></td>
                      <td class="head">電話番号</td>
                      <td class="para">+92 00 0000 000</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/images/icons/envelop.webp" alt="icon" class="img-fluid" loading="lazy" width="20" height="20" /></td>
                        <td class="head">メール</td>
                        <td class="para">example@gmail.com</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/images/icons/web.webp" alt="icon" class="img-fluid" loading="lazy" width="20" height="20" /></td>
                        <td class="head">URL</td>
                        <td class="para">https://www.satjapan.com</td>
                    </tr>
                    <tr>
                        <td><img src="/assets/images/icons/loc.webp" alt="icon" class="img-fluid" loading="lazy" width="20" height="20" /></td>
                        <td class="head">Location</td>
                        <td class="para">31.591649, 74.334191</td>
                    </tr>
                  </tbody>
              </table>

              <div class="faqs">
                <p class="m-0 title">よく問合せを受けるご質問</p>
                <div class="contact my-3">
                    <p class="m-0 top pb-2">ファーストネーム</p>
                    <input type="text" class="form-control shadow-none" placeholder="ファーストネーム">
                </div>

                <div class="contact my-3">
                    <p class="m-0 top pb-2">苗字</p>
                    <input type="text" class="form-control shadow-none" placeholder="苗字">
                </div>

                <div class="contact my-3">
                    <p class="m-0 top pb-2">メール</p>
                    <input type="text" class="form-control shadow-none" placeholder="you@company.com">
                </div>

                <div class="contact my-3">
                    <p class="m-0 top pb-2">電話番号</p>
                    <input type="text" class="form-control shadow-none" placeholder="+1 (555) 000-0000">
                </div>

                <div class="contact my-3">
                    <p class="m-0 top pb-2">メッセージ</p>
                    <textarea class="form-control shadow-none" cols="20" rows="5" placeholder="メッセージを残してください..."></textarea>
                </div>

                <div class="contact my-3">
                    <button type="button" class="form-control btn btn-submit py-2">Submit</button>
                </div>

              </div>
        </div>
        
        </div>
       </div>
    </div>
</div>
    </div>
</template>


<style scoped>
  /* =========== Start Form Page Css */
  .form-page-desktop .inner .inquriyForm .title{
    color: #020408;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
  }
  .form-page-desktop .inner .inquriyForm .para{
    color: #020408;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }
  .form-page-desktop .inner .inquriyForm .linkMail{
    color: #667085;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
  .form-page-desktop .inner .inquriyForm .linkMail span{
    color: #2384C1;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }
  .form-page-desktop .inner .phoneDirectory .left .detail .head{
    color: #2384C1;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }
  .form-page-desktop .inner .phoneDirectory .left .detail .bottom{
    color: #353C4D;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
  }
  .form-page-desktop .inner .phoneDirectory .right .detail .head{
    color: #2384C1;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }
  .form-page-desktop .inner .phoneDirectory .right .detail .bottom{
    color: #353C4D;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
  }
  .form-page-desktop .inner .satConnect .title{
    color: #020408;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
  }
  .form-page-desktop .inner .satConnect form .firstName label{
    color: #344054;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  .form-page-desktop .inner .satConnect form .firstName input{
    color: #667085;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .form-page-desktop .inner .satConnect form .LastName label{
    color: #344054;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  .form-page-desktop .inner .satConnect form .LastName input{
    color: #667085;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .form-page-desktop .inner .satConnect form .btn-submit{
    background-color: #2384C1;
    color: #fff;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .form-page-desktop .inner .faqAccordion .accordion .accordion-item .accordion-button:not(.collapsed){
    background-color: #ECF5FF;
    border-bottom: 1px solid #1C6A9B;
  }
  .form-page-desktop .inner .faqAccordion .accordion .accordion-item{
    border: none;
  }
  .form-page-desktop .inner  .faqAccordion .accordion .accordion-item .accordion-button:not(.collapsed) {
    background-color: #ECF5FF;
    border-bottom: 1px solid #1C6A9B;
  }
  .form-page-desktop .inner .faqAccordion .accordion .accordion-item .accordion-button{
    border-bottom: 1px solid #CBD5E1;
    border-radius: 0px !important;
    color: #060B15;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
  .form-page-desktop .inner .faqAccordion .accordion #nestedAccordionOne .accordion-button::after {
    content: "\f067"; /* Plus icon */
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    right: 1.25rem;
    font-size: 1.25rem;
    background-image:none;
  }
  .form-page-desktop .inner .faqAccordion .accordion #nestedAccordionOne .accordion-button:not(.collapsed)::after {
    content: "\f068"; /* Minus icon */
    background-image:none;
  }
  .form-page-desktop .inner .faqAccordion .accordion #nestedAccordionOne .accordion-item .accordion-button:not(.collapsed) {
    background-color: #ECF5FF;
    border-top: 1px solid #1C6A9B;
    border-bottom: 0px;
  }
  .form-page-desktop .inner .faqAccordion .accordion #nestedAccordionOne .accordion-item .accordion-button {
   background-color:  #F6F6F8;
   color: #0C1529;
   font-family: 'Inter';
   font-weight: 500;
   font-size: 20px;
   line-height: 28px;
  }
  .form-page-desktop .inner .relatedService .title {
    color: #020408;
    font-family: 'Sofia-Pro';
    font-size: 24px;
    font-weight: 600;
    line-height: 28.82px;
  }
  .form-page-desktop .inner .relatedDetails .title {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Inter';
    line-height: 26px;
  }
  .form-page-desktop .inner .relatedDetails .relatedImg .para {
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #0C1529;
  }
  .form-page-desktop .inner .relatedDetails .relatedImg .textRight p {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-decoration: underline;
    color: #2f2f2f;
    cursor: pointer;
  }
  
  /* =========== End Form Page Css */


  /* =========== Start Mobile Form Page Css */

.form-page-mobile .inner .inquirey .title{
  color: #020408;
  font-family: 'Sofia-pro';
  font-weight: 600;
  font-size: 14px;
  line-height: 28.82px;
}

.form-page-mobile .inner .inquirey .para{
  color: #64748B;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.form-page-mobile .inner .inquirey .para span{
  color: #2384C1;
}

.form-page-mobile .inner .inquirey .table .head{
  color: #2384C1;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
}

.form-page-mobile .inner .inquirey .table .para{
  color: #353C4D;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
}
.form-page-mobile .inner .inquirey .faqs .title{
  color: #020408;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.form-page-mobile .inner .inquirey .faqs .contact .top{
  color: #344054;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.form-page-mobile .inner .inquirey .faqs .contact input,
.form-page-mobile .inner .inquirey .faqs .contact textarea{
  color: #667085;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.form-page-mobile .inner .inquirey .faqs .contact .btn-submit{
  background-color: #2384C1;
  color: #fff;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
/* =========== End Mobile Form Page Css */
</style>