<template>
  <div class="attendance">
    <button @click="checkIn" :disabled="checkedInToday">
      {{ checkedInToday ? '出勤済み' : '出勤する' }}
    </button>
    <p v-if="lastCheckIn" class="last">
      最終出勤: {{ formatDate(lastCheckIn) }}
    </p>
    <ul class="records">
      <li v-for="(record, index) in attendanceRecords" :key="index">
        {{ formatDate(record) }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const attendanceRecords = ref([])
const lastCheckIn = ref(null)

const loadRecords = () => {
  const records = JSON.parse(localStorage.getItem('attendanceRecords') || '[]')
  attendanceRecords.value = records
  lastCheckIn.value = records.length ? records[records.length - 1] : null
}

const saveRecords = () => {
  localStorage.setItem('attendanceRecords', JSON.stringify(attendanceRecords.value))
}

const checkIn = () => {
  const now = new Date().toISOString()
  attendanceRecords.value.push(now)
  lastCheckIn.value = now
  saveRecords()
}

const checkedInToday = computed(() => {
  if (!lastCheckIn.value) return false
  const last = new Date(lastCheckIn.value)
  const today = new Date()
  return (
    last.getFullYear() === today.getFullYear() &&
    last.getMonth() === today.getMonth() &&
    last.getDate() === today.getDate()
  )
})

const formatDate = (iso) => {
  return new Date(iso).toLocaleString()
}

onMounted(loadRecords)
</script>

<style scoped>
.attendance {
  text-align: center;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.records {
  list-style: none;
  padding: 0;
}
.records li {
  margin: 0.25rem 0;
}
.last {
  margin-bottom: 0.5rem;
}
</style>

