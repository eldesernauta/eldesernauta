import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";
import Button from "../Button/button";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese"];

export default function ReorderCards() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="x"
      onReorder={setItems}
      values={items}
      className="flex"
    >
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}

const Item1 = () => {
  return (
    <>
      <h3 className="text-3xl font-Wobblezz font-bold mb-2"></h3>
      <p className="text-sm mb-4">lorem ipsum set amet consectetur lalala</p>
      <Button
        className="px-4 py-2 rounded-full bg-primary hover:bg-secondary transition"
        onClick={() => window.open("https://example.com/tomato", "_blank")}
      >
        Learn More
      </Button>
    </>
  );
};

const Item2 = () => {
  return (
    <>
      <h3 className="text-3xl font-Wobblezz font-bold mb-2"></h3>
      <p className="text-sm mb-4">lorem ipsum set amet consectetur lalala</p>
      <Button
        className="px-4 py-2 rounded-full bg-primary hover:bg-secondary transition"
        onClick={() => window.open("https://example.com/tomato", "_blank")}
      >
        Learn More
      </Button>
    </>
  );
};

const Item3 = () => {
  return (
    <>
      <h3 className="text-3xl font-Wobblezz font-bold mb-2"></h3>
      <p className="text-sm mb-4">lorem ipsum set amet consectetur lalala</p>
      <Button
        className="px-4 py-2 rounded-full bg-primary hover:bg-secondary transition"
        onClick={() => window.open("https://example.com/tomato", "_blank")}
      >
        Learn More
      </Button>
    </>
  );
};
