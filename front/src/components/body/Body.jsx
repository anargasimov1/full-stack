import './Body.css';

export default function Body() {
    return (
        <div className='form_head'>
            <div className='form'>

                <input type="text" className='form-control' placeholder='adiniz' />
                <input type="text" className='form-control' placeholder='soyadiniz' />
                <input type="text" className='form-control' placeholder='email' />
                <input type="file" />
                <button className='btn btn-success' type='button'>Gonder</button>

            </div>
        </div>
    )
}
