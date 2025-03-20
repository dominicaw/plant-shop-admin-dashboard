# Plant Shop Admin Dashboard - Club Chlorophyll

## Introduction

I developed an admin dashboard for Club Chlorophyll, an imaginary plant shop, designed to assist owners, managers, and assistants in managing their store's inventory. The dashboard is built with a Node.js backend powered by ExpressJS and a React-based frontend.

## Project Planning

To adhere to the brief's instruction - "develop a system that facilitates hierarchical role-based permission management, enabling groups of users to access other users' information based on their roles within the organization" - I chose a practical, real-world example: a physical store. Physical stores inherently operate with hierarchical structures that most people are familiar with.

For instance, consider the following hierarchy:

- A manager can to override the price of an item at the till, but cashiers and store assistants cannot.
- Both cashiers and managers can access the till, but store assistants cannot.
  
Before diving into the code, I took time to define the functionality and purpose of the dashboard. To organise my thoughts and establish a clear direction for development, I created the below diagram using draw.io.

<img width="446" alt="Screenshot 2025-03-20 at 07 22 16" src="https://github.com/user-attachments/assets/ff1b89d5-d630-41ef-8719-132367b8b50a" />

## Balancing Frontend Expertise with Backend Exploration

The brief outlined the need for a complete system, including a database, backend, and frontend. As a frontend engineer, I decided to focus primarily on showcasing my strengths in frontend development while still addressing the backend requirements. To this end, I implemented a lightweight backend with two endpoints that support basic CRUD operations.

While I wanted to highlight my expertise in frontend development, I recognised the importance of stepping outside my comfort zone. By tackling an unfamiliar area, I demonstrated my ability to adapt and deliver in areas where I have less experience.

## The Hierarchical Permission Structure

To implement a hierarchical permission system, I designed three user roles, each with specific access levels and capabilities:

- Owner:
  - Can access data for all stores they own.
  - Has full permissions to edit plant quantities and prices.
  - Can add new plants to the inventory.
- Manager:
  - Limited to accessing data for their assigned store (cannot view data from other stores).
  - Can edit plant quantities and prices.
  - Can add new plants to the inventory.
- Assistant:
  - Restricted to their assigned store and cannot access data from other stores.
  - Can only edit the quantity of existing plants.
  - Cannot modify prices or add new plants.

## Authentication and Role Management

For authentication and role-based access control, I implemented JWT tokens. These tokens are used to manage user roles and enforce permissions both on the backend and frontend. Additionally, login access is locked down to only the roles explicitly listed in the `users.json` file, creating strict control over who can access the system.

**Backend Role Restrictions:**
The `/plant` endpoint's `PUT` operation is restricted to users with the `owner` or `manager` roles. This ensures that only authorised users can modify plant data.

**Frontend Role-Based UI:**
On the frontend, I extract the user's role from the JWT token and store it in the React Context. This allows me to dynamically show or hide UI elements based on the user's role.

**Route Protection:**
To further enforce role-based access, I implemented route protection on the frontend. For example, users with the `assistant` role are restricted from accessing the `/add-plant` route, as this functionality is outside their permissions.

## Data Handling

In place of a full-fledged database, I used hardcoded JSON files located in the `backend/src/data` folder to simulate data storage. While this approach is not suitable for production due to inherent security risks and scalability limitations, it is sufficient for the purposes of this project.

## Folder structure

```
plant-shop-admin-dashboard/
├── backend/                     
│   ├── src/                     # Source code for the backend
│   │   ├── app/                 # Main application logic
│   │   │   ├── controllers/     # Backend logic for handling requests
│   │   │   ├── middleware/      # Middleware for request validation
│   │   │   ├── routes/          # API routes
│   │   │   ├── index.js         # Main entry point for the backend app
│   │   ├── config/              # Configuration files
│   │   ├── data/                # Mock data for the backend
│   │   ├── public/              # Static assets served by the backend
│   │   ├── tests/               # Backend tests
│   │   ├── utils/               # Utility functions
│   ├── index.js                 # Entry point for starting the backend server

├── frontend/                  
│   ├── public/                 # Static assets
│   ├── src/                    # React TypeScript source code
│   │   ├── components/         # Reusable UI components
│   │   ├── context/            # React context for global state
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Page-level components
│   │   ├── router/             # React Router configuration
│   │   ├── theme/              # Theme configuration for Material-UI
│   │   ├── utils/              # Utility functions
```

## Testing
I implemented Jest on the backend to ensure the reliability and functionality of critical endpoints. Currently, there is a single test file covering the `/plant` endpoint, which validates its core behavior.

Ideally, I had planned to expand testing in two key areas:

- Adding unit tests for the `/token` endpoint to verify authentication logic.
- Demonstrating my proficiency with Cypress by implementing end-to-end (E2E) tests on the frontend.
  
Unfortunately, due to personal commitments, I was unable to complete these additional tests within the project timeline. However, the existing Jest test provides a solid foundation and offers insight into my approach to testing and quality assurance.

## Areas for Improvement
While the project is functional and demonstrates key features, there are several areas where it could be further enhanced:

- **Expand Testing Coverage:** 
Complete the planned unit tests for the `/token` endpoint and implement end-to-end (E2E) testing using Cypress to ensure comprehensive test coverage across both the frontend and backend.

- **Integrate a Real Database:** 
Replace the current hardcoded JSON files with a proper database system, making the application production-ready.

- **Enhance Store Selection Feature:**
Implement a query parameter on the `/plant` endpoint to allow the frontend to request plant data specific to a particular store. This would enable dynamic filtering of plants based on store assignments, improving functionality and user experience.

However, I did not want to take an excessive amount of time to complete the project, so I made the decision to submit it without these additional features.

## Running the Project

After cloning the repository, navigate to the root folder and execute the following command:

```
npm run dev
```

This script will:
- Install dependencies for both the backend and frontend.
- Start the backend server on `http://localhost:8000`.
- Launch the frontend development server on `http://localhost:5173`.

Refer to the `users.json` in `backend/src/data` to login as the three different roles.

### Thank you for reading and taking the time to review my project 😊



