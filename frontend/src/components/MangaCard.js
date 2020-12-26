import React from 'react'
import { useHistory } from 'react-router-dom'
import horimiya from './horimiya.jpeg'

import './MangaCard.css'

const MangaCard = (props) => {

    const history = useHistory()

    const redirectToManga = e => {
        history.push('/manga')
    }

    return(
        <div className='mangaCard' onClick={redirectToManga}>
            <img src={horimiya} alt="Horimiya"/>
            <div>Horimiya</div>
        </div>
    )
}

export default MangaCard