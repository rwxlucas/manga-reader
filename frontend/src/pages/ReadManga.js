import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../components/solo/1.jpeg'
import img2 from '../components/solo/2.jpeg'
import img3 from '../components/solo/3.jpeg'
import img4 from '../components/solo/4.jpeg'
import img5 from '../components/solo/5.jpeg'
import upArrow from '../components/up-arrow.svg'

function ReadManga() {
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
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
                <li><img src={img1} className='img-fluid' alt="" /></li>
                <li><img src={img2} className='img-fluid' alt="" /></li>
                <li><img src={img3} className='img-fluid' alt="" /></li>
                <li><img src={img4} className='img-fluid' alt="" /></li>
                <li><img src={img5} className='img-fluid' alt="" /></li>
            </ul>

            <div className='col-lg-12' style={{ margin: '10px' }}>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <button className='btn btn-success' disabled style={{ marginRight: '5px' }}>Previous chapter</button>
                    <button className='btn btn-success' style={{ marginLeft: '5px' }}>Next chapter</button>
                </div>
            </div>

            <img 
                src={upArrow}
                alt="upArrow" 
                style={{display: 'block', position: 'fixed', width: '40px', bottom: '10px', right: '10px'}} 
                onClick={() => window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })}
            />
            
        </div>
    )
}

export default ReadManga
