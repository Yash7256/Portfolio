# Modern Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.7-646CFF?logo=vite)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-8.15.0-000000?logo=three.js)](https://threejs.org/)

A cutting-edge, interactive portfolio website showcasing modern web development capabilities. This project demonstrates advanced frontend techniques including 3D graphics, smooth animations, custom interactions, and responsive design optimized for all devices.

## ✨ Key Features

- **🎨 Interactive 3D Elements**: Three.js particle systems and geometric shapes with Spline 3D animations
- **🖱️ Custom Cursor System**: 5 unique cursor styles (default, minimal, ring, trailing, neon) with smooth transitions
- **🚀 Performance Optimized**: Lazy loading, code splitting, and optimized animations for blazing-fast performance
- **📱 Fully Responsive**: Mobile-first design with touch device optimizations
- **🎭 Smooth Animations**: Framer Motion-powered page transitions and micro-interactions
- **🎯 Modern UI/UX**: Floating dock navigation, gradient effects, and professional design patterns
- **🔧 Developer Friendly**: TypeScript, ESLint, and modern development tooling

## 🛠️ Technology Stack

### Core Framework
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe development with enhanced developer experience
- **Vite 7.2.7** - Lightning-fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework with custom configurations
- **shadcn/ui** - Modern, accessible UI component library
- **Emotion** - CSS-in-JS solution with optimized performance
- **Lucide Icons** - Beautiful, consistent icon system

### Animation & 3D
- **Framer Motion 12.23.24** - Production-ready motion library for React
- **@react-three/fiber 8.15.0** - React renderer for Three.js
- **@react-three/drei 9.103.0** - Useful helpers for react-three-fiber
- **@splinetool/react-spline 4.1.0** - Spline 3D design integration

### Navigation & Routing
- **React Router DOM 7.8.1** - Declarative routing with lazy loading
- **React Intersection Observer 10.0.0** - Performant scroll-triggered animations

### Analytics & Monitoring
- **Vercel Analytics 1.6.1** - Real-time performance and user analytics

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher (or yarn 1.22.x+)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📖 Usage Examples

### Custom Cursor Styles

Switch between different cursor styles programmatically or via URL parameters:

```typescript
// Programmatic cursor style change
setCursorStyle('trailing');

// URL parameter method
// Visit: http://localhost:5173/?cursor=neon
```

Available styles:
- `default` - Dot with expanding ring on hover
- `minimal` - Simple small dot
- `ring` - Hollow circle with expansion
- `trailing` - Multiple dots with motion trail
- `neon` - Glowing circle with neon effects

### 3D Animation Integration

The portfolio includes randomized Spline 3D animations:

```typescript
const SPLINE_FILES = ['1.spline', '2.spline', '4.spline', 'greet.spline'];
const randomSpline = SPLINE_FILES[Math.floor(Math.random() * SPLINE_FILES.length)];
```

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx` with lazy loading
3. Update navigation items in the FloatingDockNavbar

```typescript
// Example new page
const NewPage = lazy(() => import('./pages/NewPage'));

// Add route
<Route path="/new" element={
  <Suspense fallback={null}>
    <LazyMotion features={domAnimation}>
      <PageTransition>
        <NewPage />
      </PageTransition>
    </LazyMotion>
  </Suspense>
} />
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── images/         # Static images and project assets
│   │   └── spline/          # Spline 3D animation files
│   ├── images/              # General image assets
│   └── spline-viewer/       # Spline viewer HTML wrapper
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── CustomCursor.tsx    # Multi-style cursor system
│   │   ├── ThreeBackground.tsx # Three.js 3D background
│   │   ├── SplineViewer.tsx    # Spline 3D viewer
│   │   └── ...
│   ├── context/            # React context providers
│   ├── hooks/              # Custom React hooks
│   │   ├── useThreeJs.ts       # Three.js utilities
│   │   └── useScrollAnimation.ts # Scroll animations
│   ├── pages/              # Route components
│   │   ├── Home.tsx            # Homepage with hero section
│   │   ├── About.tsx           # About page
│   │   ├── Experience.tsx      # Work experience
│   │   ├── Skills.tsx          # Technical skills
│   │   ├── Projects.tsx        # Project showcase
│   │   └── Contact.tsx         # Contact form
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── components.json         # shadcn/ui configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

## 🎨 Customization Guide

### Theme Customization

Modify the color scheme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      }
    }
  }
}
```

### Adding New 3D Animations

1. Create or export new Spline animations to `.spline` format
2. Place them in `public/assets/spline/`
3. Add to the `SPLINE_FILES` array in `src/pages/Home.tsx`

### Custom Cursor Styling

Modify cursor styles in `src/components/CustomCursor.tsx`. Each style is implemented as a separate conditional block with Framer Motion variants.

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Type checking (if added)
npm run type-check
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React + Vite setup
3. Deploy with default settings

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🎯 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and images loaded on demand
- **Tree Shaking**: Unused dependencies eliminated from bundle
- **Optimized Animations**: 60fps animations with `will-change` optimizations
- **Touch Device Detection**: Automatic cursor disabling on mobile devices
- **Asset Optimization**: Spline files handled separately for optimal loading

## 📊 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

*Note: 3D features require WebGL support. Custom cursors fall back to default on touch devices.*


## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Vite Team** - For the exceptional development experience
- **Framer Motion** - For the smooth and powerful animation library
- **Three.js Community** - For the incredible 3D graphics capabilities
- **Spline Design** - For the intuitive 3D design tool
- **Tailwind CSS** - For the utility-first CSS framework

## 📬 Contact

- **Portfolio**: [Live Demo](https://amanraj06.vercel.app)
- **Blog**: [Your Blog](https://amanraj-blog.vercel.app)
- **GitHub**: [Your GitHub](https://github.com/Yash7256)
- **Email**: amanrajengg@gmail.com

---

⭐ If you find this project helpful, consider giving it a star!