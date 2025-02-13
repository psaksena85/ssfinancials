import "./products.scss";

function Products() {
  const products = [
    { id: 1, name: "Life Insurance", description: "Protect your loved ones with our comprehensive life insurance plans." },
    { id: 2, name: "Retirement Plans", description: "Secure your future with customized retirement plans tailored for you." },
    { id: 3, name: "Indexed Universal Life (IUL)", description: "Grow and protect your wealth with tax advantages using IUL." },
    { id: 4, name: "Trust Services", description: "Plan your legacy and ensure your assets are distributed as per your wishes." }
  ];

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
