🏡 StayNest - Property Booking Platform

🚀 A full-stack web application inspired by Airbnb that allows users to explore, create, and manage property listings seamlessly.



✨ Features: <br>
🔐 User Authentication & Authorization (Passport.js)<br>
🏠 Create, Edit & Delete Listings (CRUD Operations)<br>
🖼️ Image Uploads with Cloud Storage (Cloudinary)<br>
⭐ Review & Rating System<br>
💾 Session Management using MongoDB Store<br>
🎨 Responsive UI using EJS & Bootstrap<br>
🔄 RESTful APIs & MVC Architecture<br>
⚠️ Error Handling & Data Validation<br>

🛠️ Tech Stack

-> Frontend:
EJS | 
Bootstrap

-> Backend:
Node.js | 
Express.js

-> Database:
MongoDB

-> Other Tools & Libraries:
Passport.js (Authentication) | 
Cloudinary (Image Storage) | 
Multer (File Uploads) | 
Express-Session & Connect-Mongo

```
📁 Project Structure
StayNest/
│── models/        # Mongoose schemas
│── routes/        # Express routes
│── controllers/   # Route logic
│── views/         # EJS templates
│── public/        # Static files (CSS, JS)
│── utils/         # Custom utilities & error handling
│── app.js         # Main server file
```
```
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/Hitsahirrao/StayNest.git
cd StayNest

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
```

🚀 Deployment:<br>
-> Deployed on Render
<br>
-> Uses MongoDB Atlas for database
<br>
-> Environment variables configured for production

🧠 Learnings:<br>
-> Built complete CRUD-based full-stack application<br>
-> Implemented authentication & session handling<br>
-> Integrated third-party services (Cloudinary)<br>
-> Understood MVC architecture & REST APIs<br>
-> Handled real-world deployment challenges

🤝 Contributing:<br>
Contributions are welcome!<br>
Feel free to fork this repo and submit a pull request.

📬 Contact:<br>
👩‍💻 Email : hiteshahirrao282001@gmail.com

⭐ Show your support
<br>
If you like this project, give it a ⭐ on GitHub!
