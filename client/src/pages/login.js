import  { useState } from 'react';
import { useAuth } from '../AuthContext';
import {useNavigate,Link} from 'react-router-dom';
import axios from "axios";
export const img2 = "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg";


export default function Login(){
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");

   const{login}=useAuth();
   const navigate=useNavigate();
   
   async function handleLogin(){
   try{ 
    const res=await axios.post("https://fashion-sense-website.vercel.app/login",{email:email,password:password});

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
    minHeight: "100vh",
    backgroundImage: `url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <section
    style={{
      backgroundColor: "rgba(255,255,255,0.9)",
      padding: "4rem",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: "1.2rem",
      width: "320px",
    }}
  >
    <h1 style={{ marginBottom: "1rem" }}>Login</h1>

    <input
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
      style={{
        height: "36px",
        padding: "0 10px",
        fontSize: "14px",
      }}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      style={{
        height: "36px",
        padding: "0 10px",
        fontSize: "14px",
      }}
    />

    <button
      onClick={handleLogin}
      style={{
        height: "36px",
        background: "#000",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      Sign In
    </button>

    <p style={{ fontSize: "14px", marginTop: "10px" }}>
      Not a user?{" "}
      <Link
        to="/register"
        style={{ color: "#000", textDecoration: "underline" }}
      >
        Sign Up
      </Link>
    </p>
  </section>
</div>
  );

};