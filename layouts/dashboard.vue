<script setup>
import Breadcrumbs from "~/components/layout/Breadcrumbs.vue";
</script>
<template>
  <div>
    <!--TODO: <ClientOnly>
      <Breadcrumbs />
      <template #fallback>
        <div class="flex justify-center items-center h-screen">
          <div class="text-gray-500">Loading...</div>
        </div>
      </template>
    </ClientOnly> -->
    <LayoutHeader />
    <Breadcrumbs />
    <div class="dashboard-container d-flex">
      <!-- Left Sidebar -->
      <nav class="sidebar desktop-view" style="padding: 20px;width: 100%;max-width: 250px;">
        <ul>
          <li>
            <NuxtLink to="/dashboard/profile"
              ><i class="icon-sidebar profile-icon"></i>プロフィール
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dashboard/saved-search"
              ><i class="icon-sidebar saved-icon"></i>保存した検索</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/dashboard/review"
              ><i class="icon-sidebar review-icon"></i>私のレビュー</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/dashboard/favorites"
              ><i class="icon-sidebar fav-icon"></i>お気に入り
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dashboard/inquiry"
              ><i class="icon-sidebar inq-icon"></i>お問い合わせ履歴</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/dashboard/search-history"
              ><i class="icon-sidebar search-icon"></i>検索履歴</NuxtLink
            >
          </li>
        </ul>
      </nav>

      <!-- Right Content -->
      <section class="content" style="flex: 1; padding: 20px">
        <slot />
      </section>
    </div>
    <LayoutFooter />
  </div>
</template>

<style scoped>
.dashboard-container .sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dashboard-container .sidebar li {
  margin-bottom: 10px;
}

.dashboard-container .sidebar a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
  border-radius: 4px;
  transition: background 0.3s;
  color: #475569;
  font-family: "Inter";
  font-weight: 5;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-content: center;
  gap: 10px;
}

/* Active link style */
.dashboard-container .sidebar a.router-link-exact-active {
  background-color: #d4ecfa;
  color: #2384c1;
  font-weight: bold;
  border-right: 3px solid #2384c1;
  border-radius: 0;
  font-weight: 600;
}

.dashboard-container ul li i {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url(/assets/images/dashboardImage.webp);
  background-repeat: no-repeat;
  background-position: 0 0; /* left column = grayscale */
  background-size: 37px;
}

/* Active link ke liye */

.profile-icon {
  background-position: 0 0;
}
.router-link-active .profile-icon {
  background-position: -18px 0;
}

.saved-icon {
  background-position: 0 -18px !important;
}
.router-link-active .saved-icon {
  background-position: -18px -18px !important;
}

.review-icon {
  background-position: 0 -36px !important;
}
.router-link-active .review-icon {
  background-position: -18px -36px !important;
}

.fav-icon {
  background-position: 0 -54px !important;
}
.router-link-active .fav-icon {
  background-position: -18px -54px !important;
}

.inq-icon {
  background-position: 0 -72px !important;
}
.router-link-active .inq-icon {
  background-position: -18px -72px !important;
}

.search-icon {
  background-position: 0 -90px !important;
}
.router-link-active .search-icon {
  background-position: -18px -90px !important;
}
</style>