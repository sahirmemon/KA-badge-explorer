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
      console.log(badgeType);
      return (
        <li key={badgeType.category}>
          <Link
            to="category"
            params={{category: badgeType.category}}>
              <img className="badge" src={badgeType.medium_icon_src}/>
              <span>{badgeType.type_label}</span>
              <p>{badgeType.translated_description}</p>
            </Link>
        </li>
      );
    });
    return (
      <div className="flex-container">
        <div className="flex-default full first banner">
            <div className="three-quarters full-small-mobile end">
              <div className="container">
                <a href="http://khanacademy.org">
                  <img className="logo" src="img/ka-simplified-logo-white.png"/>
                </a>
                <h1>Badge Explorer</h1>
              </div>
            </div>
        </div>
        <div className="third badge-types">
          <h2>Badge Types</h2>
          <ul>
            {links}
          </ul>
        </div>
        <div className="third">
          <div className="badge">
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  },
    
  _onChange: function() {
    this.setState(getBadgeTypesState());
  }

});

module.exports = BadgeExplorerApp;