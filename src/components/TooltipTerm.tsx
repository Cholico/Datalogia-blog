import { ReactNode } from "react";

interface TooltipTermProps {
  children: ReactNode;
  definition: string;
}

function TooltipTerm({ children, definition }: TooltipTermProps) {
  return (
    <span className="group relative cursor-help">
      {children}
      <span className="absolute z-10 hidden group-hover:block bottom-full mb-2 bg-gray-800 text-white text-xs p-2 rounded w-56">
        {definition}
      </span>
    </span>
  );
}

export default TooltipTerm;
