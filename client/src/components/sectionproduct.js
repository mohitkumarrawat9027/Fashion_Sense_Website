import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

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
    <section
    style={{
      margin: "40px 0",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "32px",
        fontWeight: "500",
        marginBottom: "40px",
      }}
    >
      {subcategory.toUpperCase()}
    </h1>
  
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "3rem",
      }}
    >
      {products.map((product) => (
        <Card
          key={product._id}
          style={{
            width: "18rem",
            border: "none",
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
  
          <Card.Body style={{ textAlign: "left" }}>
            <Card.Title style={{ fontSize: "16px" }}>
              {product.title}
            </Card.Title>
  
            <Card.Text
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              {product.description}
            </Card.Text>
  
            <Card.Text style={{ fontWeight: "500" }}>
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