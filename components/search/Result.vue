<script setup>
// import { ref, computed, watchEffect } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
// import { useLoader } from '~/composables/useLoader'
// const { showLoader, hideLoader } = useLoader()

// const route = useRoute()
// const router = useRouter()

// const currentPage = ref(Number(route.query.page) || 1)
// const perPage = ref(Number(route.query.per_page) || 10)
// const searchQuery = ref('')
// const cars = ref([])
// const totalCars = ref(0)
// const totalPages = ref(1)
// const showText = true

// const baseURL = useRuntimeConfig().public.apiBaseUrl

// // 🧠 This function parses both path-based and ?q= query-based searches
// const getSearchQuery = () => {
//   // If `q` query param exists, use it directly
//   if (route.query.q) {
//     return route.query.q.toString()
//   }

//   // Else parse path-based filters like /mk-daihatsu/md-mira/...
//   const path = route.path.replace('/search/', '').toLowerCase()
//   const parts = path.split('/')

//   const filters = {}

//   parts.forEach((part) => {
//     if (part.startsWith('mk-')) filters.make = part.replace('mk-', '')
//     if (part.startsWith('md-')) filters.model = part.replace('md-', '')
//     if (part.startsWith('yr-')) filters.year = part.replace('yr-', '').replace(/-/g, ' to ')
//     if (part.startsWith('pr-')) filters.price = part.replace('pr-', '').replace(/-/g, ' to ')
//     if (part.startsWith('bt-')) filters.bodyType = part.replace('bt-', '')
//     if (part.startsWith('tr-')) filters.transmission = part.replace('tr-', '')
//   })

//   if (route.query.handle) filters.steering = route.query.handle.toString()

//   const terms = []
//   if (filters.make) terms.push(filters.make)
//   if (filters.model) terms.push(filters.model)
//   if (filters.year) terms.push(filters.year)
//   if (filters.price) terms.push(filters.price)
//   if (filters.bodyType) terms.push(filters.bodyType)
//   if (filters.transmission) terms.push(filters.transmission)
//   if (filters.steering) terms.push(filters.steering)

//   return terms.join(' ')
// }

// const fetchCars = async () => {
// showLoader()
//   try {
//     const { data, error } = await useFetch(`${baseURL}/search`, {
//       method: 'POST',
//       server: false,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: {
//         query: searchQuery.value,
//         per_page: perPage.value,
//         page: currentPage.value,
//       },
//     })

// if (!error.value && data.value?.status) {
//       cars.value = data.value.data.cars || []
//         cars.value.forEach(car => {
//         try {
//           car.galleryParsed = JSON.parse(car.gallery || '[]')
//         } catch {
//           car.galleryParsed = []
//         }
//       })
//       totalCars.value = data.value.data.total || 0
//       totalPages.value = Math.ceil(totalCars.value / perPage.value)
//     } else {
//       cars.value = []
//     }
//   } finally {
//     hideLoader()
//     window.scrollTo({ top: 0, behavior: 'instant' })
//   }
// }

// const testPageWithResults = async (pageToTest) => {
//     showLoader()
//   try {
//     const { data, error } = await useFetch(`${baseURL}/search`, {
//       method: 'POST',
//       server: false,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: {
//         query: searchQuery.value,
//         per_page: perPage.value,
//         page: pageToTest,
//       },
//     })

//     if (!error.value && data.value?.status) {
//       const results = data.value.data.cars || []
//       if (results.length > 0) {
//         cars.value = results
//         totalCars.value = data.value.data.total || 0
//         totalPages.value = Math.ceil(totalCars.value / perPage.value)
//         return true
//       }
//     }
//     return false
//   } finally {
//     hideLoader()
//     window.scrollTo({ top: 0, behavior: 'instant' })
//   }
// }

// const goToPage = async (page) => {
//   if (page < 1 || page > totalPages.value) return

//   // Try API first
//   const success = await testPageWithResults(page)

