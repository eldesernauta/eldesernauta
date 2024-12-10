import Image from "next/image";

export default function Marquee({
  items,
  bg,
}: {
  items: string[]; // URLs de las imágenes
  bg: string;
}) {
  return (
    <div
      className={`relative flex w-full max-w-full overflow-x-hidden ${
        bg === "bg-light"
          ? "bg-light text-dark border-t border-neutral-100"
          : "bg-dark text-light"
      }`}
    >
      {/* Primera fila animada */}
      <div className="animate-marquee whitespace-nowrap py-12 flex items-center">
        {items.map((item, index) => (
          <span key={index} className="mx-6 w-full max-w-[200px]">
            <Image
              src={item}
              alt={`Marquee item ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain"
            />
          </span>
        ))}
      </div>

      {/* Segunda fila animada */}
      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12 flex items-center">
        {items.map((item, index) => (
          <span key={`copy-${index}`} className="mx-6 w-full max-w-[200px]">
            <Image
              src={item}
              alt={`Marquee item ${index + 1} copy`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
