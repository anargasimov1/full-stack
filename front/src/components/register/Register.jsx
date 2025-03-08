import { useState } from 'react'
import './Register.css'

export default function Register() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setMail] = useState('');
    const [msg, setMsg] = useState('');

    function register() {
        let userInfo = { name, surname, password, email };
        fetch('http://127.0.0.1:7001/api/auth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        }).then(r => {
            if (r.ok) {
                r.json().then(r => setMsg(r.message));
                window.location.href = '/login'
            }
            else{
                r.json().then(r => setMsg(r.message));
            }

        })
    }

    return (
        <>
            <form className='login-form'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Adınızı yazın</label>
                    <input onChange={e => setName(e.target.value)} placeholder='Adınız' type="text" className="form-control" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Soyadınızı yazın</label>
                    <input onChange={e => setSurname(e.target.value)} placeholder='Soyadızını yazın' type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Parol</label>
                    <input onChange={e => setPassword(e.target.value)} placeholder="Parolnuzu yazın" type="password" className="form-control" id="exampleInputPassword1" />
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                    <input onChange={e => setMail(e.target.value)} placeholder='Emailınızı yazın' type="email" className="form-control" id="exampleInputPassword1" />
                </div>

                <button onClick={register} type="button" className="btn btn-primary">Submit</button>
                <a href='/login'>Hesabınız varsa daxil olun</a>
            </form>
            <div className='message'>
                <p className='message-text'>
                    {msg}
                </p>
            </div>
        </>
    )
}
