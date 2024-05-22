FROM maven:3.9.6-openjdk:22 AS build
WORKDIR /app
COPY . /app/
RUN mvn clean package

FROM openjdk:22
WORKDIR /app
COPY --from=build /app/target/*.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
