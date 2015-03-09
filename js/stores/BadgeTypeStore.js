var AppDispatcher = require('../dispatcher/BadgeExplorerDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants.js');
var assign = require ('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _badgeTypes = {};


function addBadgeTypes(badgeTypes) {
  _badgeTypes = badgeTypes;
}

function getBadgeTypes() {    
  var array = [];
  for (var category in _badgeTypes) {
    array.push(_badgeTypes[category]);
  }
  return array;
}

var BadgeTypeStore = assign({}, EventEmitter.prototype, {
  
  getAll: function() {
    return getBadgeTypes();
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

BadgeTypeStore.dispatchToken = AppDispatcher.register(function(payload) {
  
  var action = payload.action;
  
  switch(action.type) {
    case ActionTypes.RECEIVE_BADGE_TYPES:
      addBadgeTypes(action.badgeTypes)
      console.log("loaded");
      BadgeTypeStore.emitChange();
      break;
      
    default:
  }
});

module.exports = BadgeTypeStore;