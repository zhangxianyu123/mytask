/**
 * Created by dllo on 17/8/7.
 */
var express = require('express')
var router = express.Route()

router.get('/', function (req, res) {
   res.render('Password')
})
module.exports=router