<template>
  <div class="skeleton-row"></div>
</template>

<style scoped>
.skeleton-row {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>


