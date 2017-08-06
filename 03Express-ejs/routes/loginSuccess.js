/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var router = express.Router();
router.get("/", function (req, res) {
    var username = req.query['username']
    var possword = req.query['possword']
    var selectSQL = 'SELECT * FROM zhanghu'
    connect.query(selectSQL, function (error,result) {
        if (error) {
            console.log("查询失败")
        } else {
            console.log("查询成功")
            if (result[0].Account==username&&result[0].Password==possword){
              res.render("ok")
            }else {
                res.render('no')
            }
        }
    })
})
module.exports = router;


//创建数据库
var mysql = require('mysql');
var options = {
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: ''
}
//连接成功
var connect = mysql.createConnection(options);
connect.connect(function (error) {
    if (error) {
        console.log("连接失败")
    } else {
        console.log("连接1成功")
    }
})
//使用数据库
var userDBSQL = 'use test'
connect.query(userDBSQL, function (error) {
    if (error) {
        console.log("使用失败")
    } else {
        console.log("使用1成功")
    }

})

// //查询表数据
// var selectSQL = 'SELECT * FROM zhanghu'
// connect.query(selectSQL, function (error) {
//     if (error) {
//         console.log("查询失败")
//     } else {
//         console.log("查询1成功")
//     }
// })


