import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    WebStatus:{
      isMobile:false,
      collapseAside:false,
      showAsideDrawer:false,
      darkTheme:false,
      currentWindowWidth:0,
      //当前选择的菜单项目
      selectedAsideMenu:[]
    },
    //vue-scroll 垂直滚动条全局配置
    scrollBarOptions:{
      vuescroll: {},
      scrollPanel: {
        scrollingX:false
      },
      rail: {
        keepShow: true
      },
      bar: {
        hoverStyle: true,
        onlyShowBarOnScroll: true, //是否只有滚动的时候才显示滚动条
        background: "#929292",//滚动条颜色
        opacity: 0.5,//滚动条透明度
      }
    },
  },
  mutations: {
    updateWindowWidth(state,screenWidth){
      if (screenWidth <= 768){
        state.WebStatus.isMobile = true
        state.WebStatus.collapseAside = true
      } else if(screenWidth > 768 && screenWidth <= 1024){
        state.WebStatus.isMobile = false
        state.WebStatus.collapseAside = true
      } else {
        state.WebStatus.isMobile = false
        state.WebStatus.collapseAside = false
      }
      state.WebStatus.currentWindowWidth = screenWidth
    },
    switch2DarkTheme(state,isDarkTheme){
      state.WebStatus.darkTheme = isDarkTheme;
    },
    collapseAside(state,collapseAside){
      state.WebStatus.collapseAside = collapseAside;
    },
    toggleAsideDrawer(state,toggleAsideDrawer){
      state.WebStatus.showAsideDrawer = toggleAsideDrawer;
    },
    updateSelectedAsideMenu(state,menuKey){
      state.WebStatus.selectedAsideMenu = [menuKey];
    }
  },
  actions: {
  },
  modules: {
  }
})
