import { ClassValue } from "clsx";
import { useCursor } from "../../context/CursorContext";
import { cn } from "../../lib/utils";

type Props = {
  className?: ClassValue;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ className, children, onClick }: Props) {
  const { setCursorText, setCursorVariant } = useCursor();

  function linkEnter() {
    setCursorText("");
    setCursorVariant("hoverable");
  }

  function linkLeave() {
    setCursorText("");
    setCursorVariant("default");
  }
  return (
    <button
      role="button"
      onMouseEnter={linkEnter}
      onMouseLeave={linkLeave}
      aria-label="Click to perform an action"
      onClick={onClick}
      className={cn(
        "flex text-text cursor-none items-center rounded-full border-2 border-border bg-main px-12 py-4 font-bold uppercase shadow-light dark:shadow-dark transition-all duration-300 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none",
        className
      )}
    >
      {children}
    </button>
  );
}
