import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const UpdateSupplire = () => {

  let param=useParams()
  let [table,tableSet]=useState([])
  useEffect(()=>{
fetch('https://northwind.vercel.app/api/suppliers')
  .then((Promise)=>{
    return Promise.json()
    })
    .then((Promise)=>{
      tableSet(Promise)
    })
  },[param]);
let[addData,setAddData]=useState({
  id:param,
  conpaniName:"",
  contactName:"",
  contactTitle:"",
  address:{
    street:"",
    city:"",
    region:"",
    postalCode:"",
    country:"",
    phone:""
  }
})

 let updateData=(e)=>{
  e.preventDefault()
  fetch(`https://northwind.vercel.app/api/suppliers/${param.idd}`,{
    method: 'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(addData)

})

 }
 
return (
  <div className='updateSupplire'>
      {table.filter(item=>item.id===Number(param.idd)).map(item=><div key={item.id}>
<input  onChange={(e)=>setAddData({...addData,companyName:e.target.value})} placeholder='Conpani Name:'/><br/>
<input  onChange={(e)=>setAddData({...addData,contactName:e.target.value})}  placeholder='Contact Name:' /><br/>
<input  onChange={(e)=>setAddData({...addData,contactTitle:e.target.value})}  placeholder='Contact Title:' /><br/>
<input  onChange={(e) => setAddData({ ...addData, address:{...addData.address, street: e.target.value} })} placeholder='Strite:' /><br/>
<input  onChange={(e) => setAddData({ ...addData, address:{...addData.address, city: e.target.value} })}  placeholder='City:' /><br/>
<input  onChange={(e) => setAddData({ ...addData, address:{...addData.address, region: e.target.value} })}  placeholder='Region:' /><br/>
<input  onChange={(e) => setAddData({ ...addData, address:{...addData.address, postalCode: e.target.value} })}   placeholder='Postal Code:' /><br/>
<input  onChange={(e) => setAddData({ ...addData, address:{...addData.address, country: e.target.value} })}   placeholder='Country:' /><br/>
<input  onChange={(e) => setAddData({ ...addData, address:{...addData.address, phone: e.target.value} })}   placeholder='Phone:' /><br/>
<button onClick={(e)=>updateData(e)}>Update</button>
      </div>)}
      
  </div>
)
}
