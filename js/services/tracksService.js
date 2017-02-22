module.exports = {
    name: "tracksService",
    func: function($http) {

        let trackList = [];
        let latestTracks = [];
        let lovedTracks = [];
        let postedTracks = [];

        return {
            getTracksfunc: function() {
                //http get req.
                let tracks = $http.get('https://api.hypem.com/v2/tracks?key=swagger').then(function(response) {
                    const incoming = response.data;
                    console.log("should be receiving a REGULAR list of tracks below: ");
                    console.log(incoming);
                    angular.copy(response.data, trackList)
                })
                return trackList;
            },
            getLatestfunc: function(query) {
                //http get latest
                let latest = $http.get('https://api.hypem.com/v2/tracks?q=' + query + '&key=swagger').then(function(response) {
                    const incoming = response.data;
                    latest = incoming;
                    console.log("should be receiving a list of the LATEST tracks below: ");
                    console.log(incoming);
                    angular.copy(response.data, latestTracks)
                })
                return latestTracks;
            },
            getLovedfunc: function(query) {
                //http get loved
                let loved = $http.get('https://api.hypem.com/v2/tracks?q=' + query + '&key=swagger').then(function(response) {
                    const incoming = response.data;
                    console.log("Receiving a list of the LOVED tracks below: ");
                    console.log(incoming);
                    angular.copy(response.data, lovedTracks)
                })
                return lovedTracks;
            },
            getPostedfunc: function(query) {
                //http get posted
                let posted = $http.get('https://api.hypem.com/v2/tracks?q=' + query + '&key=swagger').then(function(response) {
                    const incoming = response.data;
                    console.log("Receiving a list of the POSTED tracks below: ");
                    console.log(incoming);
                    angular.copy(response.data, postedTracks)
                })
                return postedTracks;
            },
        }
    }
}
