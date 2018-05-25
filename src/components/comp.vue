<template>
    <div class="test" style="height: 300px;width: 300px;overflow: scroll">
        <p class="sss" v-for="item in messageList">
            {{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}</p>
    </div>

</template>

<script>
    import getData from "../controller/getData"

    export default {
        name: "comp",
        data() {
            return {
                message: "hello vue",
                messageList: []
            };
        },
        mounted() {
            console.log(getData);
            for (let i = 0; i < 1; i++) {
                this.messageList.push("dfsdfsdf");
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