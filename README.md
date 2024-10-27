# Fikra Online

### Final Project by: Abdulmajeed Alrefai

## 1. Project Overview

**Fikra Online** is an Arabic online education platform where students can create live study rooms with available teachers for subjects like tech, math, and more. The platform connects students with qualified teachers for live, interactive study sessions, fostering real-time learning and collaboration.

### Purpose
The platform provides an on-demand space for students to learn from expert teachers through live sessions, enhancing the learning experience with real-time communication and interaction.

### Financial Model
The platform generates revenue through:
- **Subscription Plans**: Premium features such as recorded sessions, private rooms, etc.
- **Commission Fees**: The platform takes a commission from sessions between students and teachers.

---

## 2. Features and Functional Requirements

### Core Features:
- **User Authentication**: Secure registration, login, and profile management for both students and teachers.
- **Live Study Room Creation**: Students can create live rooms for study sessions on specific subjects and invite teachers.
- **Real-Time Communication**: Video calls, chat, and file sharing during live sessions.
- **Search & Matchmaking**: Matches students with teachers based on expertise, ratings, and availability.
- **Payment System**: Facilitates payments for live sessions, with a commission for the platform.
- **Rating & Feedback**: Students rate teachers and provide feedback after sessions.

---

## 3. Tech Stack

### Backend: [Django](https://www.djangoproject.com/)
- **Django REST Framework**: For building APIs.
- **Django Channels**: For handling WebSocket connections for real-time features like video calls and chat.
- **Django ORM**: To interact with the database.
- **Django Payment Integration**: To facilitate payments between students and teachers.

### Frontend: [React](https://reactjs.org/)
- **React Router**: For navigation between different parts of the app.
- **Axios**: For making API requests to the Django backend.
- **WebSockets**: For real-time communication features (e.g., video calls, chat).
- **Redux/Context API**: For state management across the application.
  
### Database:
- **PostgreSQL**: Used as the database for storing user profiles, sessions, payments, and other application data.

### Other Tools:
- **Docker**: For containerization and easy deployment.
- **Nginx**: For serving the React frontend and managing requests.
- **Redis**: For managing WebSocket connections (optional with Django Channels).

---

## 4. Installation and Setup

### Prerequisites:
- [Python 3.x](https://www.python.org/downloads/)
- [Node.js and npm](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Docker](https://www.docker.com/) (optional but recommended)

### Backend Setup (Django):
1. Clone the repository:
   ```bash
   git clone https://github.com/Alrefa3i/FikraOnline.git
   cd backend/EduBridge
```
