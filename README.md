# 🏡 StayNest - Property Booking Platform

🚀 **StayNest** is a full-stack Airbnb-inspired property booking platform that enables users to discover, create, manage, and book accommodations with a seamless user experience.

## 🌐 Live Demo

* **Live Application:** https://staynest-e5w8.onrender.com
* **GitHub Repository:** https://github.com/Hitsahirrao/StayNest

---

## ✨ Features

* 🔐 User Authentication & Authorization using Passport.js
* 🏠 Create, Edit, and Delete Property Listings
* 🖼️ Image Uploads with Cloudinary
* ⭐ Review and Rating System
* ❤️ Wishlist Functionality
* 📅 Property Booking System
* 🚫 Booking Availability Conflict Detection
* 🔍 Search Listings by Title, Location, and Country
* 💰 Price Filtering and Sorting
* 📊 User Dashboard
* 🕒 Recently Viewed Listings
* 💾 Session Management with MongoDB Store
* 🎨 Responsive UI with Bootstrap and EJS
* 🔄 RESTful APIs with MVC Architecture
* ⚠️ Error Handling and Server-Side Validation

---

## 🛠️ Tech Stack

### Frontend

* EJS
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Libraries & Tools

* Passport.js
* Passport-Local-Mongoose
* Cloudinary
* Multer
* Express-Session
* Connect-Mongo
* Joi
* Method-Override

---

## 📁 Project Structure

```text
StayNest/
│── models/        # Mongoose Schemas
│── routes/        # Express Routes
│── controllers/   # Route Logic
│── views/         # EJS Templates
│── public/        # Static Assets
│── utils/         # Error Handling Utilities
│── app.js         # Entry Point
```

---

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/Hitsahirrao/StayNest.git
cd StayNest
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
```

### Run the Application

```bash
npm start
```

Application runs locally on:

```text
http://localhost:8080
```

---

## 🚀 Deployment

* Deployed on Render
* Database hosted on MongoDB Atlas
* Images stored using Cloudinary
* Production environment variables configured securely

---

## 🧠 Key Learnings

* Built a complete CRUD-based full-stack web application
* Implemented authentication and authorization
* Developed booking and wishlist functionality
* Integrated third-party services such as Cloudinary
* Designed REST APIs following MVC architecture
* Managed sessions and persistent login
* Handled real-world deployment using Render and MongoDB Atlas

---

## 📬 Contact

📧 **Email:** [hiteshahirrao282001@gmail.com](mailto:hiteshahirrao282001@gmail.com)

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
