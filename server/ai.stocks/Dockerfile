# Use OpenJDK base image
FROM openjdk:21-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the pre-built JAR file from the host system into the container
COPY ./build/libs/ai.stocks.jar /app/app.jar

RUN chmod 777 /app/app.jar

RUN chmod +x /app/app.jar && chown root:root /app/app.jar

# Expose the port that your Spring Boot app runs on
EXPOSE 8080

# Define the command to run the JAR file
ENTRYPOINT ["sh", "-c", "java -jar /app/app.jar && tail -f /dev/null"]