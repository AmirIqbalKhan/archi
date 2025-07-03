# Architecture Portfolio Site

## Overview

This is a full-stack web application for an architectural portfolio featuring a modern minimal design aesthetic. The project showcases architectural projects and provides a contact form for potential clients. It's built with a React frontend, Express backend, and uses Drizzle ORM for database operations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom brutalist design system
- **UI Components**: Radix UI primitives with custom styling via shadcn/ui
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **3D Graphics**: Three.js for interactive 3D architectural models

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API**: RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Vite integration for hot module replacement

### Data Storage
- **Database**: PostgreSQL via Neon Database serverless
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Shared TypeScript schema definitions
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Database Schema
- **Projects Table**: Stores architectural project information (title, category, type, location, year, area, description, image URL)
- **Contacts Table**: Stores contact form submissions (name, email, project type, message)

### API Endpoints
- `GET /api/projects` - Retrieve all projects
- `GET /api/projects/:id` - Retrieve specific project
- `POST /api/contact` - Submit contact form

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Name display with interactive 3D wireframe model
- **Projects Section**: Grid layout with project cards and modal details
- **About Section**: Professional background and experience
- **Contact Section**: Contact form with validation
- **Footer**: Additional links and information

### Design System
- **Typography**: Inter font for modern minimal aesthetic
- **Colors**: Clean palette with dark grey, white, light grey, and blue accent
- **Layout**: Rounded corners, subtle shadows, and spacious grid system
- **Interactions**: Smooth hover effects and gentle transitions

## Data Flow

1. **Initial Load**: Frontend fetches project data from API endpoints
2. **Project Display**: Projects are rendered in a grid with click-to-expand modals
3. **Contact Form**: Form submissions are validated client-side and sent to backend
4. **Database Operations**: Backend processes requests and interacts with PostgreSQL
5. **State Management**: TanStack Query handles caching and synchronization

## External Dependencies

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Production bundling
- **Drizzle Kit**: Database migration management

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Three.js**: 3D graphics rendering
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation

### Backend Dependencies
- **Express**: Web application framework
- **Neon Database**: Serverless PostgreSQL
- **Connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
- Frontend builds to `dist/public` directory
- Backend compiles to `dist/index.js` with ESBuild
- Static assets served by Express in production

### Environment Configuration
- Development: Vite dev server with Express API
- Production: Single Express server serving both API and static files
- Database: Neon PostgreSQL with connection pooling

### Scripts
- `npm run dev` - Development mode with hot reloading
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Database schema push

## Changelog

```
Changelog:
- July 03, 2025. Initial setup with brutalist theme
- July 03, 2025. Updated to modern minimal theme with Inter typography, rounded corners, and clean aesthetic
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```