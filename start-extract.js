const fetch = require('node-fetch')
const fsPromises = require('fs').promises

;(async () => {
    let lastExtractLength = 50
    let pageCursor = 1
    while (lastExtractLength > 0) {
        console.log(`Extract page https://popcorn-ru.tk/movies/${pageCursor}`)
        const results = await (await fetch(`https://popcorn-ru.tk/movies/${pageCursor}`)).json()
        // console.log(results)
        await fsPromises.writeFile(`./movides/${pageCursor}.json`, JSON.stringify(results))
        // console.log('done')
        lastExtractLength = results.length
        pageCursor++
    }
})()