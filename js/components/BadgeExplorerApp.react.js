var React = require('react');
var Router = require('react-router');
var BadgeTypeStore = require('../stores/BadgeTypeStore.js');

var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

function getBadgeTypesState() {
  return {
    badgeTypes: BadgeTypeStore.getAll()
  };
}

var BadgeExplorerApp = React.createClass ({
  
  mixins: [Router.State],
  
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
    var links = this.state.badgeTypes.map(function(badgeType) {
      return (
        <li key={badgeType.category}>
          <Link
            to="category"
            params={{category: badgeType.category}}
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
          <RouteHandler/>
        </div>
      </div>
    );
  },
    
  _onChange: function() {
    this.setState(getBadgeTypesState());
  }

});

module.exports = BadgeExplorerApp;