var keyMirror = require('keymirror');

module.exports = {
  
  ActionTypes: keyMirror({
    RECEIVE_BADGE_TYPES: null,
    BADGETYPE_GET: null,
    BADGE_GET: null
  }),
  
  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};