export default function ContactModal({ item, onClose }) {
  const goToWhatsApp = () => {
    fetch(`http://localhost:5000/api/items/${item._id}/contact`, {
      method: "POST"
    });

    window.open(
      `https://wa.me/91${item.whatsapp}?text=Hi, I saw your item on SwapCircle. Is it available?`,
      "_blank"
    );
  };

  return (
    <div>
      <h3>Contact Seller</h3>
      <p>No delivery. No middleman.</p>
      <button onClick={goToWhatsApp}>Continue to WhatsApp</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
