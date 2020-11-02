docker build -t web .
docker run -itd --name mycontainer --publish 8080:80 web