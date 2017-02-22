module.exports = {
    name: "tracksService",
    func: function($http) {

        let trackList = [];
        let latestTracks = [];
        let lovedTracks = [];
        let postedTracks = [];
        let searchedArray = [];

        return {
            getTracksfunc: function() {
                //http get req.
                let tracks = $http.get('https://api.hypem.com/v2/tracks?key=swagger').then(function(response) {
                    const incoming = response.data;
                    angular.copy(response.data, trackList)
                })
                return trackList;
            },
            getLatestfunc: function(query) {
                //http get latest
                let latest = $http.get('https://api.hypem.com/v2/tracks?q=' + query + '&key=swagger').then(function(response) {
                    const incoming = response.data;
                    latest = incoming;
                    angular.copy(response.data, latestTracks)
                })
                return latestTracks;
            },
            getLovedfunc: function(query) {
                //http get loved
                let loved = $http.get('https://api.hypem.com/v2/tracks?q=' + query + '&key=swagger').then(function(response) {
                    const incoming = response.data;
                    angular.copy(response.data, lovedTracks)
                })
                return lovedTracks;
            },
            getPostedfunc: function(query) {
                //http get posted
                let posted = $http.get('https://api.hypem.com/v2/tracks?q=' + query + '&key=swagger').then(function(response) {
                    const incoming = response.data;
                    angular.copy(response.data, postedTracks)
                })
                return postedTracks;
            },
            searchTracksfunc: function(query){
              // search tracks
              let searched = $http.get('https://api.hypem.com/v2/tracks?q=' + query + '&key=swagger').then(function(response) {
                  const incoming = response.data;
                  angular.copy(response.data, searchedArray)
              })
              return searchedArray;
            }
        }
    }
}
