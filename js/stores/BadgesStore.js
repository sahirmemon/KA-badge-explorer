var AppDispatcher = require('../dispatcher/BadgeExplorerDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants.js');
var assign = require ('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _badges = [];


function addBadges(badges) {
  _badges = badges;
}

var BadgesStore = assign({}, EventEmitter.prototype, {
  
  getBadgesForCategory: function(category) {
    var badges = [];
    for (i = 0; i < _badges.length; ++i) {
      if (_badges[i].badge_category == category) {
        badges.push(_badges[i]);
      }  
    }
    return badges;
  },
  
  getBadgeWithSlug: function(slug) {
    var badge;
    for (i = 0; i < _badges.length; ++i) {
      if (_badges[i].slug == slug) {
        badge = _badges[i];
      }  
    }
    return badge;
  },
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

BadgesStore.dispatchToken = AppDispatcher.register(function(payload) {
  
  switch(payload.actionType) {
    case ActionTypes.RECEIVE_BADGES:
      addBadges(payload.badges)
      BadgesStore.emitChange();
      break;
      
    default:
  }
});

module.exports = BadgesStore;