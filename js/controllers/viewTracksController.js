module.exports = {
    name: "viewTracksController",
    func: function($scope, tracksService) {

        $scope.tracks = tracksService.getTracksfunc();

        $scope.showLatest = function() {
            let latestHype = tracksService.getLatestfunc("latest");
            $scope.tracks = latestHype;
        }

        $scope.showLoved = function() {
            let lovedHype = tracksService.getLovedfunc("loved");
            $scope.tracks = lovedHype;
        }

        $scope.showPosted = function() {
            let postedHype = tracksService.getPostedfunc("posted");
            $scope.tracks = postedHype;
        }
    },
}
