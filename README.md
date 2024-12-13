# **StudMind AI SaaS**

StudMind is a Software as a Service (SaaS) platform designed to assist college and high school students with effective study tools. The platform provides features like AI-assisted study material chats, mock exams, podcasts, and more.

This repository contains two main components:
1. **Laravel**: Backend API and server-side functionality.
2. **Next.js**: Frontend for the web application.

---

## **Folder Structure**

- **`api/`**: Contains the Laravel backend code for handling server-side logic, API endpoints, database operations, and authentication.
- **`frontend/`**: Contains the Next.js frontend code for building the user interface and consuming the Laravel APIs.

---

## **Requirements**

Ensure you have the following installed on your system:
- **PHP** (8.1 or higher) with required extensions
- **Composer**
- **Node.js** (16.x or higher)
- **npm** or **yarn**
- **MySQL** or another supported database
- **Git**
- **Xampp**

---

## **Setup Instructions**

### **Step 1: Clone the Repository**
```bash
git clone <repository-url>
cd <repository-folder>
```

### **Step 2: Setup Laravel Backend**

1. Navigate to the `laravel` directory:
   ```bash
   cd api
   ```

2. Install PHP dependencies:
   ```bash
   composer install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your environment settings:
   - **Database credentials** (e.g., `DB_HOST`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`)
   - **APP_URL** (e.g., `http://localhost:8000`)

5. Generate the application key:
   ```bash
   php artisan key:generate
   ```

6. Run database migrations:
   ```bash
   php artisan migrate --seed
   ```

7. Serve the Laravel application:
   ```bash
   php artisan serve
   ```

The Laravel backend should now be running at `http://localhost:8000`.

---

### **Step 3: Setup Next.js Frontend**

1. Navigate to the `nextjs` directory:
   ```bash
   cd ../frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Create an `.env.local` file in the `nextjs` directory and add the following:
   ```
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
   ```
   Update the `NEXT_PUBLIC_API_BASE_URL` with the URL where your Laravel backend is running.

4. Start the development server:
   ```bash
   npm run dev
   ```

The Next.js frontend should now be running at `http://localhost:3000`.

---

## **Building for Production**

### **Laravel**
1. Set `APP_ENV=production` and configure other environment variables in `.env`.
2. Run the following:
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```

3. Serve the Laravel app using a web server like Xampp or Apache.

### **Next.js**
1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

---

## **API Endpoints**

Refer to the API documentation for details about available endpoints and their usage. The Laravel backend serves as the API provider for the Next.js frontend.

---

## **License**

This project is licensed under the [MIT License](LICENSE).