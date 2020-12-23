import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loading:false
	},
	
	mutations: {
		/**
		 * @name 是否显示全局组件loading
		 */
		switch_loading(state){
			state.loading = !state.loading
		}
	},
	actions: {
		 
	}
})

export default store
