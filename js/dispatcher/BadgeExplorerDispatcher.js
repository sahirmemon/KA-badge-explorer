//var Dispatcher = require('./Dispatcher.js');
//var assign = require ('object-assign');
//
//var BadgeExplorerDispatcher = assign({}, Dispatcher.prototype, {  
//  handleViewAction: function(action) {
//    this.dispatch({
//      source: 'VIEW_ACTION',
//      action: action
//    });
//  }
//});

var Constants = require('../constants/Constants');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSources = Constants.PayloadSources;

var BadgeExplorerDispatcher = assign(new Dispatcher(), {
  
  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },
  
  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = BadgeExplorerDispatcher;