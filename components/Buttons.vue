<template>
  <div>
    <button
      class="btn btn-danger"
      v-for="(arr, i) in arrayItems"
      :key="arr"
      @click="$emit('remove', i)"
      
    >
      {{ arr }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  arrayItems: Array,
  likes: Number,
});
const emit = defineEmits(["remove"]);

// const handleRemove = (index) => {
//   emit("remove", index); // Triggers parent function
// };
</script>

<style scoped>
</style>