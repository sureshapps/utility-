import React from "react";
import { Animated, ScrollView, Text, useColorScheme } from "react-native";

interface CalculatorDisplayProps {
  input: string;
  result: string;
  fadeAnim: Animated.Value;
  slideAnim: Animated.Value;
  scaleAnim: Animated.Value;
}

/**
 * Calculator display component showing input and result with professional animations
 */
const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ 
  input, 
  result, 
  fadeAnim, 
  slideAnim, 
  scaleAnim 
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Tailwind classes for light/dark mode
  const bgDisplay = isDark ? "bg-zinc-800" : "bg-white";
  const textInput = isDark ? "text-white" : "text-zinc-900";
  const textResult = isDark ? "text-green-400" : "text-green-600";

  return (
    <Animated.View
      className={`min-h-[120px] ${bgDisplay} rounded-2xl mb-6 p-4 justify-center items-end shadow-lg`}
      style={{
        opacity: fadeAnim,
        transform: [
          { translateY: slideAnim },
          { scale: scaleAnim }
        ]
      }}
    >
      <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}>
        <Text className={`text-2xl md:text-3xl font-normal text-right flex-shrink ${textInput}`}>
          {input || "0"}
        </Text>
      </ScrollView>
      <Text className={`text-2xl md:text-3xl font-bold mt-2 text-right ${textResult}`}>
        {result}
      </Text>
    </Animated.View>
  );
};

export default CalculatorDisplay; 