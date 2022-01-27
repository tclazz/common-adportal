<template>
    <div :class="['headerWrapper',darkTheme ? 'themeDark':'themeLight']">
        <div class="leftOperations">
            <div class="headerItem" v-on:click="collapseSidebar">
                <a-icon :type="isMobile ? (showAsideDrawer ? 'menu-unfold':'menu-fold'):(collapseAside ? 'menu-unfold':'menu-fold')"/>
            </div>
        </div>
        <div class="headerOperations">
            <div class="headerItem">
                <a-avatar :size="18" style="backgroundColor:#2b92e4" icon="plus" />
                <span style="margin-left: 10px">新建</span>
            </div>
            <template v-if="!isMobile">
                <div class="headerItem">
                    <a-icon type="question-circle"/>
                </div>
                <div class="headerItem">
                    <a-icon type="message"/>
                </div>
                <div class="headerItem" v-on:click="fullScreen">
                    <a-icon :type="isFullscreen ? 'fullscreen-exit':'fullscreen'"/>
                </div>
            </template>
            <div class="headerItem">
                <a-avatar :size="25" style="backgroundColor:#87d068" icon="user" />
                <span style="margin-left: 10px">Serati Ma</span>
            </div>
            <div class="headerItem">
                <a-icon type="global"/>
            </div>
        </div>
    </div>
</template>

<script>
    import screenfull from 'screenfull'

    export default {
        name: "THeader",
        data() {
            return {
                darkTheme: true,
                collapseAside: false,
                isMobile: this.$store.state.WebStatus.isMobile,
                isFullscreen: false,
                darkTheme: this.$store.state.WebStatus.darkTheme,
                showAsideDrawer:this.$store.state.WebStatus.showAsideDrawer,
            }
        },
        methods: {
            changeTheme() {
                this.darkTheme = !this.darkTheme;
                this.$store.commit('switch2DarkTheme', this.darkTheme);
            },
            collapseSidebar() {
                if (this.isMobile){
                    this.showAsideDrawer = !this.showAsideDrawer;
                    this.$store.commit('toggleAsideDrawer', this.showAsideDrawer);
                } else {
                    this.collapseAside = !this.collapseAside;
                    this.$store.commit('collapseAside', this.collapseAside);
                }
            },
            fullScreen() {
                let that = this;
                // 如果不允许进入全屏，发出不允许提示
                if (!screenfull.enabled) {
                    return false;
                }
                that.isFullscreen = !this.isFullscreen;
                screenfull.toggle();
            }
        },
        mounted() {

        },
        watch: {
            '$store.state.WebStatus.darkTheme': function () {
                let that = this;
                that.darkTheme = that.$store.state.WebStatus.darkTheme;
            },
            '$store.state.WebStatus.isMobile': function (newValue, oldValue) {
                let that = this;
                that.isMobile = that.$store.state.WebStatus.isMobile;
            },
            '$store.state.WebStatus.showAsideDrawer': function (newValue, oldValue) {
                let that = this;
                that.showAsideDrawer = that.$store.state.WebStatus.showAsideDrawer;
            },
            '$store.state.WebStatus.collapseAside': function (newValue, oldValue) {
                let that = this;
                that.collapseAside = that.$store.state.WebStatus.collapseAside;
            },
        }
    }
</script>

<style scoped>
    .headerWrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
    }

    .headerWrapper.themeDark {
        color: rgba(255, 255, 255, 0.65);
        background: #001529;
    }

    .headerWrapper.themeLight {
        color: rgba(0, 0, 0, 0.65);
        background: #fff;
    }

    .headerItem {
        height: 100%;
        vertical-align: top;
        padding: 0 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        -webkit-transition: all .3s, padding 0s;
        transition: all .3s, padding 0s;
        font-size: 16px;
        line-height: 25px;
    }

    .headerItem:hover {
        background: rgba(0, 0, 0, .055);
    }

    .leftOperations {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
    }

    .headerOperations {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
    }
</style>
