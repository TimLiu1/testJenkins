pipeline {
    agent {
        docker { image 'node:7-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Hello 2tim...3......."'
                sh 'node --version'
            }
        }
    }
}