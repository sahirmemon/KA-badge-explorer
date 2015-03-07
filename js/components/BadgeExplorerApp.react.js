var React = require('react');
var Router = require('react-router');
var BadgeTypeStore = require('../stores/BadgeTypeStore.js');

var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Route.RouteHandler;

function getBadgeTypesState() {
  return {
    badgeTypes: BadgeTypeStore.getAll()
  };
}

var BadgeExplorerApp = React.createClass ({
  
  getInitialState: function() {
    return getBadgeTypesState();
  },
  
  componentWillMount: function() {
    BadgeTypeStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function() {
    BadgeTypeStore.removeChangeListener(this._onChange);
  },
                                          
  render: function() {
    console.log("Checking to see if there is anything in state badgeTypes: " + this.state.badgeTypes);
    var links = this.state.badgeTypes.map(function(badgeType) {
      console.log(badgeType.type_label);
      return (
        <li key={badgeType.category}>
          <Link
            to="badge"
            params={{id: badgeType.category}}
          >{badgeType.type_label}</Link>
        </li>
      );
    });
    return (
      <div className="badge-types-container">
        <ul className="badge-types">
          {links}
        </ul>
        <div className="badge">
          <RouteHandler />
        </div>
      </div>
    );
  },
    
  _onChange: function() {
    console.log("on change");
    this.setState(getBadgeTypesState());
  }

});

module.exports = BadgeExplorerApp;