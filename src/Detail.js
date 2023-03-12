import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export const Detail = () => {
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
    },[param])
   ;
   
  return (
    <div className='detailDiv'>
        {table.filter(item=>item.id===Number(param.id)).map(item=><div key={item.id}>
<table>
    <thead>
        <tr>
        <th>street</th>
        <th>city</th>
        <th>region</th>
        <th>postalCode</th>
        <th>country</th>
        <th>phone</th>
    </tr>
        
    </thead>
    <tbody>
<tr>
    <td>{item.address.street}</td>
    <td>{item.address.city}</td>
    <td>{item.address.region}</td>
    <td>{item.address.postalCode}</td>
    <td>{item.address.country}</td>
    <td>{item.address.phone}</td>
</tr>
    </tbody>
</table>
        </div>)}
        
    </div>
  )
}
