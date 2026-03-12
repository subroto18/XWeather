# 📖 XDictionary

**XDictionary** is a simple React application that allows users to search for programming-related terms and instantly see their meanings.
For example, if a user searches for **React**, the app will display:

> _A JavaScript library for building user interfaces._

This project demonstrates the use of **React Hooks, TypeScript, custom hooks, and mock API data** to build a clean and interactive dictionary search experience.

---

## 🚀 Features

- 🔎 Search programming terms instantly
- ⚛️ Built with **React + TypeScript**
- 🧩 Uses a **custom hook (`useDictionary`)** for data handling
- 📦 Mock API simulation using local data
- ⏳ Loading state simulation for API-like behavior
- ⚠️ Error handling support
- 💡 Clean and reusable project structure

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Custom React Hooks**

---

## 📂 Project Structure

```
src
 ├── components
 │   └── Home
 ├── hooks
 │   └── useDictionary.ts
 ├── mockData
 │   └── dictionary.ts
 ├── types
 │   └── index.ts
 ├── pages
 │   └── HomePage.tsx
 └── App.tsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/x-dictionary.git
```

Navigate to the project folder:

```bash
cd x-dictionary
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 💻 How It Works

1. The application loads dictionary data from a **mock API (local array)**.
2. A **custom React hook (`useDictionary`)** handles:
   - Fetching data
   - Loading state
   - Error handling

3. Users can type a word into the search input.
4. The app filters the dictionary and displays the matching meaning.

---

## 🔍 Example

Search input:

```
React
```

Result:

```
A JavaScript library for building user interfaces.
```

---

## 📸 Future Improvements

- Add more dictionary terms
- Add debounce search for better performance
- Connect to a real dictionary API
- Improve UI with styling frameworks

---

## 👨‍💻 Author

**Subroto Chakraborty**

Frontend Developer specializing in **React, TypeScript, and modern web technologies**.
# XDictionary
# XSpellCheck
