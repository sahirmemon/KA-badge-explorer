var keyMirror = require('keymirror');

module.exports = {
  
  ActionTypes: keyMirror({
    RECEIVE_BADGE_TYPES: null,
    RECEIVE_BADGES: null
  }),
  
  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};