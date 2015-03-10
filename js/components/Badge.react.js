var React = require('react');
var Router = require('react-router');
var BadgesStore = require('../stores/BadgesStore.js');

var Badge = React.createClass ({
  
  getBadgeState: function() {
    var slug = this.getParams().slug;
    return {
      badge: BadgesStore.getBadgeWithSlug(slug)
    };
  },
  
  mixins: [ Router.State],
  
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
  
  render: function() {
    if (this.state == undefined) {
      return (<div></div>);
    }
    return (
      <div className="third badges">
        <img src={this.state.badge.icons.large}/>
        <p>{this.state.badge.translated_description}</p>
        <p>{this.state.badge.safe_extended_description}</p>  
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