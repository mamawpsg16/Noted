<script setup>
/** IMPORTS */
import Navbar from '@/components/layouts/Navbar.vue'
</script>

<template>
  <Navbar/>
  <div class="container is-max-desktop px-2 py-4">
    <router-view></router-view>
  </div>
</template>
