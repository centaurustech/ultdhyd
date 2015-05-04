using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;
using System.Net;
using System.Configuration;

public partial class ContactUs : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        try
        {
            string name = txtname.Value;
            string email = txtmail.Value;
            string comments = txtcomment.Value;
            string subject = txtsubject.Value;
            if (string.IsNullOrEmpty(email))
                email = ConfigurationManager.AppSettings["DefaultFromEmail"].ToString();
            string ToEmail = ConfigurationManager.AppSettings["ToAddress"].ToString();
            string mailMessage = string.Format("From  : {0}" + System.Environment.NewLine + " EmailId : {1} " + System.Environment.NewLine + " {2}", name, email, comments);
            var message = new MailMessage(email, ToEmail, subject, mailMessage);
            sendMail(message);
            txtname.Value = string.Empty;
            txtmail.Value = string.Empty;
            txtcomment.Value = string.Empty;
            txtsubject.Value = string.Empty;
        }
        catch (Exception ex)
        {
        }
    }
    public void sendMail(MailMessage msg)
    {
        string username = ConfigurationManager.AppSettings["SMTPUser"].ToString();   //email address or domain user for exchange authentication
        string password = ConfigurationManager.AppSettings["SMTPPassword"].ToString();   //password
        SmtpClient mClient = new SmtpClient();
        mClient.Host = ConfigurationManager.AppSettings["SMTPHOST"].ToString();
        mClient.Credentials = new NetworkCredential(username, password);
        mClient.DeliveryMethod = SmtpDeliveryMethod.Network;
        mClient.EnableSsl = true;
        mClient.Port = Convert.ToInt32(ConfigurationManager.AppSettings["Port"]);
        mClient.Timeout = 100000;
        mClient.Send(msg);
    }
}
