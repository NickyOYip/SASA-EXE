# SASA-EXE - Vite Vanilla Project

A simple Vite project using pure HTML, CSS, and JavaScript (no frontend framework).

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation
Dependencies are already installed. If you need to reinstall them:
```bash
npm install
```

### Development
Start the development server:
```bash
npm run dev
```
This will start a local development server, typically at `http://localhost:5173/`

### Building for Production
Create a production build:
```bash
npm run build
```
The built files will be in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## Project Structure
```
SASA-EXE/
├── public/          # Static assets
│   └── vite.svg     # Vite logo
├── index.html       # Main HTML file
├── main.js          # Main JavaScript file
├── style.css        # Main CSS file
├── package.json     # Project configuration
└── .vscode/         # VS Code configuration
    └── tasks.json   # Build tasks
```

## Features
- ⚡️ Fast development with Vite
- 🔥 Hot Module Replacement (HMR)
- 📦 Optimized builds
- 🎨 Modern CSS with dark/light mode support
- 📱 Responsive design
- 🎯 Pure HTML, CSS, and JavaScript (no frameworks)

## VS Code Tasks
Use Ctrl+Shift+P and type "Tasks: Run Task" to access:
- **Dev Server**: Start development server
- **Build**: Build for production
- **Preview**: Preview production build

## Customization
- Edit `index.html` for structure
- Edit `style.css` for styling
- Edit `main.js` for functionality
- Add static assets to the `public/` directory
