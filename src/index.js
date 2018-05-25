import Vue from "vue"
import Comp from "./components/comp"
let MyCtrl = require("./controller/myCtrl")
let angular = require("angular");

new Vue({
    el:"#myVue",
    components:{Comp}
});

let app = angular.module("myApp",[]);
app.controller("myCtrl",MyCtrl);
