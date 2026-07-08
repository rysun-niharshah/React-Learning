import ProductCard from "../components/ui/ProductCard";

function ProductPage() {
  const handleBuy = (productName: string) => {
    alert(`You bought ${productName}`);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
      }}
    >
      <ProductCard
        title="iPhone 16"
        price={79999}
        image="https://placehold.net/main.svg"
        rating={4.8}
        inStock={true}
        onBuy={handleBuy}
      />

      <ProductCard
        title="Samsung S25"
        price={69999}
        image="https://placehold.net/main.svg"
        rating={4.6}
        inStock={false}
        onBuy={handleBuy}
      />

      <ProductCard
        title="iPhone 17"
        price={89999}
        image="https://placehold.net/main.svg"
        rating={4.8}
        inStock={true}
        onBuy={handleBuy}
      />

    </div>
  );
}

export default ProductPage;