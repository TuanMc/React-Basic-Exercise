# Registration System Exercise

A full-stack web application for managing internal training courses.
Employees can browse and register for courses, while admins can manage
courses and monitor registrations.

This project is designed as an **internship assignment** to evaluate and
improve skills in:

-   Frontend development
-   Backend development
-   REST API design
-   Database design
-   Business logic implementation
-   Documentation and system architecture

------------------------------------------------------------------------

# Project Overview

This application allows employees to register for internal training
courses.

The system solves the following problems:

-   Employees cannot easily see available courses
-   Admins cannot manage course capacity
-   Registration tracking is manual
-   There is no standardized registration workflow

The system introduces:

-   Course catalog
-   Online registration
-   Admin course management
-   Capacity control
-   Registration tracking

------------------------------------------------------------------------

# Business Goals

The system must allow:

Employees to:

-   View available training courses
-   Register for courses
-   Cancel registrations
-   View their registered courses

Admins to:

-   Create courses
-   Update courses
-   Delete courses
-   Monitor registrations
-   Track course completion

------------------------------------------------------------------------

# User Roles

## Employee

Employees can:

-   View course list
-   View course details
-   Register for courses
-   Cancel registration
-   View their own registrations

## Admin

Admins can:

-   Create courses
-   Update course information
-   Delete courses
-   View all registrations
-   Mark registration completion

------------------------------------------------------------------------

# User Stories

## User Login

As a user\
I want to login\
So that I can access the system.

## View Course List

As an employee\
I want to see available courses\
So that I can choose a course to join.

## View Course Detail

As an employee\
I want to see detailed course information\
So that I can decide whether to register.

## Register for Course

As an employee\
I want to register for a course\
So that I can participate in training.

## Cancel Registration

As an employee\
I want to cancel my registration\
So that my seat becomes available to others.

## Admin Create Course

As an admin\
I want to create new courses\
So that employees can register.

## Admin Manage Registrations

As an admin\
I want to see who registered\
So that I can manage training attendance.

------------------------------------------------------------------------

# Acceptance Criteria

## Login

-   Email and password required
-   Valid credentials return access token
-   Invalid login shows error

## Course List

Each course shows:

-   title
-   trainer
-   schedule
-   capacity
-   remaining seats
-   status

Supports:

-   search
-   filter
-   pagination

## Course Detail

Must display:

-   title
-   description
-   trainer
-   schedule
-   capacity
-   registered users
-   remaining seats
-   registration status

## Registration

User can register if:

-   course status is OPEN
-   seats available
-   user not already registered

## Cancel Registration

User can cancel if:

-   registration belongs to user
-   course is not completed

## Admin Create Course

Required fields:

-   title
-   description
-   trainer
-   schedule
-   capacity
-   status

------------------------------------------------------------------------

# Technology Stack

## Frontend

Recommended:

-   React
-   TypeScript
-   React Router
-   Axios
-   Tailwind CSS or SCSS

## Backend

Recommended:

-   Node.js
-   Express
-   TypeScript

Alternative:

-   NestJS
-   Spring Boot
-   .NET Web API

## Database

Recommended:

-   PostgreSQL

Alternative:

-   MySQL
-   SQLite

------------------------------------------------------------------------

# Frontend Screens

## Login Page

-   Logo
-   Email Input
-   Password Input
-   Login Button
-   Error Message

## Course List Page

-   Header
-   Search Bar
-   Filter Dropdown
-   Course Cards
-   Pagination

## Course Detail Page

-   Course Title
-   Trainer
-   Schedule
-   Description
-   Capacity
-   Remaining Seats
-   Register Button

## My Registrations Page

-   Course Table
-   Status
-   Cancel Button

## Admin Course Management Page

-   Create Course Button
-   Course Table
-   Edit/Delete Actions

## Course Creation Page

-   Title
-   Description
-   Trainer
-   Schedule
-   Capacity
-   Status
-   Save Button

------------------------------------------------------------------------

# API Documentation

Base URL

/api/v1

## Login

POST /auth/login

Request

{ "email": "admin@example.com", "password": "123456" }

Response

{ "accessToken": "jwt-token", "user": { "id": 1, "name": "Admin",
"role": "ADMIN" } }

## Get Courses

GET /courses

Query parameters:

-   search
-   status
-   page
-   limit

## Get Course Detail

GET /courses/{id}

## Create Course

POST /courses

## Update Course

PUT /courses/{id}

## Delete Course

DELETE /courses/{id}

## Register Course

POST /courses/{id}/register

## Cancel Registration

PATCH /registrations/{id}/cancel

## My Registrations

GET /me/registrations

## Admin View Registrations

GET /courses/{id}/registrations

------------------------------------------------------------------------

# Database Schema

## Users

  Field      Type
  ---------- ---------
  id         UUID
  name       VARCHAR
  email      VARCHAR
  password   VARCHAR
  role       VARCHAR

## Courses

  Field          Type
  -------------- -----------
  id             UUID
  title          VARCHAR
  description    TEXT
  trainer_name   VARCHAR
  scheduled_at   TIMESTAMP
  capacity       INT
  status         VARCHAR
  created_by     UUID

## Registrations

  Field           Type
  --------------- -----------
  id              UUID
  course_id       UUID
  user_id         UUID
  status          VARCHAR
  registered_at   TIMESTAMP

------------------------------------------------------------------------

# Business Rules

1.  User cannot register twice for same course.
2.  Course capacity must not be exceeded.
3.  Only OPEN courses accept registrations.
4.  Capacity cannot be reduced below active registrations.
5.  Course cannot be deleted if registrations exist.
6.  Employee can cancel only their own registration.

------------------------------------------------------------------------

# Project Structure

## Frontend

src/ components/ pages/ services/ hooks/ utils/ routes/

## Backend

src/ controllers/ services/ repositories/ routes/ middlewares/ models/

------------------------------------------------------------------------

# Setup Instructions

## Clone repository

git clone `<repo-url>`{=html}

## Install dependencies

Backend

npm install

Frontend

npm install

## Setup database

Create PostgreSQL database

training_system

Run migrations.

## Run backend

npm run dev

## Run frontend

npm start

------------------------------------------------------------------------

# Seed Data

Admin account

email: admin@example.com password: 123456

Employee account

email: employee@example.com password: 123456

------------------------------------------------------------------------

# Development Workflow

Recommended order:

1.  Design database
2.  Implement API endpoints
3.  Implement service layer logic
4.  Build frontend pages
5.  Connect frontend to backend
6.  Test scenarios
7.  Write documentation

------------------------------------------------------------------------


# Bonus Challenges

-   JWT authentication
-   Pagination and sorting
-   Course image upload
-   Docker setup
-   Unit tests
-   Admin dashboard
-   Audit logs

------------------------------------------------------------------------

# Deliverables

Interns must submit:

-   Source code repository
-   README documentation
-   Database schema
-   API collection (Postman)
-   Setup instructions
-   Demo screenshots or video
