pipeline {
    agent {
        docker { image 'node:7-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Hello tim......."'
                sh 'node --version'
            }
        }
    }
}