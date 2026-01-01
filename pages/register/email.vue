<script setup>
useHead({
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFetch, useRuntimeConfig, useCookie } from "#app";
import { useLoader } from "~/composables/useLoader";

const email = ref("");
const error = ref("");
const router = useRouter();
const config = useRuntimeConfig();
const { showLoader, hideLoader } = useLoader();

const submitForm = async () => {
  error.value = "";
  showLoader();
  try {
    await useFetch(`${config.public.baseUrl}/sanctum/csrf-cookie`, {
      credentials: "include",
    });
    const xsrf = useCookie("XSRF-TOKEN");
    const csrfToken = xsrf.value;

    const { data, error: fetchError } = await useFetch("/request-otp", {
      baseURL: config.public.baseUrl,
      method: "POST",
      credentials: "include",
      headers: { "X-XSRF-TOKEN": csrfToken },
      body: { email: email.value },
    });

    if (fetchError.value) {
      const validationError = fetchError.value?.data?.errors?.email?.[0];
      error.value =
        validationError ||
        fetchError.value?.data?.message ||
        "エラーが発生しました";
      return;
    }
    const otp = data.value?.data?.otp;
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("otp", otp);

    router.push("/register/otp");
  } catch (err) {
    console.log("Error submitting email:", err);
    error.value = "サーバーエラーが発生しました。";
  } finally {
    hideLoader();
  }
};
</script>
<template>
  <div>
    <div class="email-desktop desktop-view">
      <div class="container">
        <div class="row">
          <!-- <p class="m-0 topHeading my-3">会員情報の入力</p> -->
          <div class="content my-4">
            <p class="m-0 title topHeading my-3 py-3 fw-bold text-center fs-4">
              アカウント新規登録
            </p>
            <p class="m-0 mb-2 text-center">
              ご利用になるメールアドレスを入力してください。
              入力いただいたメールアドレス宛に確認メールをお送りします。
              メール受信設定をしている方は
              「top.satjapan.com」からのメールを受信できるようにしてください。
            </p>

            <form class="p-3" @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fw-bold"
                  >メールアドレス</label
                >
                <input
                  type="email"
                  class="form-control shadow-none inputField"
                  placeholder="name@example.co.jp"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  v-model="email"
                />
                <p class="text-danger-message mt-1" v-if="error">{{ error }}</p>
              </div>

              <div class="mb-3">
                <label for="exampleLabel" class="form-label">
                 「ログイン」を押すことで、プライバシーポリシーおよび利用規約に同意したものとみなされます。
                </label>
              </div>

              <div class="submitForm text-center my-4">
                <button type="submit" class="btn btn-submit">
                  確認メールを送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="email-mobile mobile_view">
      <div class="container">
        <div class="row">
          <p class="m-0 topHeading mt-3">会員情報の入力</p>
          <div class="content my-4">
            <p class="m-0 title mb-2 pb-3">
              ご利用になるリクルートID（メールアドレス）を入力してください。<br />
              入力したメールアドレス宛に仮登録メールが届きます。
              メール受信制限をされている方は point.recruit.co.jp
              からのメール受信を許可してください。
            </p>
            <form class="p-3">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >リクルートID (メールアドレス)</label
                >
                <input
                  type="email"
                  class="form-control shadow-none inputField"
                  placeholder="name@example.com"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="mb-3">
                <label for="exampleLabel" class="form-label"
                  >下記に記載のプライバシーポリシー・規約に同意のうえ以下の「仮登録メールを送信」を押してください。</label
                >
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
.email-desktop .content {
  padding: 0px 275px;
}
.email-desktop .topHeading {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
.email-desktop .content .title {
  border-top: 4px solid #2384c1;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.email-desktop .content form {
  background-color: #f6f6f8;
}
.email-desktop .content form label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.email-desktop .content form .inputField {
  border: 1px solid #aeb1b8;
  border-radius: 0;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  padding: 12px 10px;
}
.email-desktop .content form .submitForm .btn-submit {
  background: #2384c1;
  color: white;
  border-radius: 4px;
  padding: 10px 50px;
  font-family: "Inter", "Inter Fallback: Arial";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.text-danger-message {
  color: red;
  font-family: "Inter";
  font-weight: 400;
  font-size: 12px;
}

/* =========== Mobile View Css =========== */
.email-mobile .content {
  padding: 0px 25px;
}
.email-mobile .topHeading {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}
.email-mobile .content .title {
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.email-mobile .content form {
  background-color: #f6f6f8;
}
.email-mobile .content form label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.email-mobile .content form .inputField {
  border: 1px solid #aeb1b8;
  border-radius: 0;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 12px 10px;
}
.email-mobile .content form .submitForm .btn-submit {
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
