export function ErrorSpan({ children }) {
  return <span className=" red  text-base-bold  ml-3">{children}</span>;
}

export function ErrorParagraph({ children }) {
  return (
    <p className="text-red-500 font-bold text-center mb-4 break-words">
      {children}
    </p>
  );
}

export function ShowError({ error, message }) {
  return (
    <>
      {error !== null ? (
        <ErrorParagraph>{message ? message : error.message}</ErrorParagraph>
      ) : null}
    </>
  );
}
