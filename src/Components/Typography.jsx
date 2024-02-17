import { twMerge } from "tailwind-merge";

const Typography = {
  threeXl: ({ className, children }) => (
    <p className={twMerge("text-2xl lg:text-3xl", className)}>{children}</p>
  ),
  twoXl: ({ className, children }) => (
    <p className={twMerge("text-2xl", className)}>{children}</p>
  ),
  xl: ({ className, children }) => (
    <p className={twMerge("text-lg lg:text-xl", className)}>{children}</p>
  ),
  lg: ({ className, children }) => (
    <p className={twMerge("text-lg", className)}>{children}</p>
  ),
  base: ({ className, children }) => (
    <p className={twMerge("text-base", className)}>{children}</p>
  ),
  sm: ({ className, children }) => (
    <p className={twMerge("text-sm", className)}>{children}</p>
  ),
};

export default Typography;
