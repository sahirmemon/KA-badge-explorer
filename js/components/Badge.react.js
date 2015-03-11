var React = require('react');
var Router = require('react-router');
var BadgesStore = require('../stores/BadgesStore.js');

var Badge = React.createClass ({
  
  mixins: [Router.Navigation, Router.State],
  
  getBadgeState: function() {
    var slug = this.getParams().slug;
    return {
      badge: BadgesStore.getBadgeWithSlug(slug)
    };
  },
  
  getInitialState: function() {  
    if (!this.isMounted())
      return null;
    return this.getBadgeState();
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
    this.setState(this.getBadgeState());
  },
  
  componentDidMount: function() {
    this.setState(this.getBadgeState());
  },
  
  render: function() {
    if (this.state == undefined || this.state.badge ==  undefined) {
      return null;
    }
    return (
      <div className="third">
        <div className="badge panel">
          <img src={this.state.badge.icons.large} width="320" height="320" className="img-responsive"/>
          <p className="badge-name">{this.state.badge.translated_description}</p>
          <p className="badge-description">{this.state.badge.safe_extended_description}</p>  
        </div>
      </div>
    );
  },
    
  _onChange: function() {
    if (!this.isMounted()) 
      return;
    this.setState(this.getBadgeState());
  }

});

module.exports = Badge;