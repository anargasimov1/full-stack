import { useEffect, useState } from 'react';
import './Profile.css';

export default function Profile() {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:7001/api/blogs/allblogs')
            .then(r => r.json())
            .then(d => setBlogs(d));
    }, []);

    return (
        <>
            <div className="user-info">
                <h1>Xos gelmisen</h1>
                <h1>Adiniz</h1>
                <h1>Soyadiniz</h1>
            </div>


            <div className='form'>
                <h2 className='text-success'>Yeni blog yarat</h2>

                <label htmlFor="title">Başlıq Seçin</label>
                <input type="text" id='title' className='form-control' />
                <label htmlFor="metn">Mənti daxil edin</label>
                <textarea type="text" id='metn' className='form-control' />
                <label htmlFor="file">Faylı seçin</label>
                <input type="file" id="file" className='form-control' />
                <button type='button' className='btn btn-success'>Əlavə Et</button>
            </div>
            <hr />
            <div className="cards">

                {
                    blogs.map(i => {

                        return (<div className="cards">
                            <div class="card">
                                <img src="https://portal.azertag.az/uploads/news-files/2020/Noyabr%202020/pi%C5%9Fik.jpeg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{i.title}</h5>
                                    <p class="card-text">{i.description}</p>
                                </div>
                            </div>
                        </div>)

                    })
                }

            </div>

        </>
    )
}
