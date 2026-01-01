// export function useApi(baseURL = useRuntimeConfig().public.apiBase) {
export function useApi(baseURL = useRuntimeConfig().public.apiBase) {
  const token = useCookie("auth_token");

  const request = async (
    method,
    endpoint,
    { body = null, headers = {}, query = {} } = {}
  ) => {
    try {
      const finalHeaders = {
        "Content-Type": "application/json",
        ...headers,
      };

      if (token.value) {
        finalHeaders["Authorization"] = `Bearer ${token.value}`;
      }

      const response = await $fetch(`${baseURL}${endpoint}`, {
        method,
        headers: finalHeaders,
        body,
        query,
      });

      return response;
    } catch (error) {
      const message =
        error?.data?.message || error.message || "Something went wrong";
      console.error(`[API ERROR] ${method} ${endpoint}:`, message);
      throw new Error(message);
    }
  };

  return {
    get: (endpoint, query) => request("GET", endpoint, { query }),
    post: (endpoint, body) => request("POST", endpoint, { body }),
    patch: (endpoint, body) => request("PATCH", endpoint, { body }),
    del: (endpoint) => request("DELETE", endpoint),
  };
}
// how to use in a page or component
// const { get, post } = useApi()

// const products = ref([])

// onMounted(async () => {
//   try {
//     products.value = await get('/products')
//   } catch (err) {
//     console.error(err.message)
//     // Optionally use a toast notification
//   }
// })