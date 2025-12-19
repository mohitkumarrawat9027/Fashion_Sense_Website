import  { useState } from 'react';
import { useAuth } from '../AuthContext';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
export const img2 = "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg";


export default function Register(){
   const [email,setEmail]=useState(null);
   const [password,setPassword]=useState(null);

   const{login}=useAuth();
   const navigate=useNavigate();
   
   async function handleLogin(){
   try{ 
    const res=await axios.post("https://fashion-sense-website.vercel.app/register",{email:email,password:password});

    if(res && res.data && res.data.token)
      {
        login(res.data.token);
        navigate("/");
      }
      else
      alert("Some Error Occured");
   }
   catch(err) {
    alert(err.response?.data?.message || err.message);
  }
  
}
return (
  <div
  style={{
    backgroundImage: `url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem 0",
  }}
>
  <section
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      padding: "3rem 2rem",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
      minWidth: "320px",
    }}
  >
    <h1 style={{ fontSize: "28px", fontWeight: "600" }}>Register</h1>

    <input
      type="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      style={{
        width: "100%",
        maxWidth: "300px",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "14px",
      }}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      style={{
        width: "100%",
        maxWidth: "300px",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "14px",
      }}
    />

    <button
      onClick={handleLogin}
      style={{
        width: "120px",
        padding: "10px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#333",
        color: "#fff",
        fontWeight: "500",
        cursor: "pointer",
      }}
    >
      Sign Up
    </button>
  </section>
</div>
  );

};