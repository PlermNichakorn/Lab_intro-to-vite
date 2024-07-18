<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import EventListView from '@/views/EventListView.vue';
import StudentView from '@/views/StudentView.vue';
import AboutView from '@/views/AboutView.vue';
import { ref } from 'vue';

// Define the page size (number of events per page)
const pageSize = ref<number>(3);

</script>

<template>
  <div id="layout">
  <header>
    <div class="wrapper">
      <nav>
        <!-- 1.11. Update router-link to use the name of components instead of url  -->
        <!-- <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink> | -->
        <RouterLink :to="{ name: 'event-list-view', query: { page: 1, size: 2 } }">Event</RouterLink> |
        <RouterLink :to="{ name: 'student' }">Student</RouterLink> |
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</div>
</template>

<style>
#layout{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothig: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-align: center;
  color: #2c3e50;
}

nav{
  padding: 30px;
}

nav a {
 font-weight: bold;
 color: #2c3e50;
}

nav a.router-link-exact-active{
  color: #42b983;
}
h2{
  font-size: 20px;
}
</style>
