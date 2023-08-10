# My Todo

![My Todo App Screenshot](./screenshotng)

This is a simple Todo App built using React, TypeScript, and Auth0 for authentication. It uses Vitest and Vitest UI for unit testing. The app allows users to create, manage, and track their tasks.

## Live Demo

Check out the live demo of the app deployed on Netlify: [My Todo App Live Demo](https://punishthetodo.netlify.app)

## Features

- User authentication using Auth0
- Create and delete tasks (Edit yet to be implemented)
- Mark tasks as completed
- Material UI integration

## Technologies Used

- React
- TypeScript
- Auth0 for authentication
- Yarn for package management
- Vitest for unit testing
- Vitest --ui for unit testing
- Netlify for deployment
- Material-UI for UI components

## Installation

1. Clone the repository:

```bash

git clone https://github.com/your-username/todo-app.git

```

2. Navigate to the project directory:

```bash

cd todo-app

```

3. Navigate to the project directory:

```bash

yarn install

```

4. Configure Auth0:

## Steps

- Create an Auth0 account and set up an application.
- Create an Auth0 account and set up an application.
- Create an auth0-config.ts file in the project root and add the following:

```auth0-config.ts

const auth0Config = {
  domain: "YOUR_DOMAIN",
  clientId: "YOUR CLIENT_ID",
  redirect_uri: "YOUR URI (GIVE LOCALHOST URL FOR LOCAL DEVELOPMENT)",
};

```

5. Run the app locally:

```bash

yarn dev

```

Open your browser and go to http://127.0.0.1:5173 to see the app running.

6. Testing

```bash

yarn test / yarn test:ui

```

7. Deployment

- The app is deployed on Netlify. Every push to the main branch triggers an automatic deployment.

8. Contributing

- Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

9. License

- This project is licensed under the MIT License

```

Please make sure to replace placeholders with your actual values. Also, have a `screenshot.png` image in your project directory or adjust the screenshot path accordingly. This image will be used to display a screenshot of your app in the README.

```
