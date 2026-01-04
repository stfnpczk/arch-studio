# Arch Studio Codebase Explanation

## Overview

This is a **Next.js 14** multi-page website for an architecture studio, built as a solution to a Frontend Mentor challenge. The application showcases architectural projects, company information, and contact details with a fully responsive design.

## Project Structure

### Technology Stack

- **Framework**: Next.js 14.2.13 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4.1
- **Form Handling**: Formik 2.4.6
- **Maps**: Leaflet & React-Leaflet 4.2.1
- **Carousel/Slider**: Swiper 11.1.14
- **Notifications**: React Hot Toast 2.4.1
- **Font**: League Spartan (Google Fonts)

### Directory Structure

```
/workspace
├── app/                          # Next.js App Router directory
│   ├── about/                    # About page route
│   │   └── page.js
│   ├── components/               # React components organized by feature
│   │   ├── about/                # About page components
│   │   │   ├── AboutUs.js
│   │   │   ├── Heritage.js
│   │   │   └── Leaders.js
│   │   ├── contact/              # Contact page components
│   │   │   ├── Connect.js        # Contact form
│   │   │   ├── ContactDetails.js
│   │   │   ├── ContactInfo.js
│   │   │   └── MapComponent/     # Leaflet map integration
│   │   ├── home/                 # Home page components
│   │   │   ├── FeaturedProjects.js
│   │   │   ├── Slider.js         # Hero carousel
│   │   │   ├── TeamHero.js
│   │   │   └── WelcomeText.js
│   │   ├── portfolio/            # Portfolio page components
│   │   │   └── Portfolio.js
│   │   └── shared/               # Shared/reusable components
│   │       ├── CtaLink.js        # Call-to-action button
│   │       ├── Footer.js
│   │       ├── Header.js         # Navigation with mobile menu
│   │       ├── ModalHamburger.js # Mobile menu modal
│   │       └── PathIndicator.js # Breadcrumb indicator
│   ├── contact/                  # Contact page route
│   │   └── page.js
│   ├── data/                     # Static data
│   │   └── data.js               # Projects, leaders, offices, slides
│   ├── hooks/                    # Custom React hooks
│   │   └── useWindowWidth.js     # Window resize hook
│   ├── portfolio/                # Portfolio page route
│   │   └── page.js
│   ├── utils/                    # Utility functions/components
│   │   └── ResponsiveNextImage.js # Responsive image component
│   ├── layout.js                 # Root layout with Header/Footer
│   ├── page.js                   # Home page
│   └── globals.css               # Global styles
├── public/                       # Static assets
│   ├── about/                    # About page images (mobile/tablet/desktop)
│   ├── contact/                  # Contact page images
│   ├── home/                     # Home page images
│   ├── portfolio/                # Portfolio project images
│   └── icons/                    # SVG icons
└── Configuration files
    ├── next.config.mjs
    ├── tailwind.config.js
    ├── package.json
    └── jsconfig.json
```

## Key Features

### 1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: Mobile (<768px), Tablet (768px-1279px), Desktop (≥1280px)
   - Separate image assets for each breakpoint
   - Custom `ResponsiveNextImage` component handles breakpoint-based image selection

### 2. **Navigation**
   - **Header Component** (`app/components/shared/Header.js`):
     - Desktop/Tablet: Horizontal navigation bar
     - Mobile: Hamburger menu with modal overlay
     - Active page indicator (underline)
     - Uses Next.js `usePathname` for route detection

### 3. **Pages**

   #### Home Page (`app/page.js`)
   - **Slider**: Hero carousel using Swiper with 4 featured projects
   - **WelcomeText**: Introduction section
   - **TeamHero**: Team showcase section
   - **FeaturedProjects**: Grid of 3 featured projects

   #### Portfolio Page (`app/portfolio/page.js`)
   - Displays all 12 architectural projects in a grid
   - Each project shows image, name, and date
   - Responsive grid layout

   #### About Page (`app/about/page.js`)
   - **AboutUs**: Company introduction with hero image
   - **Heritage**: Company history section
   - **Leaders**: Team members grid (4 leaders)

   #### Contact Page (`app/contact/page.js`)
   - **ContactInfo**: Hero section
   - **ContactDetails**: Office locations and contact info
   - **MapComponent**: Interactive Leaflet map showing office locations
   - **Connect**: Contact form with Formik validation

