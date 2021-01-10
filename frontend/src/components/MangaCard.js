import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import mangaInfo from '../redux/actions/mangaInfoAction'
import { connect } from 'react-redux'


import './MangaCard.css'

const MangaCard = (props) => {

    const history = useHistory()

    const redirectToManga = e => {
        axios.get(`http://localhost:5000/api/manga/${props.manga.id}`)
            .then(res => {
                props.mangaInfo(res.data)
                history.push(`/manga`)
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
        <div className='mangaCard' onClick={redirectToManga}>
            <img src={`data:image/jpeg; base64, ${props.manga.image}`} alt={props.manga.name} />
            <div>{mangaName(props.manga.name)}</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        mangaInfo: (info) => {
            dispatch(mangaInfo(info))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MangaCard)