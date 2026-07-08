type ProductCardProps = {
  title: string;
  price: number;
  image: string;
  rating: number;
  inStock: boolean;
  onBuy: (productName: string) => void;
};

function ProductCard({
  title,
  price,
  image,
  rating,
  inStock,
  onBuy,
}: ProductCardProps) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "12px" }}
      />

      <h2>{title}</h2>

      <p>
        <strong>₹{price}</strong>
      </p>

      <p>⭐ {rating}</p>

      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        disabled={!inStock}
        onClick={() => onBuy(title)}
        className={`mt-4 px-4 py-2 rounded ${inStock ? "bg-blue-500 text-white cursor-pointer" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}
      >
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;