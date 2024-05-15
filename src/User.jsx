import React, { useEffect, useState } from 'react'

const User = () => {

const [users,setUsers] =useState([])
            
// useEffect(()=>{
//     debugger
//     fetch('http://localhost:3001/users')
//     .then(resp =>resp.json())
//     .then(data => setUsers(data))
//     .catch(error=>console.error("Error", error))
// },[])
  return (
    <div>
    <div>User Accounts</div>
<ul>
   {users.map(user => (
    <li key={user.id}>
        <strong>Name {user.name}</strong>
        <p>Email {user.email}</p>
        <p>Role {user.role}</p><br/>
    </li>
   ))} 
</ul>
    </div>
  )
}

export default User