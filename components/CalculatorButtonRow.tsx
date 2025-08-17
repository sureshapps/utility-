import React from "react";
import { View } from "react-native";
import CalculatorButton from "./CalculatorButton";

interface CalculatorButtonRowProps {
  buttons: string[];
  onButtonPress: (value: string) => void;
}

/**
 * Calculator button row component
 */
const CalculatorButtonRow: React.FC<CalculatorButtonRowProps> = ({ 
  buttons, 
  onButtonPress
}) => {
  return (
    <View className="flex-row justify-between mb-4">
      {buttons.map((button) => (
        <CalculatorButton
          key={button}
          value={button}
          onPress={onButtonPress}
        />
      ))}
    </View>
  );
};

export default CalculatorButtonRow; 