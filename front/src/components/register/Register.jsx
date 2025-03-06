import './Register.css'

export default function Register() {
    return (
        <form className='login-form'>
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Adınızı yazın</label>
                <input placeholder='Adınız' type="email" className="form-control" aria-describedby="emailHelp" />
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Soyadınızı yazın</label>
                <input placeholder='Soyadızını yazın' type="text" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Parol</label>
                <input placeholder="Parolnuzu yazın" type="password" className="form-control" id="exampleInputPassword1" />
            </div>


            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email</label>
                <input placeholder='Emailınızı yazın' type="email" className="form-control" id="exampleInputPassword1" />
            </div>



            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            <a href='/login'>Hesabınız varsa daxil olun</a>
        </form>
    )
}
