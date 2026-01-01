<template>
  <div>
    <div class="search-form desktop-view">
  
      <form
        ref="searchWrapper"
        class="d-flex position-relative"
        role="search"
        aria-label="Search form"
        @submit.prevent = "handleSubmit"
      >
        <div class="input-group ms-3">
          <input
            type="text"
            v-model="input"
            id="searchInput"
            class="searchBar form-control shadow-none px-4"
            placeholder="例: 東京に合う"
            aria-label="Search Your Dream Car"
            autocomplete="off"
          />
          <button
            class="input-group-text"
            type="submit"
            aria-label="Submit search"
          >
            <NuxtImg
              src="/assets/images/search-icon.webp"
              alt="Search icon"
              class="img-fluid"
              loading="lazy"
            />
          </button>
        </div>

        <div
          id="suggestions"
          v-if="showDropdown && suggestions.length"
          class="dropdown-menu mt-5 bg-white show"
        >
          <div
            v-for="(item, index) in suggestions"
            :key="index"
            class="dropdown-item"
            @click="goToSearch(item)"
          >
            {{ item }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRuntimeConfig, useFetch } from '#app'
import { useRouter, useRoute  } from 'vue-router'

//Env se api ka base url call ho raha hai yaha per
const config = useRuntimeConfig()
const baseURL = config.public.apiBaseUrl
const route = useRoute()

//input user jo type kry wo yaha se response ho ga with debounce timeout k sath
const input = ref('')
const suggestions = ref([])
const showDropdown = ref(false)
const loading = ref(false)
let debounceTimeout = null
let ignoreNextInputWatch = false

//ye fallback agar user kuch type nai krta ho search kry to ye by default jaye ga
const fallbackSuggestions = ['Toyota', 'Honda', 'Suzuki']

//ye watch method hai yaha per user ki jo value ho ge updated wo check ho ge jab three character miley match ho gay otherwise fallback chaly ga
watch(input, (newVal) => {
  if (ignoreNextInputWatch) {
    ignoreNextInputWatch = false
    return
  }
  clearTimeout(debounceTimeout)

  if (newVal.length < 3) {
    suggestions.value = []
    showDropdown.value = false
    return
  }

  debounceTimeout = setTimeout(async () => {
    loading.value = true
    const matchedFallback = fallbackSuggestions.filter(f =>
      newVal.toLowerCase().startsWith(f.toLowerCase())
    )

    //yaha per api call ho ge or data show ho ga agar user ko koi error ya no data avaiable hai to wo suggestion main show ho jaye ga
    try {
      const query = encodeURIComponent(newVal)
      const url = `${baseURL}/auto-complete?query=${query}`
      const { data, error } = await useFetch(url)

      if (error.value || !data.value || !data.value.status) {
        suggestions.value = matchedFallback.length ? matchedFallback : ['No data available']
      } else {
        const apiSuggestions = data.value.data || []
        if (apiSuggestions.length === 0 && matchedFallback.length) {
          suggestions.value = matchedFallback
        } else if (apiSuggestions.length === 0) {
          suggestions.value = ['No data available']
        } else {
          suggestions.value = apiSuggestions
        }
      }
    } catch (e) {
      suggestions.value = matchedFallback.length ? matchedFallback : ['No data available']
    } finally {
      showDropdown.value = true
      loading.value = false
    }
  }, 300)
})

//user redirect search page when he clicked suggestion dropdown
const router = useRouter()

function goToSearch(item) {
  ignoreNextInputWatch = true
  input.value = item
  showDropdown.value = false
}
function handleSubmit() {
  if (!input.value) return
  router.push({ path: '/search', query: { q: input.value } })
  showDropdown.value = false
}



// Clear input on form
watch(
  () => route.fullPath,
  () => {
    input.value = ''
    showDropdown.value = false
  }
)
// On component mount: clear input if on /search /search-detail /home and any other router
onMounted(() => {
  if (!route.fullPath.startsWith('/search')) {
    input.value = ''
  } else if (route.query.q) {
    ignoreNextInputWatch = true
    input.value = route.query.q
  }
})


// agar user bahar kahi b click kry to suggestion hide ho jaye ge is code ko use kr k
const searchWrapper = ref(null)

function handleClickOutside(event) {
  if (searchWrapper.value && !searchWrapper.value.contains(event.target)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
<style scoped>
.headerSearch .search-form .input-group {
  height: 50px;
}
.headerSearch .search-form .input-group .searchBar {
  background-color: #ededf1;
  color: #2f2b43;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 500;
}
.headerSearch .search-form .input-group .input-group-text {
  background-color: #0c1529;
  border: 2px;
  width: 8%;
  display: flex;
  justify-content: center;
}
#suggestions {
  position: absolute;
  top: 5%;
  left: 17px;
  right: 0px;
  z-index: 1000;
  width: calc(100% - 3%);
  border-radius: 8px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
#suggestions .dropdown-item {
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    font-family: "Inter";
    color: #5D6370;
    line-height: 18px;
}
</style>
