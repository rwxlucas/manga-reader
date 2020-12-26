
const getThumb = (req, res) => {
    // let mangaRequired = req.params.manga
    // const mangaThumbPath = `${process.env.MANGAS_PATH}${mangaRequired}/${mangaRequired}.jpeg`
    // res.sendFile(mangaThumbPath)

    res.sendFile('/home/lucas/mangaBooks/solo-leveling/1/3.jpeg')
}

module.exports = {
    getThumb
}