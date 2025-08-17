import React from "react";
import { motion } from "framer-motion";

interface CalculatorDisplayProps {
  input: string;
  result: string;
  operator?: string | null; // optional, in case you want to show ongoing operation
}

/**
 * Calculator display component with framer-motion animations
 */
const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({
  input,
  result,
  operator,
}) => {
  const formatValue = (val: string | number) => {
    if (typeof val === "number") return Number.isInteger(val) ? val : val.toString();
    return val || "0";
  };

  return (
    <div className="p-6 h-28 bg-slate-200 dark:bg-[#333] rounded-t-2xl border-b border-slate-200/50 dark:border-[#333]">
      <div className="text-right">
        {/* Small operator line (like 12 +) */}
        {operator && (
          <motion.div
            className="text-slate-500 dark:text-[#888] text-sm h-6 mb-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {operator}
          </motion.div>
        )}

        {/* Main input/result */}
        <motion.div
          key={input}
          className="text-3xl font-bold text-slate-800 dark:text-white min-h-[2.5rem] flex items-center justify-end"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {formatValue(input)}
        </motion.div>

        {/* Result line */}
        {result && (
          <motion.div
            key={result}
            className="text-2xl font-semibold text-green-600 dark:text-green-400 mt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {formatValue(result)}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CalculatorDisplay;
