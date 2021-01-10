import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ReadManga(props) {
    
    const [images, setImages] = useState([])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:5000/api/manga/naruto/3`)
            .then(res => {
                const myImages = [...res.data]
                setImages(myImages)
            })
    }, [])

    return (
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{ minHeight: 'calc(100vh - 56px)', backgroundColor: '#000' }}>
            <div className='d-flex flex-row justify-content-between' style={{ marginTop: '10px', width: '100%' }}>
                <div style={{ color: 'red' }}>
                    <Link style={{ color: '#fff' }} to='/'>Home</Link> / <Link style={{ color: '#fff' }} to='/manga'>{'Anime name'}</Link>
                </div>
            </div>
            <ul className='d-flex flex-column justify-content-center align-items-center' style={{ padding: '10px 0px' }}>
                {
                    images.map((item, key) => <li key={key}><img src={`data:image/jpeg; base64, ${item}`} className='img-fluid' alt="" /></li>)
                }
            </ul>

            <div className='col-lg-12' style={{ margin: '10px' }}>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <button className='btn btn-success' disabled style={{ marginRight: '5px' }}>Previous chapter</button>
                    <button className='btn btn-success' style={{ marginLeft: '5px' }}>Next chapter</button>
                </div>
            </div>            
        </div>
    )
}

export default ReadManga
