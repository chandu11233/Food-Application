FROM openjdk:22
WORKDIR /
COPY pom.xml .
COPY src ./src
RUN mvn clean package
EXPOSE 8080
CMD ["java", "-jar", "foodServices.jar"]