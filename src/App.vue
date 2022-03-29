<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
    export default {
        name: "app",
        data() {
            return {}
        },
        methods: {
            screenWidthListener() {
                let that = this;
                window.screenWidth = document.body.clientWidth;
                that.$store.commit('updateWindowWidth', window.screenWidth);
                window.onresize = () => {
                    return (() => {
                        window.screenWidth = document.body.clientWidth;
                        that.$store.commit('updateWindowWidth', window.screenWidth);
                    })()
                };
            }
        },
        mounted() {
            let that = this;
            that.screenWidthListener();
        }
    }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.ant-divider-horizontal {
        margin: 5px 0 !important;
    }
</style>

