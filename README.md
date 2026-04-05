🏡 StayBooking – Airbnb Clone (MERN Stack)

🚀 A full-stack web application inspired by Airbnb that allows users to explore, create, and manage property listings seamlessly.

🌐 Live Demo

🔗 https://staybooking-xur1.onrender.com

📂 GitHub Repository

🔗 https://github.com/PriyankaSolanki18/StayBooking

✨ Features
🔐 User Authentication & Authorization (Passport.js)
🏠 Create, Edit & Delete Listings (CRUD Operations)
🖼️ Image Uploads with Cloud Storage (Cloudinary)
⭐ Review & Rating System
💾 Session Management using MongoDB Store
🎨 Responsive UI using EJS & Bootstrap
🔄 RESTful APIs & MVC Architecture
⚠️ Error Handling & Data Validation
🛠️ Tech Stack

Frontend:

EJS
Bootstrap

Backend:

Node.js
Express.js

Database:

MongoDB

Other Tools & Libraries:

Passport.js (Authentication)
Cloudinary (Image Storage)
Multer (File Uploads)
Express-Session & Connect-Mongo

📁 Project Structure
StayBooking/
│── models/        # Mongoose schemas
│── routes/        # Express routes
│── controllers/   # Route logic
│── views/         # EJS templates
│── public/        # Static files (CSS, JS)
│── utils/         # Custom utilities & error handling
│── app.js         # Main server file

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/PriyankaSolanki18/StayBooking.git
cd StayBooking

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables
Create a .env file in root:
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret

4️⃣ Run the application
nodemon app.js

App will run on:
http://localhost:8080

🚀 Deployment
Deployed on Render
Uses MongoDB Atlas for database
Environment variables configured for production

🧠 Learnings
Built complete CRUD-based full-stack application
Implemented authentication & session handling
Integrated third-party services (Cloudinary)
Understood MVC architecture & REST APIs
Handled real-world deployment challenges

🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

📬 Contact

👩‍💻 Email : priyankasolanki.1820@gmail.com

⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
