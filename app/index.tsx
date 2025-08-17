import CalculatorButtonRow from "@/components/CalculatorButtonRow";
import CalculatorDisplay from "@/components/CalculatorDisplay";
import React, { useRef, useState } from "react";
import { Animated, View, useColorScheme } from "react-native";

// Calculator button configuration
const buttons = [
  ["C", "(", ")", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "%", "="]
];

// Helper function to safely evaluate expressions
function safeEval(expr: string): string {
  try {
    // Replace percent with division by 100
    const sanitized = expr.replace(/%/g, "/100");
    const result = eval(sanitized);
    if (typeof result === "number" && !isNaN(result)) {
      return result.toString();
    }
    return "Error";
  } catch {
    return "Error";
  }
}

/**
 * Main application screen - Calculator
 * This screen serves as a container for the Calculator component
 */
const Calculator: React.FC = () => {
  // State for the current input and result
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  
  // Animation values for display effects
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  
  // Detect system color scheme
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Animate display when input changes
  const animateInputChange = () => {
    // Fade out current display
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.7,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Animate result display
  const animateResult = () => {
    // Scale and slide animation for result
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1.05,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -5,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Reset animations
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  // Handle button press logic
  const handlePress = (value: string) => {
    if (value === "C") {
      setInput("");
      setResult("");
      animateInputChange();
    } else if (value === "=") {
      const evalResult = safeEval(input);
      setResult(evalResult);
      animateResult();
    } else {
      setInput((prev) => prev + value);
      setResult("");
      animateInputChange();
    }
  };

  // Tailwind classes for light/dark mode
  const bgMain = isDark ? "bg-zinc-900" : "bg-zinc-100";

  return (
    <View className={`flex-1 ${bgMain} justify-end p-4`}>
      {/* Calculator display with animations */}
      <CalculatorDisplay 
        input={input} 
        result={result} 
        fadeAnim={fadeAnim}
        slideAnim={slideAnim}
        scaleAnim={scaleAnim}
      />
      
      {/* Calculator buttons */}
      <View className="mb-2">
        {buttons.map((row, rowIndex) => (
          <CalculatorButtonRow
            key={rowIndex}
            buttons={row}
            onButtonPress={handlePress}
          />
        ))}
      </View>
    </View>
  );
};

export default Calculator;