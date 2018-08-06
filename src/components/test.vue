<template>
    <div id="ccc"><p>{{aaa}}</p></div>
</template>

<script>
    export default {
        name: "test",
        data(){
            return{
                aaa:""
            }
        },
        mounted(){
            for(let i = 0 ; i < 100000;i++){
                this.aaa+="dfsdfsfsdfsdffddfsdsssssssssssssssssssssss";
            }
        }
    }
</script>

<style scoped>

</style>