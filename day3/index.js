const http = require('./utils/http')
const $http = new http()
const config = require('./config')
const selector = require('./utils/cheerio')

// console.log(config)
let url = 'https://xk.jxnu.edu.cn/Step4/ChangeClass.aspx?kch=262105'
async function main(){
    const { code, res } = await $http.get(url,{
        headers:{...config.headers},
    }) 
    console.log(code,res)
    if(code == -1){
        console.log(err)
        return
    }
    // 解析html
    const $ = new selector(res)
    let doms = $('#ctl00_chdContent_gvContent > tbody > tr:nth-child(4) > td:nth-child(6)')
    let leave = doms.text()
    // console.log(typeof(leave),leave.length)
    if (leave.includes('0')){
        console.log('linux不能选,容量0')
    }else{
        console.log('可以选',leave)
    }
    // console.log(`linux操作系统,张光河2班，剩余可选：${doms.text()}`)
}

async function login(){
    let url = 'https://e.jxnu.edu.cn/?redirect=true&ticket=eyJhbGciOiJIUzUxMiJ9.eyJpZGVudGl0eVR5cGVDb2RlIjoiUzAyIiwiYXVkIjoiaHR0cHM6XC9cL2UuanhudS5lZHUuY25cLyIsInN1YiI6IjIwMjAyNjIwNTAwMSIsIm9yZ2FuaXphdGlvbkNvZGUiOiIwMDEwMTUiLCJpc3MiOiJodHRwczpcL1wvdWlzLmp4bnUuZWR1LmNuXC9jYXMiLCJpZFRva2VuIjoiZXlKaGJHY2lPaUpTVXpVeE1pSjkuZXlKemRXSWlPaUl5TURJd01qWXlNRFV3TURFaUxDSnBjM01pT2lKMWFYTXVhbmh1ZFM1bFpIVXVZMjRpTENKQlZGUlNYMmxrWlc1MGFYUjVWSGx3WlVsa0lqb2lObVJsTnpVM01UQmpOVGN6TVRGbFlXTmxPV1poTW1VNU0yUmxZakEzWmpraUxDSkJWRlJTWDJGalkyOTFiblJKWkNJNkltTTFaak5pTjJJd1ptSXdZVEV4WldFek5EQTJZakV4TW1JNE1qZGpZMlE1SWl3aVFWUlVVbDkxYzJWeVNXUWlPaUpqTldVeVlUQmlNR1ppTUdFeE1XVmhNelF3Tm1JeE1USmlPREkzWTJOa09TSXNJa0ZVVkZKZmJtRnRaU0k2SXVlNnF1YXd1T1M1a0NJc0lrRlVWRkpmYVdSbGJuUnBkSGxVZVhCbFEyOWtaU0k2SWxNd01pSXNJa0ZVVkZKZmFXUmxiblJwZEhsVWVYQmxUbUZ0WlNJNkl1YWNyT2Vua2VlVW55SXNJa0ZVVkZKZllXTmpiM1Z1ZEU1aGJXVWlPaUl5TURJd01qWXlNRFV3TURFaUxDSkJWRlJTWDI5eVoyRnVhWHBoZEdsdmJrNWhiV1VpT2lMb3JxSG5ycGZtbkxya3Y2SG1nYV9sdDZYbnFJdmxyYWJwbWFJaUxDSkJWRlJTWDNWelpYSk9ZVzFsSWpvaTU3cXE1ckM0NUxtUUlpd2laWGh3SWpveE5qWXlNakl5TXpjd0xDSkJWRlJTWDI5eVoyRnVhWHBoZEdsdmJrbGtJam9pTURBeE1ERTFJaXdpYVdGMElqb3hOall5TURRNU5UY3dMQ0pxZEdraU9pSkpSQzFVYjJ0bGJpMDJOVFl0TFdOTWVVOU5TUzF4TFU1NU9FWmpORlZVZVZZMGNqZzJSM0I1UmprNFZWQWlMQ0p5WlhFaU9pSmxMbXA0Ym5VdVpXUjFMbU51SWl3aVFWUlVVbDl2Y21kaGJtbDZZWFJwYjI1RGIyUmxJam9pTURBeE1ERTFJbjAuZENhM0NSVlJkQkR2bFUzUkZUOEFwTENQdS1UXzVjOXJ1Zkl1UkdHRUxDMm9hZ2Fld0lVTS1IYXFhRmVnRXg4UnRtS3VXcWN1ZFVGc045RTRqOExOc0dXS0N5TEhuWmg3Uzl6UkpGTkZXcWd1Tkw5SVg0LWk5NXp6UHp5TWY3MDNWVVNqYjZkVTh3ck53X3pDRENCS2EtZGJyRTRYV1M5dkpPWXFCWHhIMVBVejZEWTlydF9uU3ItcWxpalg2VjJKdnktdlV0NWt0RHg0dk9FNlBVZlJGcjFKTGc4WHIyblhFV3Zja0pnLW9HZFRYRTJIVEFuTXNCWVZZakNuaWQzREl4Y2R0bGFpVklseW84cTYxTmNvdXI4Sm92Y0xVdEJoLW1FWEdIQnpHQzZjc1NGV0RBczhqMWw0a2MyYzhLcW1fUjU3V2h4a3RJbU9vTk9LYUk3LWp3IiwiZXhwIjoxNjYzMjU5MTcwLCJpYXQiOjE2NjIwNDk1NzAsImp0aSI6IlNULTY3MjQtZHJCZFRycTA1Ny12SUdUeWNjNFpaZ1Fwd1hZY2FzLXNlcnZlci13ZWJhcHAtYmJiOWM2NmItN2d3dG4ifQ==.Ep5pcZZ3OsBQmWWKNLpQke_TJg3A5UCKBCs4TF74ARIfNc7JwYPJNLd6XyjCuxi_4DGUXGACJl6o82eCPg03iA'
    url = 'https://jwc.jxnu.edu.cn/sso/login.aspx?targetUrl={base64}aHR0cDovL2p3Yy5qeG51LmVkdS5jbi9Qb3J0YWwvSW5kZXguYXNweA==&ticket=ST-6718-UlsZVuhfIRjAHsa5Q2mXkfsDgsEcas-server-webapp-bbb9c66b-7gwtn'
    url = 'http://xk.jxnu.edu.cn/'
    // const { code ,res } = await $http.get(url,{
        // headers:{...config.headers}
    // })
    const axios = require("axios")
    url = 'https://e.jsnu.edu.cn/cas/login?service=https%3a%2f%2fxk.jxnu.edu.cn%2fsso%2fMemberlogin.aspx%3ftargetUrl%3d%7bbase64%7daHR0cHM6Ly94ay5qeG51LmVkdS5jbi9Qb3J0YWwvZGVmYXVsdC5hc3B4 HTTP/1.1'
    url= 'https://xk.jxnu.edu.cn/sso/Memberlogin.aspx?targetUrl=%7Bbase64%7DaHR0cHM6Ly94ay5qeG51LmVkdS5jbi9Qb3J0YWwvZGVmYXVsdC5hc3B4&ticket=ST-91174--5DY7y5Dx0fqIeJnSqg7JWXpFC4cas-server-webapp-bbb9c66b-xhtk6'
    axios.get(url,{
        headers:config.headers
    }).then(
        res=>{
            console.log(res)
        },
        err=>{
            console.log(err)
        }
    )
    // axios.post(url,
    //     {
    //         "username":'202026205001',
    //         "password":'Ji1312176.14',
    //         "currentMenu":"1",
    //         "failN":-1,
    //         "mfaState":'',
    //         "execution":"e1s1",
    //         "_eventId":'submit',
    //         "geolocation":'',
    //         "submit":'Login1'
    //     }
    // ).then(
    //     res=>{
    //         console.log(res.data)
    //     },
    //     err=>{
    //         console.log('err')
    //     }
    // )
    // console.log(res)
}

function checkClientTime() {
    var myDate = new Date();
    var s = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate() + "  " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
    console.log(s)
    console.log(s.length)
    // $.get("CheckClientTime.aspx?ct=" + s + "&aa=" + Math.random(), function (data) {
        // $("#checkTime").html(data);
    // });

}
// checkClientTime()
login()

// main()
// setInterval(()=>{
    // 1分钟重新请求
    // randomImpact = Math.random()
    // main()
// },1000*60)

// console.log(Math.random())

// axios.get('https://xk.jxnu.edu.cn/Step4/ChangeClass.aspx?kch=262105',{
//     headers:{...headers}
// }).then(
//     res=>{
//         console.log(res.data)
//     },
//     err=>{
//         console.log('请求失败：')
//         console.log(err)
//     }
// )