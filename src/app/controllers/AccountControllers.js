const account = require('../models/Account')

const Course = require('../models/Course')

const {utilMongooseObject} = require('../../util/mongoose')
class accountController {
    
    // [GET] /news
    index(req, res) {
        // books
        account.find({})
            .then((account) => {
                res.render('account',{
                    account: utilMongooseObject(account)
                })
            })
            .catch((err) => next(err))
        // console.log(req)
    }
    // account
    login(req, res) {
        const studentID = req.body.studentID;
        const password = req.body.password;
        account.findOne({   
            username : studentID,
            password : password
        })  
        
            .then(user=> {
                if(user!=null) {
                    Course.find({})
                    .then((Courses) => {
                        res.render('home',{
                            Courses: utilMongooseObject(Courses)
                        })
                        return Courses
                    })
                    // account.find({})
                    // .then((account2) => {
                    //     res.render('home',{
                    //         account2: utilMongooseObject(account2)
                    //     })
                    // })
                    .catch((err) => next(err))
                    // account.findOne({})
                    
                }
                else{
                    const loginfalse= 'Tài Khoản Hoặc Mật Khẩu Không Đúng';
                    res.send(loginfalse)
                    // alert("Tài Khoản Hoặc Mật Khẩu Không Đúng")
                }

                return user
            })
           
            
            .catch((err)=>{
                res.status(500).send("có lỗi bên server")
            })

            
            
    }
}
module.exports = new accountController
