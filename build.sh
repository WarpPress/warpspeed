#!/bin/bash
rm -R dist
rm -R bucket
mkdir dist
mkdir dist/css
mkdir dist/js
mkdir dist/fonts
mkdir dist/img

cp -R src/img dist
cp -R src/fonts dist
cp src/index.html dist/index.html

cat src/js/materialize.js src/js/init.js > dist/js/bundle.js
cat src/css/style.css src/css/materialize.css > dist/css/bundle.css

node_modules/uglifyjs/bin/uglifyjs --compress --mangle -- dist/js/bundle.js > dist/js/bundle.min.js
node_modules/uglifycss/uglifycss dist/css/bundle.css > dist/css/bundle.min.css

rm dist/js/bundle.js
rm dist/css/bundle.css

#mkdir bucket

#zip -rT ./bucket/dist.zip dist 