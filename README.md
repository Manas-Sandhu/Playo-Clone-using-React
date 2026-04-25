# 🎮 Playo Clone (React + Vite)

A modern **Playo-inspired sports platform UI** built using React.
This project now includes **authentication flow + protected routing**, simulating a real-world sports booking application.

---

## 🌟 Overview

This app recreates a sports platform where users can:

* 🏃 Discover sports activities
* 📅 Book venues
* 🎓 Explore training programs
* 🔐 Login / Signup to access dashboard
* ❓ Learn through FAQs

👉 The app uses **authentication gating** — users must log in before accessing the main app.

---

## 🔐 Authentication System (NEW)

### ✅ Features

* Login & Signup UI (Playo-themed)
* User stored in `localStorage`
* Auth state managed using React (`useState`)
* Protected app (routes hidden until login)
* Logout functionality
* Auto-login after signup

---

### 🔁 Auth Flow

1. User opens app → sees Login / Signup
2. Signup → account stored + auto login
3. Login → validates credentials
4. Auth success → loads full app (Layout + Routes)
5. Logout → returns to Login screen (user data retained)

---

### 🧠 Auth Logic (Core Idea)

```js
const [auth, setAuth] = useState(
  localStorage.getItem("auth") === "true"
);

if (!auth) {
  return <Login / Signup />;
}
```

---

## 🧩 Architecture Highlights

### 🔒 Protected Layout Routing (UPDATED)

* App routes only render **after authentication**
* Layout includes:

  * ✅ Navbar
  * ✅ Dynamic content (`Outlet`)
  * ✅ Footer

```jsx
{auth ? (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
) : (
  <LoginSignup />
)}
```

---

## 🚀 Features

### 🔗 Routing System

* Built with `react-router-dom`
* Nested routes using `Outlet`
* Pages:

  * `/` → Home
  * `/Play` → Play
  * `/About` → About / FAQ

---

### 🏠 Home Page

* Hero section
* Venue booking UI
* Game discovery
* Popular sports
* FAQ

---

### 🏃 Play Page

* Modular sections (`Part2`, `Part3`, `Part4`)
* Card-based UI
* Scalable design

---

### ❓ About / FAQ Page

* Frequently asked questions
* Platform details

---

### 🧭 Navbar (UPDATED)

* Navigation across routes
* Logout button
* Logout clears auth (not user data)
* Redirects to Login screen

---

### 📌 Footer

* Persistent across all pages
* Improves UI consistency

---

## 🛠️ Tech Stack

* ⚛️ React
* ⚡ Vite
* 🧭 React Router DOM
* 🎨 CSS Modules + CSS

---

## 📂 Project Structure

```bash
src/
│── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Logincard/
│   ├── Signupcard/
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

Install router (important):

```bash
npm install react-router-dom
```

Run the app:

```bash
npm run dev
```

---

## 🌐 Routing Summary

| Route    | Access       | Description     |
| -------- | ------------ | --------------- |
| `/`      | 🔒 Protected | Home page       |
| `/Play`  | 🔒 Protected | Play activities |
| `/About` | 🔒 Protected | FAQ / About     |

---

## 🔐 LocalStorage Usage

| Key    | Purpose                  |
| ------ | ------------------------ |
| `user` | Stores user details      |
| `auth` | Login state (true/false) |

---

## 📸 Screenshots

> *(Add Login, Signup, Dashboard screenshots here for best impact)*

---

## 🔮 Future Improvements

* 🔐 Multi-user authentication
* 🌐 Backend integration (JWT / API)
* 📍 Location-based sports search
* 💳 Booking & payments
* 📱 Mobile responsiveness
* 🌙 Dark mode toggle

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork and submit pull requests.

---

## 📄 License

For learning and demonstration purposes.

---

## 👩‍💻 Author

**Palakpreet Kaur & Manas Sandhu**

