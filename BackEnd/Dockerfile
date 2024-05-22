FROM maven:3.9.6-eclipse-temurin-22-jammy AS build
WORKDIR /app
COPY . /app/
RUN mvn clean package

FROM openjdk:22-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
