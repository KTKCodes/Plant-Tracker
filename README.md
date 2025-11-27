# Plant Tracker
An application to help people who bought too many plants and are now overwhelmed and don't know when they last watered them, fed them, or gave them any kind of love.
Surely not just a me problem...

## Features
- Plant Management: Add, view, and manage details for each plant in your collection.
- Dynamic Content: Plant cards are dynamically loaded from a PostgreSQL database.
- Intuitive Interface: Easy-to-use form for adding new plants with details like name, species, last watered date, purchase date, and image URL.
- Responsive Design: A clean and simple interface, adaptable for various screen sizes.

## Stack
- Node.js, Express.js, PostgreSQL PGAdmin, EJS, HTML5, CSS3, JavaScript.

## Setup Instructions
You can follow these steps to get the Plant Tracker application up and running on your local machine.

### 1. Prerequisites
Node.js: Make sure you have Node.js and npm installed. Download from nodejs.org.
PostgreSQL: Install PostgreSQL. The interactive installer for Windows is recommended. Download from postgresql.org.
Git: For cloning the repository. Download from git-scm.com.

### 2. Database Setup
Install PostgreSQL: If you haven't already done so, install PostgreSQL using the interactive installer. Remember the password you set for the postgres user.
Open pgAdmin: Launch pgAdmin (usually installed with PostgreSQL).

**Create Database:**

Connect to your PostgreSQL server (using the postgres user and your password).
Right-click on "Databases" -> "Create" -> "Database...".
Name the new database plant_tracker and click "Save".

**Create Table:**

Expand your plant_tracker database, then "Schemas" -> "public" -> "Tables".
Right-click on "Tables" and select "Query Tool".
Paste the following SQL command into the query window and execute it (lightning bolt icon):

`CREATE TABLE plants (`  
    `id SERIAL PRIMARY KEY,`  
    `name VARCHAR(255) NOT NULL,`   
    `species VARCHAR(255),`  
    `image_url VARCHAR(255),`   
    `last_watered DATE,`  
    `purchase_date DATE`   
`);`  

### 3. Project Setup
**Clone the Repository:**

git clone <https://github.com/KTKCodes/Plant-Tracker>  
cd plant_tracker_project

**Navigate to Backend:**

cd backend

**Install Dependencies:**

npm install

**Configure Database Credentials:**

Open server.js in your backend folder.

Locate the Pool configuration and update the user and password fields with your PostgreSQL username (likely postgres) and the password you set during installation.

`const pool = new Pool({`  
    `user: 'postgres', // Your PostgreSQL username`  
    `host: 'localhost',`  
    `database: 'plant_tracker',`  
    `password: 'your_password', // Your PostgreSQL password`  
    `port: 5432,`  
`});`  

Move Static Assets: Ensure your styles.css is in backend/public/styles/ and your myplants.js (simplified for modal only) is in backend/public/scripts/. Also, ensure other static HTML pages (dashboard.html, settings.html, wishlist.html) are in backend/public/pages/.

***

## Running the Application
**Start the Server:**

From your terminal, ensure you are in the backend directory:

`cd plant_tracker_project/backend`  

**Run the server:**

`node server.js`  

You should see a message in the console: Server is running at http://localhost:3000.

**Access the Application:**

Open your web browser and navigate to http://localhost:3000.

You should now see the Plant Tracker homepage, styled correctly. You can add new plants, and they will persist in your database and appear on the homepage!

***

## Usage
- **Homepage/index/myplants:** Displays all your added plant cards and an "Add New Plant" button.
- **Add New Plant:** Click the "Add New Plant" card to open a modal form. Fill in the details and submit to add a new plant to your collection.
- **Plant Details:** Click on any plant card to view its individual detail page.
