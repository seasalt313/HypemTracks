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
