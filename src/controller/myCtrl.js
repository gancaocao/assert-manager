import getData from "./getData"

export default ["$scope",function ($scope) {
   $scope.message = "hello angular";
   $scope.messageList = getData.data;
   $scope.push = function (message) {
       getData.push(message);
   }
}];