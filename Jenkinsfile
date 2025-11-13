// pipeline{
    
//     agent any
    
//     stages{
        
//         stage("Clonning"){
            
//             steps{
                
//                 echo "Started Clonning The Code"
//                 git url: "https://github.com/TheYashJain17/AI-Landing-Page", branch: "main"
//                 echo "Clonning Code Successfully"
                
//             }
            
            
//         }
        
//         stage("Building"){
            
//                 steps{
                        
//                     echo "Building the docker Image From Clonned Code"
//                     sh "export PATH=$PATH:/usr/local/bin && docker build -t ai-landing-page ."
//                     echo "Docker Image Built Successfully"
                    
//                 }
            
//         }
        
//         stage("Push"){
            
//             steps{
                    
//                 echo "Pushing The Docker Image To Dockerhub"
//                 withCredentials([
//                     usernamePassword(
//                         credentialsId: "dockerhubCred", 
//                         passwordVariable: "dockerPass", 
//                         usernameVariable: "dockerUser"
//                         )
//                     ]){
                        
//                         sh "export PATH=$PATH:/usr/local/bin && docker login -u ${env.dockerUser} -p ${dockerPass}"
//                         sh "export PATH=$PATH:/usr/local/bin && docker image tag ai-landing-page ${env.dockerUser}/ai-landing-page"
//                         sh "export PATH=$PATH:/usr/local/bin && docker push ${env.dockerUser}/ai-landing-page"
                        
//                     }
                    
//                     echo "Pushed theThe Image To dockerhub successfully"
                
//             }
            
//         }
        
//         stage("Run"){
            
//                 steps{
                        
//                         echo "Running The Code"
//                         sh "export PATH=$PATH:/usr/local/bin && docker compose up -d"
//                         echo "Code Is Running Successfully"
                    
//                 }
            
//         }
    
        
//     }
    
// }

@Library("CICD") _
pipeline{
    
    agent any
    
    stages{
        
        stage("Testing"){
                
            steps{
                
                script{
                        
                    goodbye()
                    
                }
                
            }
            
        }
        
        stage("Clonning"){
            
            steps{
                script{
                    
                    clone("https://github.com/TheYashJain17/AI-Landing-Page", "main")
                    
                }

            }
            
            
        }
        
        stage("Building"){
            
                steps{
                      script{

                            docker_build("ai-landing-page", "latest", "theyashjain17")
                          
                      }  
                    
                }
            
        }
        
        stage("Push"){
            
            steps{
                    
                script{
                        
                        docker_push("ai-landing-page", "latest")
                    
                }
                
            }
            
        }
        
        stage("Run"){
            
                steps{
                        
                       script{
                            
                            run_deployed_app()
                            echo "Testing Newly Created Jenkinsfile"
                           
                       }
                    
                }
            
        }
    
        
    }
    
}
