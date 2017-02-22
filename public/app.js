(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('fanHeroApp', ['ui.router']);

// CONTROLLERS
const controllers = [
    require('./controllers/viewTracksController'),
];

for (let i = 0; i < controllers.length; i++) {
    console.log(controllers[i]);
    app.controller(controllers[i].name, controllers[i].func);
};

//SERVICES
const services = [
    require('./services/tracksService')
];

for (let i = 0; i < services.length; i++) {
    console.log(services[i]);
    app.factory(services[i].name, services[i].func)
};


//ROUTES
const routes = require('./routes');
app.config($stateProvider => {
    for (let i = 0; i < routes.length; i++) {
        $stateProvider.state(routes[i]);
    }
});

//COMPONENTS
const components = [
    require('./components/latestComponent'),
    require('./components/lovedComponent'),
    require('./components/postedComponent'),
];

for (let i = 0; i < components.length; i++) {
    console.log(components[i]);
    app.component(components[i].name, components[i].config);
};

},{"./components/latestComponent":2,"./components/lovedComponent":3,"./components/postedComponent":4,"./controllers/viewTracksController":5,"./routes":6,"./services/tracksService":7}],2:[function(require,module,exports){
module.exports = {
  name: 'latestComponent',
  config: {
    templateUrl: 'templates/latest.html',
  },
};

},{}],3:[function(require,module,exports){
module.exports = {
  name: 'lovedComponent',
  config: {
    templateUrl: 'templates/loved.html',
  },
};

},{}],4:[function(require,module,exports){
module.exports = {
  name: 'postedComponent',
  config: {
    templateUrl: 'templates/posted.html',
  },
};

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
module.exports = [
    {
        name: 'loved',
        url: '/loved',
        component: 'lovedComponent',
    },

    {
        name: 'latest',
        url: '/latest',
        component: 'latestComponent',
    },

    {
        name: 'posted',
        url: '/posted',
        component: 'postedComponent',
    },
];

},{}],7:[function(require,module,exports){
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

},{}]},{},[1]);
