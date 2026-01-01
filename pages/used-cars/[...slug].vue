<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h2>Search Page url - {{ url }}</h2>
        <h2>Search Page url query - {{ urlquery }}</h2>
        <h2>Search Page url with / - {{ url.join("/") }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "#app";
const route = useRoute();
const url = route.params.slug;
const urlquery = route.query;
</script>

<style  scoped>
</style>