# 📊 LogScope

> **Powerful log analysis made simple and beautiful**

LogScope is a modern, web-based log analysis tool built with React, TypeScript, and Vite. It provides an intuitive interface for uploading, searching, filtering, and visualizing log data with beautiful charts and comprehensive statistics.

![LogScope Banner](https://img.shields.io/badge/LogScope-Log%20Analysis%20Tool-blue?style=for-the-badge)

## ✨ Features

### 🔍 **Advanced Search & Filtering**

- **Powerful Search**: Search through your logs with advanced filtering capabilities
- **Key-Value Filtering**: Filter logs based on specific key-value pairs and log levels
- **Real-time Filtering**: Instant search results as you type
- **Log Level Filtering**: Filter by DEBUG, INFO, WARN, ERROR, and FATAL levels

### 📈 **Visual Analytics**

- **Interactive Charts**: Beautiful time-series charts showing log patterns
- **Statistics Dashboard**: Comprehensive overview of log data metrics
- **Real-time Analysis**: Analyze log frequency and patterns with interactive visualizations
- **Key-Value Statistics**: Detailed breakdown of log attributes

### 🎯 **Smart Log Management**

- **Log Flagging**: Flag important logs and view them separately for quick access
- **Drag & Drop Upload**: Intuitive file upload interface for JSON and LOG files
- **Fast Performance**: Lightning-fast log processing and visualization
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🌓 **Modern UI/UX**

- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Animated Interface**: Smooth animations and transitions
- **Modern Design**: Clean, professional interface built with Tailwind CSS
- **Accessibility**: Built with accessibility best practices

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd logScope
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📋 Usage Guide

### 1. **Upload Logs**

- Navigate to the **Upload** page
- Drag and drop your JSON or LOG files into the upload area
- Or click to browse and select files from your computer
- Supported formats: `.json`, `.log`, `.txt`

### 2. **Analyze Logs**

- After uploading, you'll be redirected to the **Logs** page
- View comprehensive statistics in the dashboard
- Use the search bar to find specific log entries
- Apply filters using the sidebar controls

### 3. **Search & Filter**

- **Text Search**: Enter keywords in the search bar
- **Log Level Filter**: Select specific log levels (DEBUG, INFO, WARN, ERROR, FATAL)
- **Key-Value Filters**: Filter by specific attributes in your logs
- **Date Range**: Filter logs by time periods

### 4. **Flag Important Logs**

- Click the flag icon next to any log entry
- View all flagged logs in a separate filtered view
- Use flags to mark important errors or events

### 5. **View Statistics**

- **Chart Analysis**: Interactive charts showing log patterns over time
- **Key-Value Stats**: Breakdown of log attributes and their frequencies
- **Log Level Distribution**: Visual representation of log severity levels

## 🏗️ Project Structure

```
logScope/
├── public/                    # Static assets
├── src/
│   ├── components/           # Reusable React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── AnimatedBackground.tsx
│   │   ├── CTASection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── FileUploadArea.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── KeyValueStats.tsx
│   │   ├── LandingFooter.tsx
│   │   ├── LandingHeader.tsx
│   │   ├── LogCharts.tsx
│   │   ├── LogFilters.tsx
│   │   ├── LogTable.tsx
│   │   ├── SecurityNotice.tsx
│   │   ├── StatsDashboard.tsx
│   │   ├── UploadHeader.tsx
│   │   └── UploadInstructions.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useFileUpload.ts
│   │   ├── useLandingPage.ts
│   │   ├── useLogFilters.ts
│   │   └── useTheme.ts
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Log viewer page
│   │   ├── Landing.tsx      # Landing page
│   │   └── Upload.tsx       # Upload page
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   ├── App.tsx              # Main app component
│   ├── main.tsx            # App entry point
│   └── model.ts            # Data models and types
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Technology Stack

### **Frontend Framework**

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### **Styling & UI**

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful icon library

### **State Management & Hooks**

- **React Hooks** - Built-in state management
- **Custom Hooks** - Reusable stateful logic
- **React Query** - Server state management (if needed)

### **Development Tools**

- **ESLint** - Code linting and style enforcement
- **TypeScript Compiler** - Type checking and compilation
- **Vite HMR** - Hot module replacement for fast development

## 📱 Responsive Design

LogScope is fully responsive and works seamlessly across:

- **Desktop** (1024px and above)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🎨 Theming

The application supports both **light** and **dark** themes:

- Toggle between themes using the theme switcher in the header
- Themes are persistent across browser sessions
- All components are theme-aware with smooth transitions

## 🔧 Configuration

### **Tailwind CSS Customization**

The `tailwind.config.ts` file includes custom animations and utilities:

```typescript
// Custom animations for landing page
keyframes: {
  'fade-in-up': { /* fade in with upward motion */ },
  'gradient-x': { /* gradient animation */ },
  'float': { /* floating animation */ },
  'glow': { /* glow effect */ }
}
```

### **TypeScript Configuration**

Strict TypeScript configuration with path aliases:

- `@/components/*` - Components directory
- `@/hooks/*` - Custom hooks directory
- `@/lib/*` - Utility functions

## 🚢 Deployment

### **Static Site Deployment**

LogScope can be deployed to any static hosting service:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3
   - Any static hosting service

### **Environment Setup**

No environment variables required for basic functionality. The app runs entirely in the browser.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### **Development Guidelines**

- Follow TypeScript best practices
- Use functional components with hooks
- Maintain component modularity
- Write meaningful commit messages
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Provide logs and screenshots** when reporting bugs

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible primitives
- **Tailwind CSS** for the utility-first styling approach
- **Vite** for the fast development experience
- **Lucide** for the icon library

---

**Made with ❤️ for developers who love clean, efficient log analysis**
