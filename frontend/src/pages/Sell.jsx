export default function Sell() {
  const submit = async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    alert("Item posted");
  };

  return (
    <form onSubmit={submit}>
      <input name="title" placeholder="Item name" />
      <input name="price" placeholder="Price" />
      <input name="college" placeholder="College" />
      <input name="whatsapp" placeholder="WhatsApp" />
      <button>Post Item</button>
    </form>
  );
}
