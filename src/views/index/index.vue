<template>
    <div class="tclazz-mainWrapper">
        <div :class="['tclazz-aside',collapseAside ? 'collapsed' : 'asideOpen',isMobile ? 'asideHidden':'']">
            <t-clazz-aside/>
        </div>
        <div :class="['tclazz-main',collapseAside ? 'asideCollapsed' : 'asideOpen',isMobile ? 'asideHidden':'']">
            <div :class="['tclazz-header',collapseAside ? 'asideCollapsed' : 'asideOpen',isMobile ? 'asideHidden':'']">
                <t-clazz-header/>
            </div>
            <div class="tclazz-content">
                <span>content</span>
            </div>
            <div class="tclazz-footer">
                <t-clazz-footer/>
            </div>
        </div>
        <a-drawer
                :title="null"
                placement="left"
                :closable="false"
                :maskClosable="true"
                :bodyStyle="{
                        padding:0
                    }"
                @close="closeAsideDrawer"
                :visible="showAsideDrawer">
            <t-clazz-aside/>
        </a-drawer>
    </div>
</template>

<script>
    export default {
        name: "index",
        components: {
            TClazzAside: () => import('@/components/layout/Aside'),
            TClazzHeader: () => import('@/components/layout/THeader'),
            TClazzFooter: () => import('@/components/layout/BFooter'),
        },
        data() {
            return {
                collapseAside: this.$store.state.WebStatus.collapseAside,
                isMobile: this.$store.state.WebStatus.isMobile,
                showAsideDrawer: this.$store.state.WebStatus.showAsideDrawer,
            }
        },
        methods: {
            closeAsideDrawer(){
                this.$store.commit('toggleAsideDrawer', false);
            }
        },
        mounted() {

        },
        watch: {
            '$store.state.WebStatus.collapseAside': function (newValue, oldValue) {
                let that = this;
                that.collapseAside = that.$store.state.WebStatus.collapseAside;
            },
            '$store.state.WebStatus.isMobile': function (newValue, oldValue) {
                let that = this;
                that.isMobile = that.$store.state.WebStatus.isMobile;
                if (!that.isMobile) {
                    this.$store.commit('toggleAsideDrawer', false);
                }
            },
            '$store.state.WebStatus.showAsideDrawer': function (newValue, oldValue) {
                let that = this;
                that.showAsideDrawer = that.$store.state.WebStatus.showAsideDrawer;
            }
        }
    }
</script>

<style scoped>
    .tclazz-mainWrapper {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .tclazz-aside {
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        transition: all 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
        z-index: 13;
    }

    .tclazz-aside.asideOpen {
        width: 256px;
    }

    .tclazz-aside.collapsed {
        width: 80px;
    }

    .tclazz-aside.asideHidden {
        width: 0 !important;
        display: none;
    }

    .tclazz-header {
        height: 48px;
        position: fixed;
        top: 0;
        right: 0;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        z-index: 12;
        transition: all 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    }

    .tclazz-header.asideOpen {
        width: calc(100% - 256px);
    }

    .tclazz-header.asideCollapsed {
        width: calc(100% - 80px);
    }

    .tclazz-header.asideHidden {
        width: 100% !important;
    }

    .tclazz-main {
        flex: 1;
        min-height: 100vh;
        padding-top: 48px;
        transition: all 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    }

    .tclazz-main.asideOpen {
        padding-left: 256px;
    }

    .tclazz-main.asideCollapsed {
        padding-left: 80px;
    }

    .tclazz-main.asideHidden {
        padding-left: 0 !important;
    }

    .tclazz-content {
        padding: 10px;
    }
</style>
