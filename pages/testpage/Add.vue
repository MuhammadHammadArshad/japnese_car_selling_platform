<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-12">
        <h2>Add Product</h2>
        <!-- Loading State -->
        <div
          v-if="productPending"
          class="spinner-border text-warning"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>

        <!-- Error State -->
        <div v-if="productError" class="text-danger">Error: {{ error }}</div>

        <!-- Product Data -->
        <div v-else-if="productData">
          <p><strong>ID:</strong> {{ productData.id }}</p>
          <p><strong>Title:</strong> {{ productData.title }}</p>
          <p><strong>Price:</strong> {{ productData.price }}</p>
          <p><strong>Category:</strong> {{ productData.category }}</p>
          <img
            :src="productData.image"
            alt="product"
            class="img-fluid"
            width="150"
          />
        </div>
        <div>
          <NuxtLink to="/testpage">Go back to Home</NuxtLink>
        </div>
        <div>
          <button class="btn btn-success" @click="AddProducts">
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const formData = {
  id: 22,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};
const productData = ref({});
const productError = ref(null);
const productPending = ref(null);
const AddProducts = async () => {
  const { data, pending, refresh, error } = await useFetch(
    "https://fakestoreapi.com/products",
    {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  productData.value = data.value;
  productPending.value = pending.value;
  productError.value = error.value;
};
</script>

<style>
</style>