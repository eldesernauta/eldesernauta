type Props = {
  width: "";
  children: React.ReactNode;
};

export default function Card({ width, children }: Props) {
  return (
    <figure
      className={`${width} h-auto p-8 pb-12 rounded-xl overflow-hidden rounded-base border-2 border-dark dark:border-darkBorder bg-main font-base shadow-dark dark:shadow-dark`}
    >
      <figcaption>{children}</figcaption>
    </figure>
  );
}
