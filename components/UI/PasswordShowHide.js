import { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function PasswordShowHide({ field }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center">
      <input
        className="w-full  form-input  form-input-focus"
        type={showPassword ? "text" : "password"}
        {...field}
      />
      <button
        className="ml-3 text-green"
        onClick={() => setShowPassword((v) => !v)}
      >
        <FaEye />
      </button>
    </div>
  );
}
