import React, { useEffect ,useState} from "react";
import{useParams, useNavigate} from "react-router-dom"

const UpdateProduct=()=>{
   
    const [uniqueId, setUniqueId]=useState('');
   
    const [title, settitle]=React.useState('');
    const [name, setName]=React.useState('');
    const [email, setEmail]=React.useState('');
    const[ phonenumber, setPhonenumber]=React.useState('');
    const[ isGraduate, setIsGraduate]=React.useState('');
    
    const params=useParams();
    const navigate=useNavigate();
    
    useEffect(()=>{
        getProductDeatails();
    },[])

    const getProductDeatails=async ()=>{
        console.warn(params)
        let result=await fetch(`http://localhost:5000/products/${params.id}`)
        result= await result.json();
        setUniqueId(result.uniqueId)
        settitle(result.title)
        setName(result.name)
        setEmail(result.email)
        setPhonenumber(result.phonenumber)
        setIsGraduate(result.isGraduate)
        
    }
    const updateProduct=async()=>{
        console.warn(uniqueId,title,name, email, phonenumber, isGraduate)
        let result= await fetch(`http://localhost:5000/products/${params.id}`,{
            method:'Put',
            body:JSON.stringify({uniqueId,title,name, email, phonenumber, isGraduate}),
            headers:{
                'Content-Type':"application/json"
            }
        });
      result= await result.json();
      console.warn(result)
      navigate("/")
    }
    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Uidia" className="inputBox" value={uniqueId} onChange={(e)=>{setUniqueId(e.target.value)}}/>
            <input type="text" placeholder="Enter Title" className="inputBox" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
            <input type="text" placeholder="Enter Name"className="inputBox" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="email" placeholder="Enter email"className="inputBox" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="text" placeholder="Enter Phone Number"className="inputBox" value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}/>
            <input type="text" placeholder="Enter Is Graduate"className="inputBox" value={isGraduate} onChange={(e)=>{setIsGraduate(e.target.value)}}/>
            <button onClick={updateProduct} className="button"> Update Product</button>
        </div>
    )
}

export default UpdateProduct;
