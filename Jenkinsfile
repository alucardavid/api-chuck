pipeline {
    agent none
    stages{
        stage('SCM') {
            steps{
                checkout scm
            }
        }
        stage('SonarQube Analysis') {
            steps{
                def scannerHome = tool 'SonarQubeScanner';
                withSonarQubeEnv() {
                    sh "${scannerHome}/bin/sonar-scanner"
                    echo "Teste"
                }
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
    }
}