# 🎮 Playo Clone (React + Vite)

A modern **Playo-inspired sports platform UI** built using React, featuring **authentication, protected routing, interactive game participation, and local persistence**.

This project simulates a real-world sports booking platform with a **clean UI + functional frontend logic**.

---

## 🌟 Overview

This app allows users to:

* 🏃 Discover sports activities
* 📅 View and join games
* ❓ Ask queries about games
* 👥 See players in a game
* 🔐 Login / Signup to access the app
* 🚪 Logout safely (without losing account data)

👉 The app is **auth-protected** — users must log in before accessing any content.

---

## 🔐 Authentication System

### ✅ Features

* Login & Signup UI (custom styled)
* User stored in `localStorage`
* Auth state handled via React (`useState`)
* Protected routing (no access without login)
* Logout support (without deleting user data)

---

### 🔁 Auth Flow

1. App loads → checks `localStorage.auth`
2. If `false` → shows Login / Signup
3. Signup:

   * Saves user in `localStorage`
   * Can auto-login (optional)
4. Login:

   * Validates credentials
   * Sets `auth = true`
5. App unlocks → routes + layout visible
6. Logout:

   * Sets `auth = false`
   * Redirects to Login page
   * ✅ User data remains stored

---

### 🧠 Core Auth Logic

```js
const [auth, setAuth] = useState(
  localStorage.getItem("auth") === "true"
);

if (!auth) {
  return <LoginSignup />;
}
```

---

## 🔒 Protected Routing (Key Concept)

Routes are only accessible **after login**:

```jsx
{auth ? (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/About" element={<AboutFAQ />} />
      </Route>
    </Routes>
  </BrowserRouter>
) : (
  <LoginSignup />
)}
```

---

## 🧩 Architecture Highlights

### 🏗️ Layout System

`Layout.jsx` wraps all pages:

```jsx
<Navbar />
<Outlet />
<Footer />
```

✔ Shared UI across all pages
✔ Clean separation of structure and content

---

## 🚀 Features

---

### 🧭 Navbar

* Navigation using `Link`
* Routes:

  * Home
  * Play
  * About
* 🚪 Logout button:

  * Sets `auth = false`
  * Redirects to Login
  * ❌ Does NOT delete user

---

### 🏠 Home Page

* Hero section
* Venue booking UI
* Discover games
* Popular sports
* FAQ section

---

### 🏃 Play Page

* Displays list of game cards
* Uses reusable `Card.jsx`
* Each card opens **Game Detail modal**

---

### 🃏 Game Card (`Card.jsx`)

Displays:

* Game type & format
* Price (if paid)
* Players going (avatars)
* Host + karma
* Date & venue
* Skill level
* Status badges:

  * ✅ JOINED
  * 📌 BOOKED

---

### 🎯 Game Detail (`GameDetail.jsx`)

A **fully interactive modal system**

#### 🧠 Features:

##### 🧾 Game Info

* Title, host, venue
* Google Maps integration
* Tags (type, price, booked, joined)

##### 👥 Players Section

* List of all players
* Host highlighted

##### 📊 Stats

* Players going
* Skill level
* Distance

---

### 💬 Queries System (NEW)

Each game has its own **query thread**

#### ✅ Features:

* Ask questions about a game
* Queries saved in `localStorage`
* Per-game persistence:

  ```js
  playo_queries_<gameId>
  ```
* Shows:

  * Author
  * Message
  * Timestamp
* Remove queries individually ❌

---

### ➕ Add Query Flow

1. Click **SEND QUERY**
2. Opens input box
3. Type message
4. Press Enter / Send
5. Query appears instantly

---

### 🎮 Join / Leave Game System

#### ✅ Join Game

* Click **JOIN GAME**
* Updates UI instantly
* Shows:

  ```
  ✅ You're in!
  ```

---

#### ❌ Leave Game (Improved UX)

* Click **Leave Game**
* Confirmation appears:

```
Sure? [Yes, Leave] [Cancel]
```

* Prevents accidental exits

---

### 🧠 Join State Handling

* Controlled via parent state (`Play.jsx`)
* Passed as:

```js
isJoined
onJoin
onUnjoin
```

---

### 💾 LocalStorage Usage

| Key                      | Purpose                  |
| ------------------------ | ------------------------ |
| `user`                   | Stores user credentials  |
| `auth`                   | Login state (true/false) |
| `playo_queries_<gameId>` | Queries per game         |

---

## 🛠️ Tech Stack

* ⚛️ React (Hooks-based)
* ⚡ Vite (fast dev server)
* 🧭 React Router DOM
* 🎨 CSS Modules + CSS
* 💾 LocalStorage (state persistence)

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
│   ├── GameDetail.jsx
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

```bash
git clone https://github.com/Manas-Sandhu/Playo-Clone-using-React.git
cd Playo-Clone-using-React
npm install
npm install react-router-dom
npm run dev
```

---

## 🌐 Routing Summary

| Route    | Access       | Description     |
| -------- | ------------ | --------------- |
| `/`      | 🔒 Protected | Home page       |
| `/Play`  | 🔒 Protected | Play activities |
| `/About` | 🔒 Protected | FAQ page        |

---

## 🎨 UI Highlights

* Dark-themed modern UI
* Gradient panels (Login/Signup)
* Card-based layout
* Modal-based Game Details
* Clean spacing & typography

---

## 🔥 Key Learning Outcomes

* 🔐 Authentication without backend
* 🔒 Protected routing in React
* 🧩 Component-based architecture
* 💾 LocalStorage state management
* 🎯 UI state syncing (join/unjoin)
* 🧠 Derived state & props flow

---

## 🔮 Future Improvements

* 🔐 Real backend auth (JWT)
* 👥 Multi-user system
* 💳 Payments integration
* 📍 Location-based filtering
* 🔔 Notifications
* 🌙 Dark mode toggle (global)
* 📱 Full mobile responsiveness

---

## 🤝 Contributing

Contributions welcome!
Fork → Improve → PR 🚀

---

## 📄 License

For learning and demo purposes.

---

## 👩‍💻 Authors

**Palakpreet Kaur & Manas Sandhu**
