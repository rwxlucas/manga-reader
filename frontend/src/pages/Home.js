import React, { useState } from 'react'
import MangaCard from '../components/MangaCard'

import './Home.css'

const Home = props => {

    const [searchInput, setSearchInput] = useState('')
    const [searchSent, setSearchSent] = useState(false)

    const onSearchInputChange = e => {
        setSearchInput(e.target.value)
        if (e.target.value.length == 0) {
            setSearchSent(false)
        }
    }

    const renderList = () => {
        const algo = []
        for (let i = 0; i < 50; i++) {
            algo.push(
                <div style={{ width: '300px', height: '350px', backgroundColor: 'salmon', borderRadius: '5px', marginBottom: '15px' }}>
                    {`teste${i}`}
                </div>
            )
        }
        return algo
    }

    return (
        <div className='homePage container-fluid'>

            <div className='row'>
                <div className='col-lg-12'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setSearchSent(true)
                    }}>
                        <input type="text" value={searchInput} onChange={onSearchInputChange} placeholder='Search Mangas' className='searchManga' />
                    </form>
                </div>
            </div>

            <div className='row d-flex flex-row justify-content-between'>
                <div className='col-lg-8 container-fluid' >
                    <div className='row'>
                        <div style={{ padding: '10px' }} className='col-lg-12 text-center'>
                            <h2>Read Manga Online</h2>
                        </div>

                        <div className='row d-flex flex-row justify-content-between'>
                            <div className='col-lg-12 d-flex justify-content-around flex-wrap' style={{ paddingTop: '20px' }}>
                                {
                                    searchSent ? 'result' : <>
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
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 d-flex flex-column align-items-start' style={{marginTop: '10px'}}>
                    <h3>Manga by genres</h3>
                    <ul style={{listStyle: 'none', padding: '5px'}}>
                        <li>romnance</li>
                        <li>romnance</li>
                        <li>romnance</li>
                        <li>romnance</li>
                        <li>romnance</li>
                        <li>romnance</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
