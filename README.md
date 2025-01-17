# Glommly Application

## Author: Balhadj ELHADJ MOUSSA

## Description
Glommly is a web-based Social Network application platform that is similar to Twitter. It allows users to sign up, log in, create posts, and manage their profiles. The application is built using modern web development technologies, including Laravel, React, Inertia.js.
The platform provides a user-friendly and responsive interface for interacting with the application and managing user data.
The application is built for my university project and is intended for educational purposes, demonstrating the use of various web development tools and technologies in developing
Social Network applications. the app is open-source and can be used as a starting point for building similar web applications. we thank you for your interest in our project and we welcome any feedback or contributions to the project.

## Tools Used
### PHP
- PHP is a widely-used open-source scripting language that is especially suited for web development and can be embedded into HTML.

### Laravel
- Laravel is a PHP framework that provides an elegant syntax and a robust set of tools for building web applications, including routing, authentication, and database management.

### JavaScript
- JavaScript is essential for creating interactive web pages. It allows for dynamic content updates without reloading the page.

### React
- React is a JavaScript library for building user interfaces. It allows for the creation of reusable UI components and efficient rendering of dynamic data.

### Inertia.js
- Inertia.js is a library that allows for building single-page applications using server-side routing and controllers. It provides the benefits of a modern JavaScript framework without the need for an API.

### Tailwind CSS
- Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes for styling web applications. It allows for rapid development and customization of the user interface.

### MySQL
- MySQL is an open-source relational database management system that is widely used for storing and managing data in web applications.

### Composer
- Composer is a dependency manager for PHP, which allows for easy management of project dependencies.

### NPM
- NPM is a package manager for JavaScript, which helps in managing project dependencies and running scripts.

## Cloning and Installing
1. **Clone the repository**:
    ```sh
    git clone https://github.com/BalhadjHM/your-repo-name.git
    cd your-repo-name
    ```

2. **Install PHP dependencies**:
    ```sh
    composer install
    ```

3. **Install JavaScript dependencies**:
    ```sh
    npm install
    ```

## Configuring the Workspace

1. **Generate the application key**:
    ```sh
    php artisan key:generate
    ```

2. **Run database migrations**:
    ```sh
    php artisan migrate
    ```

3. **Build the front-end assets**:
    ```sh
    npm run dev
    ```

## Using the Application
1. **Start the development server**:
    ```sh
    php artisan serve
    ```
   The application will be accessible at `http://localhost:8000`.

2. **Access the application**:
    - **Sign Up**: Navigate to `/signup` to create a new account.
    - **Log In**: Navigate to `/login` to log in to your account.
    - **Create Posts**: Once logged in, navigate to `/posts/create` to create a new post.
    - **Manage Profile**: Navigate to `/settings` to update your profile information.

3. **Log Out**: Navigate to `/logout` to log out of your account.

## Additional Notes
- Ensure that your local development environment meets the necessary requirements for running a Laravel application, including PHP, Composer, Node.js, and NPM.
- For production deployment, consider using a web server like Nginx or Apache and a database server like MySQL or PostgreSQL.
