# AI Stocks

AI Stocks is a web platform that simulates stock trading and uses AI to assist users in making investment decisions. The platform offers features such as AI-driven financial insights, personalized investment advice, and a quick overview of the user's finances. It provides a seamless integration of front-end, back-end, and database services.

## Features

AI-powered investment recommendations. Simulated stock trading and portfolio management. Integration with PostgreSQL for user data storage. Modern front-end with React and Vite. Scalable and maintainable back-end using Spring Boot. 

## Getting Started

### Running with Docker

1. Ensure Docker is installed on your system.
2. From the project's root directory, run:
```bash
docker compose up
```
3. Access the application at http://localhost:5173.


### Running Locally
To run the project locally:

1. Start the Database
    - Use PostgreSQL.
    - You can either:
        - Use the credentials in the docker-compose.yml file.
        - Modify the credentials in the application.properties file.

2. Build and Run the Spring Application
    - Navigate to the back-end directory:

        ```bash
        cd server/ai.stocks
        ```
    - Build the project:

        - Windows:
            ```bash
            .\gradlew.bat build
            ```
        - Linux/MacOS:
            ```bash
            ./gradlew build
            ```

    - Run the application:

        - Option 1: Manually via the command line:
            ```bash
            java -jar build/libs/ai.stocks.jar
            ```
        - Option 2: Use an IDE like IntelliJ IDEA to run the application.

3. Start the Front-End
    - Navigate to the front-end directory:

        ```bash
        cd client
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Start the development server:
        ```bash
        npm run dev
        ```
4. Access the Application
    - Visit the web app in your browser: http://localhost:5173.

### Configuration
#### Required Ports
Ensure the following ports are available:

    - 8080 - Back-end (Spring Boot)
    - 5173 - Front-end (Vite/React)
    - 5432 - Database (PostgreSQL)

#### Custom Configuration
You can modify the ports and other configurations in:

    - `docker-compose.yml` - Docker services.
    - `application.properties` - Spring Boot settings.

### Technology Stack

#### Back-End:
    - Spring Boot (v3.4.0):
        - Java 21
        - Spring JPA
        - Spring DevTools
        - Lombok
        - JUnit
#### Database:
    - PostgreSQL (v15)

#### Front-End:

    - React (v18.3.1) with Vite (v6.0.1):
        - react-router-dom (v7.0.1)
        - i18n for internationalization
        - SASS for styling
        - Bootstrap (v5.3.3)
#### Tools:

    - Docker for containerization.
    - Gradle for build automation.

### Notes
Dependencies may become outdated over time. Check the `build.gradle` and `package.json` files for updates.

Feel free to customize configurations and features to suit your needs.

## Author

    - Vinicius Carvalho
        - [Email](mailto:valves8956@gmail.com)
        - [Linkedin](https://www.linkedin.com/in/vinicius-carv/)

## Disclaimer
This is a demo project meant for learning and experimentation purposes. The stock trading and AI functionalities are simulated and should not be used for real-world financial decisions.

