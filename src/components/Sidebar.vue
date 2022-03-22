<template>
	<div class="vd-sidebar-container" :class="{hidden: !isVisible}">
		<div class="vd-sidebar-header" :class="{hidden: !isVisible}">
			<button class="close-btn" v-if="showCloseButton" @click="closeSidebar"><font-awesome-icon fixed-width icon="times"/></button>
			<slot name="header">
				<div class="header text-center">
					<div class="d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-vinyl-fill" viewBox="0 0 16 16">
							<path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
						</svg>
						<h5 class="title mx-3 text-light text-bold">GoTron</h5>
          </div>
          <hr class="sidebar-divider">
        </div>
			</slot>
		</div>
		<div class="vd-sidebar-content">
			<slot name="content">
				<div class="margin-top">
          <b-nav vertical>
            <!-- <div><font-awesome-icon fixed-width icon="stream"/><small class="text-uppercase">General</small></div> -->
						<b-nav-item class="mt-2">
              <router-link to="/overview" class="va-m">Overall</router-link><!-- <font-awesome-icon fixed-width icon="map"/> -->
            </b-nav-item>
            <b-nav-item class="mt-2">
              <router-link to="/partners" class="va-m">Partners</router-link>
            </b-nav-item>
						<b-nav-item class="mt-2">
              <router-link to="/message" class="va-m">Messages</router-link><!-- <font-awesome-icon fixed-width icon="map"/> -->
            </b-nav-item>
            <b-nav-item class="mt-2">
              <router-link to="/stats" class="va-m">Statistics</router-link>
            </b-nav-item>
						<b-nav-item class="mt-2">
              <router-link to="/offline" class="va-m">Offline</router-link><!-- <font-awesome-icon fixed-width icon="map"/> -->
            </b-nav-item>
            <b-nav-item class="mt-2">
              <router-link to="/upload" class="va-m">Upload</router-link>
            </b-nav-item>
            <b-nav-item class="mt-2">
              <router-link to="/discover" class="va-m">Discover</router-link>
            </b-nav-item>
						<hr class="sidebar-divider">
            <div><a class="text-uppercase">Groups</a></div><!--<font-awesome-icon fixed-width icon="check-circle"/>-->
						<b-nav-item class="mt-2">
              <router-link to="/lyrics" class="va-m">Lyrics</router-link>
            </b-nav-item>
						<b-nav-item class="mt-2">
              <router-link to="/music" class="va-m">Music</router-link>
            </b-nav-item>
            <!-- <b-nav-item class="mt-2">
							<div class="d-flex flex-justify-between text-bold">
								<router-link to="/dashboard" class="va-m text-white p-t-b-0"><font-awesome-icon fixed-width icon="robot"/>{{$t('nav.machine')}}</router-link>
								<router-link to="/dashboard" class="va-m text-white p-t-b-0" :class="mClass">{{$t('nav.'+mStatus)}} <font-awesome-icon fixed-width icon="power-off"/></router-link>
							</div>
            </b-nav-item>
						<b-nav-item>
							<div class="d-flex flex-justify-between text-bold">
								<router-link to="/recipe" class="va-m text-white p-t-b-0"><font-awesome-icon fixed-width icon="lemon"/>{{$t('nav.recipe')}}</router-link>
								<router-link to="/recipe" class="va-m text-white p-t-b-0" :class="rClass">{{$t('nav.'+rStatus)}} <font-awesome-icon fixed-width icon="link"/></router-link>
							</div>
            </b-nav-item> -->
            <hr class="sidebar-divider">
						<div><font-awesome-icon fixed-width icon="globe"/><small class="text-uppercase">Languages</small></div>
						<b-form-group class="text-center mt-3">
							<b-form-radio-group v-model="$i18n.locale" :options="langs" button-variant="outline-light" size="sm" buttons></b-form-radio-group>
						</b-form-group>
          </b-nav>
        </div>
			</slot>
		</div>
	</div>
