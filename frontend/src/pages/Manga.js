import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import horimiya from '../components/horimiya.jpeg'

function MangaPage() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])

    const renderMangaLists = () => {
        const list = ['link1', 'link2','link2','link2','link2','link2','link2','link2','link2','link2','link2','link2','link2','link2','link2','link2','link2','link2','link2',]
        return list.map(item => {
            return <li> <Link style={{color: '#000'}} to={'/readmanga'}> Chapter 1: {item} </Link></li>
        })
    }

    return (
        <div className='container'>
            <div className="row" style={{marginTop: '30px', padding: '20px', backgroundColor: '#fff',borderRadius: '5px'}}>
                <div className='col-lg-3 d-flex flex-column align-items-center'>
                    <img src={horimiya} className='img-fluid' style={{width: '300px', height: '375px'}} />
                    <button className='btn btn-block btn-primary' style={{marginTop: '5px', maxWidth: '300px'}}>Add to bookmark</button>
                </div>

                <div className='col-lg-8 d-flex flex-column align-items-start justify-content-start' style={{marginTop: '10px' ,wordWrap: 'break-word', textAlign: 'start', wordBreak: 'break-all'}}>
                    <p>
                        Name: {'name'}
                    </p>
                    <p>
                        Alternative: {'Alternative'}
                    </p>
                    <p>
                        Autor: {'Author name'}
                    </p>
                    <p>
                        Genres: {'genres'}
                    </p>
                    <p>
                        Rating: {'Rating'}
                    </p>
                    <p>
                        Description: {'Description'}
                    </p>
                </div>
            </div>

            <div className="row" style={{backgroundColor: '#fff', paddingTop: '15px'}}>
                <div className="col-lg-12">
                    <h3 style={{textAlign: 'start'}}>Chapters</h3>
                </div>
                <ul className="col-lg-12" style={{listStyle: 'none', maxHeight: '225px', padding: '0px 15px', overflowY: 'auto'}}>
                    {renderMangaLists()}
                </ul>
            </div>
        </div>
    )
}

export default MangaPage
