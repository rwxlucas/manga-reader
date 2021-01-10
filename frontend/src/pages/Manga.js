import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

import { connect } from 'react-redux'
import { addBookmark, removeBookmark } from '../redux/actions/userAction'

function MangaPage(props) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        if (props.manga.name === '') {
            props.history.push('/')
        }
    }, [])

    const handleFavorite = () => {
        if (!props.user.username || !props.manga._id) {
            console.log(("Invalid request"))
            return
        }
        axios.post(
            'http://localhost:5000/api/user/bookmarks',
            {
                username: props.user.username,
                mangaId: props.manga._id
            }
        ).then(res => {
            if (props.user.bookmarks.indexOf(props.manga._id) !== -1) {
                props.removeBookmark(props.manga._id)
            } else {
                props.addBookmark(props.manga._id)
            }
        })
    }

    const addRemoveBookmark = () => {
        if (props.user.bookmarks.indexOf(props.manga._id) !== -1) {
            return <button onClick={handleFavorite} className='btn btn-block btn-danger' style={{ marginTop: '5px', maxWidth: '300px' }}>Remove Favorite</button>
        } else {
            return <button onClick={handleFavorite} className='btn btn-block btn-primary' style={{ marginTop: '5px', maxWidth: '300px' }}>Add Favorite</button>
        }
    }

    const mangaName = (name) => {
        const newName = []
        name.split(' ').forEach(item => {
            newName.push(item.charAt(0).toUpperCase() + item.slice(1))
        })
        return (newName.join(' '))
    }

    return (
        <div className='container'>
            <div className="row" style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
                <div className='col-lg-3 d-flex flex-column align-items-center'>
                    <img src={`data:image/jpeg; base64, ${props.manga.thumbnail}`} alt='algo' className='img-fluid' style={{ width: '300px', height: '375px' }} />
                    {
                        props.user.isLogged ? addRemoveBookmark() : <button disabled className='btn btn-block btn-primary' style={{ marginTop: '5px', maxWidth: '300px' }}>Add Favorite</button>
                    }
                </div>

                <div className='col-lg-8 d-flex flex-column align-items-start justify-content-start' style={{ marginTop: '10px', wordWrap: 'break-word', textAlign: 'start', wordBreak: 'break-all' }}>
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
                        Genres: {props.manga.genres.map(item => <span>{item} | </span>)}
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

            <div className="row" style={{ backgroundColor: '#fff', paddingTop: '15px' }}>
                <div className="col-lg-12">
                    <h3 style={{ textAlign: 'start' }}>Chapters</h3>
                </div>
                <ul className="col-lg-12" style={{ listStyle: 'none', maxHeight: '225px', padding: '0px 15px', overflowY: 'auto' }}>
                    <li> <Link style={{ color: '#000' }} to={'/readmanga'}> Chapter 1</Link></li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        manga: state.mangaInfo,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBookmark: manga => {
            dispatch(addBookmark(manga))
        },
        removeBookmark: manga => {
            dispatch(removeBookmark(manga))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MangaPage)
