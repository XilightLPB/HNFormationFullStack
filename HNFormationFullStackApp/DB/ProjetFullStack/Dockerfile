FROM eclipse-temurin:17-jdk-alpine

# Copy jar in image
ADD target/ProjetFullStack-0.0.1-SNAPSHOT.jar api.jar

# Execute the jar when the image run
ENTRYPOINT ["java","-jar","/api.jar"]
