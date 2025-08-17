import React from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";

interface CalculatorButtonProps {
  value: string;
  onPress: (value: string) => void;
}

/**
 * Individual calculator button component
 */
const CalculatorButton: React.FC<CalculatorButtonProps> = ({ value, onPress }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // Determine button styling based on value
  const getButtonStyle = () => {
    if (["+", "-", "*", "/", "%"].includes(value)) {
      return "bg-blue-500";
    }
    if (value === "=") {
      return "bg-green-400";
    }
    if (value === "C") {
      return "bg-red-500";
    }
    return isDark ? "bg-zinc-800" : "bg-zinc-200";
  };

  const getTextStyle = () => {
    return isDark ? "text-white" : "text-zinc-900";
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 6 }}>
      <TouchableOpacity
        className={`rounded-xl py-5 items-center justify-center shadow ${getButtonStyle()}`}
        onPress={() => onPress(value)}
        accessibilityLabel={`calculator-button-${value}`}
        activeOpacity={0.7}
      >
        <Text className={`text-lg font-medium ${getTextStyle()}`}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalculatorButton; 