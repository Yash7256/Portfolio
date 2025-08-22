# Modern Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a beautiful radial menu navigation, smooth animations with Framer Motion, and a clean, professional design.

## ✨ Features

- 🎨 **Responsive Design**: Looks great on all devices
- 🌀 **Interactive Radial Menu**: Unique circular navigation experience
- 🚀 **Blazing Fast**: Built with Vite for optimal performance
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🎨 **Modern UI**: Clean and professional design
- 📱 **Mobile-First**: Optimized for touch interactions

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **3D Elements**: @react-three/fiber, @react-three/drei
- **Routing**: React Router DOM
- **Icons**: Lucide Icons
- **Build Tool**: Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn

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
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
src/
├── components/         # Reusable components
│   ├── RadialMenu.tsx  # Interactive radial navigation menu
│   ├── SkillBar.tsx    # Animated skill bars
│   └── ThreeBackground.tsx  # 3D background component
├── pages/              # Page components
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🎨 Customization

### Adding New Pages
1. Create a new component in the `pages` directory
2. Add a new route in `App.tsx`
3. Update the `menuItems` array in `RadialMenu.tsx` with your new page

### Styling
This project uses Tailwind CSS for styling. You can customize the design by modifying the Tailwind configuration in `tailwind.config.js`.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing development experience
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide Icons](https://lucide.dev/) for beautiful icons

## 📬 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
