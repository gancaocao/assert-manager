<template>
    <div>
        <button @click="createComp">create</button>
        <button @click="destroyComp">destroy</button>
        <div id="ccc"></div>
    </div>

</template>

<script>
    import Vue from "vue"
    import test from "./test"

    export default {
        name: "comp",
        data() {
            return {
                message: "hello vue",
                messageList: [],
                pp: [],
                p2: []
            };
        },
        mounted() {
        },
        methods: {
            createComp() {
                let ctor = Vue.extend(test);
                this.instance = new ctor();
                this.instance.$mount("#ccc");
            },
            destroyComp() {
                this.instance.$destroy();
                this.instance = null;
                let ele = document.getElementById("ccc")
                ele.parentElement.removeChild(ele);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/test";

    .red {
        background-color: red;
        color: aqua;
        .sss {
            background-color: black;
        }
    }
</style>