//   if (success) {
//     currentPage.value = page
//     updateRoute()
//   }
// }
// const changePerPage = async (newLimit) => {
//   perPage.value = newLimit
//   const success = await testPageWithResults(1) // Reset to first page
//   if (success) {
//     currentPage.value = 1
//     updateRoute()
//   }
// }

// const updateRoute = () => {
//   router.push({
//     path: route.path,// keep the same SEO path
//     query: {
//       ...route.query,
//       page: currentPage.value,
//       per_page: perPage.value,
//     },
//   })
// }

// // Pagination logic
// const paginationRange = computed(() => {
//   const groupSize = 10
//   const start = Math.floor((currentPage.value - 1) / groupSize) * groupSize + 1
//   return Array.from({ length: groupSize }, (_, i) => start + i).filter(p => p <= totalPages.value)
// })

// watchEffect(() => {
//   currentPage.value = Number(route.query.page) || 1
//   perPage.value = Number(route.query.per_page) || 10
//   searchQuery.value = getSearchQuery()
//   fetchCars()
// })

// const goToDetails = (slug) => {
//   if (!slug) return
//   router.push(`/search-details/${slug}`)
// }

//There is Two Query Parameter That I have Store One with query and second with Array Make[] Model[]

// ============================================= Start Old Code ===================================
// import { ref, computed, watchEffect } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
// import { useLoader } from '~/composables/useLoader'
// import { debounce } from 'lodash'

// const { showLoader, hideLoader } = useLoader()

// const route = useRoute()
// const router = useRouter()

// const currentPage = ref(Number(route.query.page) || 1)
// const perPage = ref(Number(route.query.per_page) || 10)
// const searchQuery = ref('')
// const cars = ref([])
// const totalCars = ref(0)
// const totalPages = ref(1)
// const showText = true

// const baseURL = useRuntimeConfig().public.apiBaseUrl

// // Parse search filters from URL (query or path-based)
// const getSearchQuery = () => {
//   const filters = {}

//   const path = route.path.replace('/search/', '').toLowerCase()
//   const parts = path.split('/')

//   parts.forEach((part) => {
//     if (part.startsWith('mk-')) filters.make = part.replace('mk-', '').split('-')
//     if (part.startsWith('md-')) filters.model = part.replace('md-', '').split('-')
//     if (part.startsWith('yr-')) filters.year = part.replace('yr-', '').replace(/-/g, ' to ')
//     if (part.startsWith('pr-')) filters.price = part.replace('pr-', '').replace(/-/g, ' to ')
//     if (part.startsWith('bt-')) filters.bodyType = part.replace('bt-', '')
//     if (part.startsWith('tr-')) filters.transmission = part.replace('tr-', '')
//   })

//   if (route.query.handle) filters.steering = route.query.handle.toString()
  

//   if (route.query.q) {
//     filters.query = route.query.q.toString()
//   } else {
//     filters.query = [
//       ...(filters.make || []),
//       ...(filters.model || []),
//       filters.year,
//       filters.price,
//       filters.bodyType,
//       filters.transmission,
//       filters.steering
//     ].filter(Boolean).join(' ')
//   }

//   return filters
// }

// // Fetch cars based on filters and query (using `/filter` endpoint)
// const fetchCars = debounce(async (filters = {}) => {
//   showLoader()
//   try {
//     const payload = {
//       page: currentPage.value,
//       per_page: perPage.value
//     }

//     const fields = [
//       'make',
//       'model',
//       'grade',
//       'steering',
//       'min_price',
//       'max_price',
//       'min_year',
//       'max_year',
//       'min_milage',
//       'max_milage',
//       'color',
//       'doors',
//       'seats',
//       'is_abs',
//       'is_ac',
//       'fog_lights'
//     ]

//     fields.forEach(field => {
//       if (filters[field] !== undefined && filters[field] !== null && filters[field] !== '') {
//         payload[field] = filters[field]
//       }
//     })

//     if (filters.query) {
//       payload.query = filters.query
//     }

