import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const isLoading = false;

  const handleChange = (index, value) => {
    // Only allow numeric input
    if (/[^0-9]/.test(value)) return;

    const newCode = [...code];

    // Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");  // Split pasted value
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";  // Assign pasted digits
      }
      setCode(newCode);

      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    alert(`verification code submitted: ${verificationCode}`);
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);  // Limit pasted data to 6 characters
    const newCode = pastedData.split("").map((char) => (/\d/.test(char) ? char : ""));
    setCode(newCode);
    const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
    const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
    inputRefs.current[focusIndex].focus();
  };

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className="max-w-md w-full bg-white/10 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 bg-opacity-50 backdrop-filter backdrop-blur-l rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-700 to-emerald-500 text-transparent bg-clip-text">
          Verify Your Email
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Enter the 6-digit code sent to your email address.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}  // Handle paste event
                className="w-12 h-12 text-center text-2xl font-bold bg-gray-200 text-gray-700 border-2 border-gray-400 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading || code.some((digit) => !digit)}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-700 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-emerald-700 
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-900 transition duration-200"
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default EmailVerificationPage;
