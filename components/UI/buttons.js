import router from "next/router";

export function FormSubmitBtn({ children, type, disabled }) {
  return (
    <button
      className="bg-slate-700 text-lg font-medium font-bold text-white w-96 rounded-lg h-12 my-2 hover:bg-slate-900 focus:outline-none"
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export function DashboardSidebarButton({ children, linkTo, highlight }) {
  return (
    <button
      className={`
        bg-transparent text-lg m-5 hover:text-white ${
          highlight ? "text-white" : "text-gray-400"
        } flex flex-col items-center gap-1`}
      onClick={() => router.push(linkTo)}
    >
      {children}
    </button>
  );
}

export function DashboardSelectionButton({ children, linkTo, highlight }) {
  return (
    <button
      className={`bg-transparent hover:text-gray-400   text-base-bold p-4 mr-2 ${
        highlight ? "text-black" : "text-gray-500"
      }`}
      onClick={() => router.push(linkTo)}
    >
      {children}
    </button>
  );
}
