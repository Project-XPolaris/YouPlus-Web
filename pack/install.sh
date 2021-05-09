echo "install nodejs"
apt install nodejs
echo "install yarn"
npm install --global yarn
echo "install serve"
yarn global add serve
echo "install service"
sh ./install-service.sh
