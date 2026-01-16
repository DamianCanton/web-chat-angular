# Chat App Clone - Angular 17
### Trabajo Final Integrador - UTN BA
![Status](https://img.shields.io/badge/Status-Completed-success) ![Angular](https://img.shields.io/badge/Angular-17%2B-DD0031?logo=angular)

## Project Description
This application is a responsive chat interface developed as the Final Integrated Project for the "Desarrollo en Angular" course. It allows users to view contact lists, filter chats in real-time, and exchange messages with an automated bot response system. The project strictly adheres to the latest Angular 17 standards, utilizing Standalone Components and Signals.

## Tech Stack
The project is built using the following technologies and architectural patterns:

- **Framework:** Angular 17+
- **Architecture:** Standalone Components (No NgModules)
- **State Management:** Angular Signals (`signal`, `computed`)
- **Forms:** Reactive Forms (`FormControl`, `Validators`)
- **Styling:** Native CSS (Flexbox/Grid), Responsive Design (Mobile/Desktop), No external UI libraries
- **Routing:** Angular Router (Lazy Loading)

## Key Features
- [x] **Responsive Layout:** Adaptive 2-column view for Desktop and 1-column view for Mobile.
- [x] **Routing:** Implementation of routes for `/chats` (list), `/chats/:id` (detail), and `/nuevo` (new chat).
- [x] **Real-time Filter:** Efficient contact searching using Angular Signals.
- [x] **Smart UI:** Visual distinction between sent (right-aligned) and received (left-aligned) messages.
- [x] **Bot Simulation:** Auto-reply logic using `setTimeout` and RxJS to simulate network delay and bot responses.

## Installation & Usage
To run the project locally, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   ng serve
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:4200`

## Project Structure
The `src/app` directory is organized to ensure separation of concerns between feature components, layouts, and core services:

```text
src/
└── app/
    ├── chats-component/       # Feature: Chat list and filtering
    ├── chats-detail-component/# Feature: Individual conversation view
    ├── empty-chat/            # Shared: Placeholder state for no selection
    ├── main-layout/           # Core: Main application layout wrapper
    ├── new-chat-component/    # Feature: Form to start a new chat
    ├── services/              # Core: Data management using Signals
    ├── app.config.ts          # Application configuration
    └── app.routes.ts          # Routing definitions
```

## Deploy
The application is deployed and can be viewed live at:
**Deployed on Vercel/Netlify:** [web-chat-angular.vercel.app](https://web-chat-angular.vercel.app)

---
*Developed by Damian Canton for UTN BA.*
