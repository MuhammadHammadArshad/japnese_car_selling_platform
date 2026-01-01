<script setup>
let activeIndex = ref(0);
// let urls = reactive(["/", "/search", "/search-details", "/", "/", "/", "/"]);
let urls = reactive([
  { path: "/", label: "中古車" },
  { path: "/search", label: "輸入車" },
  { path: "/catalog", label: "カタログ" },
  { path: "/dealer-details", label: "中古車販売店" },
  { path: "/about", label: "保険/ローン/他" },
  { path: "/new-car", label: "車買取" },
  { path: "/blog", label: "お役立ち記事" },
]);
function setActive(index) {
  activeIndex.value = index;
}
import { ref, onMounted } from "vue";
import { useAuthStore } from "~/stores/auth";
import { navigateTo } from "#app";

const auth = useAuthStore();

const dropdownVisible = ref(false);

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};
const logout = () => {
  auth.logout();
  navigateTo("/login");
};

// onMounted(() => {
//   auth.loadToken();
// });
</script>

<template>
  <div>
    <header class="desktop-view">
      <div class="headerSearch pb-1">
        <div class="container">
          <div class="row align-items-center my-3 pt-1">
            <!-- Logo Section -->
            <div class="col-12 col-md-2 brand-logo-area">
              <NuxtLink class="brand-logo" to="/" aria-label="Homepage">
                <NuxtImg
                  src="/assets/images/header-logo.webp"
                  alt="Company-Logo"
                  width="136"
                  height="45"
                  class="img-fluid"
                  loading="lazy"
                />
              </NuxtLink>
            </div>

            <!-- Search Form Section -->
            <div class="col-12 col-md-7">
              <LazyHomeSearchBar />
            </div>

            <!-- Right Side List Section -->
            <!-- <div class="col-12 col-md-3 right-list">
              <ul
                class="list-unstyled d-flex mb-0 align-items-center justify-content-end"
              >
                <li
                  class="signin mx-3 d-flex align-items-center justify-content-between"
                >
                  <NuxtLink
                    to="/register/email"
                    class="text-decoration-none"
                    aria-label="Sign in"
                    >サイトマップ</NuxtLink
                  >
                  <NuxtLink
                    to="/dashboard/profile"
                    class="text-decoration-none"
                  >
                    <NuxtImg
                      src="/assets/images/singUpLogo.webp"
                      alt="Sign-in icon"
                      class="img-fluid ms-3"
                      width="40"
                      height="40"
                      loading="lazy"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </div> -->

            <div class="col-12 col-md-3 right-list relative">
              <ul
                class="list-unstyled d-flex mb-0 align-items-center justify-content-end"
              >
                <li
                  class="signin mx-3 d-flex align-items-center justify-content-between"
                  style="cursor: pointer;"
                >
                  <NuxtLink
                    to="/register/email"
                    class="text-decoration-none"
                    aria-label="Sign in"
                    
                  >
                    サイトマップ
                  </NuxtLink>

                  <!-- Avatar + Dropdown -->
                  <div>
                    <div
                      v-if="auth.isLoggedIn"
                      class="relative"
                      @click="toggleDropdown"
                    >
                      <NuxtImg
                        src="/assets/images/singUpLogo.webp"
                        alt="Sign-in icon"
                        class="img-fluid ms-3 cursor-pointer"
                        width="40"
                        height="40"
                        loading="lazy"
                      />

                      <!-- Dropdown -->
                      <div v-if="dropdownVisible">
                        <ul class="userListForProfile">
                          <li>
                            <NuxtLink
                              to="/dashboard/profile"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Profile
                            </NuxtLink>
                          </li>
                          <li>
                            <NuxtLink
                              to="/settings"
                              class="block px-4 py-2 hover:bg-gray-100"
                            >
                              Settings
                            </NuxtLink>
                          </li>
                          <li>
                            <button
                              @click.stop="logout"
                              class="block w-full text-left px-4 py-2 bg-transparent hover:bg-gray-100"
                            >
                              Log out
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <!-- If user is NOT logged in -->
                    <p
                      v-else
                      @click="$router.push('/login')"
                      class="m-0 ps-3"
                      style="cursor: pointer; color:#5D6370; font-weight:600; font-size:14px;"
                    >
                      ログイン
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Mega Menu Section -->
      <div class="mega-menu-section m-0 border-top">
        <div class="container">
          <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li
                      class="nav-item"
                      v-for="(item, index) in urls"
                      :key="index"
                    >
                      <NuxtLink
                        :to="item.path"
                        class="nav-link"
                        :class="{ active: activeIndex === index }"
                        @click="setActive(index)"
                      >
                        {{ item.label }}
                      </NuxtLink>
                    </li>
                    <!-- >中古車 -->
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <section class="mobile_view">
      <div class="top d-flex justify-content-between align-items-center p-2">
        <div class="left d-flex gap-3 align-items-center ps-2">
          <NuxtImg
            src="/assets/images/mobileBar.webp"
            alt="bars"
            class="img-fluid"
            loading="lazy"
            width="16"
            height="16"
          />
          <NuxtImg
            src="/assets/images/header-logo.webp"
            alt="Company Logo"
            class="img-fluid"
            loading="lazy"
            width="70"
            height="23"
          />
        </div>
        <div class="right">
          <NuxtImg
            src="/assets/images/mobileHeart.webp"
            alt="heart"
            class="img-fluid me-2"
            loading="lazy"
            width="30"
            height="30"
          />
          <NuxtImg
            src="/assets/images/mobileClock.webp"
            alt="clock"
            class="img-fluid"
            loading="lazy"
            width="30"
            height="30"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.headerSearch .text-decoration-none {
  color: #5d6370;
  font-family: "Inter", serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  position: relative;
  bottom: 1px;
}
.mega-menu-section .navbar .navbar-nav .nav-item .nav-link {
  padding: 10px 18px;
  margin: 0px 16px;
  color: #141817;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-top: 3px solid transparent;
}
.mega-menu-section .navbar .navbar-nav .nav-item .nav-link.active {
  color: #2384c1;
  border-top: 3px solid #2384c1;
}
.nav-item {
  cursor: pointer;
}
.userListForProfile {
  position: absolute;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: white;
  text-align: center;
  z-index: 1;
}
.userListForProfile li a {
  color: black;
  text-decoration: none;
  line-height: 2.5;
}
.userListForProfile li:hover {
  background-color: #ededf1;
  cursor: pointer;
}
</style>
