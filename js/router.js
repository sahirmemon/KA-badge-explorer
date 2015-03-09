var React = require('react');
var Router = require('react-router');
var BadgeExplorerApp = require('./components/BadgeExplorerApp.react');
var Index = require('./components/Index.react');
var Category = require('./components/Category.react');
var NotFound = require('./components/NotFound.react');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route path="/" handler={BadgeExplorerApp}>
        <DefaultRoute handler={Index}/>
        <Route name="category" path=":category" handler={Category}/>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

module.exports = routes;