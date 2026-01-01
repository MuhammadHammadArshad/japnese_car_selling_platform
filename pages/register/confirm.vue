<script setup>
useHead({
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

const route = useRoute()

const email = ref('')
const password = ref('')
const name = ref('')
const givenName = ref('')
const dateOfBirth = ref('')
const gender = ref('')

watchEffect(() => {
  email.value = route.query.email || ''
  password.value = route.query.password || ''
  name.value = route.query.name || ''
  givenName.value = route.query.given_name || ''
  dateOfBirth.value = route.query.date_of_birth || ''
  gender.value = route.query.gender || ''
})

const goToLogin = () => {
  router.push('/login')
}
</script>
<template>
  <div>
    <!-- Desktop View -->
    <div class="confirm-desktop desktop-view">
      <div class="container">
        <div class="row">
          <p class="m-0 topHeading my-3">会員情報の入力</p>
          <div class="content my-4">
            <p class="m-0 title mb-2 py-3">
              ご利用になるリクルートID（メールアドレス）を入力してください。<br/>
              入力したメールアドレス宛に仮登録メールが届きます。<br/>
              メール受信制限をされている方は point.recruit.co.jp からのメール受信を許可してください。
            </p>

            <form @submit.prevent="goToLogin">
              <div class="mb-3 d-flex gap-3 border pe-2">
                <div class="left w-25">
                  <label for="emailDesktop" class="form-label">メールアドレス</label>
                  <label for="confirmDesktop" class="form-label">パスワード<br/>※英数記号混在を推奨</label>
                  <label for="confirmDesktop" class="form-label">お名前</label>
                  <label for="confirmDesktop" class="form-label my-3">生年月日</label>
                  <label for="confirmDesktop" class="form-label">性別</label>
                </div>

                <div class="right w-75">
                  <p class="m-0 emailFetchName">{{ email }}</p>
                  <p class="m-0 emailFetchName">{{ password }}</p>
                  <p class="m-0 emailFetchName">{{ givenName  }}</p>
                  <p class="m-0 emailFetchName">{{ dateOfBirth }}</p>
                  <p class="m-0 emailFetchName">{{ gender  }}</p>
                  <!-- <p class="m-0 mb-2">認証コードは取得後30分で無効になります。</p> -->
                </div>
              </div>

              <div class="submitForm text-center my-4">
                <button type="submit" class="btn btn-submit">次へ</button>
                <!-- <NuxtLink to="/dashboard/profile" class="btn btn-submit">次へ</NuxtLink> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="confirm-mobile mobile_view">
      <div class="container">
        <div class="row">
          <p class="m-0 topHeading mt-3">会員情報の入力</p>
          <div class="content my-4">
            <p class="m-0 title mb-2 pb-3">
              ご利用になるリクルートID（メールアドレス）を入力してください。<br />
              入力したメールアドレス宛に仮登録メールが届きます。<br />
              メール受信制限をされている方は point.recruit.co.jp からのメール受信を許可してください。
            </p>

             <form>
              <div class="mb-3 d-flex gap-3 border pe-2">
                <div class="left w-100">
                  <label for="emailDesktop" class="form-label">メールアドレス</label>
                  <label for="otpDesktop" class="form-label">パスワード<br/>※英数記号混在を推奨</label>
                  <label for="otpDesktop" class="form-label">お名前</label>
                  <label for="otpDesktop" class="form-label">生年月日</label>
                  <label for="otpDesktop" class="form-label">性別</label>
                </div>

                <div class="right w-100">
                  <p class="m-0 emailFetchName">Hafizgull@gmail.com</p>
                  <p class="m-0 emailFetchName">**********</p>
                  <p class="m-0 emailFetchName">Hafiz Gull</p>
                  <p class="m-0 emailFetchName">1997-02-23</p>
                  <p class="m-0 emailFetchName">性別</p>
                  
                </div>
              </div>

              <div class="submitForm text-center my-4">
                <button type="submit" class="btn btn-submit">次へ</button>
                
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.confirm-desktop .topHeading {
    color:#0F172A;
    font-family: "Inter";
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
}
.confirm-desktop .content .title {
    border-top: 4px solid #2384C1;
    font-family: "Inter";
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}
.confirm-desktop .content form .left{
    background-color:#F6F6F8;
    display:flex;
    flex-direction: column;
}
.confirm-desktop .content form .left label {
    color: #0F172A;
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 20px 10px 0px 10px;
}
.confirm-desktop .content form .right .emailFetchName{
    padding: 20px 0px;
}
.confirm-desktop .content form .right p {
    color: #0F172A;
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}
.confirm-desktop .content form .inputField {
    border: 1px solid #AEB1B8;
    border-radius: 0;
    color: #353C4D;
    font-family: "Inter";
    font-weight: 500;
    font-size: 12.28px;
    line-height: 17.54px;
    padding: 12px 10px;
}
.confirm-desktop .content form .submitForm .btn-submit {
    background: #2384C1;
    color: white;
    border-radius: 4px;
    padding: 10px 50px;
    font-family: "Inter", "Inter Fallback: Arial";
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
}

/* =========== Mobile View Css =========== */
.confirm-mobile .content {
    padding: 0px 25px;
}
.confirm-mobile .topHeading {
    color:#0F172A;
    font-family: "Inter";
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
}
.confirm-mobile .content .title {
    font-family: "Inter";
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
}
.confirm-mobile .content form .top{
    background-color: #F6F6F8;
    padding:10px;    
}
.confirm-mobile .content form .bottom{
    background-color: #F6F6F8;
    padding:10px;    
}
.confirm-mobile .content form .left{
    background-color: #F6F6F8;
    padding: 5px 5px 5px 5px;
    display: flex;
    flex-direction: column;
}
.confirm-mobile .content form label {
    color: #0F172A;
    font-family: "Inter";
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 0px;
}
.confirm-mobile .content form .right {
    padding: 5px 5px 5px 5px;
}
.confirm-mobile .content form .right .emailFetchName {
    color: #0F172A;
    font-family: "Inter";
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    padding:11px 0px;
}
.confirm-mobile .content form .inputField {
    border: 1px solid #AEB1B8;
    border-radius: 0;
    color: #353C4D;
    font-family: "Inter";
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    padding: 12px 10px;
}
.confirm-mobile .content form .submitForm .btn-submit {
    background: #2384C1;
    color: white;
    border-radius: 4px;
    padding: 10px 50px;
    font-family: "Inter";
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
}
</style>