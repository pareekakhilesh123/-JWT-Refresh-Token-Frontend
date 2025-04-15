
# JWT Authentication with Refresh Token (React + Node.js)

This is a fullstack authentication system using React on the frontend and Node.js with Express on the backend. It supports JWT access tokens and refresh tokens for secure authentication. MongoDB is used for storing user data and is hosted on bd4free.net.

---

## 🌍 Live Deployments

- **Frontend (Render)**: https://jwt-refresh-token-frontend.onrender.com/
-  

> ⚠️ Make sure your frontend axios baseURL matches the backend deployment.

---

## 🗃️ Folder Structure

```
.
├── backend
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── middleware/
│   └── server.js


├── frontend
│   
│   ├── components/
            ├── pages/
│   ├── middware/
│   └── App.js
├── README.md
```

---

## 🛠️ Tech Stack

- React.js (Frontend)
- Node.js + Express.js (Backend)
- Mysql (bd4free.net)
- JWT for access and refresh tokens
- Axios + React Router

---

## 🔐 Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```
PORT=5000
DB_HOST=db4free.net
DB_USER=
DB_PASS= 
DB_NAME=
JWT_SECRET=root
JWT_EXPIRES_IN=1m
JWT_REFRESH_SECRET=root
JWT_REFRESH_EXPIRES_IN=2m

```

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git Frontend clone https://github.com/pareekakhilesh123/-JWT-Refresh-Token-Frontend

git Backend clone https://github.com/pareekakhilesh123/JWT-Refresh-Token-Backend
```

### 2. Run Backend

```bash
cd backend
npm install
nodemon server.js
```

### 3. Run Frontend

```bash
cd frontend
npm install
npm start
```

---

## 📡 API Endpoints

### POST `/api/auth/register`
Register a new user.

### POST `/api/auth/login`
Login and receive access & refresh tokens.

### GET `/api/auth/profile`
Fetch profile info (requires access token in `Authorization` header).

### POST `/api/auth/refresh`
Request a new access token using the refresh token.

---

## 🔁 Token Refresh Logic

1. `axiosInstance` checks for 401 error.
2. Sends stored refreshToken to `/api/auth/refresh`.
3. Receives and stores new accessToken.
4. Retries the original request.

---

## 📌 Notes

- Store `accessToken` and `refreshToken` in `localStorage`
- Refresh token route secured and validated with a separate secret
- Render supports environment variables in its settings panel

---


