import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { motion } from "framer-motion";

interface CalculatorButtonProps {
  value: string;
  type?: "number" | "operator" | "equals" | "clear" | "function";
  span?: number;
  onPress: (value: string) => void;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  value,
  type = "number",
  span,
  onPress,
}) => {
  const base =
    "h-16 rounded-2xl font-semibold text-lg backdrop-blur-sm transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-lg hover:shadow-xl";
  const styles = {
    function:
      "bg-slate-200/90 dark:bg-[#333]/80 hover:bg-slate-300/90 dark:hover:bg-[#444] text-slate-700 dark:text-[#bdbdbd] border border-slate-200/50 dark:border-[#555]",
    operator:
      "bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 text-slate-800 dark:text-white border border-blue-500/30",
    number:
      "bg-slate-200/90 dark:bg-[#333]/80 hover:bg-slate-300/90 dark:hover:bg-[#444] text-slate-700 dark:text-[#bdbdbd] border border-slate-200/50 dark:border-[#555]",
    equals:
      "bg-gradient-to-r from-blue-500/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-600/30 text-slate-800 dark:text-white border border-blue-500/30",
    clear:
      "bg-red-500/20 hover:bg-red-500/30 text-red-600 dark:text-red-400 border border-red-500/30",
    zero:
      "bg-slate-100/80 dark:bg-[#333]/80 hover:bg-slate-200/80 dark:hover:bg-[#444] text-slate-700 dark:text-[#bdbdbd] border border-slate-200/50 dark:border-[#555]",
  };

  const motionVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <View style={{ flex: span === 2 ? 2 : 1, marginHorizontal: 6 }}>
      <motion.button
        onClick={() => onPress(value)}
        className={`${styles[type] || styles.number} ${base} ${
          span === 2 ? "col-span-2" : ""
        }`}
        variants={motionVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Text className="text-lg font-medium">{value}</Text>
      </motion.button>
    </View>
  );
};

export default CalculatorButton;
