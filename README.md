# tut-build-tools

Perform the same cssmin task with common build tools. 

# make

## adv

* Installed by default on most *nix platforms
* Has existed forever
* Is maintained and dependable, not going to disappear

## disadv

* _Not_ platform independent
* Where to document dependencies?
* No formal structure for running tasks
* Bash, not JS

# grunt

## adv

* Large community: lots of "plugins"
* Platform independent
* Configuration based
* Create plugins and build config in JS

## disadv

* Easy to create sprawling build scripts
* Requires some JS knowledge

# gulp

## adv

* Platform independent
* Code not config
* Leverages node streams
* Create plugins and build config in JS
* Faster?
* Less boilerplate than grunt

## disadv

* Requires understanding of node, streams and JS