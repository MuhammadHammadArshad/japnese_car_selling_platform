<!-- <template>
  <div class="search-page">
    <input
  v-model="input"
  @input="onInput"
  @keydown.enter="submitSearch"
  placeholder="Search cars..."
  class="search-input"
/>

    <ul v-if="suggestions.length && !loadingSuggestions" class="suggestions">
  <li
    v-for="s in suggestions"
    :key="s.value"
    @click="select(s)"
    class="suggestion-item"
  >
    {{ s.value }}
  </li>
</ul>

    <div v-if="loadingResults">Loading results...</div>

    <div v-if="cars.length && !loadingResults" class="results">
      <h3>Results:</h3>
      <div
        v-for="car in cars"
        :key="car.id"
        class="car-result"
      >
        {{ car.make }} {{ car.model }} • {{ car.year }} • {{ car.variant }} • {{ car.location }}
      </div>
    </div>

    <div v-else-if="!loadingResults && searchTriggered">
      <p>No results found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { debounce } from 'lodash'

const input = ref('')
const suggestions = ref([])
const cars = ref([])
const loadingSuggestions = ref(false)
const loadingResults = ref(false)
const searchTriggered = ref(false)

function onInput() {
  fetchSuggestions()
}
function select(s) {
  input.value = s.value
  submitSearch()
}

// ✅ Suggestions
const fetchSuggestions = debounce(async () => {
  if (input.value.trim().length < 2) {
    suggestions.value = []
    return
  }

  loadingSuggestions.value = true

  const { data } = await useFetch('/api/suggest', {
    params: { q: input.value }
  })

  suggestions.value = data.value?.suggestions || []
  loadingSuggestions.value = false
}, 300)

// ✅ Search
async function submitSearch() {
  if (!input.value.trim()) return

  loadingResults.value = true
  searchTriggered.value = true
  suggestions.value = []

  const { data } = await useFetch('/api/search', {
    params: { q: input.value }
  })

  cars.value = data.value?.data || []
  loadingResults.value = false
}
</script>



<style scoped>
.search-page {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}
.search-input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}
.suggestions {
  background: #fff;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  max-height: 200px;
  overflow-y: auto;
}
.suggestion-item {
  padding: 8px;
  cursor: pointer;
}
.suggestion-item:hover {
  background: #eee;
}
.results {
  margin-top: 1rem;
}
.car-result {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
</style> -->
<template>
  <h2>Progressive Search</h2>
</template>

<script>
</script>

<style>

</style>