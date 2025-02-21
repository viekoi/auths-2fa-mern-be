interface IAccountActivationMailTemplate {
  userEmail: string;
  emailSubject: string;
  userName: string;
  activationLink: string;
}

export const accountActivationMailTemplate = (
  data: IAccountActivationMailTemplate
) => {
  const { activationLink, emailSubject, userEmail, userName } = data;
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: userEmail,
    emailSubject,
    html: `<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MY MUSIC CONFIRMATION LINK</title>
            <style type="text/css">
                /* Base  */
        
                body {
                    margin: 0;
                    padding: 0;
                    min-width: 100%;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.5;
                    background-color: #FAFAFA;
                    color: #222222;
                }
                a{
                    color: #000;
                    text-decoration: none;
                }
                h1{
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 1.25;
                    margin-top: 0;
                    margin-bottom: 15px;
                    text-align: center;
                }
                p{
                    margin-top: 0;
                    margin-bottom: 24px;
                }
                table td{
                    vertical-align: top;
                }
                /* Layout */
                .email-wrapper  {
                    max-width: 600;
                    margin: 0 auto;
                }
                .email-header {
                    background-color: #0080f3;
                    padding: 24px;
                    color: #ffffff;
                }
                .email-body {
                    padding: 24px;
                    background-color: #ffffff;
                }
                .email-footer {
                    padding: 24px;
                    background-color: #f6f6f6;
                }
                /* Button  */
        
                .button {
                    display: inline-block;
                    background-color: #0070f3;
                    color: #ffffff;
                    font-size: 16px;
                    font-weight: 700;
                    text-align: center;
                    text-decoration: none;
                    padding: 12px 24px;
                    border-radius: 4px;
                }
            </style>
        </head>
        <body>
            <div class="email-wrapper">
                <div class="email-header">
                    <h1>MY MUSIC</h1>
                </div>
                <div class="email-body">
                    <p>Hello ${userName}</p>
                    <p>To ${emailSubject}, please use the following confirmation link below</p>
                    <h2><a target="_blank" rel="noopener" href="${activationLink}">Activation Link</a></h2>
                    <p>Please confirm this link within 40 minutes</p>
                </div>
                <div class="email-footer">
                    <p>If you have any question, please don't hesitate to contact us at <a href="mailto:khoinguyenviet1807@gmail.com">support mail</a></p>
                </div>
            </div>
        </body>
        </html>`,
  };

  return mailOptions;
};
