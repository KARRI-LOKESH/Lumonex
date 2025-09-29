import { Link } from "react-router-dom";
import "../styles/Products.css";
import ledImg from "../assets/products/ledimg1.jpg";
import smartImg from "../assets/products/smartimg.jpg";
import industrialImg from "../assets/products/industrialimg.jpg";

const productsData = [
  { 
    id: "led-lights", 
    img: ledImg, 
    title: "LIGHTING", 
    desc: "Energy-efficient and long-lasting LED lights for every application." 
  },
  { 
    id: "poles", // Changed from "smart-lighting" to "poles"
    img: smartImg, 
    title: "POLES", 
    desc: "Durable lighting poles and masts designed for outdoor installations." 
  },
  { 
    id: "drivers", // Changed from "industrial-lights" to "drivers"
    img: industrialImg, 
    title: "DRIVERS", 
    desc: "High-performance power supplies for LED systems and fixtures." 
  },
];

const Products = () => {
  return (
    <section id="products" className="products-section">
      <h2 className="products-heading">Our Products</h2>
      <div className="products-grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.desc}</p>
            <Link to={`/products/${product.id}`} className="product-button">
              View More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;