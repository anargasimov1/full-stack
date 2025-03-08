import { useEffect, useState } from 'react';
import './Login.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        const data = { email, password }
        fetch('http://127.0.0.1:7001/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(r => {
            if (r.ok) {
                r.json().then(r => {
                    console.log(r)
                    localStorage.setItem("token", r.token);
                    localStorage.setItem('id', r.id)
                    window.location.href = '/profile'
                })
            }
            else {
                alert("Məlumatlar səhvdir!")
            }
        }).catch(e => console.log(e))
    }





    return (
        <form className='login-form'>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Emailnizi yazin</label>
                <input placeholder='Emailnizi yazin' onChange={e => setEmail(e.target.value)} type="email" className="form-control" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Parol</label>
                <input onChange={e => setPassword(e.target.value)} placeholder="Parolnuzu yazın" type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <button onClick={() => login()} type="button" className="btn btn-primary">Submit</button>

            <a href='/register'>Hesabınız yoxdursa qeydiyyatdan kecin</a>
        </form>
    )
}

