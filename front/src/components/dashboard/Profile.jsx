import { useEffect, useState } from 'react';
import './Profile.css';

export default function Profile() {
    const [blogs, setBlogs] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQd1kWKsODGmz1P44kiLTfpeIOkaemYITnaRVOZEn372xCyrpNoQQ_dMDAV4dWLpVTDFekNEtlkJaDnhlTzoQWdNg');
    const [userInfo, setUserInfo] = useState({});
    const [edit, setEdit] = useState(false);
    const [fovarites, setFovarites] = useState([]);
    const [toggle, setToggle] = useState(false)

    let id = localStorage.getItem('id')

    useEffect(() => {
        fetch('http://127.0.0.1:7001/api/blogs/allblogs')
            .then(r => r.json())
            .then(d => setBlogs(d))
    }, []);
    useEffect(() => {
        fetch('http://127.0.0.1:7001/api/auth/id/' + id, {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        }).then(r => r.json()).then(r => setUserInfo(r))
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:7001/api/auth/fovarites/' + id).then(r => r.json()).then(r => setFovarites(r.fovarites))
    }, [toggle])



    const addBlog = () => {
        let newBlog = { title, description, img }
        fetch('http://127.0.0.1:7001/api/blogs/create/' + id, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                "Authorization": localStorage.getItem('token')
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

    const editBlog = id => {
        setEdit(true)
        let editedBlog = { title, description }
        fetch('http://127.0.0.1:7001/api/blogs/update/' + id, {
            method: "PUT",
            headers: {
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify(editedBlog)
        })

    }

    const addWishlist = blogId => {

        let uid = localStorage.getItem('id')
        fetch('http://127.0.0.1:7001/api/auth/fovarites/' + blogId, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify({ id: uid })
        }).then(r => {
            if (r.ok) setToggle(!toggle)
        })
    }

    function toBase64(e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
        reader.onerror = (error) => {
            console.log(error);
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

                        return (
                            <div className="card" key={index}>
                                <i onClick={() => addWishlist(i._id)} class={`fa-${fovarites.includes(i._id) ? "solid" : "regular"} fa-heart`}></i>
                                {id === i.author && <button onClick={() => deleteBlog(i._id)} className='btn' type='button'><i class="fa-solid fa-trash"></i></button>}
                                {id === i.author && <button role={i._id} className='btn' onClick={() => editBlog(i._id)} type='button'><i class="fa-solid fa-file-pen"></i></button>}
                                <img src={i.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    {id === i.author && edit ? <input onChange={e => { setTitle(e.target.value) }} type="text" value={title} /> : <h5 className="card-title">{i.title}</h5>}
                                    {id === i.author && edit ? <input onChange={e => setTitle(e.target.value)} type="text" value={description} /> : <p className="card-text">{i.description}</p>}
                                </div>
                            </div>
                        )

                    })
                }

            </div >

        </>
    )
}
