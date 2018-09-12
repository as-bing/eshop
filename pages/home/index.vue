<template>
	<view>
	</view>
</template>

<script>
	import {
		getQQMusic,
		getTianQi
	} from "@/api/api";
	export default {
		methods: {
			getTaiQi() {
				getTianQi().then(function (res) {
					console.log(res);
				});
			},
			getMusic() {
				getQQMusic().then(function (res) {
					console.log(res);
  			});
			}
		},
		onReady() {
			this.getTaiQi();
			this.getMusic();
		}
	};
</script>

<style>

</style>
