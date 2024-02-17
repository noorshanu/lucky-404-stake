import { twMerge } from "tailwind-merge";

function IconBox({ children, className }) {
  return (
    <div
      className={twMerge(
        "w-16 h-16 flex items-center justify-center rounded-md text-3xl mx-auto bg-primary/80 text-white",
        className
      )}
    >
      {children}
    </div>
  );
}

export default IconBox;
