var React = require('react');
var Router = require('react-router');
var BadgeExplorerApp = require('./components/BadgeExplorerApp.react');
var Index = require('./components/Index.react');
var NotFound = require('./components/NotFound.react');
var Badges = require('./components/Badges.react');
var Badge = require('./components/Badge.react');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route path="/" handler={BadgeExplorerApp}>
    <Route name="category" path=":category/:name" handler={Badges}>
      <Route name="badge" path=":slug" handler={Badge}/>
    </Route>
    <DefaultRoute handler={Index}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = routes;