var BadgeExplorerActions = require('../actions/BadgeExplorerActions');

var API_CATEGORIES = 'https://www.khanacademy.org/api/v1/badges/categories';
var API_BADGES = 'https://www.khanacademy.org/api/v1/badges';

module.exports = {    
  
  getAllBadgeTypes: function() {
    var badgeTypes = {};
    getJSON(API_CATEGORIES, function(err, res) {
      if (err != undefined) {
        console.log("Uh-oh! There was a problem with retrieving categories. Let's give it one more try.");
        return;
      }
      res.forEach(function(badgeType) {
        badgeTypes[badgeType.category] = badgeType;
      });
      BadgeExplorerActions.receiveBadgeTypes(badgeTypes);
    });
  },
  
  getBadges: function() {
    var badges = [];
    getJSON(API_BADGES, function(err, res) {
      if (err != undefined) {
        console.log("Uh-oh! There was a problem with retrieving badges. Let's give it one more try.");
        return;
      }
      res.forEach(function(badge) {
        badges.push(badge);
      });
      BadgeExplorerActions.receiveBadges(badges);
    });
  }
};

function getJSON(url, cb) {
  var req = new XMLHttpRequest();
  req.onload = function () {
    if (req.status === 404) {
      cb(new Error('Not Found'));
    } else {
      cb(null, JSON.parse(req.response));
    }
  };
  req.open('GET', url);
  req.send();
}

//
//      var array = [];
//  for (var category in _badgeTypes) {
//    array.push(_badgeTypes[category]);
//  }
//  return array;
//  }