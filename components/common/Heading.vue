<template>
  <h2 class="common-heading">{{ title }}</h2>
</template>


<script setup>
defineProps({
  title: String,
});
</script>

<style scoped>
.common-heading {
  font-size: 24px;
  color: #020408;
  font-family: "Sofia-Pro";
  font-weight: 600;
  line-height: 28.82px;
}
</style>