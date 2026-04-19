import { useState } from "react";
import ContactModal from "./ContactModal";

export default function ItemCard({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>
      <button onClick={() => setOpen(true)}>Contact Seller</button>
      {open && <ContactModal item={item} onClose={() => setOpen(false)} />}
    </div>
  );
}
