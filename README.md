# 🌿 Plant Tracker
An application for those of us who buy too many plants and then get overwhelmed. Track watering, feeding, and "plant love" schedules in one place.

## 🚀 Recent Updates
- **Security First:** Updated to use a dedicated database user with restricted permissions.
- **Workflow:** Integrated `nodemon` for a seamless developer experience.

## 🛠 The Stack
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (managed via pgAdmin)
- **Frontend:** EJS, HTML5, CSS3, JavaScript

---

## ⚙️ Setup Instructions

### 1. Prerequisites
- **Node.js**: [Download here](https://nodejs.org/)
- **PostgreSQL**: [Download here](https://www.postgresql.org/)
- **Git**: [Download here](https://git-scm.com/)

### 2. Database & Security Setup
To keep your database secure, we use a dedicated user rather than the "superuser."

1. **Create Database:** In pgAdmin, create a database named `plant_tracker`.
2. **Create User:** - Right-click "Login/Group Roles" -> Create -> "app_user".
   - Set a password in the "Definition" tab.
3. **Run Schema:** Open the Query Tool on your new database and run:
   ```sql
   CREATE TABLE plants (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       species VARCHAR(255),
       image_url VARCHAR(255),
       last_watered DATE,
       purchase_date DATE
   );

   GRANT ALL PRIVILEGES ON TABLE plants TO app_user;

## 3. Installing the Project

### Clone the repository
git clone [https://github.com/KTKCodes/Plant-Tracker](https://github.com/KTKCodes/Plant-Tracker)
cd plant_tracker_project/backend

### Install dependencies (includes nodemon for development)
npm install

### Environment Configuration

Create a file named .env in the backend folder and add your credentials there.
Note: It is included in the .gitignore file.

```
DB_USER=app_user
DB_HOST=localhost
DB_NAME=plant_tracker
DB_PASSWORD=your_secure_password
DB_PORT=5432
```
## 🔮 Roadmap
- [ ] **Auth:** User accounts to allow multiple people to track their own collections.
- [ ] **Notifications:** Email or browser alerts when a plant is overdue for watering.
- [ ] **Image Upload:** Integrate Multer/AWS S3 to allow users to upload their own plant photos.
- [ ] **Search/Filter:** Quick search by plant species or watering status.
