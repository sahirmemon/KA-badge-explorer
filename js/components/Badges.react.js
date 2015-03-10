var React = require('react');
var Router = require('react-router');
var BadgesStore = require('../stores/BadgesStore.js');

var Route = Router.Route;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Badges = React.createClass ({
  
  getBadgesState: function() {
    var category = this.getParams().category;
    return {
      badges: BadgesStore.getBadgesForCategory(category)
    };
  },
  
  mixins: [Router.State],
  
  getInitialState: function() {
    return this.getBadgesState();
  },
  
  componentWillMount: function() {
    BadgesStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function() {
    BadgesStore.removeChangeListener(this._onChange);
  },
  
  componentWillReceiveProps: function() {
    if (!this.isMounted())
      return;
    this.setState(this.getBadgesState());
  },
  
  render: function() {
    var category = this.getParams().category;
    var name = this.getParams().name;
    var links = this.state.badges.map(function(badge) {
      return (
        <li key={badge.slug} className="panel">
          <Link
            to="badge"
            params={{category: category, name: name, slug: badge.slug}}>
              <img className="badge" src={badge.icons.compact}/>
              <p className="badge-header">{badge.description}</p>
            </Link>
        </li>
      );
    });
    return (
      <div className="flex-container">
        <div className="third badges">
          <h2>{this.getParams().name}</h2>
          <ul>
            {links}
          </ul>
        </div>
        <div className="two-thirds badge-details">
          <RouteHandler/>
        </div>
      </div>

    );
  },
    
  _onChange: function() {
    if (!this.isMounted()) 
      return;
    
    this.setState(this.getBadgesState());
  }

});

module.exports = Badges;