const cheerio = require('cheerio')

// class selector{
//     constructor(data){
//         this.select = cheerio.load(data)
//     }
// }

function selector(data, encoding){
    if(encoding){
        const decoder = new TextDecoder(encoding)
        return cheerio.load(decoder.decode(data))
    }else{
        return cheerio.load(data)
    }

}

module.exports = selector