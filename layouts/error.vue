<template>
  <div class="error-page">
    <h1>{{ error.statusCode || "Error" }}</h1>
    <p v-if="error.statusCode === 404">
      Oops! The page you're looking for doesn't exist.
    </p>
    <p v-else-if="error.statusCode === 500">
      Oops! There was an internal server error.
    </p>
    <p v-else>{{ error.message || "Something went wrong!" }}</p>
    <NuxtLink to="/" class="btn-home">Go to Homepage</NuxtLink>
  </div>
</template>
<script setup>
defineProps(["error"]);
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
}
h1 {
  font-size: 4rem;
  color: #dc3545;
}
p {
  font-size: 1.5rem;
  color: #6c757d;
}
.btn-home {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.btn-home:hover {
  background-color: #0056b3;
}
</style>
