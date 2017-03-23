//发送邮件

var nodemailer = require("nodemailer");//发送邮件所需要的module
 
var transport = nodemailer.createTransport("SMTP", {
   
    auth: {
        user: "985774183@qq.com",
        pass: "1479285051"
    }
});
 
transport.sendMail({
    from : "985774183@qq.com",
    to : "760104178@qq.com",
    subject: "邮件主题",
    generateTextFromHTML : true,
    html : "&lt;p&gt;这是封测试邮件&lt;/p&gt;"
}, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
    transport.close();
});