pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Run containers') {
            steps {
                sh 'docker-compose up -d'
                sh 'docker-compose ps'
                sh 'docker-compose exec backend python manage.py migrate'
                sh 'docker-compose exec backend python manage.py loaddata data.json'
            }
        }
        stage('Run tests') {
            parallel {
                stage('backend unit test') {
                    steps {
                        dir('backend') {
                            sh 'docker-compose exec backend python manage.py test'
                        }
                    }
                }
                stage('frontend unit tests') {
                    steps {
                        dir('frontend') {
                            sh 'docker-compose exec frontend yarn test'
                        }
                    }
                }
            }
        }
        stage('Deploy containers') {
            steps {
                sh 'echo "Deploying to gcloud..."'
            }
        }
    //     stage('Push image') {
    //         docker.withRegistry('https://registry.hub.docker.com', "docker-hub") {
    //             backend.push("${env.BUILD_NUMBER}")
    //             backend.push("latest")
    //         }
    //     }
    }
}