<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import Event from '@/types/Event'
// import { ref } from 'vue'
import{ ref, onMounted } from 'vue'
import EventService from '@/services/EventService'
import type { Axios, AxiosResponse } from 'axios';

const events = ref<Event[]>(null)
 
const props = defineProps({
  page:{
    type: Number,
    required: true
  }
})
EventService.getEvents(2,props.page).then((response: AxiosResponse<EventItem[]>) =>{
  events.value = response.data
})

// onMounted(() => {
//   EventService.getEvents()
//   .then((response) => {
//     events.value = response.data
//   })
//   .catch((error) => {
//     console.error('There was an error!', error)
//   })
// })
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <RouterLink :to="{ name: 'event-list-view', query: { page: page - 1 } }" rel="prev" v-if="page!=1">
      Prev Page
    </RouterLink>
    <RouterLink :to="{ name: 'event-list-view', query: { page: page + 1 } }" rel="prev" v-if="page+1">
      Next Page
    </RouterLink>
  </div>
</template>

<style scoped> 
.events, .events2{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
