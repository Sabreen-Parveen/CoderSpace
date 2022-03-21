export function FormSubmitBtn({ children, type, disabled }) {
  return (
    <button className="form-button" disabled={disabled} type={type}>
      {children}
    </button>
  );
}
