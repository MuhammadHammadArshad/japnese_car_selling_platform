
<template>
  <div>
    <footer class="desktop-view">
      <div class="container">
        <div class="row my-4">
          <div class="relatedService">
            <p class="m-0 mb-3 title">関連サービス</p>
          </div>

          <div class="col-md-3">
            <div class="relatedDetails">
              <p class="title m-0 my-2">スマートフォンアプリ</p>
              <div class="relatedImg mb-2 d-flex gap-1">
                <NuxtImg
                  src="/assets/images/sat.webp"
                  alt="Sat"
                  class="img-fluid"
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <NuxtImg
                  src="/assets/images/qr-code-app.webp"
                  alt="Sat"
                  class="img-fluid"
                  loading="lazy"
                  width="48"
                  height="48"
                />
              </div>
              <div class="appImg">
                <NuxtImg
                  src="/assets/images/apple.webp"
                  alt="Apple"
                  class="img-fluid"
                  loading="lazy"
                  width="82"
                  height="25"
                />
                <NuxtImg
                  src="/assets/images/google.webp"
                  alt="Google"
                  class="img-fluid"
                  loading="lazy"
                  width="82"
                  height="25"
                />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="relatedDetails">
              <p class="title m-0 my-2">SNS公式アカウント</p>
              <div class="relatedImg mt-3 gap-1 d-flex">
                <NuxtImg
                  src="/assets/images/facebook.webp"
                  alt="Facebook"
                  class="img-fluid"
                  loading="lazy"
                  width="32"
                  height="32"
                />
                <NuxtImg
                  src="/assets/images/instagram.webp"
                  alt="Instagram"
                  class="img-fluid"
                  loading="lazy"
                  width="32"
                  height="32"
                />
                <NuxtImg
                  src="/assets/images/twitter.webp"
                  alt="Twitter"
                  class="img-fluid"
                  loading="lazy"
                  width="32"
                  height="32"
                />
                <NuxtImg
                  src="/assets/images/tiktok.webp"
                  alt="TikTok"
                  class="img-fluid"
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="relatedDetails">
              <p class="title m-0 my-2">情報誌</p>
              <div class="relatedImg">
                <p class="para">
                  中古車情報だけでなく、車選びに役立つノウハウ、最新の相場トレンドなどを紹介しています
                </p>
                <div class="textRight d-flex align-items-center">
                  <NuxtImg
                    src="/assets/images/arrow-right-circle.webp"
                    class="img-fluid"
                    alt="arrow"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <p class="m-0 mx-1">全国の最新号はこちら</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="relatedDetails">
              <p class="title m-0 my-2">メールマガジン</p>
              <div class="relatedImg">
                <p class="para">
                  新着中古車やお得な情報をお届けします！今すぐ登録しよう！
                </p>
                <div class="textRight d-flex align-items-center mt-4 pt-2">
                  <NuxtImg
                    src="/assets/images/arrow-right-circle.webp"
                    class="img-fluid"
                    alt="arrow"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <NuxtLink to="/register/email">
                    <p class="m-0 mx-1">登録する</p>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="servicesList d-flex my-3 align-items-center flex-wrap">
            <NuxtImg
              src="/assets/images/header-logo.webp"
              alt="logo"
              class="img-fluid me-5"
              loading="lazy"
              width="147"
              height="48"
            />
            <p class="m-0 pe-2">会社概要</p>
            <p class="m-0 px-2">利用規約</p>
            <p class="m-0 px-2">プライバシーポリシー</p>
            <!-- <p class="m-0 px-2">サイトマップ</p> -->
             <NuxtLink to="/sitemap">
              <p class="m-0 px-2">サイトマップ</p>
              </NuxtLink>
             <NuxtLink to="/why-choose-sat">
              <p class="m-0 px-2">SATを選ぶ理由</p>
              </NuxtLink>
            <!-- <p class="m-0 px-2">SATを選ぶ理由</p> -->
            <p class="m-0 px-2">広告掲載のお申し込み</p>
            <p class="m-0 px-2 border-0">広告掲載</p>
          </div>
        </div>
      </div>

      <div class="copyright mt-4 text-center">
        <p class="m-0 py-3">©著作権、シャインオートトレーディング。</p>
      </div>
    </footer>

    <div class="mobile_view pt-4 ps-2">
      <footer>
        <div class="logo m-2 mt-3">
          <NuxtImg
            src="/assets/images/mobileLogo.webp"
            alt="Logo"
            class="img-fluid"
          />
        </div>
        <div class="details">
          <ul>
            <li>会社概要</li>
            <li>利用規約</li>
            <li>プライバシーポリシー</li>
            <li>サイトマップ</li>
            <li>SATを選ぶ理由</li>
            <li>広告掲載のお申し込み</li>
            <li>広告掲載</li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
footer .relatedService .title {
  color: #020408;
  font-family: "Sofia-Pro";
  font-size: 24px;
  font-weight: 600;
  line-height: 28.82px;
}
footer .relatedDetails .title {
  font-size: 18px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 26px;
}
footer .relatedDetails .title {
  font-size: 18px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 26px;
}
footer .relatedDetails .relatedImg .para {
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: #0c1529;
}
footer .relatedDetails .relatedImg .textRight p {
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-decoration: underline;
  color: #2f2f2f;
  cursor: pointer;
}
footer .servicesList p {
  border-right: 1px solid black;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #334155;
  cursor: pointer;
}
footer .servicesList a {
  text-decoration: none;
}
footer .copyright {
  background-color: #01334e;
  color: white;
  border: 1px solid #aeb1b8;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
}

/* ============== Mobile View ============= */
.mobile_view footer .details ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.mobile_view footer .details ul li {
  border-right: 1px solid grey;
  padding: 0px 10px;
  color: #334155;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 6px 0px;
  cursor: pointer;
}
</style>