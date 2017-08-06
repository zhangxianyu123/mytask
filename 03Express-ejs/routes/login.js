/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
   res.render('login')
})
module.exports = router;

//判断前面输入来的账户和密码

