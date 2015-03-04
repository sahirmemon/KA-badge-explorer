(function() {

// TODO: Instead of hardcoding this info, fetch it from the API at
// https://www.khanacademy.org/api/v1/badges?casing=camel and
// https://www.khanacademy.org/api/v1/badges/categories?casing=camel
var virusBadge = {
    "description": "Virus",
    "icons": {
        "small": "https://www.khanacademy.org/images/badges/meteorite/virus-40x40.png",
        "compact": "https://www.khanacademy.org/images/badges/meteorite/virus-60x60.png",
        "large": "https://www.khanacademy.org/images/badges/meteorite/virus-512x512.png",
        "email": "https://www.khanacademy.org/images/badges/meteorite/virus-70x70.png"
    },
    "absoluteUrl": "https://www.khanacademy.org/badges/virus",
    "badgeCategory": 0,
    "points": 0,
    "safeExtendedDescription": "Share a program you've created via Facebook, Twitter, or email",
    "slug": "virus"
};

function renderBadgeInSwitcher(badge, $el) {
    var $badge = $(
        "<div class='full-badge clearfix'>" +
            "<div class='full-badge-icon'>" +
                "<img>" +
            "</div>" +
            "<div class='full-badge-title'></div>" +
            "<div class='full-badge-description'></div>" +
        "</div>"
    );

    $badge.find(".full-badge-icon img").attr("src", badge.icons.large);
    $badge.find(".full-badge-title").text(badge.description);
    $badge.find(".full-badge-description").text(badge.safeExtendedDescription);

    $el.append($badge);
}

var BadgeExplorer = {
    render: function() {
        // TODO: Make this page not always render the same badge
        renderBadgeInSwitcher(virusBadge, $(".badge-switcher"));
    }
};

window.BadgeExplorer = BadgeExplorer;

})();
