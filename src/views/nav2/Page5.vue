<template xmlns="">
	<div>
	<baidu-map  class="bm-view"
				:center="北京"
				:zoom="zoom"
				@ready="handler"
				:scroll-wheel-zoom="true">
		<!--<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"-->
					 <!--anchor="BMAP_ANCHOR_TOP_LEFT">-->
		<!--</bm-map-type>&lt;!&ndash; 类型&ndash;&gt;-->
		<bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>	<!-- 比例尺-->
		<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
						:showAddressBar="true"
						:autoLocation="true">
		</bm-geolocation>	<!-- 定位-->
		<bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list><!-- 城市列表-->
		<bm-panorama></bm-panorama><!-- 全景-->
		<bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
						 :isOpen="true">
		</bm-overview-map><!-- 缩略图-->
	</baidu-map>	<!-- 百度地图-->
	</div>
</template>
<script>
    import BaiduMap from 'vue-baidu-map/components/map/map.vue'
    export default {
       components: {
        BaiduMap  //指定组件模板
    },
		data() {
            return {
                center: {lng: 0, lat: 0},  //经纬度
                zoom: 3　 //地图展示级别
			}
        },
        methods: {
            handler ({BMap, map}) {
                console.log(BMap, map);
                this.center.lng = 116.404;
                this.center.lat = 39.915;
                this.zoom = 15
            }
        }
    }
</script>

<style lang="scss">
	.bm-view {
		width: 100%;
		height: 100%;
	}
</style>
