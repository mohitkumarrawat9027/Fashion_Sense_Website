// src/components/ProductSection.js
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Section() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fashion-sense-website.vercel.app/products', { params: { category: 'bottomwear'} })
      .then(response => {
        console.log('Filtered products:', response.data);
        setProducts(response.data.data || response.data || []);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // runs once on mount

  return (
    <section
  style={{
    margin: "40px 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  }}
>
  <h1
    style={{
      fontSize: "32px",
      fontWeight: "500",
      marginBottom: "20px",
    }}
  >
    Latest BottomWear
  </h1>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2.5rem",
    }}
  >
    {products.map((product) => (
      <Card
        key={product._id}
        style={{
          width: "18rem",
          border: "none",
          textAlign: "left",
        }}
      >
        <Card.Img
          variant="top"
          src={product.imageUrl}
          style={{
            height: "320px",
            objectFit: "cover",
          }}
        />

        <Card.Body>
          <Card.Title style={{ fontSize: "16px", marginBottom: "6px" }}>
            {product.title}
          </Card.Title>

          <Card.Text style={{ fontSize: "14px", color: "#666", marginBottom: "6px" }}>
            {product.description}
          </Card.Text>

          <Card.Text style={{ fontWeight: "500", marginBottom: "8px" }}>
            {product.price}
          </Card.Text>

          <Button
            variant="dark"
            href={product.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
</section>
  );
}

export default Section;


