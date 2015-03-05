**Visit the project live at: http://sahirmemon.github.io/KA-badge-explorer**

# Khan Academy Project-Based Interview: Badge Explorer

## Overview

Khan Academy students earn badges for different activities on our site (for things from watching videos to participating in community discussions); these fall mostly into different space-themed categories (from small "meteorite" badges to the super-elusive "black hole" badge). In addition to the celestial bodies, students earn "challenge patches" for mastering all the skills in a single area; they actually get pretty proud of them!

If you log in in KA, go to your homepage, and click "Badges", you'll see a collection of all your badges and all the ones that are possible to earn; it may make more sense than this explanation here. :)

For this project, we'd like to build a simple web app that lets students browse through the different badges available to them. Included in this directory is a mockup (`design.png`) of what we're aiming for: essentially, a scrollable list of all possible badges where you can click on any badge to get more info about it.

## Getting Started

Included is a simple HTML/CSS/JS scaffold that we've started for you. We've kept dependencies to a minimum in hopes of making it easy to dive into, but feel free to pull in any libraries or tools that you're familiar with, like Backbone, React, Handlebars, or Less. (The starter code is here to help you, but if you'd like to change or delete it, please do.)

Go ahead and open the `index.html` file in your browser now -- you should see the top half of the mockup implemented for you already. If you look through the code, you'll see that the "Virus" badge is hardcoded and there's no way yet to switch between badges. We'd like you to flesh out the page:

* Instead of hardcoding the badge info, the page should fetch the badges from the Khan Academy API at https://www.khanacademy.org/api/v1/badges?casing=camel and https://www.khanacademy.org/api/v1/badges/categories?casing=camel. (Tip: add `?format=pretty` to any API request to format the JSON nicely.)
* The second half of the page should have a list of badges broken down by category (see `design.png`).
* Each badge page should be bookmarkable so that you can send a link to a particular badge your friends.
* Some users might want to open this page on their phones, so we'd like to add some responsive styles. The master/detail interaction here might not translate well to a small screen, so feel free to get creative and change how things are displayed when shrunken.

We're hoping to see your architectural choices, design decisions, and thought process -- and then have a great conversation around your project and the choices you made. Our hope is that this won't take you more than a few hours. If you have extra time, here are a few ideas for things that could make this project even better:

* Snappy animations to make the page feel more alive
* Performance optimizations (at KA, we're big fans of speed; anything that makes the page feel faster counts as a win in our book)
* Accessibility support to make the page more usable on screen readers
* Anything else that you think can make the page really shine

Good luck!
