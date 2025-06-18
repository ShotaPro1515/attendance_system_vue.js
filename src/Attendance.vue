<script setup>
import AttendanceRegister from './components/AttendanceRegister.vue'
</script>

<template>
  <div class="container">
    <h1>出勤管理システム</h1>
    <AttendanceRegister />
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
</style>
