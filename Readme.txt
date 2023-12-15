This is front end for all login,wishlist,email codes

for now this code is setup to run in local with login and wishlist in local - not sure on email part

before running the frontend, login service should be running

URLs should be changed accordingly so that it will work in local or in cloud

setup proxy - change two URLs for email and login out call
validate link , reset password, register, forgot password, password api -- for email related
user service , auth service -- for login and all
enable domain: '52.142.30.237', if it is going to cloud in auth.service.js

Refer documents in another git with name capstone_document



==================

To run the FE

import this from git
remove package-lock.json file
npm install
npm start  -- before starting make sure BE login service is running

jenkinsfile not working

==============

docker build -t arunvig/frontend_v2 .
sudo docker pull arunvig/frontend_v2
docker run -it -p 9001:3000 arunvig/frontend_v2

docker run --name auth -p 9003:9003 arunvig/jenkins_auth_ser
docker run --name wish -p 9004:9004 arunvig/jenkins_wish_ser
docker run --name emailv2 -v "/home/admin01/images":"/src/main/resources/images" -p 9002:9002 anin1905/emailv2:1
docker run --name frontend -p 9001:9001 arunvig/frontend