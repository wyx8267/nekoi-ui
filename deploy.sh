rm -rf dist &&

yarn build &&

cd dist &&

git init &&

git add . &&

git commit -m 'init' &&

git branch -M master &&

git remote add origin git@github.com:wyx8267/nekoi-ui-website.git &&

git push -f -u origin master &&

cd ..

echo https://wyx8267.github.io/nekoi-ui-website/#/