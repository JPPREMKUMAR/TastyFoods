# 🍽️ Tasty Foods – Food Ordering Web Application

## 📌 Project Overview

Tasty Foods is a responsive food ordering web application built using React.js.  
The platform allows users to browse restaurants, view menus, add items to cart, select payment methods, and track their orders.

The application uses React Context API for global state management and implements JWT-based authentication using cookies for protected routes.

---

## 🌐 Live Link

🔗 https://tasty-foods-prem.vercel.app/  

💻 GitHub Repository:  
https://github.com/JPPREMKUMAR/TastyFoods.git

---

## 🛠 Tech Stack

### 🖥 Frontend
- React.js
- React Router DOM
- Context API (Global State Management)
- React Hooks (useState, useEffect, useContext, useCallback)
- Fetch API
- React Toastify
- JS Cookie (js-cookie)
- React Loader Spinner
- CSS3
- JavaScript (ES6+)
- Vite

### 🌐 API Integration
- External REST APIs
- JWT Authentication (stored in cookies)
- Protected Routes

### 💾 Storage
- LocalStorage (Cart & Orders persistence)

---

## 🚀 Key Features

### 👤 Authentication
- User login using JWT
- Token stored in cookies
- Protected routes
- Auto redirect if not authenticated

### 🏪 Restaurant Listing
- Dynamic restaurant data
- Pagination support
- Sorting by rating (Highest / Lowest)
- API-based data fetching

### 🛒 Cart Management
- Add to cart functionality
- Increment / Decrement quantity
- Remove cart items
- Clear cart option
- Cart persistence using LocalStorage

### 💳 Payment Flow
- Multiple payment method selection
- Order summary view
- Payment success page
- Order history tracking

---

## 🏗 Architecture

- Component-based architecture
- Global state using Context API
- Client-side routing using React Router
- Protected routes with token validation
- Persistent cart and orders logic

---

## 📂 Project Structure
TastyFoods/
│
├── components/
├── pages/
├── context/
├── assets/
├── App.jsx
└── main.jsx


---

## ⚙ Installation

```bash
git clone https://github.com/JPPREMKUMAR/TastyFoods.git
cd TastyFoods
npm install
npm run dev

📌 Future Improvements

Backend integration (Node.js + MongoDB)

Payment gateway integration (Razorpay / Stripe)

Order database storage

Admin dashboard for restaurant management

Real-time order status tracking

👨‍💻 Author

Prem Kumar
MERN Stack Developer

🌐 Portfolio: https://jppremkumar.vercel.app/

💻 GitHub: https://github.com/JPPREMKUMAR

🔗 LinkedIn: https://www.linkedin.com/in/jppremkumar/

🧠 LeetCode: https://leetcode.com/u/jppremkumar/