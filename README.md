# Technofix Assignment

## Description

This project is a user management system that allows you to view, add, and search for users. It provides a clean and responsive interface to manage user information.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)

## Features

1. **User List Page:**

   - Displays all users in a card view layout.
   - Each card shows the following information about the users:
     - Avatar
     - First Name
     - Last Name
     - Email
     - Address (Street, City, State)
     - Company Name

2. **User Details Page:**

   - Clicking on a user's name opens a separate page showing detailed user information.
   - The user details page includes the following information:
     - Avatar
     - First Name
     - Last Name
     - Email
     - Address (Street, City, State)
     - Company Name

3. **Search Functionality:**

   - A search input field is provided at the top of the user list.
   - Typing in the search field filters the users based on their names.

4. **Sorting Functionality:**

   - A select input field is provided at the top of the user list to sort the users.
   - The available sorting options are:
     - Sort by name
     - Sort by email
     - Sort by company name

5. **User Creation Form**
   - There is a button; by clicking this button, a form will appear.
   - The form added on the user list page to add new users.
   - The form includes fields for all the information mentioned above.
   - After submitting the form, a modal will show the added new user details.
   - I used React Hook Form to handle this form and Yup validation schema to validate the form input.

## Technology Used

- React.js
- React Router
- React Hook Form
- Yup
- HTML
- CSS
- JavaScript

## Installation

1. Clone the repository:
   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/AdityaChowdhury2/technofix-assignment-aditya.git
   ```

2. Navigate to the Project Directory:
   Change your working directory to the project folder:

   ```bash
   cd technofix-assignment-aditya
   ```

3. Install Dependencies:
   Install the project dependencies using npm:

   ```bash
   npm install
   ```

4. Run the Application:
   Start the development server and run the React application:

   ```bash
   npm run dev
   ```

   The application will be accessible at http://localhost:5173 in your web browser.

   if any error happened please delete the node_modules folder and try again from repeat the process from step 3.

## Live Link

[Live link](https://technofix-assignment-aditya.netlify.app)
