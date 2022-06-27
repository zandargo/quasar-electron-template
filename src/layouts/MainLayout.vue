<template>
  <q-layout view="hHh LpR fFf">
<!-- //* ------------------------ HEADER ------------------------ *// -->
    <q-header elevated class="column">
      <!-- //*  DESKTOP BAR  *// -->
      <TitleBar />

      <!-- //*  MOBILE BAR  *// -->
      <div v-if="!$q.platform.is.electron" class="col">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title>
            Quasar App
          </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </div>
      <!-- //*  TABS & RIBBON  *// -->
      <div class="col bg-l3 txt-d3">
        <TabsBar />
        <Ribbon />
      </div>

    </q-header>
<!-- //* ------------------------ DRAWER ------------------------ *// -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      elevated
      behavior="desktop"
      class="bg-l5 txt-d5 absolute-left q-pa-md"
      style="overflow: hidden; min-height: 100%"
    >
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import TitleBar from 'components/TitleBar.vue'
import TabsBar from 'components/TabsBar.vue'
import Ribbon from 'components/Ribbon.vue'

// const essentialLinks = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

const leftDrawerOpen = ref(true)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
