import React, {useState} from 'react'

import MangaCard from '../components/MangaCard'

function Bookmark() {

    const [bookmarkList, setBookmarkList] = useState([])

    return (
        <div className='container-fluid'>
            <div className="row" style={{ marginTop: '30px' }}>
                <div className="col-lg-12">
                    <h1>Bookmarks</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-lg-10 d-flex flex-wrap justify-content-center">
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                    <MangaCard />
                </div>
            </div>
        </div>
    )
}

export default Bookmark
