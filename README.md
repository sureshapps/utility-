# Modern Calculator App 📱🧮

A beautiful, modern calculator application built with **Expo** and **React Native**, featuring a sleek UI with **NativeWind** styling, **light/dark mode** support, and **professional animations**.

![Calculator App](https://img.shields.io/badge/React%20Native-0.79.5-blue?style=for-the-badge&logo=react)
![Expo](https://img.shields.io/badge/Expo-53.0.20-black?style=for-the-badge&logo=expo)
![NativeWind](https://img.shields.io/badge/NativeWind-4.1.23-green?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)

## ✨ Features

- **Modern UI/UX**: Clean, professional design with glassmorphism effects
- **Light/Dark Mode**: Automatic theme switching based on system preferences
- **Professional Animations**: Smooth fade, scale, and slide animations for display
- **Advanced Calculator Functions**: Basic operations, percentages, parentheses support
- **Responsive Design**: Optimized for all screen sizes and orientations
- **NativeWind Styling**: Utility-first CSS framework for React Native
- **TypeScript**: Full type safety and better development experience
- **Modular Architecture**: Clean, maintainable component structure

## 🛠️ Tech Stack

- **Framework**: React Native 0.79.5
- **Development Platform**: Expo 53.0.20
- **Styling**: NativeWind 4.1.23 (Tailwind CSS for React Native)
- **Language**: TypeScript 5.8.3
- **Navigation**: Expo Router
- **Icons**: Expo Vector Icons (FontAwesome)
- **Animations**: React Native Animated API

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mhyar-nsi/react-native-calculator.git
   cd calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on your preferred platform**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## 📱 Usage

The calculator provides a comprehensive set of mathematical operations:

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (*), Division (/)
- **Advanced Features**: Percentages (%), Parentheses support
- **Special Functions**: Clear (C), Decimal points (.)
- **Professional Display**: Animated input and result display

### Calculator Functions

| Function | Description |
|----------|-------------|
| `C` | Clear all input and results |
| `( )` | Parentheses for complex expressions |
| `%` | Calculate percentages |
| `=` | Evaluate the expression |
| `.` | Decimal point for floating numbers |

## 🏗️ Project Structure

```
calculator/
├── app/
│   ├── _layout.tsx          # Root layout configuration
│   └── index.tsx            # Main calculator screen
├── components/
│   ├── CalculatorButton.tsx     # Individual button component
│   ├── CalculatorButtonRow.tsx  # Button row component
│   └── CalculatorDisplay.tsx    # Display component
├── assets/
│   ├── fonts/              # Custom fonts
│   └── images/             # App icons and images
├── global.css              # NativeWind global styles
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design Features

### Modern UI Elements
- **Glassmorphism Effects**: Translucent backgrounds with blur effects
- **Smooth Animations**: Professional fade, scale, and slide transitions
- **Responsive Layout**: Adapts to different screen sizes
- **Accessibility**: Full accessibility support with proper labels

### Theme Support
- **Automatic Detection**: Switches themes based on system preferences
- **Consistent Styling**: Unified design language across light and dark modes
- **Color Harmony**: Carefully chosen color palettes for both themes

## 🔧 Development

### Available Scripts

```bash
npm start          # Start Expo development server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run on web browser
npm run lint       # Run ESLint for code quality
```

### Code Quality

This project follows modern React Native development practices:
- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Modular Components**: Reusable and maintainable code structure
- **Clean Architecture**: Separation of concerns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Expo Team**: For the amazing development platform
- **NativeWind**: For bringing Tailwind CSS to React Native
- **React Native Community**: For the excellent ecosystem

## 📞 Contact

- **Website**: [https://mhyar.ir/calculator](https://mhyar.ir/calculator)
- **GitHub**: [@mhyar-nsi](https://github.com/mhyar-nsi)

---

⭐ **Star this repository if you found it helpful!**