//     const { data, error } = await useFetch(`${baseURL}/filter`, {
//       method: 'POST',
//       server: false,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: payload
//     })

//     if (!error.value && data.value?.status) {
//       cars.value = data.value.data.cars || []
//       cars.value.forEach(car => {
//         try {
//           car.galleryParsed = JSON.parse(car.gallery || '[]')
//         } catch {
//           car.galleryParsed = []
//         }
//       })
//       totalCars.value = data.value.data.total || 0
//       totalPages.value = Math.ceil(totalCars.value / perPage.value)
//     } else {
//       cars.value = []
//     }
//   } finally {
//     hideLoader()
//     window.scrollTo({ top: 0, behavior: 'instant' })
//   }
// }, 300) // Debounce to reduce multiple calls in a short time

// // Test if results exist on a page before navigating
// const testPageWithResults = async (pageToTest) => {
//   showLoader()
//   try {
//     const filters = getSearchQuery()
//     const payload = {
//       page: pageToTest,
//       per_page: perPage.value
//     }

//     if (Array.isArray(filters.make) || Array.isArray(filters.model)) {
//       if (filters.make) payload.make = filters.make
//       if (filters.model) payload.model = filters.model
//     } else if (filters.query) {
//       payload.query = filters.query
//     }

//     // Use /filter endpoint for this call as well
//     const { data, error } = await useFetch(`${baseURL}/filter`, {
//       method: 'POST',
//       server: false,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: payload
//     })

//     if (!error.value && data.value?.status) {
//       const results = data.value.data.cars || []
//       if (results.length > 0) {
//         cars.value = results
//         totalCars.value = data.value.data.total || 0
//         totalPages.value = Math.ceil(totalCars.value / perPage.value)
//         return true
//       }
//     }
//     return false
//   } finally {
//     hideLoader()
//     window.scrollTo({ top: 0, behavior: 'instant' })
//   }
// }

// // Change per page limit
// const changePerPage = async (newLimit) => {
//   perPage.value = newLimit
//   const success = await testPageWithResults(1)
//   if (success) {
//     currentPage.value = 1
//     updateRoute()
//   }
// }

// // Update router query without resetting the path
// const updateRoute = () => {
//   router.push({
//     path: route.path,
//     query: {
//       ...route.query,
//       page: currentPage.value,
//       per_page: perPage.value
//     }
//   })
// }

// // Create pagination range
// const paginationRange = computed(() => {
//   const groupSize = 10
//   const start = Math.floor((currentPage.value - 1) / groupSize) * groupSize + 1
//   return Array.from({ length: groupSize }, (_, i) => start + i).filter(p => p <= totalPages.value)
// })

// // Watch route and refetch data when URL or query changes
// watchEffect(() => {
//   currentPage.value = Number(route.query.page) || 1
//   perPage.value = Number(route.query.per_page) || 10

//   const parsed = getSearchQuery()
//   searchQuery.value = parsed.query || ''
//   fetchCars(parsed)
// })

// // Navigate to car details
// const goToDetails = (slug) => {
//   if (!slug) return
//   router.push(`/search-details/${slug}`)
// }

// ============================================= End Old Code ===================================
import { ref, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLoader } from '~/composables/useLoader'
import { debounce } from 'lodash'

const { showLoader, hideLoader } = useLoader()

const route = useRoute()
const router = useRouter()

const currentPage = ref(Number(route.query.page) || 1)
const perPage = ref(Number(route.query.per_page) || 10)
const cars = ref([])
const totalCars = ref(0)
const totalPages = ref(1)
const showText = true

// Base URL for API
const baseURL = useRuntimeConfig().public.apiBaseUrl

