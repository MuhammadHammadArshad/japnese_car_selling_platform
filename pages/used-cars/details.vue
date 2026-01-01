<template>
  <div class="slider-wrapper" id="gallery" ref="galleryRef">
    <div class="container">
      <div class="row">
        <div class="col-7">
          <div class="swiper-wrapper">
            <div class="custom-prev nav-button">
              <!-- Your SVG or icon here -->
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  transform="matrix(-1 0 0 1 32 0)"
                  fill="white"
                />
                <path
                  d="M15.9997 15.1667V12.6667L12.6663 16L15.9997 19.3333V16.8333H19.333V15.1667H15.9997ZM15.9997 7.66667C11.3997 7.66667 7.66634 11.4 7.66634 16C7.66634 20.6 11.3997 24.3333 15.9997 24.3333C20.5997 24.3333 24.333 20.6 24.333 16C24.333 11.4 20.5997 7.66667 15.9997 7.66667ZM15.9997 22.6667C12.3163 22.6667 9.33301 19.6833 9.33301 16C9.33301 12.3167 12.3163 9.33333 15.9997 9.33333C19.683 9.33333 22.6663 12.3167 22.6663 16C22.6663 19.6833 19.683 22.6667 15.9997 22.6667Z"
                  fill="#2A9FE8"
                />
              </svg>
            </div>
            <div class="custom-next nav-button">
              <!-- Your SVG or icon here -->
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="white" />
                <path
                  d="M16.0003 15.1667V12.6667L19.3337 16L16.0003 19.3333V16.8333H12.667V15.1667H16.0003ZM16.0003 7.66667C20.6003 7.66667 24.3337 11.4 24.3337 16C24.3337 20.6 20.6003 24.3333 16.0003 24.3333C11.4003 24.3333 7.66699 20.6 7.66699 16C7.66699 11.4 11.4003 7.66667 16.0003 7.66667ZM16.0003 22.6667C19.6837 22.6667 22.667 19.6833 22.667 16C22.667 12.3167 19.6837 9.33333 16.0003 9.33333C12.317 9.33333 9.33366 12.3167 9.33366 16C9.33366 19.6833 12.317 22.6667 16.0003 22.6667Z"
                  fill="#2A9FE8"
                />
              </svg>
            </div>
            <!-- Main Swiper -->
            <Swiper
              :thumbs="{ swiper: thumbsSwiper }"
              :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
              class="main-slider"
              spaceBetween="10"
              :allow-touch-move="false"
              @swiper="onSwiper"
            >
              <SwiperSlide v-for="(img, index) in imagesList" :key="index">
                <a
                  :href="img.src"
                  :data-pswp-width="img.w"
                  :data-pswp-height="img.h"
                  target="_blank"
                >
                  <img :src="img.src" class="main-image" />
                </a>
              </SwiperSlide>
              <div class="gallery-dynamic-count">
                {{ currentSlide }} / {{ totalSlides }}
              </div>
            </Swiper>
          </div>
          <div class="slider-content-wrapper">
            <div
              class="d-flex justify-content-start gap-2 align-items-center mb-2"
            >
              <span class="text">画像カテゴリ</span>
              <select class="form-select">
                <option value="1">全て</option>
                <option value="2">全て</option>
                <option value="3">全て</option>
                <option value="4">全て</option>
                <option value="5">全て</option>
              </select>
            </div>
            <div class="sub-slider-images">
              <div
                class="previous-btn"
                @click="prevGroup"
                :class="{ disabled: currentGroup === 0 }"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99967 7.85934V5.35934L5.66634 8.69268L8.99967 12.026V9.52601H12.333V7.85934H8.99967ZM8.99967 0.359344C4.39967 0.359344 0.666342 4.09268 0.666342 8.69268C0.666342 13.2927 4.39967 17.026 8.99967 17.026C13.5997 17.026 17.333 13.2927 17.333 8.69268C17.333 4.09268 13.5997 0.359344 8.99967 0.359344ZM8.99967 15.3593C5.31634 15.3593 2.33301 12.376 2.33301 8.69268C2.33301 5.00934 5.31634 2.02601 8.99967 2.02601C12.683 2.02601 15.6663 5.00934 15.6663 8.69268C15.6663 12.376 12.683 15.3593 8.99967 15.3593Z"
                  />
                </svg>
              </div>
              <div class="sub-gallery">
                <!-- list of images -->
                <ul
                  v-for="(group, groupIndex) in imageGroups"
                  :key="groupIndex"
                  v-show="groupIndex === currentGroup"
                >
                  <li
                    v-for="(img, index) in group"
                    :key="index"
                    @click="goToSlide(currentGroup * chunkSize + index)"
                    :class="{
                      active:
                        currentSlide - 1 === currentGroup * chunkSize + index,
                    }"
                  >
                    <img :src="img.src" loading="eager" alt="gallery image" />
                  </li>
                </ul>
              </div>
              <!-- list of images -->
              <div
                class="next-btn"
                @click="nextGroup"
                :class="{ disabled: currentGroup === imageGroups.length - 1 }"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.7181 7.85934V5.35934L12.0514 8.69268L8.7181 12.026V9.52601H5.38477V7.85934H8.7181ZM8.7181 0.359344C13.3181 0.359344 17.0514 4.09268 17.0514 8.69268C17.0514 13.2927 13.3181 17.026 8.7181 17.026C4.1181 17.026 0.384766 13.2927 0.384766 8.69268C0.384766 4.09268 4.1181 0.359344 8.7181 0.359344ZM8.7181 15.3593C12.4014 15.3593 15.3848 12.376 15.3848 8.69268C15.3848 5.00934 12.4014 2.02601 8.7181 2.02601C5.03477 2.02601 2.05143 5.00934 2.05143 8.69268C2.05143 12.376 5.03477 15.3593 8.7181 15.3593Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// Swiper CSS
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation"; // ✅ add navigation styles

