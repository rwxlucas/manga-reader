import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

function MangaPage(props) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])

    const renderMangaLists = () => {
        const list = ['link2','link2','link2','link2','link2','link2','link2','link2','link2',]
        return list.map((item, key) => {
            return <li key={key}> <Link style={{color: '#000'}} to={'/readmanga'}> Chapter 1: {item} </Link></li>
        })
    }

    const mangaName = (name) => {
        const newName = []
        name.split(' ').forEach(item => {
            newName.push(item.charAt(0).toUpperCase() + item.slice(1))
        })
        return(newName.join(' '))
    }

    return (
        <div className='container'>
            <div className="row" style={{marginTop: '30px', padding: '20px', backgroundColor: '#fff',borderRadius: '5px'}}>
                <div className='col-lg-3 d-flex flex-column align-items-center'>
                    <img src={'https://avt.mkklcdnv6.com/30/a/17-1583496340.jpg'} alt='algo' className='img-fluid' style={{width: '300px', height: '375px'}} />
                    <button className='btn btn-block btn-primary' style={{marginTop: '5px', maxWidth: '300px'}}>Add Favorite</button>
                </div>

                <div className='col-lg-8 d-flex flex-column align-items-start justify-content-start' style={{marginTop: '10px' ,wordWrap: 'break-word', textAlign: 'start', wordBreak: 'break-all'}}>
                    <p>
                        Name: {mangaName(props.manga.name)}
                    </p>
                    <p>
                        Alternative: {props.manga.alternative}
                    </p>
                    <p>
                        Author: {mangaName(props.manga.author)}
                    </p>
                    <p>
                        Genres: {props.manga.genres.map(item => <span>{item}</span>)}
                    </p>
                    <p>
                        Rating: {props.manga.rating}
                    </p>
                    <p>
                        Description: {props.manga.description}
                    </p>
                    <p>
                        Views: {props.manga.views}
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

const mapStateToProps = state => {
    return {
        manga: state.mangaInfo
    }
}

export default connect(
    mapStateToProps,
    null
)(MangaPage)
