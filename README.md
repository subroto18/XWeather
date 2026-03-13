# 🌍 Location Selector (Country → State → City)

A React application that allows users to select **Country → State → City** using cascading dropdowns.
The application fetches location data dynamically from an external API using **custom React hooks**.

---

## 🚀 Features

- Dynamic **Country → State → City** dropdown
- Data fetched from API
- Custom React Hooks
- Reusable Select Component
- Loading and error handling
- Built using **React + TypeScript**

---

## 🛠 Tech Stack

- React
- TypeScript
- CSS
- Fetch API
- Custom React Hooks

---

## 📦 Environment Variables

This project uses environment variables to store API configuration.

Create a `.env` file in the root directory:

```
VITE_API_BASE_URL=your_api_base_url_here
```

This prevents exposing API URLs directly in the codebase.

---

## 📂 Project Structure

```
src
│
├── components
│   └── Select.tsx
│
├── hooks
│   ├── useCountries.ts
│   ├── useStates.ts
│   └── useCities.ts
│
├── config
│   └── api.ts
│
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation

Clone the repository

```
git clone <your-repository-url>
```

Navigate into the project

```
cd location-selector
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

---

## 💡 Application Flow

1. Load available **Countries**
2. When a country is selected → **States are fetched**
3. When a state is selected → **Cities are fetched**

Example:

```
Country → State → City
India   → Karnataka → Bangalore
```

---

## 🎯 Learning Purpose

This project demonstrates:

- Creating reusable **React components**
- Using **custom hooks**
- Handling **dependent dropdowns**
- Working with **API requests**
- Managing **state in React**

---

## 👨‍💻 Author

Subroto Chakraborty
Frontend Developer | React | TypeScript | MERN Stack
