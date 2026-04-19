import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Browse() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <div>
      {items.map(item => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}
