# Next.js 14 Starter with NextAuth

This is a **Next.js 14** starter project with **NextAuth** integrated, featuring authentication via **Google** and **GitHub** providers.

## Features

- Next.js 14+
- NextAuth.js for authentication
- Google and GitHub OAuth providers
- Easy environment variable-based configuration

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Copy the `.env.example` file to create a new `.env` file:

```bash
cp .env.example .env
```

Update the `.env` file with your credentials for Google and GitHub OAuth:

```bash
NEXTAUTH_URL=http://localhost:3000

# Google OAuth credentials
NEXT_GOOGLE_CLIENT_ID=your-google-client-id
NEXT_GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth credentials
NEXT_GITHUB_CLIENT_ID=your-github-client-id
NEXT_GITHUB_CLIENT_SECRET=your-github-client-secret

# NextAuth secret for JWT and session handling (you can generate one using `openssl rand -base64 32`)
NEXTAUTH_SECRET=your-random-secret
```

### 4. Run the development server

After setting up the environment variables, start the development server:

```bash
npm run dev
# or
yarn dev
```

Your application will be running at [http://localhost:3000](http://localhost:3000).

### 5. Authentication Providers

To use Google and GitHub OAuth:

- **Google:** Set up an OAuth app in the [Google Developer Console](https://console.developers.google.com/).
- **GitHub:** Create an OAuth app in [GitHub Developer Settings](https://github.com/settings/developers).

Ensure your OAuth redirect URLs are set to:

- **Google:** `http://localhost:3000/api/auth/callback/google`
- **GitHub:** `http://localhost:3000/`

## Project Structure

- **app/** (Next.js 14's new App Router)
  - `page.tsx`: Home page
  - `api/auth/[...nextauth]/route.ts`: NextAuth configuration
- **components/**
  - `Navbar.tsx`: Example navigation component
- **styles/**
  - `globals.css`: Global CSS styles

## Contributing

We welcome contributions! If you're interested in improving this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -m 'Add my feature'`).
4. Push your branch (`git push origin feature/my-feature`).
5. Open a pull request.

### Feature Requests & Bugs

If you have a new feature request or encounter a bug, feel free to open an issue on this repository. We appreciate your feedback and contributions to make this project better.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
