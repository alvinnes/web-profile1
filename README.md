
# Alvinity 🚀

**Alvinity** is a premium, high-performance portfolio website built with **React**, **TypeScript**, and **Vite**. It features modern UI/UX design with smooth animations, interactive 3D elements, and a glassmorphism aesthetic.

![Landing Page Preview](https://github.com/alvinnes/web-profile1/raw/main/preview.png) _(Add your own preview image here)_

## ✨ Key Features

- **Interactive 3D Elements**: Integration of Three.js (React Three Fiber) for immersive experiences like the Lanyard and ChromaGrid.
- **Scroll-Animated Timeline**: A dynamic Education timeline that grows and glows as the user scrolls.
- **Premium UI Components**: Custom-built components inspired by React Bits, including holographic Profile Cards and Laser Flow effects.
- **Modern Tech Stack**: Built with React 19, Tailwind CSS 4, and Framer Motion for top-tier performance and aesthetics.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Interactive Tech Skills**: Dynamic skill sliders using Swiper.js.
- **Professional Contact Form**: Integrated form with validation and backend connectivity.

## 🛠️ Tech Stack

### Frontend

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)

### Backend

- **Server**: [Express.js](https://expressjs.com/)
- **Database**: MySQL (via [mysql2](https://github.com/sidorares/node-mysql2))
- **Logic**: Node.js

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- MySQL Server

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/alvinnes/web-profile1.git
   cd web-profile1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a `.env` file in the root directory and add your configurations (Database, API keys, etc.).

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

5. **Run the Backend Server**
   ```bash
   npm run server
   ```

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── features/        # Section-specific components (About, Projects, etc.)
│   ├── react-bits/      # Specialized animated components
│   └── ui/              # Base UI elements
├── layouts/             # Shared page layouts
├── pages/               # Main page entries
├── assets/              # Styles and images
└── types/               # TypeScript interfaces
app/                     # Backend Logic (Express.js)
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas to improve **Alvinity**.

## 📄 License

This project is licensed under the MIT License.

---

Created with ❤️ by [Alvinnes](https://github.com/alvinnes)
