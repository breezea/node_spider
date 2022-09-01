// 哔哩哔哩bilibili
// 请求
const http = require('./utils/http');
// 解析
const selector = require('./utils/cheerio');
// 文件
const fp = require('./utils/files')
// sleep
const { queen } = require('./utils/sleep')

// 数据请求对象
const $http = new http(config={});
// 文件写入对象
const $fp = new fp('./txt')

async function main(){
    // 获取目录页面
    const { res, code } = await $http.get('https://api.bilibili.com/x/web-interface/popular?ps=40&pn=1')
    if(code == 200){
        // 请求成功
        const dataList = res.data.list
        console.log(dataList.length) 
        dataList.forEach((item,index)=>{
            console.log(item.owner.name,item.title)
        })
    }

    return 
    // 解析html
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

}

main()
