<script setup>
defineProps({
  title: {
    type: String,
    default: "キーワードでクルマを探す",
  },
  keywordSearch: {
    type: Array,
    default: [],
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="findCarByUsingKeywords desktop-view">
      <div class="container">
        <div class="row my-4">
          <div class="tabsTitle mb-1">
            <CommonHeading :title="title" />
          </div>

          <div class="d-flex flex-wrap gap-1">
            <div
              class="tabsSection d-flex mt-2"
              v-for="keyword in keywordSearch"
              :key="keyword.id"
            >
              <button>{{ keyword.value }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.findCarByUsingKeywords .tabsSection button {
  padding: 10px 25px;
  margin: 0px 2px;
  border-radius: 50px;
  border: 1px solid #d4d4d4;
  background-color: #f6f6f6;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  color: #154f74;
}
</style>