import { useState } from "react";

{
  /* items and heading are set in App.tsx and passed here, use string[] for passing string arrays and string for strings*/
}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              //   console.log("index", index);
              //   console.log(item);
              setSelectedIndex(index);
              // calling handleSelectItem(item: string) function in App.tsx via onSelectItem prop to show selected prop
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
