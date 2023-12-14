pipeline {
    agent any
    tools{
        maven "M2_HOME"
    }
    environment {
        USER = credentials('mongodb-username')
        PWD = credentials('mongodb-pwd')
        DUSER = credentials('dockerhub_username')
        DPWD = credentials('dockerhub_pwd')
    }
    stages{
        stage('1. GIT Clone'){
            steps{
                git 'https://github.com/arunbalajii/Frontend_Project.git'
            }
        }
        stage('2. Build Docker Image'){
            steps{
                script{
                    bat 'docker build -t arunvig/frontend_v2 .'
                    }
            }
        }
        stage('3. Push to Docker Hub'){
            steps{
                script{
                   bat 'docker login -u %duser% -p %dpwd%'
                }
                bat 'docker run arunvig/frontend_v2'
            }
        }
    }
}