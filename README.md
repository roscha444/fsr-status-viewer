 # fsr-status-viewer
 ReactJS UI to show the status of of the Fachschaftsraum [open,closed].

# Docker

Build the image on your own machine and pass the api url as argument.
Docker build with the default api url can be found here

### build with custom arguments

docker build --build-arg API_URL=http://custom . -t roscha444/fsr-status-viewer

### build default

docker build . -t roscha444/fsr-status-viewer
### run

docker run -d -p 80:80 roscha444/fsr-status-viewer

# Deploy

Commits to the master branch triggers a automatic build.

Automatic build can be found here: https://fsr-status-viewer.onrender.com