</template>

<script>
// import { db, onSnapshot, doc, perf, trace } from "../fire"
// import store from '../store/store'
// import { mapGetters } from 'vuex'

export default {
  name:'sidebbar',
  props:{
		isVisible:{type:Boolean,default:true},
		showCloseButton:{type:Boolean,default:false}
	},
  data(){
    return{
			// brandL: store.getters.getLocation,
			background: 'white',
			mStatus: 'offline',
			mClass: 's-off',
			rStatus: 'not synced',
			rClass: 's-off',
      langs:[
				{text:'EN',value:'en'},
				{text:'中文',value:'zh-tw'}
			]
    }
  },
	// computed:{
	// 	...mapGetters([
  //     'getLocation'
  //   ])
	// },
	// watch:{
  //   getLocation(val){
  //     this.brandL = val;
	// 		if(val !== '-'){
	// 			this.getMStatus();
	// 		}
  //   }
  // },
	// methods:{
	// 	closeSidebar(){this.$emit('close-sidebar')},
	// 	getMStatus(){
	// 		const t = trace(perf,"getMachineStatus");
	// 		t.start();
	// 		const unsub = onSnapshot(doc(db, "status", this.brandL), (doc) => {
	// 			if(doc.exists){
	// 				this.mStatus = doc.data()['state'];
	// 				if(this.mStatus == "online"){this.mClass = 's-on'}
	// 				else{this.mClass = 's-off'}
	// 				if(doc.data()['Recipe-Update']){
	// 					this.rStatus = 'synced';
	// 					this.rClass = 's-on';
	// 				}else{
	// 					this.rStatus = 'not synced';
	// 					this.rClass = 's-off';
	// 				}
	// 			}else{
	// 				this.mStatus = 'offline';
	// 				this.mClass = 's-off';
	// 				this.rStatus = 'not synced';
	// 				this.rClass = 's-off';
	// 			}
	// 		});
	// 		t.stop();
	// 	}
	// }
}
</script>>

<style scoped>
.vd-sidebar-container{
	z-index: 1000;
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	width: 250px;
	box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
	background-color:#084e74 !important;
	color:white;
	overflow-y: auto;
	overflow-x: hidden;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
}
.vd-sidebar-container.hidden{
	left: -250px;
	opacity: 0;
}
.nav-link,.nav-item a{
	padding: 8px 0;
	color:#eaeaeae0;
}
.nav-item a:hover,.router-link-active{
	color: white !important;
	font-weight: bold;
}
.close-btn{
	color:#eaeaea;
	position: absolute;
	z-index: 200;
	right: 1px;
	top: 0;
	background-color: transparent !important;
	/* font-size: 2rem; */
	font-size: 20px;
	border: none;
	cursor: pointer;
}
.vd-sidebar-header{
	z-index: 45;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	width: 250px;
	height: 100px; /*130*/
	overflow-y: auto;
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	background-color: inherit;
	overflow: hidden;
}
.vd-sidebar-header.hidden{
	left: -250px;
	opacity: 0;
}
.vd-sidebar-content{
	padding: 100px 1rem 0rem 1rem;
	width: 250px;
	overflow: scroll;
}
.header{
	padding: 1rem;
}
.logo{
	width: 80px;
}
.sidebar-divider{
	width: 100% !important;
	border:1px solid #eaeaea3d !important;
}
.router-link-exact-active{
	font-weight: bold;
	color: white !important;
}
.va-m{
	vertical-align: middle !important;
}
.m-t-4{
	margin-top: 4px;
}
.p-t-b-0{
	padding-top: 0 !important;
	padding-bottom: 0 !important;
}
.s-on{
	color:#00ff09 !important;
}
.s-off{
	color: #eaeaea !important;
}
small{
	font-weight: bold !important;
}
.svg-inline--fa{
	vertical-align: middle;
	margin-right: 0.5rem;
}
</style>