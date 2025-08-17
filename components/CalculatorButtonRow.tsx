import React from "react";
import { View } from "react-native";
import CalculatorButton from "./CalculatorButton";

interface ButtonConfig {
  value: string;
  type?: "number" | "operator" | "equals" | "clear" | "function";
  span?: number;
}

interface CalculatorButtonRowProps {
  buttons: ButtonConfig[];
  onButtonPress: (value: string) => void;
}

/**
 * Calculator button row component
 */
const CalculatorButtonRow: React.FC<CalculatorButtonRowProps> = ({
  buttons,
  onButtonPress,
}) => {
  return (
    <View className="flex-row justify-between mb-4">
      {buttons.map((button) => (
        <CalculatorButton
          key={button.value}
          value={button.value}
          type={button.type}
          span={button.span}
          onPress={onButtonPress}
        />
      ))}
    </View>
  );
};

export default CalculatorButtonRow;
