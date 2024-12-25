const nodemailer = require("nodemailer")


const sendingMail = async(to,subject,text)=>{


    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"pythonforsamir@gmail.com",
            pass:""
        }
    })

    const mailOptions= {
        from:"pythonforsamir@gmail.com",
        to:to,
        subject:subject,
        text:text
    }

    const info = await transporter.sendMail(mailOptions)
    console.log(info)



}

sendingMail("samir.vithlani83955@gmail.com","test","testing mail")