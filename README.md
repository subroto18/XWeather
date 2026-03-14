# 🌤️ XWeather

**XWeather** is a simple React weather application that allows users to search for a city and view the current weather information including temperature, humidity, wind speed, and weather condition.

This project demonstrates the use of **React Hooks, Custom Hooks, API integration, and clean component architecture**.

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ View current temperature
- 💧 Check humidity level
- 🌬️ See wind speed
- ☁️ Display current weather condition
- ⚡ Fast API integration
- 🧩 Custom React Hook for API logic
- 🎨 Clean card-based UI layout

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **CSS Modules**
- **Custom React Hooks**
- Weather API from **WeatherAPI**

---

## 📂 Project Structure

```
src
 ├── components
 │   ├── common
 │   │   ├── Card
 │   │   └── Layout
 │   │
 │   └── weather
 │       ├── Search
 │       └── Weather
 │
 ├── hooks
 │   └── useWeatherApi.ts
 │
 ├── pages
 │   └── Home
 │
 └── App.tsx
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

You can get a free API key from **WeatherAPI**.

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/yourusername/xweather.git
```

Navigate to the project directory:

```
cd xweather
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

## 🔍 How It Works

1. User enters a city name in the search bar.
2. The application calls the **Weather API** using a custom hook.
3. The API returns the current weather data.
4. The data is displayed in a clean **card layout UI**.

---

## 🧠 Key Learning Concepts

- Building **Custom Hooks**
- Managing **API calls in React**
- **State management** with `useState`
- Handling **loading and error states**
- Creating **reusable UI components**
- Using **environment variables in Vite**

---

## 📸 Preview

The application displays weather data in a **4-card layout** including:

- Temperature
- Humidity
- Wind Speed
- Weather Condition

---

## 🎯 Future Improvements

- Add **weather icons**
- Show **5-day forecast**
- Add **geolocation support**
- Implement **dark mode**
- Improve **responsive design**

---

## 👨‍💻 Author

**Subroto Chakraborty**

Frontend Developer | React Developer | Content Creator

Passionate about building web applications and creating technical content.

---

⭐ If you like this project, consider giving it a star on GitHub!
