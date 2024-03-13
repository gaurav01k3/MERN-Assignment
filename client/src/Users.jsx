import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const Register = async () => {
        const payload = {
            name,
            email,
            password
        }
        const data = await axios.post('http://localhost:3000/auth/signup', payload);
        console.log(data);
    }

    return (
        <div>
            <h1>Signup</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button type='submit' onClick={Register}>Register</button>
        </div >
    )
}

export default Users