### 4. **Data Management**

   All static data is centralized in `app/data/data.js`:
   - `slides`: Hero carousel slides (4 projects)
   - `featuredProjects`: Featured projects for home page (3 projects)
   - `allProjects`: Complete portfolio (12 projects)
   - `leaders`: Team members (4 people)
   - `offices`: Office locations (2 offices)

### 5. **Custom Hooks**

   - **`useWindowWidth`**: Tracks window width for responsive behavior
     - Used by `ResponsiveNextImage` and `Header` components
     - Handles resize events with cleanup

### 6. **Utilities**

   - **`ResponsiveNextImage`**: Wrapper around Next.js Image component
     - Automatically selects appropriate image based on window width
     - Uses `fill` prop for responsive sizing
     - Supports mobile/tablet/desktop image variants

### 7. **Styling**

   - **Tailwind CSS** with custom configuration:
     - Custom color palette (veryDarkBlue, darkGrey, mediumGrey, etc.)
     - Custom typography sizes (150xl, 200xl, 250xl)
     - Custom animations (slideInDown, slideOutUp)
     - CSS custom properties for max-width layout constraints
     - Mobile-first responsive utilities

## Component Architecture

### Component Organization

Components are organized by **feature/page** rather than by type:
- `components/home/` - Home page specific components
- `components/about/` - About page components
- `components/contact/` - Contact page components
- `components/portfolio/` - Portfolio components
- `components/shared/` - Reusable components used across pages

### Client vs Server Components

- Most components use `"use client"` directive because they:
  - Use React hooks (`useState`, `useEffect`)
  - Handle user interactions
  - Use browser APIs (window resize)
- Layout and some page components are Server Components by default

## Key Implementation Details

### 1. **Image Optimization**
   - Uses Next.js `Image` component for automatic optimization
   - Separate image files for each breakpoint stored in `public/`
   - Images are imported as static assets in `data.js`

### 2. **Form Validation** (Contact Page)
   - Uses Formik for form state management
   - Validation rules:
     - Required fields: Name, Email, Message
     - Email format validation
     - Error messages displayed inline

### 3. **Map Integration**
   - Uses Leaflet/React-Leaflet for interactive maps
   - Shows office locations with custom markers
   - Responsive map container

### 4. **Carousel Implementation**
   - Swiper library with:
     - Autoplay (2.5s delay)
     - Keyboard navigation
     - Custom pagination (numbered bullets)
     - Loop functionality

### 5. **Mobile Menu**
   - Modal overlay component (`ModalHamburger`)
   - Slide-in animation
   - Closes on navigation or close button click

## Routing

Next.js App Router file-based routing:
- `/` → `app/page.js` (Home)
- `/portfolio` → `app/portfolio/page.js`
- `/about` → `app/about/page.js`
- `/contact` → `app/contact/page.js`

## Build & Development

### Scripts
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm start` - Production server
- `npm run lint` - ESLint check

### Configuration
- **ESLint**: Next.js recommended config
- **Prettier**: Configured with Tailwind plugin for class sorting
- **PostCSS**: Configured for Tailwind CSS processing

## Design System

### Colors
- `veryDarkBlue`: #1b1D23 (Primary text)
- `darkGrey`: #60636d
- `mediumGrey`: #7d828f
- `lightGrey`: #c8ccd8
- `veryLightGrey`: #eeeff4 (Backgrounds)
- `red`: #df5656 (Errors/Accents)

### Typography
- Font: League Spartan (400, 700 weights)
- Large display sizes: 150px, 200px, 250px
- Custom line heights for large text

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1279px
- **Desktop**: ≥ 1280px

Layout max-widths controlled via CSS custom properties:
- `--max-width-layout-mobile`
- `--max-width-layout-tablet`
- `--max-width-layout-desktop`

## Best Practices Used

1. **Component Composition**: Small, focused components
2. **Data Separation**: Centralized data in `data.js`
3. **Image Optimization**: Next.js Image with responsive variants
4. **Accessibility**: ARIA labels, semantic HTML
5. **Performance**: Code splitting via Next.js, optimized images
6. **Type Safety**: JSDoc comments (though TypeScript could be added)
7. **SEO**: Metadata in layout, semantic HTML structure

## Potential Improvements

1. **TypeScript**: Convert to TypeScript for better type safety
2. **State Management**: Consider Context API or Zustand for global state if needed
3. **Testing**: Add unit/integration tests
4. **API Integration**: Replace static data with API calls if needed
5. **Internationalization**: Add i18n support for multiple languages
6. **Animation Library**: Consider Framer Motion for more complex animations
