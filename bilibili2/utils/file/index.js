const fs = require('fs')
const path = require('path')

class fp{
    path = ''
    constructor(){
    }

    setBasePath(path){
        this.path = path ? path : ''
    }
    /**写入文件
     * 覆盖写入
     * 追加写入
     * 读取文件
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
    readFile(path, encoding='utf8', callback=()=>{}){
        fs.readFile(path,encoding,callback)
    }
 
}

// 删除文件

// 文件是否存在

module.exports =new fp()