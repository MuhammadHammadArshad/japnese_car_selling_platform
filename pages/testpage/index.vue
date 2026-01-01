<template>
  <div class="container py-4">
    <div class="row g-5">
      <div class="col-md-4">
        <input
          type="text"
          v-model="searchInput"
          class="form-control"
          name="Search"
          id="Search"
        />
      </div>
      <div class="col-md-7">
        <h2>{{ searchInput }}</h2>
        <p>{{ arrayItemsLength }}</p>
      </div>
      <div class="col-md-4">
        <Buttons :arrayItems="arrayItems"  @remove="RemoveArrayItem"/>
      </div>
      <div class="col-md-12">
        <table class="table">
          <tbody>
            <!-- Loading State -->
            <tr v-if="pending">
              <td colspan="100%">
                <div class="spinner-border text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </td>
            </tr>

            <!-- Error State -->
            <tr v-if="error">
              <td colspan="100%">
                <div class="text-danger">Error: {{ error.message }}</div>
              </td>
            </tr>

            <!-- Data Rendering -->
            <template v-else>
              <tr v-for="item in filteredData" :key="item.id">
                <td width="10%" valign="middle">
                  <NuxtLink :to="`/testpage/${item.id}`">{{
                    item.id
                  }}</NuxtLink>
                </td>
                <td width="20%">
                  <img
                    :src="item.image"
                    width="80"
                    height="80"
                    class="img-fluid"
                    loading="eager"
                    alt="product"
                  />
                </td>
                <td width="30%">{{ item.title }}</td>
                <td width="20%">{{ item.price }}</td>
                <td width="20%">{{ item.category }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchInput = ref("");
// const { get } = useApi()

// const data = ref([])
// const error = ref(null)
// const pending = ref(null)

// onMounted(async () => {
//   try {
//     pending.value = true
//     data.value = await get('/products')
//     pending.value = false
//   } catch (err) {
//     console.error(err.message)
//     error.value = err
//   }
// })
// Fetching data using useFetch
const { data, pending, refresh, error } = useFetch(
  "https://fakestoreapi.com/products"
);


const arrayItems = ref([1, 2, 3, 4, 5]);
const arrayItemsLength = computed(() => arrayItems.value.length);

const RemoveArrayItem = (index) => {
  arrayItems.value.splice(index, 1);
};

// Computed filtered data
const filteredData = computed(() => {
  if (!data.value) return [];
  const search = searchInput.value.toLowerCase();
  return data.value.filter(
    (item) =>
      item.title.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search)
  );
});
</script>

<style scoped></style>
