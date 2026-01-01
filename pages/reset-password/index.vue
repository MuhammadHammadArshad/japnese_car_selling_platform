<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRuntimeConfig, useCookie } from "#app";
import { useLoader } from "~/composables/useLoader";

const { showLoader, hideLoader } = useLoader();
const config = useRuntimeConfig();
const router = useRouter();

const email = ref("");
const token = ref("");
const password = ref("");
const cpassword = ref("");
const error = ref(null);
const success = ref(false);

onMounted(() => {
  if (history.state && history.state.email && history.state.token) {
    email.value = history.state.email;
    token.value = history.state.token;
  } else {
    router.push("/forget-password");
  }
});

const submitForm = async () => {
  error.value = null;
  success.value = false;

  if (!password.value || !cpassword.value) {
    error.value = "Please enter and confirm your password.";
    return;
  }

  if (password.value !== cpassword.value) {
    error.value = "Passwords do not match.";
    return;
  }

  try {
    showLoader();
    await useFetch(`${config.public.baseUrl}/sanctum/csrf-cookie`, {
      credentials: "include",
    });

    const xsrf = useCookie("XSRF-TOKEN");
    const csrfToken = xsrf.value;

    const res = await $fetch(`${config.public.baseUrl}/reset-password`, {
      method: "POST",
      credentials: "include",
      headers: {
        "X-XSRF-TOKEN": csrfToken,
      },
      body: {
        email: email.value,
        token: token.value,
        password: password.value,
        password_confirmation: cpassword.value,
      },
    });

    console.log("Reset Password Response:", res);

    if (res.success) {
      success.value = true;
      alert("パスワードが正常にリセットされました。");
      router.push("/login");
    } else {
      error.value = res.message || "Failed to reset password.";
    }
  } catch (err) {
    console.error("Reset Password Error:", err);
    error.value = "Something went wrong. Please try again.";
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
          <div class="content my-4">
            <p class="m-0 title mb-2 py-3 topHeading fw-bold text-center fs-4">
              ログインサポート
            </p>

            <form class="p-3" @submit.prevent="submitForm">
              <div class="mb-3">
                <label class="form-label fw-bold">メールアドレス</label>
                <input
                  type="email"
                  class="form-control shadow-none inputField"
                  v-model="email"
                  readonly
                />
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold">Token</label>
                <input
                  type="text"
                  class="form-control shadow-none inputField"
                  v-model="token"
                  readonly
                />
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold">New Password</label>
                <input
                  type="password"
                  class="form-control shadow-none inputField"
                  placeholder="Please Enter Your New Password"
                  v-model="password"
                />
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold">Confirm New Password</label>
                <input
                  type="password"
                  class="form-control shadow-none inputField"
                  placeholder="Please Enter Your Confirm New Password"
                  v-model="cpassword"
                />
              </div>

              <p class="text-danger mt-1" v-if="error">{{ error }}</p>
              <p class="text-success mt-1" v-if="success">
                パスワードが正常にリセットされました。
              </p>

              <div class="submitForm text-center my-4">
                <button type="submit" class="btn btn-submit w-100">
                  続ける
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

.email-desktop .content form .submitForm .btn-dontKnow {
  color: #2384c1;
  background: white;
  border-color: #2384c1;
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