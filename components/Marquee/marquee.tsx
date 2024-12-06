export default function Marquee({
  items,
  bg,
}: {
  items: string[];
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
      <div className="animate-marquee whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span key={item} className="mx-12 text-4xl">
              {item}
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span
              key={item}
              className="mx-12 text-4xl font-base hover:font-bold"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
