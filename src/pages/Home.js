import { useEffect, useState } from "react";
import { getAllProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const { query } = useContext(SearchContext);
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  console.log("products=======>", products);

  useEffect(() => {
    getAllProducts().then((res) => setProducts(res.data));
  }, []);
  let sortedProducts = [...filteredProducts];
  if (sortOption === "asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div className="mb-3 d-flex justify-content-end">
        <select
          className="form-select w-auto"
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="container mt-4">
        <h2 className="mb-4">All Products</h2>
        <div className="row">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
