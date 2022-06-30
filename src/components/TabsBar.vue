<template>
  <div id="row_tabs" class="row bg-l4 q-pt-xs q-pb-none" >
      <q-btn
        dense
        flat
        icon=""
        style="width: 60px; color: white"
      />
      <q-tabs
        dense
        v-model="tab"
        align="left"
        style="height: 24px"
        content-class="tabsContent"
        class="col-grow q-pl-md"
        :breakpoint="200"
      >
        <q-tab no-caps name="tab1" label="Tab 1" @click="storeMain.setTab('tab1')" />
        <q-tab no-caps name="tab2" label="Tab 2" @click="storeMain.setTab('tab2')"/>
        <q-tab no-caps name="tab3" label="Tab 3" @click="storeMain.setTab('tab3')"/>
        <div :v-if="$q.screen.xs" class="col-1"></div>
      </q-tabs>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import { useDefStore } from 'src/stores/mainStore'

const storeMain = useDefStore()
const tab = ref('tab1')



</script>

//! DO NOT scope theese styles
<style lang="scss" >

#row_tabs {
  height: 36px;
  user-select: none !important;
}
.q-tab__indicator {
  display: none !important;
}

.tabsContent {
  height: 32px;
  color: $primary;
  font-variant-caps: small-caps !important;
}
.q-tab {
  min-width: 120px;
	border-radius: 8px 8px 0 0;
  font-variant-caps: petite-caps !important;
  cursor: default !important;
}
.q-tab__content {
  height: 32px;
}
.q-tab--active {
  border: none;
	color: $color-d5;
	background-color: $color-l3 !important;
	box-shadow: 5px 5px 10px transparentize($color_d4, 0.5);
  text-transform: uppercase;
	font-weight: 900 !important;
  font-size: 3rem !important;
  letter-spacing: 2px!important;
}


</style>
