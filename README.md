# Wiki Banner Application

A dynamic banner customization application that allows users to modify banner properties in real-time without page reloads.

## Overview

This application was built as part of task T388234. It features:

- A full-width banner with customizable content
- A form that allows users to modify banner properties in real-time
- Responsive design for various screen sizes
- Comprehensive test coverage

## Technologies Used

- React 18 with TypeScript
- Styled Components for CSS-in-JS styling
- Jest and React Testing Library for unit testing
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd wiki-banner-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

### Running Tests

To run the test suite:

```bash
npm test
# or
yarn test
```

## Project Structure

```
/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Banner.tsx              # Banner component
│   │   ├── BannerForm.tsx          # Form for banner customization
│   │   └── __tests__/              # Component tests
│   ├── context/
│   │   └── BannerContext.tsx       # Context for banner state management
│   ├── App.tsx                     # Main App component
│   ├── App.css                     # Global styles
│   └── index.tsx                   # Entry point
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Features

### Banner Component

The banner component displays:
- A customizable title
- A description about a topic of interest
- An optional image
- Customizable background and text colors

### Form Component

The form allows users to modify:
- Banner background color
- Banner text color
- Banner title
- Banner description
- Banner image URL

All changes are applied in real-time without page reloads using React's state management.

## Development

### Commit Guidelines

This project follows conventional commit guidelines:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code (formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `test`: Adding or modifying tests
- `chore`: Changes to the build process or auxiliary tools

Example: `feat: add banner customization form`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
