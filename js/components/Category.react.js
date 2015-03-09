var React = require('react');
var Router = require('react-router');

var Category = React.createClass({
    mixins: [Router.State],
    render: function() {
        return (
          <h1>Details: {this.getParams().category}</h1>
        );
    }
});

module.exports = Category;