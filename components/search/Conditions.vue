<template>
    <div>
         <div class="favoriteCondition mt-3">
                  <div
                    class="inner d-flex justify-content-between align-items-center p-3 my-4"
                  >
                    <div class="left">
                      <p class="m-0 title">この条件を お気に入り</p>
                      <div class="honda d-flex mt-2 gap-2">
                        <p class="m-0">ホンダ</p>
                        <p class="m-0">2024</p>
                      </div>
                    </div>
                    <div class="right">
                      <button type="button" class="btn btn-save-line py-2">
                        <NuxtImg
                          src="/assets/images/icons/save-line.webp"
                          alt="save"
                          class="img-fluid"
                          loading="lazy"
                          width="17"
                          height="17"
                        />
                        検索アラートを設定する
                      </button>
                    </div>
                  </div>
                </div>
    </div>
</template>


<style scoped>
 .favoriteCondition .inner {
  background-color: #ecf5ff;
  border-radius: 8px;
}
 .favoriteCondition .inner .left .title {
  color: #020617;
  font-family: "Inter";
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
 .favoriteCondition .inner .left .honda p {
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  background-color: white;
  padding: 6px;
}
.favoriteCondition .inner .right .btn-save-line {
  background-color: #2384c1;
  color: white;
  font-size: 14px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>