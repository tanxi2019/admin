<template xmlns="">
	<baidu-map  class="bm-view"
				:center="center"
				:zoom="zoom"
				@ready="handler"
				:scroll-wheel-zoom="true">
		<bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>	<!-- 比例尺-->
		<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
						:showAddressBar="true"
						:autoLocation="true">
		</bm-geolocation>	<!-- 定位-->
		<bm-city-list class="class1" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list><!-- 城市列表-->
		<bm-panorama></bm-panorama><!-- 全景-->
		<bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
						 :isOpen="true">
		</bm-overview-map><!-- 缩略图-->
	</baidu-map>	<!-- 百度地图-->
</template>
<script>
    export default {
		data() {
            return {
                center: {lng: 0, lat: 0},  //经纬度
                zoom: 15　 //地图展示级别
			}
        },
        methods: {
            handler () {
                this.center.lng = 108.93;
                this.center.lat = 30.30;
                this.zoom = 15
            }
        }
    }
</script>

<style lang="scss">

	.bm-view {
		width: 100%;
		height: 550px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
</style>
