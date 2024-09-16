# 🌦️ Serverless Weather App 🌐
Welcome to my **Serverless Weather App**! This app provides real-time weather updates for any city in the world using a seamless, serverless architecture powered by AWS. It's fast, efficient, and packed with cool features!


## 🚀 Features
- **Real-Time Weather Data**: Fetches up-to-date weather information for any city.
- **Multi-API Integration**: Uses two different APIs to ensure accuracy and provide extended data like temperature, humidity, and weather conditions.
- **Serverless Architecture**: Hosted on AWS using services like:
  - **AWS Lambda**: For backend logic.
  - **Amazon S3 & CloudFront**: For hosting the web application.
  - **DynamoDB**: For tracking the number of site views.
  - **AWS Route 53**: For domain management.
- Responsive Design: Fully responsive, offering a seamless experience across all devices.
- Random City Images: Integrated with Unsplash API to dynamically display beautiful city-related background images.

## ⚙️ Technologies
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: AWS Lambda (serverless functions)
- **Database**: DynamoDB (stores site views)
- **APIs**:
  - Weather API (for real-time weather data)
  - Unsplash API (for random city images)

## 🌐 Deployed on AWS
This app is 100% serverless, taking full advantage of AWS’s scalable infrastructure:

- **S3 & CloudFront** for static hosting and CDN distribution.
- **DynamoDB** to store site visit data and keep track of user interaction.
- **AWS Lambda** for serverless backend functionality.
- **Route 53** to manage and route traffic to the app.

## 📸 Screenshots
| **Home Page**                       | **Weather Data**                     |
|-------------------------------------|--------------------------------------|
| ![Home](link-to-home-screenshot)    | ![Weather Data](link-to-weather-data-screenshot) |

## 📖 How It Works
- Users enter a city name, and the app fetches the weather data from a weather API.
- A background image related to the city is dynamically pulled from the Unsplash API.
- The app runs on AWS Lambda for backend processing, while the frontend is hosted on S3 and served via CloudFront.

## 👨‍💻 Contributions
Feel free to contribute! Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