// Swiper modules (for Nuxt 3 / Vite)
import { Thumbs, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Thumbs, Navigation]); // ✅ register both modules

// PhotoSwipe (fullscreen viewer)
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const thumbsSwiper = ref(null);

const imagesList = ref([
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/1.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/2.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/3.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/4.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/5.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/6.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/7.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/8.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/9.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/10.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/11.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/12.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/13.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/13.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/13.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/14.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/15.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/15.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/15.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/16.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/16.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/16.jpg",
    w: 1200,
    h: 800,
  },
  {
    src: "https://d36dyyw8x5qpnf.cloudfront.net/photos/prius/2025-07-23/0_82076100_1753284962/16.jpg",
    w: 1200,
    h: 800,
  },
]);

const swiperInstance = ref(null);
const currentSlide = ref(1);
const totalSlides = ref(imagesList.value.length);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  swiper.on("slideChange", () => {
    currentSlide.value = swiper.realIndex + 1;
  });
};

// Group imagesList into chunks of 16
const chunkSize = 16;
const imageGroups = computed(() => {
  const groups = [];
  for (let i = 0; i < imagesList.value.length; i += chunkSize) {
    groups.push(imagesList.value.slice(i, i + chunkSize));
  }
  return groups;
});

const currentGroup = ref(0);

const nextGroup = () => {
  if (currentGroup.value < imageGroups.value.length - 1) {
    currentGroup.value++;
  }
};

const prevGroup = () => {
  if (currentGroup.value > 0) {
    currentGroup.value--;
  }
};

const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index);
  }
}

onMounted(() => {
  const lightbox = new PhotoSwipeLightbox({
    gallery: "#gallery",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });
  lightbox.init();
});
</script>

<style scoped>
/* Gallery */
.swiper-wrapper {
  position: relative;
  height: auto !important;
}

.main-image {
  width: 100%;
  border-radius: 8px;
  max-width: 548px;
  max-height: 314px;
  min-height: 314px;
  object-fit: cover;
  height: auto;
  cursor: zoom-in;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
}
.custom-prev {
  left: 5px;
}
.custom-next {
  right: 5px;
}
.pswp--click-to-zoom.pswp--zoom-allowed .pswp__img {
  object-fit: contain;
}
.slider-content-wrapper {
  margin-top: 32px;
  background: #f6f6f8;
  padding: 10px;
}
.slider-content-wrapper .form-select {
  border-radius: unset;
  --bs-form-select-bg-img: url(/assets/images/home/caret-down.webp);
  background-repeat: no-repeat;
  background-size: 9px;
  width: 200px;
  height: 32px;
  border: 1px solid #aeb1b8;
  color: #353c4d;
  font-family: "Inter", "Inter Fallback: Arial";
  font-size: 12.28px;
  font-weight: 500;
  line-height: 17.54px;
  background-color: transparent;
}
.slider-content-wrapper .text {
  color: #1e293b;
  font-family: "Inter", "Inter Fallback: Arial";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.sub-slider-images {
  display: flex;
  align-items: center;
  gap: 10px;
}
/* prev and next btn */
.sub-slider-images .previous-btn,
.sub-slider-images .next-btn {
  height: 110px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.67px;
  cursor: pointer;
  user-select: none;
  fill: #2a9fe8;
}
.sub-slider-images .previous-btn.disabled,
.sub-slider-images .next-btn.disabled {
  pointer-events: none;
  fill: #cbd5e1;
}
.sub-slider-images .previous-btn.active,
.sub-slider-images .next-btn.active {
  fill: #2a9fe8;
}
/* prev and next btn */

.sub-slider-images .sub-gallery {
  flex-grow: 1;
}
.sub-slider-images .sub-gallery ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  row-gap: 10px;
  column-gap: 6.03px;
}
.sub-slider-images .sub-gallery img {
  width: 49.69px;
  height: 49.69px;
  object-fit: cover;
  cursor: pointer;
}
.gallery-dynamic-count {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(53, 60, 77, 0.8);
  color: white;
  padding: 7.68px;
  color: #fff;
  font-family: Lato;
  font-size: 11.007px;
  font-weight: 600;
  line-height: 15.725px;
  letter-spacing: -0.11px;
  z-index: 100;
  user-select: none;
}
.active-img {
  border: 3px solid #2384c1;
}
.sub-gallery ul li:hover::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 49.69px;
  height: 49.69px;
  border: 2px solid #ff6010;
  border-radius: 2px;
  pointer-events: none;
  z-index: 1;
}
.sub-gallery ul li.active::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 49.69px;
  height: 49.69px;
  border: 2px solid #ff6010;
  border-radius: 2px;
  pointer-events: none;
  z-index: 1;
}
.sub-gallery ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}
.sub-gallery ul li {
  position: relative;
}
</style>
