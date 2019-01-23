pipeline {
    agent {
        docker { image 'node:7-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Hello tim...3......."'
                sh 'node --version'
            }
        }
    }
}