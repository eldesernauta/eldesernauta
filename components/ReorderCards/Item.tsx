import * as React from "react";
import { useMotionValue, Reorder } from "framer-motion";

interface Props {
  item: string;
}

export const Item = ({ item }: Props) => {
  const x = useMotionValue(0);

  return (
    <Reorder.Item value={item} id={item} className="flex" style={{ x }}>
      <span className="w-[300px] h-[400px] mx-12 shadow-light rounded-[20px] bg-accent bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]">
        {item}
      </span>
    </Reorder.Item>
  );
};
