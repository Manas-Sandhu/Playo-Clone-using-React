# 🎮 Playo Clone (React + Vite)

A modern **Playo-inspired sports platform UI** built using React.
This project demonstrates **component-based architecture, reusable layouts, and client-side routing** to simulate a real-world sports booking application.

---

## 🌟 Overview

This app recreates the experience of a sports platform where users can:

* 🏃 Discover sports activities
* 📅 Book venues
* 🎓 Explore training programs
* ❓ Learn through FAQs

It uses a **shared layout system** with a persistent Navbar and Footer across all pages.

---

## 🧠 Architecture Highlights

### 🧩 Layout-Based Routing

* Central `Layout.jsx` component:

  * ✅ Navbar (top)
  * ✅ Dynamic content (`Outlet`)
  * ✅ Footer (bottom)
* Ensures **consistent UI across all routes**

```jsx
<Navbar />
<Outlet />
<Footer />
```

---

## 🚀 Features

### 🔗 Routing System

* Built with React Router
* Nested routes using `Outlet`
* Pages:

  * `/` → Home
  * `/play` → Play
  * `/about` → About / FAQ

---

### 🏠 Home Page

* Hero section for first impression
* Venue booking UI
* Game discovery section
* Popular sports showcase
* FAQ section

---

### 🏃 Play Page

* Multi-section layout using:

  * `Part2`, `Part3`, `Part4`
* Card-based UI for activities
* Designed for scalability

---

### ❓ About / FAQ Page

* Frequently asked questions
* Platform information

---

### 🧭 Navbar

* Navigation across pages
* Uses React Router (`Link` / `NavLink`)
* Persistent across all routes

---

### 📌 Footer

* Common footer across all pages
* Improves layout completeness

---

## 🛠️ Tech Stack

* ⚛️ React
* ⚡ Vite
* 🧭 React Router
* 🎨 CSS

---

## 📂 Project Structure

```bash
src/
│── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Herosection/
│   ├── BookVenues/
│   ├── DiscoverGames/
│   ├── PopularSports/
│   ├── AboutFAQ/
│
│── components2/
│   ├── Card.jsx
│   ├── Part2.jsx
│   ├── Part3.jsx
│   ├── Part4.jsx
│
│── Layout.jsx
│── Home.jsx
│── Play.jsx
│── App.jsx
│── main.jsx
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Manas-Sandhu/Playo-Clone-using-React.git
cd Playo-Clone-using-React
```

Install dependencies:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

---

## 🌐 Routing Summary

| Route    | Description     |
| -------- | --------------- |
| `/`      | Home page       |
| `/play`  | Play activities |
| `/about` | FAQ / About     |

---

## 📸 Screenshots

> *(Add UI screenshots here for better presentation)*

---

## 🔮 Future Improvements

* 🔐 Authentication system
* 📍 Location-based search
* 💳 Booking & payments
* 📱 Mobile responsiveness
* 🌙 Dark mode

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork and submit pull requests.

---

## 📄 License

This project is for learning and demonstration purposes.

---

## 👩‍💻 Author

**Palakpreet Kaur and Manas Sandhu**
