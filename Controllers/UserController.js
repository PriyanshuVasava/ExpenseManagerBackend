const userSchema = require("../Models/UserModel");
const encrypt = require('../Util/Encrypt');
const mailer = require('../Util/MailUtil');

const resetPassword = async (req, res) => {
    const email = req.body.email;
  const password = req.body.password;
  const otp = req.body.otp;
  const time = req.body.time;

  console.log(email);
  console.log(password);

  const getUser = await otpSChema.findOne({ email: email });
  if (getUser) {
    if (getUser.otp === otp) {
      //gettime ffrom otp object....
      //compsre for 30 seconds...
      const timeDifference = time - getUser.time;
      const is30SecondsGap = timeDifference >= 30000;
      if (is30SecondsGap) {
        res.status(401).json({
          message: "otp is expired!!",
          flag: -1,
        });
      } else {
        const hashedPassword = await encrypt.encryptPassword(password);

        try {
          const updatedUser = await userSchema.findOneAndUpdate(
            { email: email },
            { $set: { password: hashedPassword } }
          );
          //password rest...
          //delete otp record....
          await otpSChema.findOneAndDelete({ email: email });

          res.status(200).json({
            message: "Password updated successfully",
            flag: 1,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json({
            message: "Error in updating password",
            flag: -1,
          });
        }
      }
    } else {
      ////delete otp record....
      res.status(401).json({
        message: "invalid otp..",
        flag: -1,
      });
    }
  } else {
    //delete otp record....
    res.status(500).json({
      message: "error...",
      flag: -1,
    });
  }
};

const isUserExist = async (req, res) => {
    try {
      const email = req.body.email;
  
      const getuserByEmail = await userSchema.findOne({ email: email });
      if (getuserByEmail) {
        //employee found
        //otp generation -->mail
        //time
        //otp save in db
        const otp = Math.floor(1000 + Math.random() * 9000);
        const mailRes = await mailUtil.mailSend(
          getuserByEmail.email,
          "OTP for reset password",
          `Your OTP is ${otp}`
        );
        const otpObj = {
          otp: otp,
          email: getuserByEmail.email,
          status: true,
        };
  
        await otpSChema.create(otpObj);
  
        res.status(200).json({
          message: "User found",
          flag: 1,
          data: getuserByEmail,
        });
      } else {
        res.status(404).json({
          message: "User not found",
          flag: -1,
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Error in getting user by email",
      });
    }
  };


const createUser = async (req, res) => {

    try {
        const data = req.body;
        const user = Object.assign(data, { password: encrypt.encryptPassword(data.password) });

        const createdUser = await userSchema.create(user);
        //console.log(createdUser);
        
        const to = createdUser.email;
        const sub = 'registration conformation';
        const html = `
                        <html>
                            <head>
                                <style>
                                    body {
                                        font-family: Arial, sans-serif;
                                    }
                                    .container {
                                        max-width: 600px;
                                        margin: 0 auto;
                                        padding: 20px;
                                        background-color: #f9f9f9;
                                    }
                                </style>
                            </head>
                            <body>
                                <div class="container">
                                    <h3 style="color:black">Welcome, ${createdUser.firstName}!</h3>
                                    <p style="color:green">You are successfully registered at Expense manager.</p>
                                </div>
                            </body>
                        </html>
                    `;
        const mailRes = mailer.mailSend(to, sub, html);
        
        res.status(201).json({
            message: "user created successfully",
            data: createdUser,
            flag: 1
        })
        
    } catch (err) {
        res.status(500).json({
            message: "error creating user",
            error: err,
            flag: -1
        })
    }
}

const getUser = async (req, res) => {

    try {
        const userData = await userSchema.find();

        res.status(200).json({
            message: "getUser...",
            data: userData,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error getting user",
            error: err,
            flag: -1
        })
    }
}

const getUserById = async (req, res) => {

    try {
        const user = await userSchema.findById(req.params.id);

        res.status(200).json({
            message: "user found",
            data: user,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "user not found",
            error: err,
            flag: -1
        })
    }
}

const updateUserById = async (req, res) => {

    try {
        const id = req.params.id;
        const newData = req.body;

        const updatedUser = await userSchema.findByIdAndUpdate(id, newData);

        res.status(201).json({
            message: "user updated successfully",
            data: updatedUser,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error updating user",
            error: err,
            flag: -1
        })
    }
}

const deleteUserById = async (req, res) => {

    try {
        const deletedUser = await userSchema.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "user deleted successfully",
            data: deletedUser,
            flag: 1
        })
    } catch (err) {
        res.status(404).json({
            message: "error deleting user",
            error: err,
            flag: -1
        })
    }
}

const userLogin = async (req, res) => {
    try {
        const email = req.body.email;
        const pass = req.body.password;

        const userByEmail = await userSchema.findOne({ email: email });
        if (userByEmail !== null) {

            const flag = encrypt.comparePassword(pass, userByEmail.password);

            if (flag === true) {
                res.status(200).json({
                    message: 'user login successfully',
                    data: userByEmail,
                    flag: 1
                })
            } else {
                res.status(404).json({
                    message: 'invalid password',
                    flag: -1
                })
            }
        } else {
            res.status(404).json({
                message: 'user not found',
                flag: -1
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: 'error login user',
            error: err,
            flag: -1
        })
    }

}
module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUserById,
    deleteUserById,
    userLogin,
    isUserExist,
    resetPassword
}