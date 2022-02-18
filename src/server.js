
require('dotenv').config();
const nodemailer = require('nodemailer');
const log = console.log;
//export class addd {





// Step 1
 transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'youssefselmi99@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || 'Yy53862672' // TODO: your gmail password
    }
});


var add = "youssefselmi99@gmail.com";

// Step 2
function sendd(add){
let mailOptions = {
    from: 'youssefselmi99@gmail.com', // TODO: email sender
    to: add, // TODO: email receiver
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};
return mailOptions;
}

// Step 3
transporter.sendMail(sendd(add), (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});

//}

//}