# Micro Frontend Demo Application

This is a simple micro frontend application built with Angular and Native Federation, consisting of:

- **Shell (Host)** - Main application that hosts and navigates between micro frontends
- **mfe-card** - Card micro frontend with a simple card interface
- **mfe-products** - Products micro frontend with a product grid

## Features

- Clean, modern UI with gradient backgrounds
- Responsive design that works on all devices
- Simple navigation between micro frontends
- Standalone Angular components
- Native Federation for micro frontend architecture

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Angular CLI

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

You need to run all three applications simultaneously in separate terminals:

#### Terminal 1 - Shell (Host)
```bash
ng serve shell
```
The shell will be available at: http://localhost:4200

#### Terminal 2 - Card Micro Frontend
```bash
ng serve mfe-card
```
The card MFE will be available at: http://localhost:4201

#### Terminal 3 - Products Micro Frontend
```bash
ng serve mfe-products
```
The products MFE will be available at: http://localhost:4202

## Navigation

- Navigate to `/card` to see the Card Micro Frontend
- Navigate to `/products` to see the Products Micro Frontend
- The default route redirects to `/card`

## Architecture

- **Shell**: Uses Angular routing to load remote micro frontends
- **Remote MFEs**: Standalone components that can be loaded independently
- **Native Federation**: Handles the loading and communication between micro frontends

## Development

Each micro frontend can be developed independently. The shell application will automatically load the latest versions when they're rebuilt.

## Technologies Used

- Angular 17+
- Native Federation
- SCSS for styling
- Standalone components
- Modern CSS features (backdrop-filter, CSS Grid, Flexbox)
