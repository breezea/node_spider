// 笔趣阁
const http = require('./utils/http');
const selector = require('./utils/cheerio');
const fp = require('./utils/files')
const { queen } = require('./utils/sleep')

// 数据请求对象
const $http = new http(config={
    baseURL:'https://www.xbiquge.so',
    responseType:'arraybuffer',
    responseEncoding:'binary',
});

// 文件写入对象
const $fp = new fp('./txt')

async function main(){
    // 获取文章url信息
    let articleList = []
    // // 获取目录页面
    const { code ,res } = await $http.get('/book/24277/',)
    // // 解析html
    const $ =new selector(res,encoding='gbk')
    let doms = $('#list > dl > dd:nth-of-type(n+21)')
    doms.each((index,ele)=>{
        // 如果有a标签
        if($(ele).find('a').length>0){
            articleList.push({
                title:$(ele).find('a').text(),
                href:'/book/24277/'+$(ele).find('a').attr('href'),
            })
        }
    })
    // 获取文章内容
    console.log('开始获取文章内容')
    queen(articleList,async (item,index)=>{
            console.log(`开始获取第${index+1}章`)
            const { code ,res } = await $http.get(item.href)
            if( code == -1 ){
                console.log('请求失败')
                $fp.append('0afaild.txt',`请求失败： ${item.title}:\n${item.href}\n`)
                return
            }
            const $ = new selector(res, encoding='gbk')
            let content = $('#content').html()
            if ( content.length == 0 ){
                console.log('解析失败')
                $fp.append('0empty.txt',`解析失败： ${item.title}:\n${item.href}\n`)
                return
            }
            content = content.replace(/<br>/g,'\n')
            content = content.replace(/&nbsp;/g,' ')
            $fp.write(item.title,content,err=>{
                if(err){
                    console.log('写入文件失败',err)
                }else{
                    console.log(`第${index+1}章获取完成`)
                }
            })
    },1000)
    // articleList.forEach(async (item,index)=>{
    //     console.log(`开始获取第${index+1}章`)
    //     const { code ,res } = await $http.get(item.href)
    //     if(code == -1){
    //         console.log('获取文章内容失败')
    //         $fp.append('0afaild.txt',`${item.title}:\n${item.href}\n`)
    //         return     
    //     }
    //     const $ =new selector(res,encoding='gbk')
    //     let content = $('#content').html()
    //     content = content.replace(/<br>/g,'/n')
    //     content = content.replace(/<p>/g,'/n')
    //     $fp.write(item.title,content, (err)=>{
    //         if(err){
    //             console.log(err)
    //         }else{
    //             console.log(`第${index+1}章获取完成`)
    //         }
    //     })
    // })
    // 先爬一章试一试
    // const { code:code_article,res:res_article } = await $http.get('/book/24277/18745511.html')
    // console.log(res_article)
    // const $ =new selector(res_article,encoding='gbk')
    // return 
    // let text = $('#content').html()
    // text = text.replaceAll('<br>','\n')
    // text = text.replaceAll('&nbsp;',' ')
    // $fp.write('/笔趣阁.txt', text, (err)=>{
    //         if(err) console.log(err)
    //         else console.log('写入成功')
    //     }
    // ) 

}

main()
// console.log(sleep.queen)
