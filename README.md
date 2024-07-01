# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
#   e - c o m m e r c e - t s 

# Frontend Project

This project is a frontend application that interacts with a JSON Server backend to manage categories, products, wishlists, users, and orders.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- yarn (for package management)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/aligabalh90100/e-commerce-ts.git
   cd e-commerce-ts

## Backend Setup

The backend for this project is hosted on JSON Server. It provides REST API endpoints to fetch and manipulate data stored in a `db.json` file.

### Backend Repository

The JSON Server backend repository can be found here: [JSON Server Project](https://github.com/aligabalh90100/json-server-project)

### Installation

1. Clone the JSON Server backend repository:

   ```bash
   git clone https://github.com/aligabalh90100/json-server-project.git
   cd json-server-project
   ```
 
 
