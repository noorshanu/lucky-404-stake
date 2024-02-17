import { twMerge } from "tailwind-merge";

function Paper({ children, className }) {
  return (
    <div
      className={twMerge(
        "bg-primary-dark/80 border-2 border-red py-5 px-7 rounded-2xl shadow-lg shadow-black/20",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Paper;
