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
  
  receiveBadges: function(badges) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_BADGES,
      badges: badges
    });
  }
};

module.exports = BadgeExplorerActions;