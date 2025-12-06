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
        backgroundImage:`url(${img2})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}
    >
      <section style={{padding:"17rem",paddingTop:"17rem",paddingBottom:"5rem",alignItems:"center",display:'flex',flexDirection:'column',gap:'2rem'}}>
      <h1>Login</h1>
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} style={{width:"20rem",height:"25px"}}/><br />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} style={{width:"20rem",height:"25px"}}/><br />

        <button onClick={handleLogin} style={{ width:"5rem", height:"25px" }}>
          Sign Up
        </button>
      </section>
    </div>
  );

};