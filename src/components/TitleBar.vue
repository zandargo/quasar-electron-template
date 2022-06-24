<template>
	<div>
    <q-bar
      id="titlebar"
      v-if="$q.platform.is.electron"
      style="height: 36px"
      class="q-electron-drag q-pr-none q-pl-sm bg-d2">
			<q-avatar size="24px" square>
				<!-- <img src="../../public/icons/cs/cs-icon-02a.svg" /> -->
			</q-avatar>

			<q-space />
			<div><h4>Electron App</h4></div>
			<q-space />

			<q-btn
				unelevated
				class="win-btn q-ma-none cursor-inherit q-pt-md"
				@click="winState('minimize')"
			>
				<q-avatar square size="16px">
					<img
						src="../assets/img/titlebar/icon_minimize.svg"
						class="q-my-auto"
					/>
				</q-avatar>
			</q-btn>

			<q-btn
				unelevated
				size="md"
				class="win-btn q-ma-none cursor-inherit"
				v-if="status === 'normal'"
				@click="winState('maximize')"
			>
				<q-avatar square size="16px">
					<img src="../assets/img/titlebar/icon_maximize.svg" />
				</q-avatar>
			</q-btn>

			<q-btn
				unelevated
				size="md"
				class="win-btn q-ma-none cursor-inherit"
				v-if="status === 'maximized' || status === 'minimized'"
				@click="winState('restore')"
			>
				<q-avatar square size="16px">
					<img src="../assets/img/titlebar/icon_restore.svg" />
				</q-avatar>
			</q-btn>

			<q-btn
				unelevated
				flat
				size="md"
				class="win-btn win-btn-close q-ma-none cursor-inherit"
				@click="winState('close')"
			>
				<q-avatar square size="16px">
					<img src="../assets/img/titlebar/icon_close.svg" />
				</q-avatar>
			</q-btn>
		</q-bar>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const status = ref('normal')

//* ---------- CONTROL WINDOW STATE USING BUTTONS ---------- *//
const winState = (state) => {
  if (window.api.envMode === "electron") {
    window.ipc.send('winState', state)
  }
}

//* ------------------ ON MOUNTED CONTEXT ------------------ *//
onMounted(() => {

  //> Needed to react to state change other than button click
  window.ipc.on("winState", (event, msg) => {
    status.value = msg
  })

})

</script>


<style lang="scss" scoped>
.win-btn {
	font-weight: 800;
	border-radius: 0px;
	&:hover {
		border-radius: 0px;
	}
}
.win-btn-close:hover {
	background: $red-8;
}
</style>
