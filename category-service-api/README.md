Node.js REST API with Authentication & CRUD Operations
🚀 A secure, modular REST API built using Node.js, Express, JWT authentication, MySQL (Sequelize ORM), and tested via Postman.

📌 Features
✅ User authentication with JWT (JSON Web Token)
✅ CRUD operations for Categories, Services, and Service Prices
✅ Role-based access control (if implemented)
✅ MySQL database with Sequelize ORM
✅ Postman Collection included for easy testing
✅ Modular project structure for maintainability

🛠️ Tech Stack
Node.js & Express.js – Backend framework

MySQL – Relational database

Sequelize ORM – Database management

JWT (JSON Web Token) – Authentication

Postman – API testing

📂 Project Structure
bash
Copy
Edit
/project-root
│── /config          # Database configuration  
│── /controllers     # API controllers  
│── /middleware      # Authentication middleware  
│── /models         # Sequelize models  
│── /routes         # API routes  
│── /tests          # Test files (if any)  
│── .env            # Environment variables  
│── index.js        # Entry point  
│── package.json    # Dependencies  
│── README.md       # Project documentation  
│── postman_collection.json  # Postman Collection  
🚀 Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/your-repository.git
cd your-repository
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file in the project root and add:

env
Copy
Edit
PORT=3000
DB_HOST=your-mysql-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
JWT_SECRET=your-secret-key
4️⃣ Set Up MySQL Database
Run the MySQL Server

Run the following command to migrate models into the database:

bash
Copy
Edit
npx sequelize-cli db:migrate
🔑 Authentication
All API requests (except login & register) require a JWT token in the Authorization header.

1️⃣ Register a User
http
Copy
Edit
POST /auth/register
Request Body (JSON)

json
Copy
Edit
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
Response:

json
Copy
Edit
{
  "message": "User registered successfully"
}
2️⃣ Login
http
Copy
Edit
POST /auth/login
Request Body (JSON)

json
Copy
Edit
{
  "email": "test@example.com",
  "password": "password123"
}
Response:

json
Copy
Edit
{
  "token": "your-jwt-token"
}
Include the token in API requests:
Header: Authorization: Bearer your-jwt-token

📌 CRUD Operations
📂 Categories API
Action	Endpoint	Method
Create a Category	/category	POST
Get All Categories	/category	GET
Get Category by ID	/category/:categoryId	GET
Update Category	/category/:categoryId	PUT
Delete Category	/category/:categoryId	DELETE
📂 Services API
Action	Endpoint	Method
Create a Service	/category/:categoryId/service	POST
Get All Services in a Category	/category/:categoryId/services	GET
Update Service	/category/:categoryId/service/:serviceId	PUT
Delete Service	/category/:categoryId/service/:serviceId	DELETE
📂 Service Prices API
Action	Endpoint	Method
Add Price Option	/category/:categoryId/service/:serviceId/price	POST
Get All Prices for a Service	/category/:categoryId/service/:serviceId/price-options	GET
Update Price Option	/category/:categoryId/service/:serviceId/price/:priceId	PUT
Delete Price Option	/category/:categoryId/service/:serviceId/price/:priceId	DELETE
📨 Import Postman Collection
Download the postman_collection.json file from the GitHub repository.

Open Postman → Click Import → Select the downloaded file.

Test all API endpoints easily.

📜 License
This project is open-source and available under the MIT License.

🎯 Next Steps
✅ Export Postman Collection

✅ Final testing

🚀 Submit the project

🔗 GitHub Repository: [Your Repository Link Here]