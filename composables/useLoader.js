import { ref } from 'vue'

const isLoading = ref(false)
const isSkelton = ref(false)

export const useLoader = () => {
  return {
    isLoading,
    showLoader: () => isLoading.value = true,
    hideLoader: () => isLoading.value = false
  }
}

export const useSkelton = ()=>{
  return{
    isSkelton,
    showSkelton:()=> isSkelton.value = true,
    hideSkelton:()=> isSkelton.value = false
  }
}