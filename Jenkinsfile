pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'chmod +x ./deploy.sh && ./deploy.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh 'chmod +x ./kill.sh && ./kill.sh' 
            }
        }
    }
}