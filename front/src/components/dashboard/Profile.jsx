import { useEffect, useState } from 'react';
import './Profile.css';

export default function Profile() {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('cv ');
    const [userInfo, setUserInfo] = useState({})

    let BlogIds = []

    let token = localStorage.getItem('token')
    let id = localStorage.getItem('id')

    useEffect(() => {
        fetch('http://127.0.0.1:7001/api/blogs/allblogs')
            .then(r => r.json())
            .then(d => setBlogs(d))
    }, []);
    useEffect(() => {
        fetch('http://127.0.0.1:7001/api/auth/id/' + id).then(r => r.json()).then(r => setUserInfo(r))
    }, [])

    blogs.map(i => BlogIds.push(i.author));



    const addBlog = () => {
        let newBlog = { title, description, img }
        fetch('http://127.0.0.1:7001/api/blogs/create', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                "Authorization": token
            },
            body: JSON.stringify(newBlog)
        }
        ).then(r => {
            if (r.ok) {
                setTitle("");
                setDescription("");
                setImg("");
                alert("ugurlu");
                window.location.reload();
            }
        })

    }

    const deleteBlog = id => {
        console.log(id)
        fetch('http://127.0.0.1:7001/api/blogs/delete/' + id, {
            method: "DELETE",
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        }).then(r => {
            window.location.reload();
            alert('silindi')
        })
    }

    function toBase64(e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
        reader.onerror = (error) => {
            console.log(error)
        }
    }



    return (
        <>
            <div className="user-info">
                <h1>Xos gelmisen</h1>
                <h1>{userInfo.name?.toUpperCase()}</h1>
                <h1>{userInfo.surname?.toUpperCase()}</h1>
            </div>


            <div className='form'>
                <h2 className='text-success'>Yeni blog yarat</h2>

                <label htmlFor="title">Başlıq Seçin</label>
                <input value={title} type="text" onChange={e => setTitle(e.target.value)} id='title' className='form-control' />
                <label htmlFor="metn">Mənti daxil edin</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} type="text" id='metn' className='form-control' />
                <label htmlFor="file">Faylı seçin</label>
                <input type="file" accept="image/*" onChange={toBase64} id="file" className='form-control' />
                <button onClick={() => addBlog()} type='button' className='btn btn-success'>Əlavə Et</button>
            </div>
            <hr />
            <div className="cards">

                {
                    blogs.map((i, index) => {

                        return (<div key={index} className="cards">
                            <div className="card">
                                <i class="fa-regular fa-heart"></i>
                                {<button onClick={() => deleteBlog(i._id)} className='btn' type='button'><i class="fa-solid fa-trash"></i></button>}
                                {id === i.author && <button className='btn' onClick={() => console.log('pres')} type='button'><i class="fa-solid fa-file-pen"></i></button>}
                                <img src={i.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{i.title}</h5>
                                    <p className="card-text">{i.description}</p>
                                </div>
                            </div>
                        </div>)

                    })
                }

            </div >

        </>
    )
}
