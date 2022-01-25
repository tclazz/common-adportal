import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    WebStatus:{
      isMobile:false,
      collapseSideBar:false,
      currentWindowWidth:0
    },
  },
  mutations: {
    updateWindowWidth(state,screenWidth){
      if (screenWidth <= 768){
        state.WebStatus.isMobile = true
        state.WebStatus.collapseSideBar = true
      } else if(screenWidth > 768 && screenWidth <= 1024){
        state.WebStatus.isMobile = false
        state.WebStatus.collapseSideBar = true
      } else {
        state.WebStatus.isMobile = false
        state.WebStatus.collapseSideBar = false
      }
      state.WebStatus.currentWindowWidth = screenWidth
    },
  },
  actions: {
  },
  modules: {
  }
})

