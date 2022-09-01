const fs = require('fs')
const path = require('path')

class fp{
    
    constructor(basePath){
        this.path = basePath || __dirname 
    }
    /**写入文件
     * 覆盖写入
     * 追加写入
     */
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

