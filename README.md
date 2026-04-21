# 🚀 CI/CD Pipeline using GitHub Actions and Render

## 📌 Project Overview

This project demonstrates the implementation of a **CI/CD pipeline** for a full-stack application using:

* **CI Tool**: GitHub Actions
* **CD Platform**: Render
* **Backend**: Node.js (Express)
* **Frontend**: HTML, CSS, JavaScript

The pipeline automates build, test, and deployment processes.

---

## 🎯 Aim

To design and implement a CI/CD pipeline that automatically builds, tests, and deploys a web application.

---

## 🧱 Project Structure

```
ai-fullstack-cicd-lab/
│
├── backend/
│   ├── app.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── app.js
│   ├── style.css
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── README.md
└── .gitignore
```

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* Git & GitHub
* GitHub Actions (CI)
* Render (Deployment)

---

## 🔄 CI/CD Workflow

### ✅ Continuous Integration (CI)

Implemented using GitHub Actions:

* Triggered on push to main branch
* Installs dependencies
* Runs backend server check
* Validates application

### 🚀 Continuous Deployment (CD)

Handled by Render:

* Auto-deploys on every push
* Hosts backend service
* Provides live URL

---

## 🔧 Setup & Execution

### 1. Clone Repository

```
git clone https://github.com/<your-username>/ai-fullstack-cicd-lab.git
cd ai-fullstack-cicd-lab
```

---

### 2. Run Backend

```
cd backend
npm install
node app.js
```

---

### 3. Run Frontend

Open:

```
frontend/index.html
```

---

## 🌐 Live Deployment

👉 **Deployed URL**:

```
https://<your-render-app>.onrender.com
```

---

## 📊 Result

The CI/CD pipeline was successfully implemented.
The application builds, tests, and deploys automatically on each code push.

---

## 🎓 Learning Outcomes

* Understood CI/CD concepts
* Implemented automated workflows
* Deployed a full-stack application
* Integrated GitHub with cloud deployment

---

## 📌 Conclusion

This experiment successfully demonstrates the automation of software development workflows using modern DevOps tools.

---
