#!/bin/bash

#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

#create our working directory if it doesnt exist
DIR="/home/ec2-user/sis-api"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
  cd /home/ec2-user
  sudo rm -rf sis-api/
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi