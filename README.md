# 🚀 Task Manager - Web UI

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant%20Design-5.0-0170FE?style=for-the-badge&logo=ant-design&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Backend-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)

*A modern, responsive task management interface built with React 19, TypeScript, and Ant Design*

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [API](#-api-reference) • [Screenshots](#-screenshots)

</div>

---

## 📋 Project Information

| Field | Details |
|-------|---------|
| *Candidate* | Mahivardhan |
| *Date* | 20 October 2025 |
| *Task* | #3 - Web UI Forms |
| *Status* | ✅ Completed |

---

## 📖 Overview

This project is a *full-featured task management frontend* that seamlessly integrates with the Spring Boot backend API developed in Task 1. It provides an intuitive, accessible, and responsive interface for managing tasks and their command executions.

### 🎯 What It Does

- ➕ *Create* tasks with custom commands
- 📊 *View* all tasks with execution history
- 🔍 *Search* tasks by name in real-time
- 🗑 *Delete* tasks with confirmation
- ▶ *Execute* commands and capture output
- 📜 *Track* execution history with timestamps

---

## ✨ Features

### Core Functionality

| Feature | Description | Status |
|---------|-------------|--------|
| *Task Creation* | Add new tasks with ID, Name, Owner, and Command | ✅ |
| *Task List View* | Browse all tasks with detailed information | ✅ |
| *Smart Search* | Real-time search by task name | ✅ |
| *Task Deletion* | Remove tasks with confirmation dialog | ✅ |
| *Command Execution* | Run task commands and view live output | ✅ |
| *Execution History* | View past outputs with timestamps | ✅ |

### UI/UX Highlights

- 🎨 *Modern Design* - Clean interface using Ant Design components
- 📱 *Responsive Layout* - Works seamlessly on all screen sizes
- ♿ *Accessible* - WCAG compliant with keyboard navigation
- ⚡ *Fast & Efficient* - Optimized React 19 performance
- 🔄 *Real-time Updates* - Instant feedback on all operations

---

## 🛠 Technology Stack
```
text
Frontend
├── React 19              # UI Framework
├── TypeScript 5.0        # Type Safety
├── Ant Design 5.0        # Component Library
└── Axios                 # HTTP Client

Backend Integration
└── Spring Boot API       # Task Manager Backend (Task 1)

Development
├── Node.js 20+          # Runtime Environment
└── npm/yarn             # Package Manager

```
---

## 🚀 Installation

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Backend API running on http://localhost:8080

### Quick Start

bash
# ⿡ Clone the repository
git clone [https://github.com/yourusername/task3-webui.git](https://github.com/mahi-88/TaskManager_Frontend_Task3.git)
cd taskmanager-ui

# ⿢ Install dependencies
npm install
# or
yarn install

# ⿣ Start the development server
npm start
# or
yarn start


The application will open automatically at *http://localhost:3000*

> ⚠ *Important*: Ensure your Spring Boot backend (Task 1) is running at http://localhost:8080 before starting the frontend.

---

## 🔌 API Reference

The application connects to the following backend endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Retrieve all tasks |
| GET | /tasks?id={id} | Get a specific task by ID |
| PUT | /tasks | Create a new task |
| DELETE | /tasks/{id} | Delete a task |
| GET | /tasks/search?name={name} | Search tasks by name |
| PUT | /tasks/{id}/executions | Execute task command |

### Example API Response
```
json
[
  {
    "id": "123",
    "name": "Print Hello",
    "owner": "Mahivardhan",
    "command": "echo Hello World!",
    "taskExecutions": [
      {
        "startTime": "2025-10-20T13:09:24.805+00:00",
        "endTime": "2025-10-20T13:09:24.851+00:00",
        "output": "Hello World!\n"
      }
    ]
  }
]

```
---



## 📦 Project Structure

```
taskmanager-ui/
├── src/
│   ├── components/        # React components
│   ├── services/          # API integration
│   └── App.tsx            # Main application
├── public/                # Static assets
├── package.json           # Dependencies
└── README.md             # Documentation

```
## 📸 Screenshots


The application has been thoroughly tested with various scenarios:
## ✅ get all tasks
  ![WhatsApp Image 2025-10-20 at 21 52 10_94f66e2f](https://github.com/user-attachments/assets/52dd2b67-96dc-4dca-90ad-4418984c4ca9)

## ✅ Creating tasks with different command types

  ![WhatsApp Image 2025-10-20 at 21 55 35_0c267973](https://github.com/user-attachments/assets/a09206cc-5155-4862-a41d-1e042df71ae4)

  ## Added new Task
  ![WhatsApp Image 2025-10-20 at 21 55 35_7d25eea7](https://github.com/user-attachments/assets/381be9c1-81b2-4839-9c12-10fbdc45ee96)


## ✅ Searching with partial and full name matches

  <img width="1876" height="547" alt="image" src="https://github.com/user-attachments/assets/85a88a88-347e-470b-b0b9-96f3f0a282cd" />

## ✅ Deleting tasks and handling confirmations
  ## Deleted Task2
  
  ![WhatsApp Image 2025-10-20 at 21 55 35_f864a3ad](https://github.com/user-attachments/assets/561afd11-3948-4fe9-b939-cb6ee89e630e)

## ✅ Running commands and viewing outputs
  
  ![WhatsApp Image 2025-10-20 at 21 55 35_d25d5aef](https://github.com/user-attachments/assets/73a56855-4bc8-4e14-b36c-6245185a3a68)

  ✅ Responsive behavior across devices

---

## 🎉 Conclusion

This project successfully demonstrates:

- ✅ Full CRUD operations with REST API
- ✅ Modern React 19 with TypeScript
- ✅ Professional UI/UX design
- ✅ Accessibility best practices
- ✅ Responsive design implementation
- ✅ Real-time command execution and output display

*Task 3 - WEB UI Forms - Completed Successfully! 🚀*

---

