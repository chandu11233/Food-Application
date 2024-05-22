FROM openjdk:latest
WORKDIR /
COPY target/foodServices.jar .
EXPOSE 8080
ENTRYPOINT ["java","-jar","foodServices.jar"]
