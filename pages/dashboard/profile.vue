<script setup>
import { ref } from 'vue'
import { useFetch, useRuntimeConfig, useCookie, useRouter } from '#app'
import { useAuthStore } from "~/stores/auth";
import { useLoader } from "~/composables/useLoader";

definePageMeta({
  layout: "dashboard",
  breadcrumb: "プロフィール",
  // middleware: 'auth' // optional if you have auth middleware
});

useHead({
  meta: [{ name: "robots", content: "noindex, nofollow" }],
});

const auth = useAuthStore();
const config = useRuntimeConfig();
const { showLoader, hideLoader } = useLoader();

const user = ref(null);
const error = ref("");

onMounted(async () => {
  try {
    showLoader();
    const { data, error: fetchError } = await useFetch(`${config.public.apiBaseUrl}/user`, {
      credentials: "include",
    });

    if (fetchError.value) {
      console.error(fetchError.value);
      error.value = "ユーザーデータの取得に失敗しました。";
      return;
    }

    user.value = data.value;
  } catch (err) {
    console.error("Error fetching user:", err);
    error.value = "Something went wrong.";
  } finally {
    hideLoader();
  }
});

// change password model
const currentPassword = ref('')
const newPassword = ref('')
const new_password_confirmation = ref('')

const router = useRouter()


const changePassword = async () => {
  if (newPassword.value !== new_password_confirmation.value) {
    alert('New password and confirm password do not match!')
    return
  }

  showLoader()
try {
  await useFetch(`${config.public.baseUrl}/sanctum/csrf-cookie`, {
      credentials: "include",
    });
    const xsrf = useCookie("XSRF-TOKEN");
    const csrfToken = xsrf.value;
    const { data, error: fetchError } = await useFetch(`${config.public.apiBaseUrl}/change-password`, {
      method: 'POST',
      credentials: "include",
      headers: { "X-XSRF-TOKEN": csrfToken },
      body: {
        current_password: currentPassword.value,
        new_password: newPassword.value,
        new_password_confirmation: new_password_confirmation.value,
      },
    })

    if (fetchError.value) {
      const message =
        fetchError.value?.data?.message ||
        'エラーが発生しました (An error occurred)'
      alert(message)
      return
    }

    alert('Password changed successfully!')

    const modalEl = document.getElementById('changePasswordModal')
    const modal = bootstrap.Modal.getInstance(modalEl)
    modal.hide()

    // Reset fields
    currentPassword.value = ''
    newPassword.value = ''
    new_password_confirmation.value = ''
  } catch (err) {
    console.error('Error changing password:', err)
    alert('サーバーエラーが発生しました (Server error occurred).')
  } finally {
    hideLoader()
  }
}
</script>
<template>
  <div>
    <div class="profile-desktop desktop-view">
      <p class="m-0 mb-4 topHeading">タケシのダ</p>
      <p class="m-0 title">アカウント</p>

      <div class="topSection d-flex justify-content-between my-3">
        <div class="col-md-2 left">
          <div class="mailing px-3">
            <p class="m-0 my-4 pb-3">メールアドレス</p>
            <p class="m-0 my-4">パスワード</p>
          </div>
        </div>

        <div class="col-md-8 center">
          <div class="contact px-3">
            <p v-if="user" class="m-0 my-4 pb-3">{{ user.email }}</p>
            <p v-else class="m-0 my-4 pb-3 text-muted">Loading...</p>
            <p class="m-0 my-4">************</p>
          </div>
        </div>

        <div class="col-md-2 right">
          <div class="modify d-flex flex-column align-items-center">
            <button type="button" class="btn btn-change my-3">変更する</button>
            <button type="button" class="btn btn-change" data-bs-toggle="modal"
      data-bs-target="#changePasswordModal">変更する</button>
          </div>

          <div
      class="modal fade"
      id="changePasswordModal"
      tabindex="-1"
      aria-labelledby="changePasswordModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="changePasswordModalLabel">
              Change Password
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form @submit.prevent="changePassword">
            <div class="modal-body">
              <div class="mb-3">
                <label class="form-label">Current Password</label>
                <input
                  type="password"
                  v-model="currentPassword"
                  class="form-control"
                  placeholder="Enter current password"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">New Password</label>
                <input
                  type="password"
                  v-model="newPassword"
                  class="form-control"
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Confirm Password</label>
                <input
                  type="password"
                  v-model="new_password_confirmation"
                  class="form-control"
                  placeholder="Confirm new password"
                  required
                />
              </div>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-success">
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
          
        </div>
      </div>

      <p class="m-0 title">プロフィール情報</p>

      <div class="topSection d-flex justify-content-between my-3">
        <div class="col-md-2 left">
          <div class="mailing px-3">
            <p class="m-0 my-4 pb-3">生年月日</p>
            <p class="m-0 my-4 pb-3">年齢</p>
            <p class="m-0 my-4 pb-3">郵便番号</p>
            <p class="m-0 my-4 pb-3">住所</p>
            <p class="m-0 my-4">電話番号</p>
          </div>
        </div>

        <div class="col-md-10 center">
          <div class="contact px-3">
            <p v-if="user" class="m-0 my-4 pb-2">{{ user.email }}</p>
            <p v-else class="m-0 my-4 pb-2 text-muted">Loading...</p>

            <p v-if="user" class="m-0 my-4 pb-2">{{ user.dob }}</p>
            <p v-else class="m-0 my-4 pb-2 text-muted">Loading...</p>

            <p class="m-0 my-4 py-2">〒4700162</p>
            <p class="m-0 my-4 pb-2" style="visibility: hidden">hidden</p>
            <p class="m-0 pt-2">登録がありません</p>
          </div>
        </div>
      </div>

      <p class="m-0 title">ニックネーム・公開範囲</p>

      <div class="topSection d-flex justify-content-between my-3">
        <div class="col-md-2 left">
          <div class="mailing px-3">
            <p class="m-0 my-4 pb-3">ニックネーム</p>
            <p class="m-0 my-4 pb-3">年齢</p>
            <p class="m-0 my-4">郵便番号</p>
          </div>
        </div>

        <div class="col-md-10 center">
          <div class="contact px-3">
            <p v-if="user" class="m-0 my-4 pb-2" style="visibility: hidden">
              {{ user.email }}
            </p>
            <p v-else class="m-0 my-4 pb-2 text-muted" style="visibility: hidden">
              Loading...
            </p>

            <p v-if="user" class="m-0 my-4 pb-2">{{ user.dob }}</p>
            <p v-else class="m-0 my-4 pb-2 text-muted">Loading...</p>

            <p class="m-0 my-4 pt-2">〒4700162</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.profile-desktop .topHeading {
  color: #141817;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}
.profile-desktop .title {
  color: #141817;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
}
.profile-desktop .topSection {
  border: 1px solid #94a3b8;
}
.profile-desktop .topSection .left {
  background-color: #f6f6f8;
}
.profile-desktop .topSection .left .mailing p {
  color: #0f172a;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
}
.profile-desktop .topSection .center .contact p {
  color: #0f172a;
  font-size: 12.28px;
  font-weight: 500;
  line-height: 17.54px;
}
.profile-desktop .topSection .right .modify .btn-change {
  border: 1px solid #d0d5dd;
  padding: 7px 23px;
  border-radius: 0px;
  margin: 10px 0px;
  color: #353c4d;
  font-weight: 500;
  font-size: 12.28px;
  line-height: 17.54px;
}
</style>