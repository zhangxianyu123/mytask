/**
 * Created by dllo on 17/8/9.
 */
var fs = require('fs');
var download = require('./download');
fs.readFile('./douban.json','utf-8',function (error,data) {
    var arr = data.split(',');
   arr.forEach(function (item,index) {
       download(item,'douban','video'+index+'.jpg');
   })
});