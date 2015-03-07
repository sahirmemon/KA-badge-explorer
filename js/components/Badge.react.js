var React = require('react');
var Router = require('react-router');

var Route = Router.Route;

var Badge = React.createClass({
    mixins: [Router.Navigation, Router.State],
    render: function() {
        return (<h1>Details</h1>);
    }
});

module.exports = Badge;