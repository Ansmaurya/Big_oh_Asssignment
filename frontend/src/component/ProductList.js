import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        getProducts();
    },[])
    const getProducts=async()=>{
       let result = await fetch('http://localhost:5000/products');
       result= await result.json();
       setProducts(result);
    }
const deleteProduct = async (id)=>{
    let result =await fetch(`http://localhost:5000/products/${id}`,{
        method:"Delete"
    });
    result= await result.json()
    if(result)
    {
        alert("rcord is deleted")
    }
}
const searchandle=async (event)=>{
   
    let key=event.target.value
    if(key){
    let result=await fetch(`http://localhost:5000/search/${key}`);
    result=await result.json();
    if(result){
        setProducts(result)
    }
    }
    else{
        getProducts()
    }

}
    return (
        <div className="products-list">
            <h3>User List</h3>
            <input className="search" type="text" placeholder="Search product" onChange={searchandle}/>
            <ul>
                <li>uniqueId</li>
                <li>Title</li>
                <li>Name</li>
                <li>Email</li>
                <li>Phone Number</li>
                <li>Is Graduate</li>
                

            </ul>
        {
           products.length ?( Array.isArray(products) && products.map((item, index)=>
            <ul >
            <li>{item.uniqueId}</li>
            <li>{item.title}</li>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <li>{item.phonenumber}</li>
            <li>{item.isGraduate}</li>
            <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
            <Link to={"/update/"+item._id}>Update</Link>
            </li>
        </ul>
            )
            ):<h1>No Result Found</h1>
        }
        </div>
    )
}

export default ProductList;