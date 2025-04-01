# Docker Assignment

## 📌 Project Overview
This assignment demonstrates a simple web application with a **Node.js (Express) frontend** and a **Flask backend**, containerized using **Docker** and orchestrated with **Docker Compose**.

## 🏗️ Project Breakdown
### 1️⃣ Frontend (Node.js + Express)
- Serves an HTML form.
- Sends form data to the backend.

### 2️⃣ Backend (Flask)
- Receives data from the frontend.
- Processes and returns a response.

### 3️⃣ Folder Structure
```
Docker_Assignment/
│-- frontend/    # Express.js frontend
│-- backend/     # Flask backend
│-- docker-compose.yml  # Docker Compose configuration
│-- README.md    # Project documentation
```

## 🛠️ Tech Stack
- **Frontend:** Node.js, Express, HTML, CSS
- **Backend:** Python, Flask
- **Containerization:** Docker, Docker Compose

## ⚙️ Setup & Installation
### Prerequisites
Ensure you have installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Running the Project
Clone the repository and navigate to the project folder:
```bash
git clone https://github.com/ashishb096/Docker_Assignement.git
cd Docker_Assignement
```

### Running with Docker Compose
```bash
# Build and start containers
docker-compose up --build

# Stop containers
docker-compose down
```

### Accessing the Application
- **Frontend:** `http://localhost:3000`
- **Backend:** `http://localhost:5000`

## 🛠️ Docker Configuration
Each service has its own **Dockerfile**:
- **Frontend Dockerfile**: Configures the Express.js app.
- **Backend Dockerfile**: Configures the Flask app.
- **docker-compose.yml**: Defines multi-container setup.

## 🚀 Future Enhancements
- Add form validation.
- Implement a database for persistent storage.
- Improve UI with a frontend framework.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

## 📞 Contact
For any inquiries, reach out via:
- **GitHub:** [@ashishb096](https://github.com/ashishb096)
- **LinkedIn:** [ashish-bisht-26aa7b192](https://www.linkedin.com/in/ashish-bisht-26aa7b192/)

---
🚀 *Happy Coding!*
