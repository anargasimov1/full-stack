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
        if (name.trim() !== "" && surname.trim() !== "" && password.trim() !== "" && email.trim() !== "") {
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
                else {
                    r.json().then(r => setMsg(r.message));
                }

            })
        }
        else {
            setMsg('zehmet olmasa butun xanalari doldurun')
        }
    }

    return (
        <>
            <form className='login-form'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Adınızı yazın</label>
                    <input id='name' required onChange={e => setName(e.target.value)} placeholder='Adınız' type="text" className="form-control" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Soyadınızı yazın</label>
                    <input required onChange={e => setSurname(e.target.value)} placeholder='Soyadızını yazın' type="text" className="form-control" id="surname" />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Parol</label>
                    <input required={true} onChange={e => setPassword(e.target.value)} placeholder="Parolnuzu yazın" type="password" className="form-control" id="password" />
                </div>


                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Email</label>
                    <input required onChange={e => setMail(e.target.value)} placeholder='Emailınızı yazın' type="email" className="form-control" id="password" />
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
