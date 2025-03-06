import './Login.css';

export default function Login() {
    return (
        <form className='login-form'>
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Emailnizi yazin</label>
                <input placeholder='Emailnizi yazin' type="email" className="form-control" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Parol</label>
                <input placeholder="Parolnuzu yazın" type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <a href='/register'>Hesabınız yoxdursa qeydiyyatdan kecin</a>
        </form>
    )
}
