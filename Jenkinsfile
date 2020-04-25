pipeline {
    agent any
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Build and Run containers') {
            steps {
                sh "docker-compose build"
                sh 'docker-compose up -d'
                sh 'docker-compose ps'
                sh 'docker-compose exec -T backend python manage.py migrate'
                sh 'docker-compose exec -T backend python manage.py loaddata data.json'
            }
        }
        stage('Run tests') {
            parallel {
                stage('backend unit test') {
                    steps {
                        sh 'docker-compose exec -T backend python manage.py test'
                    }
                }
                stage('frontend unit tests') {
                    steps {
                        dir('frontend') {
                            sh 'yarn'
                            sh 'yarn test --coverage --silent'
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
   post {
      always {
         sh "docker-compose down || true"
      }
   }
}