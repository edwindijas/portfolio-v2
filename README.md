# TaskSpace Project Management App

TaskSpace is a modern project management app built with React, TypeScript, and Vite. It is designed to provide a seamless and efficient workflow for managing tasks and projects. With a clean and intuitive user interface, TaskSpace makes it easy to organize and track your work.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v7.0.0 or later)
- TypeScript (v4.3.5 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/taskspace.git
cd taskspace
```

### Install dependencies:
```npm install```

### Development
To run the app in development mode:

```npm run dev```
This will start the development server, and you can view the app at http://localhost:5173.

### Building
To build the app for production:

```npm run build```
The production-ready files will be generated in the dist directory.

## Scripts
- dev: Run the development server using Vite.
- build: Build the app for production using TypeScript and Vite.
- lint: Run ESLint to check for linting errors.
- lint-staged: Run linting on staged files using lint-staged.
- preview: Preview the production build using Vite.
- prepare: Install Husky hooks.
- test: Run Jest tests with coverage.
- test:watch: Run Jest tests in watch mode.
- storybook: Run Storybook for component development.
- build-storybook: Build Storybook for production.
- create-icon: Custom script for creating icons.

### Creating Icons
This project uses material design icons, the package used is @material-design-icons/svg.
To install a new Icon please follow the standard method, note replace ${iconName} with the icon name.
For example to install 

```
npm run create-icon ${iconName}
```


## Architecture
TaskSpace follows the Atomic Design methodology and SOLID principles to ensure a scalable and maintainable codebase. The components are organized into atoms, molecules, organisms, templates, and pages, promoting reusability and consistency.

## Dependencies
- @material-design-icons/svg: Material Design icons as SVG components.
- class-variance-authority: Utility for handling class variance.
- eslint-config-airbnb-typescript: Airbnb's ESLint configuration for TypeScript.
- lodash: JavaScript utility library.
- react: JavaScript library for building user interfaces.
- react-dom: React package for working with the DOM.
- react-router-dom: Declarative routing for React.

### Development Dependencies
Various tools and libraries for testing, linting, and building.
For a complete list, refer to the devDependencies section in package.json.
Contributing
If you'd like to contribute to TaskSpace, please read our contribution guidelines.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
