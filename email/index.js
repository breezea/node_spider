const nodemailer = require("nodemailer")

const transprot = nodemailer.createTransport({
    host:'smtp.qq.com',
    secureConnection: true,
    post:445,
    auth:{
        user: "2732593664@qq.com",
        pass: "qsuvexilawbadgfb"
    }
})

const mailOptions = {
    "from": "欧里纪娃 2732593664@qq.com",
    // to: "1197402377@qq.com",
    to :"1838855607@qq.com",
    subject :"nlp",
    text: "nlp双向最大匹配",
    html: "<h1>hello</h1>",
    attachments:[
        {
            filename:"202026205001 纪永乐.ipynb",
            // path:'D:\\mycode\\node\\spider\\email\\index.js'
            path:'D:\\mycode\\node\\spider\\email\\assets\\202026205001 纪永乐.ipynb'
        },
        // {
        //     filename:'text1',
        //     content:'niyoha',

        // }
    ]
}
transprot.sendMail(mailOptions,function(err,res){
    if (err){
        console.log(err)
        console.log('发送失败')
    }else{
        console.log(res)
        console.log('发送成功')
    }
})