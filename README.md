
# Local
## Yarn
#### Install Dependencies
    yarn 
#### Develop
    yarn dev
###### or
    yarn start
#### Build distribution 
    yarn build:dev
###### or
    yarn build:prod
## NPM
#### Install Dependencies 
    npm install 
#### Develop
    npm run dev
###### or
    npm run start
#### Build distribution 
    npm run build:dev
###### or
    npm run build:prod
# Docker 
    docker build -t web .
    docker run -itd --name mycontainer --publish 8080:80 web