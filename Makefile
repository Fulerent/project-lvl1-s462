install: 
	install npm

start: 
	npx babel-node src/bin/brain-progression.js

publish:
	npm publish

lint: 
	npx eslint .
