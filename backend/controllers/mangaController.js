const fs = require('fs')
const path = require('path')
const Manga = require('../models/mangaModel')

const getMangaNames = (req, res) => {
    Manga.find((err, docs) => {
        if (err){
            return res.json({message: err})
        }

        const mangas = []
        docs.forEach(item => {
            mangas.push({
                id: item._id,
                name: item.name
            })
        })
        return res.json([...mangas])
    })
}


const getMangaPages = (req, res) => {
    const { manga, chapter } = req.params
    const requestedMangaUrl = `${process.env.MANGA_FOLDER}/${manga}`

    fs.readdir(requestedMangaUrl, (err, files) => {
        if (err) {
            return res.json({ message: err })
        }
        let haveMangas = files.filter(item => item === 'chapters')
        haveMangas = `${requestedMangaUrl}/${haveMangas}`
        fs.readdir(haveMangas, (err, files) => {
            if (err) {
                return res.json({ message: err })
            }
            const haveChapter = files.indexOf(chapter)
            if (haveChapter === -1) {
                return res.json({ message: 'Error while searching this chapter.' })
            }
            haveMangas = `${haveMangas}/${chapter}`
            // Save the image as BASE64 and return as array
            fs.readdir(haveMangas, (err, chapters) => {
                if (err) {
                    return res.json({ message: err })
                }
                const imagesBase64 = []
                chapters.forEach(item => {
                    imagesBase64.push(fs.readFileSync(`${haveMangas}/${item}`, 'base64'))
                })
                return res.send(imagesBase64)
            })

        })
    })
}

const getMangaInfo = (req, res) => {
    const {id} = req.params
    console.log(id)
    Manga.findOne(
        {_id: id},
        (err, doc) => {
            if(err){
                return res.json({message: err})
            }
            console.log(doc)
            return res.json(doc)
        }
    )
}

const uploadData = (req, res) => {
    if (!req.body.name || !req.body.author || !req.body.genres || !req.body.description) {
        return res.json({ message: 'Incomplete request!' })
    }

    Manga.findOne(
        { name: req.body.name },
        (err, manga) => {
            if (err) {
                return res.json({ message: err })
            }

            if (manga) {
                return res.json({ message: `${req.body.name} data already uploaded!` })
            }

            const newManga = new Manga({
                name: req.body.name,
                author: req.body.author,
                alternative: req.body.alternative ? req.body.alternative : '',
                genres: [...req.body.genres],
                description: req.body.description
            })

            newManga.save()
                .then(doc => {
                    res.json({ message: `Manga ${doc.name} created!` })
                })
                .catch(err => res.json({ message: err }))
        }
    )

}

module.exports = {
    getMangaPages,
    getMangaInfo,
    getMangaNames,
    uploadData,
}