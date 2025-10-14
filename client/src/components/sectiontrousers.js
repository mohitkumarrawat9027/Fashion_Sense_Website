import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Section() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fashion-sense-website.vercel.app/products', { params: { category: 'bottomwear',subcategory:'trousers'} })
      .then(response => {
        console.log('Filtered products:', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // runs once on mount

  return (
    <section style={{
      height: "auto",
      display: 'flex',
      flexDirection: "column",
      gap: "5rem",
      justifyContent: "center",
      textAlign: "center",
      marginTop: "30px",
      marginBottom: "30px"
    }}>
      <h1>Trousers</h1>
      <div style={{
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: "3rem",
        justifyContent: "center"
      }}>
        {products.map(product => (
          <Card key={product._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text><strong>{product.price}</strong></Card.Text>
              <Button variant="primary" href={product.buyLink} target="_blank" rel="noopener noreferrer">Buy Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Section;