export default function FormValidationError({ children, center = false }) {
  return (
    <div
      className={`text-red-500 font-bold text-xs italic ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </div>
  );
}
