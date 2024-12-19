"use client";

import { ClassValue } from "clsx";
import { ChevronDown } from "lucide-react";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

type Props = {
  className?: ClassValue;
  question: string;
  answer: string;
  isActive: boolean; // Define si este acordeón está activo
  onToggle: () => void; // Función para alternar este acordeón
};

export default function Accordion({
  question,
  answer,
  className,
  isActive,
  onToggle,
}: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      data-state={isActive ? "open" : "closed"}
      className="w-full group rounded-xl hover:shadow-dark overflow-x-hidden border-2 border-dark dark:border-darkBorder shadow-dark dark:shadow-dark"
    >
      <button
        role="button"
        aria-expanded={isActive}
        className={cn(
          "flex w-full items-center text-lg transition-[border-radius] justify-between border-b-0 group-data-[state=open]:border-b-2 border-b-border dark:border-b-darkBorder bg-main p-4 md:p-5 font-heading",
          className
        )}
        onClick={onToggle}
      >
        {question}
        <ChevronDown className="sm:ml-4 ml-3 sm:min-h-[24px] sm:min-w-[24px] group-data-[state=open]:rotate-180 group-data-[state=closed]:0 min-h-[18px] min-w-[18px] transition-transform ease-in-out" />
      </button>
      <div
        ref={contentRef}
        style={{
          height: isActive ? `${contentRef.current?.scrollHeight}px` : "0",
        }}
        className="overflow-hidden rounded-b-base bg-white dark:bg-secondaryBlack font-base transition-[height] ease-in-out"
      >
        <p className="p-4 md:p-5 text-lg leading-relaxed md:leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
