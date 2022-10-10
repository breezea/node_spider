const c = require('child_process')

class bilibili{
    
    constructor(){

    }

    openUrl(url){
        console.log(url);
        c.exec(`start ${url}`)

    }
}

module.exports = bilibili

