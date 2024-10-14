# **Course Management System API**

## Overview

This project is a **Course Management System** built using **TypeScript** and **Node.js**. It contains RESTful API for managing courses. The system handles course data management and persist data in JSON files instead of a traditional database. It includes features such as validation, error handling, logging, and API documentation with **Swagger**.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [API Documentation](#api-documentation)
3. [Project Structure](#project-structure)
4. [Available Scripts](#available-scripts)
5. [Endpoints](#endpoints)
6. [Data Models](#data-models)
7. [Testing](#testing)
8. [Error Handling](#error-handling)
9. [Logging](#logging)

---

## Getting Started

### Prerequisites

- **Node.js** (>= 14.x)
- **npm** (>= 6.x) or **yarn**

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/aishacodes/CMS.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd CMS
   ```

3. **Install dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn
   ```

4. **Run the application**:

   Start the development server:

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

5. **Access the API**:

   The API will run at `http://localhost:3001`.

---

## API Documentation

The project uses **Swagger** to generate API documentation. Once the server is running, you can access the API docs at:

http://localhost:3001/api-docs

## Project Structure

```bash
├── controllers/         # Contains logics for handling API requests
├── data/                # Directory for storing JSON files(courses.json, modules.json, and lessons.json)
├── middlewares/         # Custom middleware for validation,swagger config, logging, error handling,
├── routes/              # API route definitions and swagger docs
├── types/               # TypeScript types  definitions
├── utils/               # Utility functions
├── validators/          # Schemas
├── README.md            # Project documentation
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata and dependencies
```
