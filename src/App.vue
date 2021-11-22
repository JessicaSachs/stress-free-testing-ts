<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const { getRoutes } = useRouter()
const routes = computed(() => getRoutes())
</script>

<template>
  <div class="w-screen h-screen overflow-auto children:p-4">
    <header class="w-full border-b-1">
      <nav class="inline-flex gap-2">
        <router-link
          :to="route.path"
          v-for="route in routes"
          custom
          v-slot="{ route, navigate, isActive }"
        >
          <a
            tabindex="1"
            class="outline-none cursor-pointer hover:underline focus:underline"
            :class="{ 'text-green-500': isActive }"
            @click="navigate(route.path)"
            @keypress.enter.space.prevent="navigate(route.path)"
          >{{ route.name }}</a>
        </router-link>
      </nav>
    </header>
    <main class="h-screen overflow-auto bg-white">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <transition name="fade" mode="in-out">
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>
