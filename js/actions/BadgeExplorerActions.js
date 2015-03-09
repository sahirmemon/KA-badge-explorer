var AppDispatcher = require('../dispatcher/BadgeExplorerDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

var BadgeExplorerActions = {
  
  receiveBadgeTypes: function(badgeTypes) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_BADGE_TYPES,
      badgeTypes: badgeTypes
    });
  },
  
  getBadgeType: function(category) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.BADGETYPE_GET,
      category: category
    });
  }
};

module.exports = BadgeExplorerActions;