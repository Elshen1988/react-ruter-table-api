import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'





export  const HomePage = () => {
  let[del,setDel]=useState(0)
  let [table,tableSet]=useState([])
  useEffect(()=>{
    fetch('https://northwind.vercel.app/api/suppliers')
  .then((Promise)=>{
    return Promise.json()
    })
    .then((obj)=>{
      tableSet(obj)
    })
  },[del]);
  

  let delet=(e,item)=>{
    e.preventDefault()
    
      fetch(`https://northwind.vercel.app/api/suppliers/${String(item.id)}`,{
        method:'delete'
    })
  }
 
  return (
    <div className='dataListDiv'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>companyName</th>
            <th>contactName</th>
            <th>contactTitle</th>
          
          </tr>
        </thead>
      <tbody>
 {table?.map((item,index)=><tr key={index}>
  <td>{item.id}</td>
  <td>{item.companyName}</td>
  <td>{item.contactName}</td>
  <td>{item.contactTitle}</td>
 <td><Link className='upDateLink'  to={`/${item.id}`}>Detales</Link>
<Link className='upDateLink' to={`/updateSupplire/${item.id}`}>Update</Link>
 <button onClick={(e)=>delet(e,item)&setDel(del+1)}>x</button></td>
 
  
  </tr>)}
      </tbody>
      </table>
    </div>
  )
}
