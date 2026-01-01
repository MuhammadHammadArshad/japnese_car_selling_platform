<script setup>
import { useAuthStore } from "~/stores/auth";
import { navigateTo } from "#app";
import { useLoader } from "~/composables/useLoader";
import { useRouter } from 'vue-router'

const email = ref("");
const password = ref("");
const errors = ref({});
const generalError = ref("");
const auth = useAuthStore();
const { showLoader, hideLoader } = useLoader();
const config = useRuntimeConfig();
const router = useRouter()

const goToRegisterEmail = () => {
  router.push('/register/email')
}
const goForgetPassword = () => {
  router.push('/forget-password')
}

async function login() {
  errors.value = {};
  generalError.value = "";
  showLoader();

  try {
    // await useFetch(`${config.public.baseUrl}/sanctum/csrf-cookie`, {
    //   credentials: 'include'
    // })
    // const xsrf = useCookie('XSRF-TOKEN')
    // const csrfToken = xsrf.value
    // const { data } = await useFetch(`${config.public.baseUrl}/login`, {
    //   method: "POST",
    //   body: { email: email.value, password: password.value },
    //   credentials: 'include',
    //   headers: { 'Content-Type': 'application/json', 'X-XSRF-TOKEN': csrfToken },
    // });

    // if (!data.value || data.value.status === false) {
    //   generalError.value = data.value?.message || "Login failed";
    //   hideLoader();
    //   return;
    // }
    await auth.login({ email: email.value, password: password.value });

    navigateTo("/");
  } catch (err) {
    console.error("Login error:", err);
    generalError.value = "Something went wrong. Please try again.";
  } finally {
    hideLoader();
  }
}
</script>
<template>
  <div>
    <div class="login desktop-view">
      <div class="container">
        <div class="row">
          <div class="content my-4">
            <p class="m-0 title mb-2 py-3 text-center">
              ログイン認証
            </p>
            <form class="p-3" @submit.prevent="login">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fw-bold"
                  >メールアドレス</label
                >
                <input
                  type="email"
                  v-model="email"
                  class="form-control shadow-none inputField"
                  placeholder="name@example.co.jp"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <p v-if="errors.email" class="error">{{ errors.email }}</p>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label fw-bold"
                  >パスワード</label
                >
                <input
                  type="password"
                  v-model="password"
                  class="form-control shadow-none inputField"
                  id="exampleInputPassword1"
                />
                <p v-if="errors.password" class="error">
                  {{ errors.password }}
                </p>
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input shadow-none"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >このデバイスに記憶する</label
                >
              </div>

              <p v-if="generalError" class="error">{{ generalError }}</p>
              <div class="submitForm text-center my-4">
                <button type="submit" class="btn btn-submit w-100">
                  ログイン
                </button>
              </div>

              <div class="text-center">
                <label class="form-check-label" for="exampleCheck1"
                  >または</label
                >
              </div>

              <div class="submitForm2 text-center my-4">
                <button type="submit" class="btn btn-submit w-100" @click="goToRegisterEmail">
                  会員登録はこちら
                </button>
              </div>

              <div class="submitForm2 text-center my-4">
                <button type="submit" class="btn btn-submit w-100" @click="goForgetPassword">
                  ログインできない
                </button>
              </div>

              <div class="text-center">
                <label class="form-check-label" for="exampleCheck1"
                  >「ログイン」を押すことで、プライバシーポリシーおよび利用規約に同意したものとみなされます。</label
                >
              </div>
            </form>
          </div>

          <!-- <div class="content my-4">
            <p class="m-0 title mb-2 py-3 text-center">
              まだリクルートIDをお持ちでない方
            </p>
            <form @submit.prevent="goToRegisterEmail" class="p-3">
              <div class="submitForm text-center my-4">
                <button type="submit" class="btn btn-submit">
                  新規会員登録へ
                </button>
              </div>
            </form>
          </div> -->
        </div>
      </div>
    </div>

    <div class="login-mobile mobile_view">
      <div class="content my-4">
        <p class="m-0 title mb-2 py-3 text-center">リクルートIDをお持ちの方</p>
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
            <label for="exampleInputPassword1" class="form-label"
              >パスワード</label
            >
            <input
              type="password"
              class="form-control shadow-none inputField"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input shadow-none"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >ログインしたままにする</label
            >
          </div>
          <div class="submitForm text-center my-4">
            <button type="submit" class="btn btn-submit">ログイン</button>
          </div>
        </form>
      </div>

      <div class="content my-4">
        <p class="m-0 title mb-2 py-3 text-center">
          まだリクルートIDをお持ちでない方
        </p>
        <form class="py-1">
          <div class="submitForm text-center my-4">
            <button type="submit" class="btn btn-submit">新規会員登録へ</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login .content {
  padding: 0px 250px;
}
.login .content .title {
  border-top: 4px solid #2384c1;
  font-family: "Inter";
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
}
.login .content form {
  background-color: #f6f6f8;
}
.login .content form label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.login .content form .inputField {
  border: 1px solid #aeb1b8;
  border-radius: 0;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
  padding: 12px 10px;
}
.login .content form .form-check-input[type="checkbox"] {
  border-radius: 0;
}
.login .content form .submitForm .btn-submit {
  background: #2384c1;
  color: white;
  border-radius: 4px;
  padding: 10px 50px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.login .content form .submitForm2 .btn-submit {
  color: #2384c1;
  border-color:#2384c1;
  background: white;
  border-radius: 4px;
  padding: 10px 50px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

/* =========== Mobile View Css =========== */

.login-mobile .content {
  padding: 0px 25px;
}
.login-mobile .content .title {
  border-top: 4px solid #2384c1;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}
.login-mobile .content form {
  background-color: #f6f6f8;
}
.login-mobile .content form label {
  color: #0f172a;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.login-mobile .content form .inputField {
  border: 1px solid #aeb1b8;
  border-radius: 0;
  color: #353c4d;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding: 12px 10px;
}
.login-mobile .content form .form-check-input[type="checkbox"] {
  border-radius: 0;
}
.login-mobile .content form .submitForm .btn-submit {
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
