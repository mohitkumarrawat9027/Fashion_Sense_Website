import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; // ✅ For search input
import axios from 'axios';

function Section() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fashion-sense-website-991cq296d-mohit-kumar-rawats-projects.vercel.app/products')
      .then(response => {
        const sorted = response.data.sort((a, b) => b.id - a.id);
        const latest = sorted;
        setProducts(latest);
        setAllProducts(sorted); // ✅ Keep all products for searching
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      // If search box is empty, show latest 8
      setProducts(allProducts);
    } else {
      // Filter products by title or description (case insensitive)
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtered);
    }
  }, [searchTerm, allProducts]);

  return (
    <section style={{
      height: "auto",
      display: 'flex',
      flexDirection: "column",
      gap: "3rem",
      justifyContent: "center",
      textAlign: "center",
      marginTop: "30px",
      marginBottom: "30px"
    }}>
      <h1>Search</h1>

      {/* 🔍 Search Box */}
      <Form.Control
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "10px",
          fontSize: "1rem"
        }}
      />

      <div style={{
        height: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: "3rem",
        justifyContent: "center"
      }}>
        {products.length > 0 ? (
          products.map(product => (
            <Card key={product.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>{product.price}</strong></Card.Text>
                <Button variant="primary" href={product.buyLink} target="_blank">Buy Now</Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  );
}

export default Section;
