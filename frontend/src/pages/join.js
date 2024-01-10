import React, { useState } from 'react'
import axios from 'axios'

const initialState = {
    nickname: "",
    username: "",
    password: "",
    rePassword: "",
}

export default function Join() {
    const [{ nickname, username, password, rePassword }, setState] = useState(initialState);
    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value)
        setState((prevState) => ({...prevState, [name]: value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            nickname: nickname,
            username: username,
            password: password,
            rePassword: rePassword
        }
        const response = await axios.post('http://localhost:8080/api/user/save', data)
        console.log(response);
    }
    return (
        <div style={{marginTop: '100px'}}>
        <div id="contact" style={{margin: '0 auto', width: '100%', height: '90%', position: 'relative'}}>
            <form 
                onSubmit={handleSubmit}
                style={{width: '400px', height: '450px', position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', boxShadow: '5px 5px 5px #c7c8c7'}}>
                <input 
                    type="text"
                    name="nickname" 
                    value={nickname} 
                    onChange={handleChange} 
                    style={{color: 'black'}}
                />
                <input 
                    type="text"
                    name="username" 
                    value={username} 
                    onChange={handleChange} 
                    style={{color: 'black'}}
                />
                <input 
                    type="password"
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    style={{color: 'black'}}
                />
                <input 
                    type="password"
                    name="rePassword" 
                    value={rePassword} 
                    onChange={handleChange} 
                    style={{color: 'black'}}
                />
                <button type="submit">submit</button>
            </form>
        </div>
        </div>
    )
}
