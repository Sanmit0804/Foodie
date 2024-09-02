# 🍔 Foodie - Food Delivery Application

This repository contains the code for a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). The project includes a user-facing frontend, an admin panel for managing the application, and a backend API for handling requests.

## 📋 Table of Contents

- [✨ Features](#features)
- [🔧 Installation](#installation)
- [🚀 Usage](#usage)
- [🔗 API Endpoints](#api-endpoints)
- [🛠️ Technologies Used](#technologies-used)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

##  Features

- 🔐 User authentication and authorization
- 🍲 Food item management (add, update, delete)
- 🛒 Shopping cart functionality
- 📦 Order placement and order history
- 🛠️ Admin panel for managing food items and orders
- 📱 Responsive UI with React
- 🌐 RESTful API using Express and Node.js
- 💾 Data persistence with MongoDB
- ❗ Error handling and validation
- 🔔 Toast notifications for user interactions

##  Installation

### Prerequisites

- 🟢 Node.js and npm installed
- 🗄️ MongoDB installed and running

### Steps

1. 🔗 Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. 📥 Install dependencies for the backend:
    ```
    cd Foodie/Backend
    npm install
    ```
    
3. 📥 Install dependencies for the frontend:
    ```
    cd ../Frontend
    npm install
    ```
    
4. 📥 Install dependencies for the admin panel:
    ```
    cd ../admin
    npm install
    ```
    
5. 🔧 Set up environment variables:

    Create a .env file in the backend directory and add the following:
    ```
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    NODE_ENV=development
    PORT=4000
    ```

6. 🏃 Run the application:

   * 🖥️ Start the backend server:
       ```
       cd backend
       npm run server
       ```
       
   * 🖥️ Start the frontend development server:
       ```
       cd ../frontend
       npm run dev
       ```
       
   * 🖥️ Start the admin panel development server:
       ```
       cd ../admin
       npm run dev
       ```
    
7. 🌐 Access the application:
  
  * User interface: Open your browser and navigate to http://localhost:3000.
  * Admin panel: Open your browser and navigate to http://localhost:3001.

# Usage

- 🔑 Register or log in to the application.
- 🛒 Browse and add food items to the cart.
- 📝 Place an order and view your order history.
- 🛠️ Admin users can manage food items and view orders.

## API Endpoints

### 🔐 Authentication
- **POST** `/api/user/register`: Register a new user
- **POST** `/api/user/login`: Log in a user

### 🍲 Food Items
- **GET** `/api/food`: Fetch all food items
- **POST** `/api/food`: Add a new food item (Admin only)
- **PUT** `/api/food/:id`: Update a food item (Admin only)
- **DELETE** `/api/food/:id`: Delete a food item (Admin only)

### 🛒 Cart
- **POST** `/api/cart`: Add items to the cart
- **GET** `/api/cart`: View cart items

### 📝 Orders
- **POST** `/api/order`: Place an order
- **GET** `/api/order`: View all orders

##  Technologies Used
- **Frontend**: React, React Router, Toastify
- **Backend**: Node.js, Express.js, MongoDB
- **Admin Panel**: React, React Router, Toastify
- **Database**: MongoDB

##  Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any changes you'd like to make.

##  License
This project is licensed under the MIT License.



