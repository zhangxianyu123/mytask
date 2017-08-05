/**
 * Created by dllo on 17/8/3.
 */
var express=require('express')
var router=express.Router()
//辅助路径拼接在主路径的后面
router.get("/2",function (req,res) {
    res.render('shoppingcar',{title:'购物车'})
})
module.exports=router