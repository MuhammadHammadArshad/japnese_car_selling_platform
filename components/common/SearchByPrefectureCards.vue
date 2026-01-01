
<script setup>
const prefecture = [
  {
    id: 1,
    placeName: "北海道",
    placeLocation: "北海道",
  },
  {
    id: 2,
    placeName: "北海道",
    placeLocation: "青森県 岩手県 宮城県 秋田県 山形県 福島県 青森県",
  },
  {
    id: 3,
    placeName: "北関東",
    placeLocation: "茨城県 栃木県 群馬県",
  },
  {
    id: 4,
    placeName: "首都圏",
    placeLocation: "東京都 神奈川県 埼玉県",
  },
  {
    id: 5,
    placeName: "甲信越",
    placeLocation: "山梨県 長野県 新潟県",
  },
  {
    id: 6,
    placeName: "北陸",
    placeLocation: "富山県 石川県 福井県",
  },
  {
    id: 7,
    placeName: "東海",
    placeLocation: "静岡県 岐阜県 宮城県 愛知県 三重県",
  },
  {
    id: 8,
    placeName: "関西",
    placeLocation: "滋賀県 滋賀県 大阪府 兵庫県 奈良県 和歌山県",
  },
  {
    id: 9,
    placeName: "中国",
    placeLocation: "広島県 岡山県 山口県 鳥取県 島根県",
  },
  {
    id: 10,
    placeName: "四国",
    placeLocation: "香川県 愛媛県 長崎県 高知県",
  },
  {
    id: 11,
    placeName: "九州",
    placeLocation: "福岡県 佐賀県 長崎県",
  },
  {
    id: 12,
    placeName: "中・南九州",
    placeLocation: "熊本県 宮崎県 鹿児島県 沖縄県",
  },
];
</script>

<template>
  <!-- <div class="col tagsSection" v-for="pref in prefecture" :key="pref.id">
    <div class="left-tag d-flex mb-2">
      <div class="left place-name">{{ pref.placeName }}</div>
      <div class="right place-location">{{ pref.placeLocation }}</div>
    </div>
  </div> -->
  <div class="col tagsSection" v-for="pref in prefecture" :key="pref.id">
    <NuxtLink :to="`/search/pref-${encodeURIComponent(pref.placeName)}`">
      <div class="left-tag d-flex mb-2">
        <div class="left place-name">{{ pref.placeName }}</div>
        <div class="right place-location">{{ pref.placeLocation }}</div>
      </div>
    </NuxtLink>
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
.tagsSection a{
  text-decoration:none;
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
