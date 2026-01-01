<script setup>
import { ref, onMounted } from "vue";
import {useRouter} from 'vue-router'
import { useRuntimeConfig, useFetch } from "#app";

const isLoggedIn = ref(false);
const maxFavoriteCar = ref(null);
const baseURL = useRuntimeConfig().public.apiBaseUrl;
const router = useRouter()

const showFavourite = async () => {
  await router.push('/dashboard/favorites')
}
// image tag main ye code kry ga agar img backend se 404 de to fallbackImg show ho ga otherwise key 
// real image show ho jaye ga

//============ Start
const fallbackImg = `${IMAGE_BASE}images/home/car.webp`
const imageSrc = ref(maxFavoriteCar?.image ?? fallbackImg)
//============ End



const fetchFavorites = async (token) => {
  try {
    const res = await fetch(`${baseURL}/favorite/list`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json(); 
    console.log("Favourite ka data show ho gaya hai", json);

    if (json.data && json.data.length) {
      const maxPriceCar = json.data.reduce((prev, curr) =>
        curr.price > prev.price ? curr : prev
      );
      maxFavoriteCar.value = maxPriceCar;
    }
  } catch (err) {
    console.error("Manual fetch error:", err);
  }
};

onMounted(() => {
  const token = localStorage.getItem("token");
  if (token) {
    isLoggedIn.value = true;
    fetchFavorites(token);
  }
});
</script>
<template>
  <div>
    <div class="homeFavourite desktop-view">
      <div class="container notLogin" v-if="!isLoggedIn">
        <div class="row my-4">
          <div class="col-12 col-md-4 mb-3">
            <div class="left p-3">
              <div
                class="top d-flex justify-content-between align-items-center"
              >
                <div class="textLeft">
                  <p class="m-0">お気に入り</p>
                </div>
                <div
                  class="textRight d-flex justify-content-between align-items-center"
                >
                  <NuxtImg
                    src="/assets/images/home/arrow-right-circle.webp"
                    class="img-fluid"
                    alt="arrow"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <p class="m-0">もっと見る</p>
                </div>
              </div>
              <div class="bottom">
                <p class="m-0 text-center pt-5 mx-3">
                  最近ブックマークした中古車の履歴を見ることができます。
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-3">
            <div class="center p-3">
              <div
                class="top d-flex justify-content-between align-items-center"
              >
                <div class="textLeft">
                  <p class="m-0">閲覧履歴</p>
                </div>
                <div
                  class="textRight d-flex justify-content-between align-items-center"
                >
                  <NuxtImg
                    src="/assets/images/home/arrow-right-circle.webp"
                    class="img-fluid"
                    alt="arrow"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <p class="m-0">もっと見る</p>
                </div>
              </div>
              <div class="bottom">
                <p class="m-0 text-center pt-5 mx-3">
                  最近チェックした中古車の履歴が見られます。
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-3">
            <div class="right p-3">
              <div
                class="top d-flex justify-content-between align-items-center"
              >
                <div class="textLeft">
                  <p class="m-0">検索履歴</p>
                </div>
                <div
                  class="textRight d-flex justify-content-between align-items-center"
                >
                  <NuxtImg
                    src="/assets/images/home/arrow-right-circle.webp"
                    class="img-fluid"
                    alt="arrow"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <p class="m-0">もっと見る</p>
                </div>
              </div>
              <div class="bottom">
                <p class="m-0 text-center pt-5 mx-3">
                  最近の履歴を見ることができます
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ====================== User Search History ======================= -->
      <div class="container login" v-if="isLoggedIn">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="left p-3">
              <div
                class="top d-flex justify-content-between align-items-center mb-3"
              >
                <div class="textLeft">
                  <p class="m-0">お気に入り</p>
                </div>
                <div
                  class="textRight d-flex justify-content-between align-items-center"
                >
                  <NuxtImg
                    src="/assets/images/home/arrow-right-circle.webp"
                    class="img-fluid"
                    alt="arrow"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <p class="m-0" @click="showFavourite">もっと見る</p>
                </div>
              </div>
<!-- :src="`${IMAGE_BASE}images/home/car.webp`" -->
<!-- :src="maxFavoriteCar?.image ?? `${IMAGE_BASE}images/home/car.webp`" -->
              <div class="center mb-3">
                <NuxtImg
                :src="imageSrc"
                  
                  class="img-fluid"
                  alt="Car"
                  loading="lazy"
                  width="142"
                  height="97"
                />
              </div>

              <div
                class="bottom-car d-flex justify-content-between align-items-center"
              >
                <p class="m-0 left">新年セール</p>
                <p class="m-0 right">{{ maxFavoriteCar?.city ?? "東京" }}</p>
              </div>
              <div class="bottom-car-title my-2">
                <!-- <p class="m-0">2022 トヨタ ランドクルーザー プラド T.x.</p> -->
                <p class="m-0">
                  {{
                    maxFavoriteCar
                      ? `${maxFavoriteCar.year} ${maxFavoriteCar.make} ${maxFavoriteCar.model}`
                      : "2022 トヨタ ランドクルーザー プラド T.x."
                  }}

                  <!-- {{ maxFavoriteCar?.search_text ?? "2022 トヨタ ランドクルーザー プラド T.x."}} -->
                </p>
              </div>
              <div
                class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
              >
                <p class="m-0 left">税込価格:</p>
                <p class="m-0 right">{{maxFavoriteCar?.price}} <span class="sub">百万 円</span></p>
              </div>
              <div
                class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
              >
                <p class="m-0 left">税抜き価格:</p>
                <p class="m-0 right" style="color: #17b26a">
                 {{maxFavoriteCar?.price}}  <span class="sub">百万 円</span>
                </p>
              </div>
              <div
                class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
              >
                <p class="m-0 left">年：</p>
                <!-- <p class="m-0 right-pan">2025年(R07)</p> -->
                <p class="m-0 right-pan">{{maxFavoriteCar?.year}}</p>
              </div>
              <div
                class="bottom-car-details d-flex justify-content-between align-items-center mb-2"
              >
                <p class="m-0 left">走行距離:</p>
                <p class="m-0 right-pan">{{maxFavoriteCar?.milage}}キロ</p>
              </div>
              <div class="bottom-para">
                <p class="m-0">TAX新車センター金利1.9％ 株式会社ブルームーン</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="left p-3">
              <div
                class="top d-flex justify-content-between align-items-center mb-3"
              >
                <div class="textLeft">
                  <p class="m-0">閲覧履歴</p>
                </div>
                <div
                  class="textRight d-flex justify-content-between align-items-center"
                >
                  <NuxtImg
                    src="/assets/images/home/arrow-right-circle.webp"
                    class="img-fluid"
                    alt="arrow"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <p class="m-0">もっと見る</p>
                </div>
              </div>

              <div class="center mb-3">
                <NuxtImg
                  :src="`${IMAGE_BASE}images/home/car.webp`"
                  class="img-fluid"
                  alt="Car"
                  loading="lazy"
                  width="142"
                  height="97"
                />
              </div>

              <div
                class="bottom-car d-flex justify-content-between align-items-center"
              >
                <p class="m-0 left">新年セール</p>
                <p class="m-0 right">東京</p>
              </div>
              <div class="bottom-car-title my-2">
                <p class="m-0">2022 トヨタ ランドクルーザー プラド T.x.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="left p-3">
              <div
                class="top d-flex justify-content-between align-items-center mb-3"
              >
                <div class="textLeft">
                  <p class="m-0">検索履歴</p>
                </div>
                <div
                  class="textRight d-flex justify-content-between align-items-center"
                >
                  <NuxtImg
                    src="/assets/images/home/arrow-right-circle.webp"
                    class="img-fluid"
                    alt="arrow"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <p class="m-0">もっと見る</p>
                </div>
              </div>

              <div class="bottom-para">
                <p class="m-0 para-dark">アルファード/30万円～、上限なし</p>
                <p class="m-0 para-light pt-2">
                  これらの条件で新しい物件を検索する
                </p>
              </div>
              <div class="bottom-para mt-4">
                <p class="m-0 para-dark">アルファード/30万円～、上限なし</p>
                <p class="m-0 para-light pt-2">
                  これらの条件で新しい物件を検索する
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.homeFavourite .left .top .textLeft p {
  font-size: 14px;
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  line-height: 20px;
}
.homeFavourite .left .top .textRight p {
  font-size: 12px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16px;
  text-decoration: underline;
  cursor: pointer;
}
.homeFavourite .left .bottom p {
  font-size: 14px;
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  line-height: 20px;
}
.homeFavourite .center .top .textLeft p {
  font-size: 14px;
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  line-height: 20px;
}
.homeFavourite .center .top .textRight p {
  font-size: 12px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16px;
  text-decoration: underline;
  cursor: pointer;
}
.homeFavourite .center .bottom p {
  font-size: 14px;
  color: #1e293b;
  font-family: "Inter";
  font-weight: 500;
  line-height: 20px;
}
.homeFavourite .right .top .textLeft p {
  font-size: 14px;
  color: #020408;
  font-family: "Inter";
  font-weight: 600;
  line-height: 20px;
}
.homeFavourite .right .top .textRight p {
  font-size: 12px;
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  line-height: 16px;
  text-decoration: underline;
  cursor: pointer;
}

/* ================ User Search Css =============== */
.homeFavourite .left .bottom-car .left {
  background-color: #ff4b44;
  color: white;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
  padding: 4px 10px;
}
.homeFavourite .left .bottom-car .right {
  color: #0c1529;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
}
.homeFavourite .left .bottom-car-title p {
  color: #1e293b;
  font-size: 13.5px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 20px;
}
.homeFavourite .left .bottom-car-details .left {
  color: #0c1529;
  font-size: 12px;
  font-weight: 400;
  font-family: "Inter";
  line-height: 16px;
}
.homeFavourite .left .bottom-car-details .right {
  color: #0c1529;
  font-size: 14.8px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 23.12px;
}
.homeFavourite .left .bottom-car-details .sub {
  color: #1e293b;
  font-size: 10.57px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 19.27px;
}
.homeFavourite .left .bottom-car-details .right-pan {
  color: #1e293b;
  font-size: 12.69px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 19.03px;
}
.homeFavourite .left .bottom-para p {
  color: #2384c1;
  font-size: 13.49px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 19.27px;
}
.homeFavourite .left .bottom-para .para-dark {
  color: #2384c1;
  font-size: 14px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 20px;
}
.homeFavourite .left .bottom-para .para-light {
  color: #475569;
  font-size: 12px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 16px;
}
</style>