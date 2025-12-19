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
    axios.get('https://fashion-sense-website.vercel.app/products')
      .then(response => {
        const sorted = response.data.data.sort((a, b) => b.id - a.id);
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
    <section
  style={{
    margin: "40px 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  }}
>
  <h1 style={{ fontSize: "32px", fontWeight: "500", marginBottom: "20px" }}>
    Search
  </h1>

  {/* 🔍 Search Box */}
  <Form.Control
    type="text"
    placeholder="Search for a product..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{
      maxWidth: "400px",
      margin: "0 auto",
      padding: "10px 12px",
      fontSize: "1rem",
      borderRadius: "4px",
      border: "1px solid #ccc",
    }}
  />

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2.5rem",
      marginTop: "20px",
    }}
  >
    {products.length > 0 ? (
      products.map((product) => (
        <Card
          key={product.id}
          style={{
            width: "18rem",
            border: "none",
            textAlign: "left",
          }}
        >
          <Card.Img
            variant="top"
            src={product.imageUrl}
            style={{ height: "320px", objectFit: "cover" }}
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
              style={{ fontSize: "14px" }}
            >
              Buy Now
            </Button>
          </Card.Body>
        </Card>
      ))
    ) : (
      <p style={{ fontSize: "16px", color: "#555" }}>No products found.</p>
    )}
  </div>
</section>

  );
}

export default Section;
