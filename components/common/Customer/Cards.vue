<script setup>
const reviews = [
  {
    id: 1,
    title: "ホンダ　フリード",
    author: "総合評価",
    star: `assets/images/home/star.webp`,
    heading: "ナビの出来の悪さ以外はそれなり。",
    text: "車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。",
    dated: "投稿日：2025/02/15",
    postedBy: "投稿者：Bu3",
  },
  {
    id: 2,
    title: "ホンダ　フリード",
    author: "総合評価",
    star: `assets/images/home/star.webp`,
    heading: "ナビの出来の悪さ以外はそれなり。",
    paragraph: "車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。",
    dated: "投稿日：2025/02/15",
    postedBy: "投稿者：Bu3",
  },
  {
    id: 3,
    title: "ホンダ　フリード",
    author: "総合評価",
    star: `assets/images/home/star.webp`,
    heading: "ナビの出来の悪さ以外はそれなり。",
    paragraph: "車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。",
    dated: "投稿日：2025/02/15",
    postedBy: "投稿者：Bu3",
  },
  {
    id: 4,
    title: "ホンダ　フリード",
    author: "総合評価",
    star: `assets/images/home/star.webp`,
    heading: "ナビの出来の悪さ以外はそれなり。",
    paragraph: "車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。",
    dated: "投稿日：2025/02/15",
    postedBy: "投稿者：Bu3",
  },
  {
    id: 5,
    title: "ホンダ　フリード",
    author: "総合評価",
    star: `assets/images/home/star.webp`,
    heading: "ナビの出来の悪さ以外はそれなり。",
    paragraph: "車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。",
    dated: "投稿日：2025/02/15",
    postedBy: "投稿者：Bu3",
  },
  {
    id: 6,
    title: "ホンダ　フリード",
    author: "総合評価",
    star: `assets/images/home/star.webp`,
    heading: "ナビの出来の悪さ以外はそれなり。",
    paragraph: "車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。",
    dated: "投稿日：2025/02/15",
    postedBy: "投稿者：Bu3",
  },
  {
    id: 7,
    title: "ホンダ　フリード",
    author: "総合評価",
    star: `assets/images/home/star.webp`,
    heading: "ナビの出来の悪さ以外はそれなり。",
    paragraph: "車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。",
    dated: "投稿日：2025/02/15",
    postedBy: "投稿者：Bu3",
  },
  {
    id: 8,
    title: "ホンダ　フリード",
    author: "総合評価",
    star: `assets/images/home/star.webp`,
    heading: "ナビの出来の悪さ以外はそれなり。",
    paragraph: "車は分かっていて買っているから問題ない。ナビの不出来が全て。せめて上級モデルと遜色ない機能を使えるディスプレイオーディオを選べたら良かった。",
    dated: "投稿日：2025/02/15",
    postedBy: "投稿者：Bu3",
  },
];
</script>

<template>
  <div class="reviewLeft" v-for="reviewList in reviews" :key="reviewList.id">
    <div class="top d-flex justify-content-between align-items-center mt-3">
      <p class="m-0 textArea">{{ reviewList.title }}</p>
      <div class="reward d-flex align-items-center">
        <p class="m-0 author">{{ reviewList.author }}</p>
        <NuxtImg
          :src="reviewList.star"
          alt="stars"
          class="img-fluid px-1"
          width="75"
          height="18"
        />
      </div>
    </div>

    <div class="titleMain">
      <p class="m-0 mt-2">{{ reviewList.heading }}</p>
    </div>

    <div class="para">
      <p class="m-0 pt-2">
        {{ reviewList.paragraph }}
      </p>
    </div>

    <div class="bottom d-flex mt-2">
      <p class="m-0">{{ reviewList.dated }}</p>
      <p class="m-0 mx-5">{{ reviewList.postedBy }}</p>
    </div>
  </div>
</template>


<style scoped>
.customerReviews .reviewLeft .top .textArea {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  font-family: "Inter";
  color: #0c1529;
}
.customerReviews .reviewLeft .top .author {
  color: #475569;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18px;
}
.customerReviews .reviewLeft .titleMain {
  color: #2384c1;
  font-size: 14px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 20px;
}
.customerReviews .reviewLeft .para {
  color: #1e293b;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18px;
}
.customerReviews .reviewLeft .bottom {
  color: #1e293b;
  font-size: 10px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18px;
}
.customerReviews .textLink p {
  font-size: 12.69px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16.96px;
  text-decoration: underline;
  cursor: pointer;
}
</style>