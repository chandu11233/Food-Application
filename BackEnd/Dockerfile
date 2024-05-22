FROM openjdk:latest
WORKDIR /src
COPY target/foodServices.jar .
EXPOSE 8080
ENTRYPOINT ["java","-jar","foodServices.jar"]
