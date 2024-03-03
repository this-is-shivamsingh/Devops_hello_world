### Adding github Runner
  - While running command from github runner, you might face permission issue to comment to docker, as you might not able to connect to docker.sock. To avoid this issue you can give read + write permission to docker.sock file
    
   ### Issue:
   ```
    docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.35/containers/create: dial unix /var/run/docker.sock: connect: permission denied. See 'docker run --help'.
   ```
   ### Solution:
  ` sudo chmod 666 /var/run/docker.sock ` in your in EC2/gcloud machine.

