<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-12">
        <NuxtErrorBoundary>
          <template #default>
            <h2>Product Details</h2>

            <!-- Loading Spinner -->
            <div
              v-if="pending"
              class="spinner-border text-warning"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>

            <!-- Error from useFetch -->
            <div v-if="error" class="text-danger">
              Error: {{ error.statusMessage || error.message }}
            </div>

            <!-- Product Data -->
            <div v-else-if="product">
              <p><strong>ID:</strong> {{ product.id }}</p>
              <p><strong>Title:</strong> {{ product.title }}</p>
              <p><strong>Price:</strong> {{ product.price }}</p>
              <p><strong>Category:</strong> {{ product.category }}</p>
              <img
                :src="product.image"
                alt="product"
                class="img-fluid"
                width="150"
              />
            </div>

            <!-- Navigation Buttons -->
            <div>
              <NuxtLink to="/testpage">Go back to Home</NuxtLink>
            </div>
            <div class="d-flex align-items-center justify-content-center mt-2">
              <NuxtLink class="btn btn-success" to="/testpage/add">
                Add Product
              </NuxtLink>
            </div>
          </template>

          <!-- Fallback UI for unexpected errors -->
          <template #error="{ error, clearError }">
            <div class="alert alert-danger">
              <h4>Something went wrong</h4>
              <p>{{ error.message }}</p>
              <button class="btn btn-outline-danger" @click="clearError">
                Try Again
              </button>
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

// Destructure `useFetch` result
const {
  data: product,
  error,
  pending,
} = await useLazyFetch(
  () => {
    const id = route.params.id;
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "Product ID is missing",
      });
    }

    return `https://fakestoreapi.com/products/${id}`;
  },
  {
    key: `product-${route.params.id}`, // useful for hydration caching
    server: true,
  }
);
</script>
