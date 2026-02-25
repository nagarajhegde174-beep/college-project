export async function sendVerificationCode(verificationCode, email, res) {
    try{
      const message =generateVerificationOtpEmailTemplate(verificationCode);
      sendEmail({
        email,
        subject:"verification code (Bookworm Library Management System )",
        message,
      });
      res.status(200).json({
        success:true,
        message:"verification code sent successfully",
      });
    }catch(error){
        return res.status(500).join({
            success:false,
            message:"verification code failed to send.",
        });
    }
    
}