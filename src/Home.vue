<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToApp = () => {
  router.push('/app')
}
</script>

<template>
  <div class="home">
    <h1>ホーム</h1>
    <button @click="goToApp">アプリを開く</button>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  margin-top: 2rem;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
</style>
