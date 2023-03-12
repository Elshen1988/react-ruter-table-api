import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export const UpdateSupplire = () => {
  let ref1 = useRef()
  let ref2 = useRef()
  let ref3 = useRef()
  let ref4 = useRef()
  let ref5 = useRef()
  let ref6 = useRef()
  let ref7 = useRef()
  let ref8 = useRef()
  let ref9 = useRef()
  let param = useParams()
  let [table, tableSet] = useState([])
  useEffect(() => {
    fetch('https://northwind.vercel.app/api/suppliers')
      .then((Promise) => {
        return Promise.json()
      })
      .then((Promise) => {
        tableSet(Promise)
      })
  }, [param]);
  let [addData, setAddData] = useState({
    id: param,
    conpaniName: "",
    contactName: "",
    contactTitle: "",
    address: {
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "",
      phone: ""
    }
  })

  let updateData = (e) => {
    e.preventDefault()
    fetch(`https://northwind.vercel.app/api/suppliers/${param.idd}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(addData)
    })
    setAddData({
      id: param,
      conpaniName: "",
      contactName: "",
      contactTitle: "",
      address: {
        street: "",
        city: "",
        region: "",
        postalCode: "",
        country: "",
        phone: ""
      }
    })
    ref1.current.value = ""
    ref2.current.value = ""
    ref3.current.value = ""
    ref4.current.value = ""
    ref5.current.value = ""
    ref6.current.value = ""
    ref7.current.value = ""
    ref8.current.value = ""
    ref9.current.value = ""
    ref2.current.value = ""
    ref3.current.value = ""
    ref4.current.value = ""
    ref5.current.value = ""
    ref6.current.value = ""
    ref7.current.value = ""
    ref8.current.value = ""
    ref9.current.value = ""

  }

  return (
    <div className='updateSupplire'>
      {table?.filter(item => item.id === Number(param.idd)).map(item => <div key={item.id}>
        <input ref={ref1} onChange={(e) => setAddData({ ...addData, companyName: e.target.value })} placeholder='Conpani Name:' /><br />
        <input ref={ref2} onChange={(e) => setAddData({ ...addData, contactName: e.target.value })} placeholder='Contact Name:' /><br />
        <input ref={ref3} onChange={(e) => setAddData({ ...addData, contactTitle: e.target.value })} placeholder='Contact Title:' /><br />
        <input ref={ref4} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, street: e.target.value } })} placeholder='Strite:' /><br />
        <input ref={ref5} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, city: e.target.value } })} placeholder='City:' /><br />
        <input ref={ref6} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, region: e.target.value } })} placeholder='Region:' /><br />
        <input ref={ref7} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, postalCode: e.target.value } })} placeholder='Postal Code:' /><br />
        <input ref={ref8} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, country: e.target.value } })} placeholder='Country:' /><br />
        <input ref={ref9} onChange={(e) => setAddData({ ...addData, address: { ...addData.address, phone: e.target.value } })} placeholder='Phone:' /><br />
       <button onClick={(e) => updateData(e)}> <Link to='/'>Update</Link></button>
      </div>)}

    </div>
  )
}
