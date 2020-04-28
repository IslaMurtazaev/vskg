pipeline {
    agent any
    environment {
        GOOGLE_PROJECT_ID = 'vs-kg-infra';
        GOOGLE_SERVICE_ACCOUNT_KEY = credentials('vs-kg-infra-service-account-key');
    }
    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }
        stage('Build container') {
            steps{
                sh 'docker-compose build'
            }
        }
//         stage('Run containers') {
//             steps {
//                 sh 'docker-compose up -d'
//                 sleep 10
//                 sh 'docker-compose restart'
//
//                 sh 'docker-compose exec -T backend python manage.py migrate'
//                 sh 'docker-compose exec -T backend python manage.py loaddata data.json'
//             }
//         }
//         stage('Run tests') {
//             parallel {
//                 stage('backend unit test') {
//                     steps {
//                         sh 'docker-compose exec -T backend python manage.py test'
//                     }
//                 }
//                 stage('frontend unit tests') {
//                     steps {
//                         dir('frontend') {
// //                             sh 'yarn'
// //                             sh 'yarn test --watchAll=false --coverage --silent'
//                         }
//                     }
//                 }
//             }
//         }
        stage('Deploy containers') {
            steps {

                withCredentials([file(credentialsId: 'vskg-dotenv-prod', variable: 'DOTENV')]) {
                    sh 'cat ${DOTENV} > /backend/.env'
                }
                sh 'gcloud config set project ${GOOGLE_PROJECT_ID};'
                sh 'gcloud auth activate-service-account --key-file ${GOOGLE_SERVICE_ACCOUNT_KEY};'
                dir('backend') {
                    sh 'gcloud app deploy'
                }
//                 dir('frontend') {
//                     sh 'gcloud app deploy'
//                 }
            }
        }
    }
   post {
      always {
         sh "docker-compose down || true"
         sh "docker system prune -a --volumes -f"
      }
   }
}
