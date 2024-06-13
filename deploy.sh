#!/usr/bin/env sh

# abort on errors
set -e

# build
bun run build

# navigate into the build output directory
cd dist

# Make a copy of index.html to 404.html
cp index.html 404.html

git init
git add -A
git commit -m "deploy"
git push -f git@github.com:Nabil-Alhanif/course-review.git master:gh-pages
cd -
