# Andi Makes

A modern, responsive web application for "Andi Makes", a one-stop-shop for printing and copying needs. 

Built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: The website is fully responsive, ensuring optimal viewing across desktop, tablet, and mobile devices.
- **Modern UI**: Utilizes modern styling patterns including white floating cards on a light blue background.
- **Theming & Accessibility**: Features a clean light mode default theme with high-contrast text for excellent readability and accessibility.
- **Navigation**: Sticky top navigation bar with a custom logo implementation.
- **Service Catalog**: A dynamic, grid-based layout detailing the available services (Print, Xerox, Scan, Rush ID, Laminate, Souvenirs) with clear pricing.
- **Contact Form**: A clean, accessible contact submission form.

## Tech Stack

- **React 18**: Core Component engine.
- **Vite**: Next-generation frontend tooling and bundler.
- **Tailwind CSS (v4)**: Utility-first CSS framework for rapid styling.
- **React Router DOM v6**: Declarative routing for React applications.
- **Heroicons**: Beautiful hand-crafted SVG icons.

## Project Architecture

```text
andi-makes/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Card.jsx        # Generic card wrapper
│   │   ├── Footer.jsx      # Global footer
│   │   ├── Layout.jsx      # Global page wrapper with Navbar/Footer
│   │   └── Navbar.jsx      # Sticky navigation bar
│   ├── pages/              # Primary route views
│   │   ├── Contact.jsx     
│   │   ├── Home.jsx        
│   │   └── Services.jsx    
│   ├── App.jsx             # React Router configuration
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global Tailwind directives
├── index.html              # HTML template
├── package.json            # Scripts & dependencies
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

## License
&copy; 2026 Andi Makes. All rights reserved.
