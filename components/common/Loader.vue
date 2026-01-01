<template>
  <div class="loader_initial">
    <img
      src="/assets/icons/blueLogo.svg"
      height="80"
      width="80"
      loading="eager"
      class="logo"
      alt=""
    />
  </div>
</template>

<script setup>
</script>

<style scoped>
.loader_initial {
  position: fixed; 
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(212 220 225 / 67%);
  z-index: 9999;
}
.loader_initial img{
  z-index: 2;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.logo {
  animation: spin 1.2s linear infinite;
}
</style>