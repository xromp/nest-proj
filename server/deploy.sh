#!/bin/sh
echo $1
if [ $1  = "--soft" -o  $1 =  "-s" ]
then
  echo "Soft deployment..."
  rm -rf /dist 
  npm run build 
  # pm2 delete all
  # pm2 start --name wesync-backend dist/main.js 
  # pm2 --name wesync serve --spa portal/ 5000
  # pm2 logs
  systemctl restart lsws
else
  echo "Full deployment..."
  rm -rf node_modules
  rm -rf package-lock.json
  rm -rf dist
  npm cache clean --force
  npm i --force
  node -v
  npm -v
  systemctl restart lsws
  # npm run build
  # pm2 delete all
  # pm2 start --name wesync-backend dist/main.js
  # pm2 --name wesync-portal serve --spa portal/ 5000
  # pm2 logs
fi