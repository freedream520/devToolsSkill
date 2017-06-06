//发送邮件

var nodemailer = require("nodemailer");//发送邮件所需要的module
 
var transport = nodemailer.createTransport( {
    host: 'smtp.163.com',
    port: 465,
    secure: true,
    auth: {
        user: "wy760104178@163.com",
        pass: "wy1479285"
    }
});
 
transport.sendMail({
    from : "wy760104178@163.com",
    to : "760104178@qq.com",
    subject: "邮件主题",
    generateTextFromHTML : true,
    // text:"hello word",
    html : "<h4>这是封测试邮件</h4>"
}, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " , response);
    }
    transport.close();
});