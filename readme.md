**Social Media Application (MERN Stack)**

This is a full-stack social media application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It includes features such as user signup, login, JWT-based authentication, and the ability to create and view posts.

The app provides a seamless experience for users to register, log in, and create posts, which are then displayed in a list.

---

_Features_

- User Authentication: Users can sign up, log in, and authenticate with JWT tokens.
- Post Creation: Authenticated users can create posts.
- Post Retrieval: Users can view their own posts after logging in.
- Responsive UI: The frontend is designed to be responsive and mobile-friendly using Tailwind CSS.

---

_Technologies Used_

- Frontend: React, Vite, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB
- Authentication: JWT (JSON Web Token)
- State Management: React Hooks (useState, useEffect)

---

_Live Demo_

You can view the live demo of the project here:

[Live Demo](http://your-live-demo-link.com)

---

- Getting Started\*

To get this project up and running on your local machine for development and testing, follow these steps:

_Prerequisites_

Make sure you have the following installed:

- Node.js (with npm)
- MongoDB (locally or using MongoDB Atlas)
- Postman (for testing the backend)

_Clone the Repository_

git clone https://github.com/your-username/social-media-app.git
cd social-media-app

_Set Up Backend_

1. Navigate to the backend folder:

cd backend

2. Install the dependencies:

npm install

3. Create a .env file in the backend folder and add the following environment variables:

JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_connection_string

4. Start the backend server:

npm start

The backend server will run on http://localhost:5000.

_Set Up Frontend_

1. Navigate to the frontend folder:

cd frontend

2. Install the dependencies:

npm install

3. Start the frontend development server:

npm run dev

The frontend will run on http://localhost:5173.

---

_Postman Testing_

You can use Postman to test the backend API.

1. Login:

Send a POST request to http://localhost:5000/api/auth/login with the following body:

{
"email": "user@example.com",
"password": "your_password"
}

You will receive a JWT token if the login is successful.

2. Get Posts:

Use the token you received from the login response to fetch posts.

Send a GET request to http://localhost:5000/api/posts with the Authorization header:

Authorization: Bearer <your_jwt_token>

---

_Medium Article_: Detailed Guide

For a step-by-step guide on how this project was built and explanations of the core concepts such as JWT authentication, React Hooks, and the MERN stack, check out my Medium article:

[**Building a Social Media App with MERN Stack**](https://medium.com/@modiaastha01/building-a-full-stack-social-media-application-using-the-mern-stack-bd3cbb8d7297)


