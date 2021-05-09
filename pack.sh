rm -rf output
mkdir output
yarn build
cp -r build ./output/app
cp -a pack/. ./output/
