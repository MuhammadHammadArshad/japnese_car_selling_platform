<script setup>
</script>

<template>
  <div>
    <div class="searchByPrefecture desktop-view">
      <div class="container">
        <div class="row my-4">
          <div class="tagsTitle">
            <CommonHeading title="都道府県から探す" />
          </div>

          <div class="row row-cols-1 row-cols-md-2 g-3 m-0">
            <LazyCommonSearchByPrefectureCards />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.searchByPrefecture .tagsSection .left-tag .left {
  color: #08202e;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.searchByPrefecture .tagsSection .left-tag .right {
  color: #2384c1;
  font-family: "Inter";
  font-size: 11.8px;
  font-weight: 500;
  line-height: 18px;
  position: relative;
  left: 85px;
}
.searchByPrefecture .tagsSection .left-tag .right:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  cursor: pointer;
}
.searchByPrefecture .tagsSection .right-tag .left {
  color: #08202e;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  white-space: nowrap;
}
.searchByPrefecture .tagsSection .right-tag .right {
  color: #2384c1;
  font-family: "Inter";
  font-size: 11.8px;
  font-weight: 500;
  line-height: 18px;
}
.searchByPrefecture .tagsSection .right-tag .right:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  cursor: pointer;
}

.place-name {
  width: 100px; /* Adjust this width as needed */
  font-weight: bold;
}

.place-location {
  word-wrap: break-word;
  white-space: normal;
}
</style>
