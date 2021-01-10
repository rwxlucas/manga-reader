import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MangaCard from '../components/MangaCard'
import { connect } from 'react-redux'

function Bookmark(props) {

    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        axios.get(
            `http://localhost:5000/api/user/bookmarks/${props.user.username}`
        ).then(res => {
            setBookmarks([...res.data])
        })
    }, [])

    return (
        <div className='container-fluid'>
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="col-lg-12">
                    <h1>Bookmarks</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-lg-10 d-flex flex-wrap justify-content-center">
                    {
                        bookmarks.map((item, index) => {
                            return <MangaCard key={index} manga={{ name: item.name, id: item.id, image: item.image }} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    null
)(Bookmark)