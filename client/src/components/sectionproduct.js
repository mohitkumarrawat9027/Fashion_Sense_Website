import { useEffect, useState } from 'react';
import axios from 'axios';
import './styling/Sectionproduct.css';

function Section({category, subcategory}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fashion-sense-website.vercel.app/products', { params: {category, subcategory} })
      .then(response => {
        console.log('Filtered products:', response.data);
        setProducts(response.data.data || response.data || []);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [category, subcategory]); // runs once on mount

  return (
    <section className="luxury-collection">
    <h1 className="collection-title">{subcategory}</h1>

    <div className="product-grid">
      {products.map((product) => (
        <article key={product._id} className="luxury-card">
          <div className="image-wrap">
            <img
              src={product.imageUrl}
              alt={product.title}
              loading="lazy"
            />
          </div>

          <div className="card-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="description">{product.description}</p>
            <span className="price">{product.price}</span>

            <a
              href={product.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-link"
            >
              Buy Now
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
  
  );
}

export default Section;