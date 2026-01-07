# Modern Portfolio

A responsive, high-performance personal portfolio website built with modern web technologies. This project showcases a clean "Resume-style" layout with immersive parallax effects and smooth scroll animations.

![Portfolio Preview](src/assets/pp.jpg)

## 🚀 Tech Stack

*   **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API, Script Setup)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Testing:** [Vitest](https://vitest.dev/)

## 🏗 Architecture

The codebase follows **Domain-Driven Design (DDD)** principles to ensure maintainability and scalability.

*   **`src/modules/`**: Contains core domain logic, separated by context.
    *   **`identity/`**: Manages personal profile data (Name, Photo, Bio).
    *   **`career/`**: Manages professional history (Experience, Education, Projects).
    *   **Repositories**: Data access layer (e.g., `ProfileRepository`, `CareerRepository`) separates content from UI components.
*   **`src/ui/`**: Shared dumb UI components (e.g., `HeroSection`).

## ✨ Features

*   **Parallax Hero Section**: immersive full-screen cover with scroll-based opacity and movement effects.
*   **Scroll Reveal Animations**: Sections fade in and slide up gracefully as the user scrolls.
*   **Responsive Layout**:
    *   **Desktop**: Sticky Sidebar Profile + Scrolling Content.
    *   **Mobile**: Stacked, touch-friendly layout.
*   **Personal Projects Module**: dedicated section for showcasing work with GitHub links and tech stacks.
*   **Seamless Design**: Global scrollbar hiding for a cleaner visual experience.

## 🛠 Setup & Run

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Run Tests**
    ```bash
    npm run test
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── assets/          # Static assets (images)
├── modules/         # Domain Modules
│   ├── career/      # Experience, Education, Projects
│   └── identity/    # Profile, Bio
├── ui/              # Shared UI Components (HeroSection)
├── App.vue          # Main Layout
└── main.ts          # Entry Point
```
