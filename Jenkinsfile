node {
    stage('SCM') {
        checkout scm
    }
    stage('SonarQube Analysis') {
        def scannerHome = tool 'SonarQubeScanner';
        withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
            echo "Teste"
        }
    }
    stage("Quality gate") {
        waitForQualityGate abortPipeline: true
    }
}