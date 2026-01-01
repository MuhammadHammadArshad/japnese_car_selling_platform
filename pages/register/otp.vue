<script setup>
useHead({
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useFetch, useRuntimeConfig, useCookie } from "#app";
import { useLoader } from "~/composables/useLoader";

const router = useRouter();
const config = useRuntimeConfig();
const { showLoader, hideLoader } = useLoader();

const enteredOtp = ref("");
const email = ref("");
const error = ref("");
const loading = ref(false);

onMounted(() => {
  email.value = sessionStorage.getItem("email") || "";
  // enteredOtp.value = sessionStorage.getItem("otp") || "";

  // if (!email.value || !enteredOtp.value) {
  if (!email.value) {
    error.value = "メール情報がありません。再度メール入力からお願いします。";
  }
});

const validateOtp = async () => {
  if (!email.value || !enteredOtp.value) return;

  error.value = "";
  loading.value = true;
  showLoader();

  try {
    await useFetch(`${config.public.baseUrl}/sanctum/csrf-cookie`, {
      credentials: "include",
    });
    const xsrf = useCookie("XSRF-TOKEN");
    const csrfToken = xsrf.value;

    const { data, error: fetchError } = await useFetch("/verify-otp", {
      baseURL: config.public.baseUrl,
      method: "POST",
      credentials: "include",
      headers: { "X-XSRF-TOKEN": csrfToken },
      body: { email: email.value, otp: enteredOtp.value },
    });

    if (fetchError.value) {
      const otpError = fetchError.value?.data?.errors?.otp?.[0];
      error.value =
        otpError || fetchError.value?.data?.message || "認証に失敗しました。";
      return;
    }

    router.push({
      path: "/register",
      query: { email: email.value },
    });

    sessionStorage.removeItem("otp");
  } catch (err) {
    error.value = "サーバーエラーが発生しました。";
    console.log("OTP validation error:", err);
  } finally {
    loading.value = false;
    hideLoader();
  }
};
</script>
<template>
  <div>
    <!-- Desktop View -->
    <div class="otp-desktop desktop-view">
      <div class="container">
        <div class="row">
          <div class="content my-4">
            <p class="m-0 title topHeading my-3 py-3 text-center fw-bold fs-4">
              会員情報の入力
            </p>
            <p class="m-0 mb-2 text-center">
              以下のメールアドレスに認証コードを送信しました。
              メールに記載された認証コードを入力し、「次へ」を押してください。
            </p>

            <form @submit.prevent="validateOtp">
              <div class="mb-3 d-flex gap-3 border pe-2">
                <div class="left w-100">
                  <label for="emailDesktop" class="form-label"
                    >メールアドレス</label
                  >
                  <label for="otpDesktop" class="form-label">認証コード</label>
                </div>

                <div class="right w-100">
                  <p class="m-0 emailFetchName">{{ email }}</p>
                  <input
                    type="text"
                    id="otpDesktop"
                    class="form-control shadow-none inputField"
                    placeholder="6桁の半角数字"
                    aria-describedby="otpHelp"
                    v-model="enteredOtp"
                  />
                  <p class="text-danger mt-1" v-if="error">{{ error }}</p>
                  <p class="m-0 mb-2">
                    認証コードは取得後10分で無効になります。
                  </p>
                </div>
              </div>

              <div class="submitForm text-center my-4">
                <button
                  type="submit"
                  class="btn btn-submit w-75"
                  :disabled="loading"
                >
                  <span v-if="loading">確認中...</span> <span v-else>確認へ</span>
                </button>
                <!-- <NuxtLink to="/register" class="btn btn-submit">次へ</NuxtLink> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="otp-mobile mobile_view">
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
                <label for="emailMobile" class="form-label">認証コード</label>
                <input
                  type="email"
                  id="emailMobile"
                  class="form-control shadow-none inputField"
                  placeholder="6桁の半角数字"
                  aria-describedby="emailHelp"
                />
                <label for="privacyPolicy" class="form-label">
                  認証コードは取得後30分で無効になります。
                </label>
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
.otp-desktop .content {
  padding: 0px 250px;
}
.otp-desktop .topHeading {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
.otp-desktop .content .title {
  border-top: 4px solid #2384c1;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.otp-desktop .content form .left {
  background-color: #f6f6f8;
  display: flex;
  flex-direction: column;
}
.otp-desktop .content form .left label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 20px 10px 0px 10px;
}
.otp-desktop .content form .right .emailFetchName {
  padding: 20px 0px;
}
.otp-desktop .content form .right p {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.otp-desktop .content form .inputField {
  border: 1px solid #aeb1b8;
  border-radius: 0;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  padding: 12px 10px;
}
.otp-desktop .content form .submitForm .btn-submit {
  background: #2384c1;
  color: white;
  border-radius: 4px;
  padding: 10px 50px;
  font-family: "Inter", "Inter Fallback: Arial";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

/* =========== Mobile View Css =========== */
.otp-mobile .content {
  padding: 0px 25px;
}
.otp-mobile .topHeading {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
.otp-mobile .content .title {
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.otp-mobile .content form .top {
  background-color: #f6f6f8;
  padding: 10px;
}
.otp-mobile .content form .bottom {
  background-color: #f6f6f8;
  padding: 10px;
}
.otp-mobile .content form label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.otp-mobile .content form .emailFetch {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.otp-mobile .content form .inputField {
  border: 1px solid #aeb1b8;
  border-radius: 0;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 12px 10px;
}
.otp-mobile .content form .submitForm .btn-submit {
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
