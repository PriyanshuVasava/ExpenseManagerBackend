const mailer = require('nodemailer');

const mailHandler = async (req, res) => {
    try{
        const mailRes = await mailSend(req.body.to, req.body.subject, req.body.html);
        res.status(200).json({
            message:'mail sent successfully',
            data:mailRes,
            flag:1
        })
    }
    catch(err){
        res.status(500).json({
            message:'error sending mail',
            error:err,
            flag:-1
        })
    }

}

const mailSend = async (to, subject, html) => {
    
    const mailOptions = {
        from:'vasava.priyanshu1607@gmail.com',
        to:to,
        subject:subject,
        //text:text,
        html:html
    }

    const transporter = mailer.createTransport({
        service:'gmail',
        auth:{
            user:'vasava.priyanshu1607@gmail.com',
            pass:'wlijvyxvhynyfajp'
        }
    })

    const res = await transporter.sendMail(mailOptions);
    return res;
}

module.exports = {
    mailSend,
    mailHandler //this fuction is created to handle sendMail req from frontend 
}