pipeline {
    agent any
    stages {
        stage('No-op') {
            steps {
                sh 'ls'
            }
        }
    }
    post{
        always {
            echo 'One way or another, I have finished'
            deleteDir()
        }
        success{
            echo 'I  successed'
        }
        unstable {
            echo 'I am unstable'
        }
        failure {
            echo 'I failed'
        }
        change {
            echo 'Things were different before...'
        }
    }
}