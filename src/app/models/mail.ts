export class Mailf {

  public sendmail()
  {
   
    var require: any
    var nodemailer:any
    var log:any
  
      require('dotenv').config();
       nodemailer = require('nodemailer');
       log = console.log;
  
  
      
      // Step 1
      var transporter:any
      
        transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'youssefselmi99@gmail.com', // TODO: your gmail account
              pass: 'Yy53862672' // TODO: your gmail password
          }
      });
  
      alert("aaaa"+transporter);
  
      
      var add:any
       add = "youssefselmi99@gmail.com";
      
      // Step 2
  
      var mailOptions:any
  
      function sendd(add){
         mailOptions = {
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
  
  }
  ///////////////////////////////////////////////////////////////////////////















  
}