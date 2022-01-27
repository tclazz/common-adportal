<template>
    <div :class="['aSide',darkTheme ? 'themeDark':'themeLight']">
        <router-link to="/" :class="['tclazz-brand',darkTheme ? 'themeDark':'themeLight']">
            <img class="siteLogo" src="http://tclazz.com:81/img/logo.10fb20a6.png"/>
            <span :class="['siteName',isMobile ? '':(collapseAside ? 'hidden' : '')]">后台管理系统</span>
        </router-link>
        <div class="tclazz-asideMenus">
            <vue-scroll :ops="ops" style="width: 100%;height: 100%">
                <a-menu mode="inline" :theme="darkTheme ? 'dark':'light'" :open-keys="openKeys"
                        style="width: 100%;height:100%" v-model="selectedKeys" @click="onMenuItemClick"
                        @openChange="onOpenChange" :inline-collapsed="!isMobile && collapseAside">
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="mail"/><span>导航一</span></span>
                        <a-menu-item key="1">
                            选项一
                        </a-menu-item>
                        <a-menu-item key="2">
                            选项二
                        </a-menu-item>
                        <a-menu-item key="3">
                            选项三
                        </a-menu-item>
                        <a-menu-item key="4">
                            选项四
                        </a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="appstore"/><span>导航二</span></span>
                        <a-menu-item key="5">
                            选项四
                        </a-menu-item>
                        <a-menu-item key="6">
                            选项四
                        </a-menu-item>
                        <a-sub-menu key="sub3" title="Submenu">
                            <a-menu-item key="7">
                                Option 7
                            </a-menu-item>
                            <a-menu-item key="8">
                                Option 8
                            </a-menu-item>
                        </a-sub-menu>
                    </a-sub-menu>
                    <a-sub-menu key="sub4">
                        <span slot="title"><a-icon type="setting"/><span>Navigation Three</span></span>
                        <a-menu-item key="9">
                            Option 9
                        </a-menu-item>
                        <a-menu-item key="10">
                            Option 10
                        </a-menu-item>
                        <a-menu-item key="11">
                            Option 11
                        </a-menu-item>
                        <a-menu-item key="12">
                            Option 12
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </vue-scroll>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        data() {
            return {
                rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
                openKeys: [],
                //滚动条配置
                ops: this.$store.state.scrollBarOptions,
                darkTheme: this.$store.state.WebStatus.darkTheme,
                collapseAside: this.$store.state.WebStatus.collapseAside,
                isMobile: this.$store.state.WebStatus.isMobile,
                selectedKeys:this.$store.state.WebStatus.selectedAsideMenu,
            }
        },
        methods: {
            onOpenChange(openKeys) {
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                    this.openKeys = openKeys;
                } else {
                    this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            },
            onMenuItemClick(item){
                this.$store.commit('updateSelectedAsideMenu', item.key);
            }
        },
        mounted() {

        },
        watch: {
            '$store.state.WebStatus.darkTheme': function () {
                let that = this;
                that.darkTheme = that.$store.state.WebStatus.darkTheme;
            },
            '$store.state.WebStatus.collapseAside': function () {
                let that = this;
                that.collapseAside = that.$store.state.WebStatus.collapseAside;
                if (that.collapseAside){
                    that.openKeys = [];
                }
            },
            '$store.state.WebStatus.isMobile': function (newValue, oldValue) {
                let that = this;
                that.isMobile = that.$store.state.WebStatus.isMobile;
                if (!that.isMobile){
                    that.openKeys = [];
                }
            },
            '$store.state.WebStatus.selectedAsideMenu': function (newValue, oldValue) {
                let that = this;
                that.selectedKeys = that.$store.state.WebStatus.selectedAsideMenu;
            }
        }
    }
</script>

<style scoped>
    .aSide {
        width: 100%;
        height: 100vh;
        box-shadow: 2px 0 6px rgba(29, 25, 41, .1);
        transition: background .3s;
    }

    .hidden {
        display: none;
    }

    .aSide.themeDark {
        color: rgba(255, 255, 255, 0.65);
        background: #001529;
    }

    .aSide.themeLight {
        color: rgba(0, 0, 0, 0.65);
        background: #fff;
    }

    .tclazz-brand {
        height: 48px;
        line-height: 48px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid;
        transition: border-bottom-color .3s;
        cursor: pointer;
    }

    .siteLogo {
        height: 32px;
        width: 32px;
        line-height: 32px;
    }

    .siteName {
        font-size: 18px;
        font-weight: 600;
        line-height: 32px;
        margin-left: 10px;
        transition: all .3s;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .themeDark .siteName {
        color: rgba(255, 255, 255, 1);
    }

    .themeLight .siteName {
        color: rgba(0, 0, 0, 0.65);
    }

    .tclazz-brand.themeDark {
        border-bottom-color: #00080f;
    }

    .tclazz-brand.themeLight {
        border-bottom-color: #f8f8f9;
    }

    .tclazz-asideMenus {
        width: 100%;
        height: calc(100vh - 48px);
    }

    .aSide >>> .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
        border-right: none;
    }
</style>
