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
			<div><h4>CadSichter</h4></div>
			<q-space />

			<q-btn
				unelevated
				class="win-btn q-ma-none cursor-inherit q-pt-md"
				@click="winMinimize"
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
				@click="winMaximize"
			>
				<q-avatar square size="16px">
					<img src="../assets/img/titlebar/icon_maximize.svg" />
				</q-avatar>
			</q-btn>

			<q-btn
				unelevated
				size="md"
				class="win-btn q-ma-none cursor-inherit"
				v-if="status === 'maximized'"
				@click="winRestore"
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
				@click="winClose"
			>
				<q-avatar square size="16px">
					<img src="../assets/img/titlebar/icon_close.svg" />
				</q-avatar>
			</q-btn>
		</q-bar>
	</div>
</template>

<script setup>
// import { computed } from "vue"

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
