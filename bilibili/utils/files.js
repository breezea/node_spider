const fs = require('fs')
const path = require('path')

class fp{
    
    constructor(basePath){
        this.path = path.join(__dirname,'../',basePath)
    }
    /**写入文件
     * 覆盖写入
     * 追加写入
     */
    write(filePath,content,callback){
        fs.writeFile(
            path.join(this.path,filePath),
            content,
            callback ? callback : ()=>{}
        )
    }
    append(filePath,content,callback){
        fs.appendFile(
            path.join(this.path,filePath),
            content,
            callback ? callback : ()=>{}
        )
    }
    writeFIle(filePath,content,callback,append=false){
        if(!append){
            fs.writeFile(
                path.join(this.path,filePath),
                content,
                callback
            )
        }else{
            fs.appendFile(
                path.join(this.path,filePath),
                content,
                callback
            )
        }
    }
 
}

// 删除文件

module.exports = fp
// 文件是否存在

