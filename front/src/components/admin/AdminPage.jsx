import React, { useEffect, useState } from 'react'
import './Adminpage.css'
export const AdminPage = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {

    fetch('http://localhost:7001/api/auth/all', {
      method: "GET",
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    }).then(r => r.json().then(r => setUsers(r)))

  }, [])


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Istifadeciler</h1>
      <table align='center' border="1px" className='table'>
        <tr>
          <th>Sira</th>
          <th>Adı</th>
          <th>Soyadı</th>
          <th>Emaili</th>
          <th>Rolu</th>
          <th>Istifadecini Sil</th>
        </tr>
        <tbody>
          {
            users.map((i, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.surname}</td>
                  <td>{i.email}</td>
                  <td>{i.role}</td>
                  <td><button><i className='fa-solid fa-trash-can'></i></button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr />
    </div>
  )
}