// Fetch cars based on filters from URL
const fetchCars = debounce(async () => {
  showLoader()
    try {
    // *** New: Check if q param exists, if yes, override payload to use suggest_full ***
    const q = route.query.q?.toString().trim()
    if (q) {
      // If q exists, send payload with suggest_full only and pagination
      const payload = {
        suggest_full: [q],
        page: currentPage.value,
        per_page: perPage.value,
      }

      const { data, error } = await useFetch(`${baseURL}/filter`, {
        method: 'POST',
        server: false,
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload
      })

      if (!error.value && data.value?.status) {
        cars.value = data.value.data.cars || []
        cars.value.forEach(car => {
          try {
            car.galleryParsed = JSON.parse(car.gallery || '[]')
          } catch {
            car.galleryParsed = []
          }
        })
        totalCars.value = data.value.data.total || 0
        totalPages.value = Math.ceil(totalCars.value / perPage.value)
      } else {
        cars.value = []
        totalCars.value = 0
        totalPages.value = 1
      }
      return // Exit here so original filter logic below won't run
    }
    
    // Extract filters from the URL path
    const filters = {}

    // Extract values from the URL path (e.g., /search/mk-toyota/md-aqua/yr-2000-2010)
    const path = route.path.replace('/search/', '').toLowerCase()
    const parts = path.split('/')

    parts.forEach((part) => {
      if (part.startsWith('mk-')) filters.make = part.replace('mk-', '').split('-')
      if (part.startsWith('md-')) filters.model = part.replace('md-', '').split('-')
      // if (part.startsWith('yr-')) filters.year = part.replace('yr-', '').replace(/-/g, ' to ')
     if (part.startsWith('yr-')) {
        // Split the year range and convert it into min_year and max_year
        const yearRange = part.replace('yr-', '').split('-')
        filters.min_year = yearRange[0]
        filters.max_year = yearRange[1]
      }
      // if (part.startsWith('pr-')) filters.price = part.replace('pr-', '').replace(/-/g, ' to ')
       if (part.startsWith('pr-')) {
        const prRange = part.replace('pr-', '').split('-')
        filters.min_price = prRange[0]
        filters.max_price = prRange[1]
      }
      // if (part.startsWith('ml-')) filters.milage = part.replace('ml-', '').replace(/-/g, ' to ')
    if (part.startsWith('ml-')) {
        const mlRange = part.replace('ml-', '').split('-')
        filters.min_milage = mlRange[0]
        filters.max_milage = mlRange[1]
      }
      if (part.startsWith('bt-')) filters.bodyType = part.replace('bt-', '')
      if (part.startsWith('tr-')) filters.transmission = part.replace('tr-', '')
    })

    // Query parameters se extra filters
    if (route.query.handle) filters.steering = route.query.handle.toString()
    if (route.query.color) filters.color = route.query.color
    if (route.query.engine) filters.engine = route.query.engine
    if (route.query.doors) filters.doors = route.query.doors
    if (route.query.seats) filters.seats = route.query.seats
    // if (route.query.fog) filters.fogLights = route.query.fog
    // if (route.query.ac) filters.ac = route.query.ac
    // if (route.query.abs) filters.abs = route.query.abs
    const toBool = (val) => val === 'true' || val === '1' || val === true

if (route.query.fog !== undefined) filters.fog_lights = toBool(route.query.fog)
if (route.query.ac !== undefined) filters.is_ac = toBool(route.query.ac)
if (route.query.abs !== undefined) filters.is_abs = toBool(route.query.abs)

    // Prepare the payload to send to the API
    const payload = {
      page: currentPage.value,
      per_page: perPage.value
    }

    // Fields to be sent to the API
    const fields = [
      'make', 'model', 'grade', 'steering', 'min_price', 'max_price', 'min_year', 
      'max_year', 'min_milage', 'max_milage', 'color', 'doors', 'seats', 'is_abs', 
      'is_ac', 'fog_lights'
    ]

    // Add filters to payload
    fields.forEach(field => {
      if (filters[field] !== undefined && filters[field] !== null && filters[field] !== '') {
        payload[field] = filters[field]
      }
    })

    if (filters.query) {
      payload.query = filters.query
    }

    // Fetch data from the API
    const { data, error } = await useFetch(`${baseURL}/filter`, {
      method: 'POST',
      server: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    })

    // Handle API response
    if (!error.value && data.value?.status) {
      cars.value = data.value.data.cars || []
      cars.value.forEach(car => {
        try {
          car.galleryParsed = JSON.parse(car.gallery || '[]')
        } catch {
          car.galleryParsed = []
        }
      })
      totalCars.value = data.value.data.total || 0
      totalPages.value = Math.ceil(totalCars.value / perPage.value)
    } else {
      cars.value = []
    }
  } finally {
    hideLoader()
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}, 300) // Debounce to reduce multiple calls in a short time

// Update the route when the page or per_page changes
const updateRoute = () => {
  router.push({
    path: route.path,
    query: {
      ...route.query,
      page: currentPage.value,
      per_page: perPage.value
    }
  })
}

watch(() => route.query, async (newQuery) => {
  currentPage.value = Number(newQuery.page) || 1
  perPage.value = Number(newQuery.per_page) || 10
  await fetchCars()
}, { immediate: true })


// Create pagination range
const paginationRange = computed(() => {
  const groupSize = 10
  const start = Math.floor((currentPage.value - 1) / groupSize) * groupSize + 1
  return Array.from({ length: groupSize }, (_, i) => start + i).filter(p => p <= totalPages.value)
})

// Navigate to car details
const goToDetails = (slug) => {
  if (!slug) return
  router.push(`/search-details/${slug}`)
}

// Change per page limit and fetch results
const changePerPage = async (newLimit) => {
  perPage.value = newLimit
  const success = await testPageWithResults(1)
  if (success) {
    currentPage.value = 1
    updateRoute()
  }
}

// Test if results exist on a page before navigating
const testPageWithResults = async (pageToTest) => {
  showLoader()
  try {
    const filters = {} 
    const payload = {
      page: pageToTest,
      per_page: perPage.value
    }

    const { data, error } = await useFetch(`${baseURL}/filter`, {
      method: 'POST',
      server: false,
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    })

    if (!error.value && data.value?.status) {
      const results = data.value.data.cars || []
      if (results.length > 0) {
        cars.value = results
        totalCars.value = data.value.data.total || 0
        totalPages.value = Math.ceil(totalCars.value / perPage.value)
        return true
      }
    }
    return false
  } finally {
    hideLoader()
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}
const goToPage = async (page) => {
  if (page < 1 || page > totalPages.value || page === currentPage.value) return

  const success = await testPageWithResults(page)
  if (success) {
    currentPage.value = page
    updateRoute()
  }
}

</script>
<template>
  <div>
        <div class="pagination d-flex gap-2 justify-content-center mt-4" v-if="totalPages > 1">



<div class="paginate d-flex align-items-center w-100">
              <div class="col-md-3">
                  <div class="stand" v-if="showText">
                    <p class="m-0">503,429<span>台</span></p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div
                    class="former d-flex justify-content-between align-items-center"
                  >
                    <div class="pagination d-flex gap-4 align-items-center">
                      
                       <p
                  v-for="page in paginationRange"
                  :key="page"
                  class="m-0"
                  :class="{ active: currentPage === page }"
                  @click="goToPage(page)"
                  style="cursor: pointer"
                >
                  {{ page }}
                </p>
                    </div>

                    <div class="previous d-flex align-items-center" @click="goToPage(currentPage - 1)"
                    v-if="currentPage > 1">
                      <NuxtImg
                        src="/assets/images/icons/left-arrow.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                      />
                      <p class="m-0 ps-2">前の</p>
                    </div>
                    <div class="next d-flex align-items-center" @click="goToPage(currentPage + 1)"
                     v-if="currentPage < totalPages">
                      <p class="m-0 pe-2">次のページ</p>
                      <NuxtImg
                        src="/assets/images/icons/right-arrow.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                      />
                    </div>

                    <div class="noOfItems">
                      <select class="form-select" @change="changePerPage(parseInt($event.target.value))">
                  <option value="10" :selected="perPage === 10">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;10
                  </option>
                  <option value="20" :selected="perPage === 20">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;20
                  </option>
                  <option value="30" :selected="perPage === 30">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;30
                  </option>
                </select>
                    </div>
                  </div>
                </div>
        </div>
                 
                </div>
        <div class="searchListCar">
                  <div class="carListSection d-flex mt-4" v-for="(car, index) in cars" :key="index" @click="goToDetails(car.slug)" style="cursor:pointer">
                    <div class="col-md-3">
                      <div class="top">
                           <NuxtImg
        :src="car.galleryParsed && car.galleryParsed.length > 0 ? car.galleryParsed[0] : car.image"
        alt="car"
        class="img-fluid"
        loading="lazy"
      />
                      </div>
                      <div class="bottom d-flex gap-1 py-2">
                        
                         <NuxtImg
        v-for="(img, i) in (car.galleryParsed && car.galleryParsed.length > 0 ? car.galleryParsed.slice(0, 3) : [car.image, car.image, car.image, car.image])"
        :key="i"
        :src="img"
        alt="car"
        class="img-fluid"
        loading="lazy"
        width="73"
        height="70"
      />
                      </div>
                    </div>
                    <div class="col-md-9">
                      <div
                        class="topRight d-flex justify-content-between align-items-center"
                      >
                        <div class="center d-flex gap-2 mx-2">
                          <div class="left d-flex align-items-center gap-2">
                            <NuxtImg
                              src="/assets/images/icons/coin.webp"
                              alt="coin"
                              class="img-fluid"
                              loading="lazy"
                              width="16"
                              height="16"
                            />
                            <p class="m-0">{{ car.steering }}</p>
                          </div>
                          <div class="center">
                            <p class="m-0">{{ car.engine_type }}</p>
                          </div>
                          <div class="right">
                            <p class="m-0">{{ car.is_airbag }}</p>
                          </div>
                        </div>
                        <div class="right">
                          <NuxtImg
                            src="/assets/images/icons/heart-icon.webp"
                            alt="heart"
                            class="img-fluid"
                            loading="lazy"
                            width="24"
                            height="24"
                          />
                        </div>
                      </div>

                      <div class="heading">
                        <p class="mx-2 mb-0 mt-2">
                          {{ car.suggest_full[0]||"-"}}
                        </p>
                      </div>

                      <div
                        class="modelYear d-flex mx-2 justify-content-between"
                      >
                        <div class="left w-50">
                          <table class="table table-borderless mb-0">
                            <tbody>
                              <tr>
                                <td class="model">{{ car.body_type }}</td>
                                <td class="year">{{ car.fuel }}</td>
                                <td class="model">{{ car.seats }}</td>
                                <td class="year">{{ car.transmission }}</td>
                              </tr>
                              <tr>
                                <td class="model">{{ car.model }}</td>
                                <td class="year">{{ car.make }}</td>
                                <td class="model">{{ car.steering }}</td>
                                <td class="year">{{ car.passenger }}</td>
                              </tr>
                              <tr>
                                <td class="model">{{ car.sql_id }}</td>
                                <td class="year">{{ car.cc }}</td>
                                <td class="model">{{ car.load_cap }}</td>
                                <td class="year">{{ car.fog_lights }}</td>
                              </tr>
                              <tr>
                                <td class="model">{{ car.is_water_tank }}</td>
                                <td class="year">{{ car.freezer }}</td>
                                <td class="model">{{ car.is_side_swing }}</td>
                                <td class="year">{{ car.prefecture }}</td>
                              </tr>
                            </tbody>
                          </table>

                          <div
                            class="seeDetails d-flex justify-content-between align-items-center mt-1"
                          >
                            <div class="col-md-4">
                              <div class="left">
                                <p class="m-0 py-2 ps-3">{{ car.is_push_start }}</p>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="center">
                                <p class="m-0 text-center ps-1">
                                  月々 <span class="amount me-1">{{ car.price }}</span>円
                                </p>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div class="right d-flex align-items-center ms-3">
                                <NuxtImg
                                  src="/assets/images/home/arrow-right-circle.webp"
                                  alt="arrow"
                                  class="img-fluid"
                                  loading="lazy"
                                  width="17"
                                  height="17"
                                />
                                <p class="m-0 ps-2">詳細を見る</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="right w-50 ps-4">
                          <div class="top d-flex gap-4 mt-3">
                            <div class="totalPayment p-2">
                              <p class="m-0 title pb-2">{{ car.price }}</p>
                              <p class="m-0 amount">
                                {{car.payment}} <span class="yen">万円</span>
                              </p>
                            </div>
                            <div class="vehicalePrice p-2">
                              <p class="m-0 title pb-2">{{ car.vehiclePrice }}</p>
                              <p class="m-0 amount">
                                {{ car.price }} <span class="yen">万円</span>
                              </p>
                            </div>
                          </div>
                          <div class="bottom d-flex gap-3 mt-3 pt-4">
                            <button class="btn btn-inquiry">問い合わせ</button>
                            <button class="btn btn-contact ms-1">
                              今すぐ購入
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pagination d-flex gap-2 justify-content-center mt-4" v-if="totalPages > 1">



<div class="paginate d-flex align-items-center w-100">
              <div class="col-md-3">
                  <div class="stand d-none" v-if="showText">
                    <p class="m-0">503,429<span>台</span></p>
                  </div>
                </div>
                <div class="col-md-9">
                  <div
                    class="former d-flex justify-content-between align-items-center"
                  >
                    <div class="pagination d-flex gap-4 align-items-center">
                       <p
                  v-for="page in paginationRange"
                  :key="page"
                  class="m-0"
                  :class="{ active: currentPage === page }"
                  @click="goToPage(page)"
                  style="cursor: pointer"
                >
                  {{ page }}
                </p>
                    </div>

                    <div class="previous d-flex align-items-center" @click="goToPage(currentPage - 1)"
                    v-if="currentPage > 1">
                      <NuxtImg
                        src="/assets/images/icons/left-arrow.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                      />
                      <p class="m-0 ps-2">前の</p>
                    </div>
                    <div class="next d-flex align-items-center" @click="goToPage(currentPage + 1)"
                     v-if="currentPage < totalPages">
                      <p class="m-0 pe-2">次のページ</p>
                      <NuxtImg
                        src="/assets/images/icons/right-arrow.webp"
                        alt="arrow"
                        class="img-fluid"
                        loading="lazy"
                      />
                    </div>

                    <div class="noOfItems">
                      <select class="form-select" @change="changePerPage(parseInt($event.target.value))">
                  <option value="10" :selected="perPage === 10">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;10
                  </option>
                  <option value="20" :selected="perPage === 20">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;20
                  </option>
                  <option value="30" :selected="perPage === 30">
                    1ページあたりの項目数:&nbsp;&nbsp;&nbsp;30
                  </option>
                </select>
                    </div>
                  </div>
                </div>
        </div>
                 
                </div>
    </div>
    </div>


</template>

<style scoped>
.searchListCar .carListSection {
  border: 1px solid #cbd5e1;
  padding: 10px;
}
.searchListCar .carListSection .topRight .left .image_360 {
  border: 1px solid #64748b;
  font-size: 10px;
  color: #64748b;
  font-weight: 600;
  line-height: 16px;
  padding: 3px;
  font-family: "Inter";
}
.searchListCar .carListSection .topRight .center .left {
  background-color: #f1892b;
  color: white;
  border-radius: 50px;
  padding: 2px 10px;
  font-size: 12px;
  font-weight: 700;
  font-family: "Inter";
  line-height: 16px;
}
.searchListCar .carListSection .topRight .center .center {
  background-color: #ff4b44;
  color: white;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  padding: 3px 7px;
  border-radius: 12px;
}
.searchListCar .carListSection .topRight .center .right {
  background-color: #a576f1;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 50px;
  padding: 3px 10px;
  line-height: 16px;
}
.searchListCar .carListSection .heading {
  color: #2384c1;
  font-family: "Inter";
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}
.searchListCar .carListSection .modelYear .left .modelText .model {
  background-color: #f6f6f8;
  color: black;
  padding: 4px 12px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}
.searchListCar .carListSection .modelYear .left .modelText .year {
  color: #334155;
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
}
.searchListCar .carListSection .modelYear .left .table .model {
  background-color: #f6f6f8;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}
.searchListCar .carListSection .modelYear .left .table .year {
  font-weight: 500;
  color: #334155;
  font-size: 12px;
  line-height: 18px;
  font-family: "Inter";
}
.searchListCar .carListSection .modelYear .left .table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
.searchListCar .carListSection .modelYear .left .table > :not(caption) > * > * {
  padding: 3px 10px 0px 13px;
}
.searchListCar .carListSection .modelYear .left .seeDetails {
  background-color: #ecf5ff;
  color: #0f172a;
  height: 33px;
  border-radius: 5px;
  font-size: 11.97px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 13px;
}
.searchListCar .carListSection .modelYear .left .seeDetails .left {
  background-color: #2384c1;
  color: white;
  border-radius: 5px 0px 0px 5px;
}
.searchListCar .carListSection .modelYear .left .seeDetails .right p {
  color: #2f2f2f;
  font-family: "Inter";
  font-weight: 600;
  font-size: 9px;
  line-height: 12px;
}
.searchListCar .carListSection .modelYear .left .seeDetails .center .amount {
  color: #0f172a;
  font-size: 17px;
  font-weight: 700;
}
.searchListCar .carListSection .modelYear .right .totalPayment {
  background-color: #ecf5ff;
}
.searchListCar .carListSection .modelYear .right .totalPayment .title {
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 20px;
}
.searchListCar .carListSection .modelYear .right .totalPayment .amount {
  font-size: 28px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #2384c1;
}
.searchListCar .carListSection .modelYear .right .totalPayment .yen {
  font-size: 16px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #0f172a;
}
.searchListCar .carListSection .modelYear .right .totalPayment .plan {
  color: #0f172a;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 500;
  line-height: 20px;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice {
  background-color: #f6f6f8;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice .title {
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 20px;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice .amount {
  font-size: 28px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #334155;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice .yen {
  font-size: 16px;
  font-weight: 600;
  font-family: "Inter";
  line-height: 36px;
  color: #0f172a;
}
.searchListCar .carListSection .modelYear .right .vehicalePrice .plan {
  color: #0f172a;
  font-size: 14px;
  font-family: "Inter";
  font-weight: 500;
  line-height: 20px;
}
.searchListCar .carListSection .modelYear .right .bottom .btn-inquiry {
  border: 1px solid #2384c1;
  color: #2384c1;
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  width: 137px;
  height: 34px;
}
.searchListCar .carListSection .modelYear .right .bottom .btn-contact {
  background-color: #2384c1;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  width: 137px;
  height: 34px;
}

/* pagination css */
.paginate .stand p {
  color: #141817;
  font-family: "Sofia-Pro";
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
}
.paginate .stand span {
  color: #141817;
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter";
  line-height: 18px;
}
.paginate .former .pagination p.active {
  background-color: #ecf5ff;
  color: #2a9fe8;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 14.14px;
  width: 18px;
  height: 18px;
  padding: 3px 6px;
}
.paginate .former .pagination p {
  color: #5d6370;
  font-family: "Inter";
  font-size: 14px;
  font-weight: 400;
  line-height: 14.14px;
}
.paginate .former .previous p {
  color: #5d6370;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}
.paginate .former .next p {
  color: #2a9fe8;
  font-family: "Inter";
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
}
.paginate .former .noOfItems .form-select {
  color: #5d6370;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  font-family: "Inter";
  font-weight: 500;
  font-size: 9.8px;
  line-height: 14.71px;
  --bs-form-select-bg-img: url(/assets/images/home/caret-down.webp);
  background-repeat: no-repeat;
  background-size: 9px;
}
</style>
