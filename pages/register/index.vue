<script setup>
useHead({
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

import { ref, computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFetch, useRuntimeConfig, useCookie } from "#app";
import { useLoader } from "~/composables/useLoader";

// State
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const { showLoader, hideLoader } = useLoader();

const email = ref("");
watchEffect(() => {
  if (route.query.email) email.value = String(route.query.email);
});

// form data
const password = ref("");
const passwordConfirmation = ref("");
const name = ref("");
const givenName = ref("");
const dobYear = ref("");
const dobMonth = ref("");
const dobDate = ref("");
const gender = ref("");

// validation errors
const errors = ref({});

// loading
const loading = ref(false);

// date options
const currentYear = new Date().getFullYear();
const years = computed(() =>
  Array.from({ length: 100 }, (_, i) => currentYear - i)
);
const months = Array.from({ length: 12 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);
const dates = Array.from({ length: 31 }, (_, i) =>
  String(i + 1).padStart(2, "0")
);

const submitRegister = async () => {
  errors.value = {};
  loading.value = true;

  const dob = `${dobYear.value}-${dobMonth.value}-${dobDate.value}`;
  showLoader();
  try {
    await useFetch(`${config.public.baseUrl}/sanctum/csrf-cookie`, {
      credentials: "include",
    });
    const xsrf = useCookie("XSRF-TOKEN");
    const csrfToken = xsrf.value;
    const { data, error: fetchError } = await useFetch("/register", {
      baseURL: config.public.baseUrl,
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": csrfToken,
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirmation.value,
        name: name.value,
        given_name: givenName.value,
        date_of_birth: dob,
        gender: gender.value,
      }),
    });

    if (fetchError.value) {
      // map field errors
      const errData = fetchError.value?.data;
      if (errData?.errors) {
        Object.entries(errData.errors).forEach(([k, v]) => {
          errors.value[k] = Array.isArray(v) ? v[0] : v;
        });
      } else {
        errors.value.general = errData?.message || "登録に失敗しました";
      }
      return;
    }

    // On success, navigate with submitted data
    router.push({
      path: "/register/confirm",
      query: {
        email: email.value,
        password: password.value,
        name: name.value,
        given_name: givenName.value,
        date_of_birth: dob,
        gender: gender.value,
      },
    });
  } catch (e) {
    errors.value.general = "サーバーエラーが発生しました";
  } finally {
    loading.value = false;
    hideLoader();
  }
};
</script>
<template>
  <div>
    <!-- Desktop View -->
    <div class="register-desktop desktop-view">
      <div class="container">
        <div class="row">
          <div class="content my-4">
            <p class="m-0 title topHeading my-3 py-3 fw-bold fs-4 text-center">
              会員情報の入力
            </p>
            <p class="m-0 mb-2 text-center">
              登録に使用するメールアドレスを入力してください。<br />
              ご入力いただいたメールアドレス宛に確認用メールをお送りします。<br />
              迷惑メール対策をされている場合は、top.satjapan.com
              からのメールを受信できるよう設定してください。
            </p>

            <form @submit.prevent="submitRegister">
              <div class="mb-3 d-flex gap-3 border pe-2">
                <div class="left w-25">
                  <label for="emailDesktop" class="form-label"
                    >メールアドレス</label
                  >
                  <label for="registerDesktop" class="form-label"
                    >パスワード<br /><span class="spanBg">※必須</span></label
                  >
                  <label for="registerDesktop" class="form-label"
                    >お名前<br /><span class="spanBg">※必須</span></label
                  >
                  <label for="registerDesktop" class="form-label"
                    >カナ<br /><span class="spanBg">※必須</span></label
                  >
                  <label for="registerDesktop" class="form-label"
                    >生年月日 <br /><span class="spanBg">※必須</span></label
                  >
                  <label for="registerDesktop" class="form-label"
                    >電話番号
                  </label>
                  <label for="registerDesktop" class="form-label">性別 </label>
                  <label for="registerDesktop" class="form-label"
                    >メールマガジン</label
                  >
                </div>

                <div class="right w-75">
                  <p class="m-0 email mt-3">{{ email }}</p>
                  <input
                    type="password"
                    id="password"
                    class="form-control shadow-none inputField w-50"
                    placeholder="（6〜200文字、半角英数字・記号を推奨）"
                    aria-describedby="registerHelp"
                    v-model="password"
                  />
                  <p class="text-danger mt-1" v-if="errors.password">
                    {{ errors.password }}
                  </p>
                  <hr />
                  <input
                    type="password"
                    id="confirmPassword"
                    class="form-control shadow-none inputField w-50"
                    placeholder="もう一度入力してください"
                    aria-describedby="registerHelp"
                    v-model="passwordConfirmation"
                  />
                  <p
                    class="text-danger mt-1"
                    v-if="errors.password_confirmation"
                  >
                    {{ errors.password_confirmation }}
                  </p>
                  <div class="d-flex mt-3">
                    <div class="lef-form d-flex align-items-center gap-2">
                      <p class="m-0">姓</p>
                      <input
                        type="text"
                        id="name"
                        class="form-control shadow-none inputField w-50"
                        placeholder="例）かもめ"
                        aria-describedby="registerHelp"
                        v-model="name"
                      />
                    </div>
                    <div class="right-form d-flex align-items-center gap-2">
                      <p class="m-0">名</p>
                      <input
                        type="text"
                        id="surname"
                        class="form-control shadow-none inputField w-50"
                        placeholder="例）太郎"
                        aria-describedby="registerHelp"
                        v-model="givenName"
                      />
                    </div>
                    <p class="text-danger mt-1" v-if="errors.name">
                      {{ errors.name }}
                    </p>
                  </div>
                  <hr />

                  <div class="d-flex mt-3 mb-5">
                    <div class="lef-form d-flex align-items-center gap-2">
                      <p class="m-0">セイ</p>
                      <input
                        type="text"
                        id="registerDesktop"
                        class="form-control shadow-none inputField w-50"
                        placeholder="例）カモメ"
                        aria-describedby="registerHelp"
                      />
                    </div>
                    <div class="right-form d-flex align-items-center gap-2">
                      <p class="m-0">メイ</p>
                      <input
                        type="text"
                        id="registerDesktop"
                        class="form-control shadow-none inputField w-50"
                        placeholder="例）タロウ"
                        aria-describedby="registerHelp"
                      />
                    </div>
                  </div>

                  <div class="d-flex my-3">
                    <div class="lef-form d-flex align-items-center gap-2">
                      <select
                        class="form-select rounded-0"
                        aria-label="Default select example"
                        style="width: 100px"
                        v-model="dobYear"
                      >
                        <option v-for="y in years" :key="y">{{ y }}</option>
                      </select>
                      <p class="m-0">年</p>

                      <select
                        class="form-select rounded-0"
                        aria-label="Default select example"
                        v-model="dobMonth"
                      >
                        <option v-for="m in months" :key="m">{{ m }}</option>
                      </select>
                      <p class="m-0">月</p>

                      <select
                        class="form-select rounded-0"
                        aria-label="Default select example"
                        v-model="dobDate"
                      >
                        <option v-for="d in dates" :key="d">{{ d }}</option>
                      </select>
                      <p class="m-0">日</p>
                    </div>
                    <p class="text-danger mt-1" v-if="errors.date_of_birth">
                      {{ errors.date_of_birth }}
                    </p>
                  </div>
                  <div class="d-flex mt-5">
                    <div
                      class="lef-form d-flex align-items-center gap-2"
                    
                    >
                      
                      <input
                        type="text"
                        id="registerDesktop"
                        class="form-control shadow-none inputField w-50"
                        placeholder="521561554"
                        aria-describedby="registerHelp"
                      
                      />
                      <p class="m-0 text-muted">ハイフンなしで入力</p>
                    </div>
                  </div>

                  <div class="radioButtons mb-5 sex d-flex gap-3 mt-2 pt-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="radio1"
                        value="Female"
                        v-model="gender"
                        checked
                      />
                      <label class="form-check-label" for="radio1">
                        女性
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="radio2"
                        value="Male"
                        v-model="gender"
                      />
                      <label class="form-check-label" for="radio2">
                        男性
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="radio3"
                        value="Other"
                        v-model="gender"
                      />
                      <label class="form-check-label" for="radio3">
                        自由記入
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="radio4"
                        value="PreferNot"
                        v-model="gender"
                      />
                      <label class="form-check-label" for="radio4">
                        回答しない
                      </label>
                    </div>
                    <p class="text-danger mt-1" v-if="errors.gender">
                      {{ errors.gender }}
                    </p>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkbox1"
                    />
                    <label class="form-check-label" for="checkbox1">
                      次回から自動ログインする<br />
                      ※共有パソコンをご利用の場合はオフにしてください。
                    </label>
                  </div>

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkbox2"
                    />
                    <label class="form-check-label" for="checkbox2">
                      お知らせメールを受け取る
                    </label>
                  </div>

                  <hr />

                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkbox2"
                    />
                    <label class="form-check-label" for="checkbox2">
                      お得な情報メールを受け取る<br />
                      登録したメールアドレスに重要なお知らせやお得な情報をお送りします
                      </label>
                  </div>
                </div>
              </div>

              <p class="m-0 text-center bottomPara">
                「確認画面へ」ボタンを押すことで、プライバシーポリシーおよび利用規約に同意したものとみなされます。
              </p>
              <div class="submitForm text-center my-4">
                <button
                  type="submit"
                  class="btn btn-submit"
                  :disabled="loading"
                >
                  <span v-if="loading">登録中…</span><span v-else>確認する</span>
                </button>
                <!-- <NuxtLink to="/register/confirm" class="btn btn-submit">次へ</NuxtLink> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="register-mobile mobile_view">
      <div class="container">
        <div class="row">
          <p class="m-0 topHeading mt-3">会員情報の入力</p>
          <div class="content my-4">
            <p class="m-0 title mb-2 pb-3">
              ご利用になるリクルートID（メールアドレス）を入力してください。<br />
              入力したメールアドレス宛に仮登録メールが届きます。<br />
              メール受信制限をされている方は point.recruit.co.jp
              からのメール受信を許可してください。
            </p>

            <form>
              <div class="mb-3 top">
                <label for="emailMobile" class="form-label"
                  >リクルートID (メールアドレス)</label
                ><br />
                <p class="m-0 emailFetch">name@example.com</p>
              </div>

              <div class="mb-3 bottom">
                <label for="emailMobile" class="form-label"
                  >パスワード<br />
                  ※英数記号混在を推奨</label
                >
                <input
                  type="email"
                  id="emailMobile"
                  class="form-control shadow-none inputField mb-2"
                  placeholder="6～200桁の半角英数記号"
                  aria-describedby="emailHelp"
                />
                <input
                  type="email"
                  id="emailMobile"
                  class="form-control shadow-none inputField"
                  placeholder="6～200桁の半角英数記号"
                  aria-describedby="emailHelp"
                />
                <!-- <label for="privacyPolicy" class="form-label">
                  認証コードは取得後30分で無効になります。
                </label> -->
              </div>

              <div class="mb-3 bottom">
                <p class="m-0 bottomTitle p-0 mb-3">お名前</p>
                <div class="inner d-flex align-items-center mb-3">
                  <div class="leftArea d-flex align-items-center gap-2">
                    <label for="emailMobile" class="form-label">姓</label>
                    <input
                      type="email"
                      id="emailMobile"
                      class="form-control shadow-none inputField"
                      placeholder="例）かもめ"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="right d-flex align-items-center gap-2">
                    <label for="emailMobile" class="form-label ms-2">名</label>
                    <input
                      type="email"
                      id="emailMobile"
                      class="form-control shadow-none inputField"
                      placeholder="例）かもめ"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>

                <div class="inner d-flex align-items-center">
                  <div class="leftArea d-flex align-items-center gap-2">
                    <label for="emailMobile" class="form-label">セイ</label>
                    <input
                      type="email"
                      id="emailMobile"
                      class="form-control shadow-none inputField"
                      placeholder="例）カモメ"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="right d-flex align-items-center gap-2">
                    <label for="emailMobile" class="form-label ms-2"
                      >メイ</label
                    >
                    <input
                      type="email"
                      id="emailMobile"
                      class="form-control shadow-none inputField"
                      placeholder="例）カモメ"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-3 bottom">
                <p class="m-0 bottomTitle p-0 mb-3">お名前</p>
                <div class="inner d-flex align-items-center mb-3 gap-3">
                  <select
                    class="form-select rounded-0"
                    aria-label="Default select example"
                    style="width: 100px"
                  >
                    <option selected>1997</option>
                    <option value="1">1997</option>
                  </select>

                  <select
                    class="form-select rounded-0"
                    aria-label="Default select example"
                    style="width: 100px"
                  >
                    <option selected>02</option>
                    <option value="1">02</option>
                  </select>

                  <select
                    class="form-select rounded-0"
                    aria-label="Default select example"
                    style="width: 100px"
                  >
                    <option selected>24</option>
                    <option value="1">24</option>
                  </select>
                </div>
              </div>

              <div class="mb-3 bottom">
                <p class="m-0 bottomTitle p-0 mb-3">お名前</p>
                <div class="inner d-flex align-items-center mb-3 gap-2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="radio1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="radio1"> 性別 </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="radio2"
                      value="option2"
                    />
                    <label class="form-check-label" for="radio2"> 男性 </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="radio3"
                      value="option3"
                    />
                    <label class="form-check-label" for="radio3">
                      自由記載
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="radio4"
                      value="option4"
                    />
                    <label class="form-check-label" for="radio4">
                      回答しない
                    </label>
                  </div>
                </div>
              </div>

              <div class="mb-3 bottom">
                <p class="m-0 bottomTitle p-0 mb-3">自動ログイン</p>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox1"
                  />
                  <label class="form-check-label" for="checkbox1">
                    次回から自動ログインする<br />
                    ※第三者と共有で使用するパソコンをご利用の場合は、「次回から自動ログインする」のチェックをはずしてご利用ください。自動ログインの詳細はこちら
                    。
                  </label>
                </div>
              </div>

              <div class="mb-3 bottom">
                <p class="m-0 bottomTitle p-0 mb-3">メールマガジン</p>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox2"
                  />
                  <label class="form-check-label" for="checkbox2">
                    リクルートIDニュース<br />
                    ※入力されたリクルートID（メールアドレス）に会員様限定のお知らせメールをお送りいたします。<br />
                    ※配信を希望されない場合は、チェックをお外しください
                  </label>
                  <br />
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox3"
                  />
                  <label class="form-check-label" for="checkbox3">
                    カーセンサー会員メルマガ<br />
                    ※入力されたリクルートID（メールアドレス）にお得情報、お役立ち記事などをお送りいたします。
                  </label>
                </div>
              </div>

              <div class="submitForm text-center my-4">
                <button type="submit" class="btn btn-submit">
                  仮登録メールを送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-desktop .topHeading {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
.register-desktop .content .title {
  border-top: 4px solid #2384c1;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.register-desktop .content form .left {
  background-color: #f6f6f8;
  display: flex;
  flex-direction: column;
}
.register-desktop .content form .left label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 20px 10px 45px 10px;
}
.register-desktop .content form .right .emailFetchName {
  padding: 20px 0px;
}
.register-desktop .content form .right p {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.register-desktop .content form .right label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
}
.register-desktop .content form .inputField {
  border: 1px solid #aeb1b8;
  border-radius: 0;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  padding: 12px 10px;
  margin: 20px 0px;
}
.register-desktop .content form .bottomPara {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.register-desktop .content form .submitForm .btn-submit {
  background: #2384c1;
  color: white;
  border-radius: 4px;
  padding: 10px 100px;
  font-family: "Inter", "Inter Fallback: Arial";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.spanBg {
  background-color: #2384c1;
  color: white;
  border-radius: 20px;
  padding: 2px 12px;
  font-family: "Inter", "Inter Fallback: Arial";
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
}

/* =========== Mobile View Css =========== */
.register-mobile .content {
  padding: 0px 25px;
}
.register-mobile .topHeading {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
.register-mobile .content .title {
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.register-mobile .content form .top {
  background-color: #f6f6f8;
  padding: 10px;
}
.register-mobile .content form .bottom {
  background-color: #f6f6f8;
  padding: 10px;
}
.register-mobile .content form .bottom .bottomTitle {
  color: #0f172a;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.register-mobile .content form label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.register-mobile .content form .emailFetch {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.register-mobile .content form .inputField {
  border: 1px solid #aeb1b8;
  border-radius: 0;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 12px 10px;
}

.register-mobile .content form .submitForm .btn-submit {
  background: #2384c1;
  color: white;
  border-radius: 4px;
  padding: 10px 50px;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}
</style>
