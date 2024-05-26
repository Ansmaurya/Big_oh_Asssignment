import React, { useState } from "react";
const AddProduct=()=>{
    const [uniqueId, setUniqueId]=useState('');
   
    const [title, settitle]=React.useState('');
    const [name, setName]=React.useState('');
    const [email, setEmail]=React.useState('');
    const[ phonenumber, setPhonenumber]=React.useState('');
    const[ isGraduate, setIsGraduate]=React.useState('');
    
    const [error, setError]=React.useState(false)

    const addProduct=async()=>{
        
        console.warn(!name);
        if(!uniqueId || !title || !name|| !email || !phonenumber || !isGraduate){
            setError(true)
        return false;
        }
        console.warn(uniqueId,title,name, email, phonenumber, isGraduate)
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result= await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({uniqueId,title, name, email, phonenumber, isGraduate}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result=await result.json();
        console.warn(result)
    }
    return (
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter uniqueid" className="inputBox" value={uniqueId} onChange={(e)=>{setUniqueId(e.target.value)}}/>
            {error && !uniqueId &&<span className="invalid-input">Enter uniqueId</span>}

            <input type="text" placeholder="Enter Title" className="inputBox" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            {error && !title &&<span className="invalid-input">Enter Title</span>}

            <input type="text" placeholder="Enter name" className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            {error && !name &&<span className="invalid-input">Enter valid name</span>}

            <input type="Email" placeholder="Enter Email"className="inputBox" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            {error && !email &&<span className="invalid-input">Enter valid email</span>}

            <input type="text" placeholder="Enter phone Number"className="inputBox" value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}/>
            {error && !phonenumber &&<span className="invalid-input">Enter valid Category</span>}

            <input type="text" placeholder="Enter Is Graduated Yes orr No"className="inputBox" value={isGraduate} onChange={(e)=>{setIsGraduate(e.target.value)}}/>
            {error && !isGraduate &&<span className="invalid-input">Enter valid Company</span>}

            <button onClick={addProduct} className="button"> Add Product</button>
        </div>
    )
}

export default AddProduct;
