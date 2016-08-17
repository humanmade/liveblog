.PHONY: build

build: node_modules
	browserify index.js -s rcss -o bundle.js
	mv bundle.js ../webapp/third_party/javascript-khansrc/rcss-compiled/rcss.js

node_modules:
	npm install
