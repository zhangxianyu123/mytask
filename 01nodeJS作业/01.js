/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs');
//创建文件夹:
fs.createWriteStream('./1.txt');

//打开文件删除文件
//1.fs.open(path, flags, callback)
// fs.open('1.txt','a','0666',function (err,fd) {
//     console.log(fd);
// });


//2.fs.utimes(path, atime, mtime, callback)
//atime 访问时间 ，表示文件最后被访问的时间和日期。
// 每一次应用程序或服务使用系统调用，读取一个文件时，文件的访问
// 时间都会更新。
// fs.utimes('./1.txt', atime, mtime, function (err) {
//     if (err) {
//         throw err;
//     }
//     console.log('time update');
// });


// 3.fs.watchFile(filename, [options], listener)
//文件修改后就生效
// var fs = require('fs');
// var path = require('path');
// var file1 = path.resolve('./1.txt');
// //文件或目录监视
// //1.当第一次创建监视器的时候，如果文件不存在，监视器毁掉函数会触发一次
// fs.watchFile(file1, {
//     interval: 20
// }, function(curr, prev) {
//     if (Date.parse(prev.ctime) == 0) {
//         console.log('文件被创建');
//     } else if (Date.parse(curr.ctime) == 0) {
//         console.log('文件被删除');
//     } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
//         console.log('文件有修改');
//     }
// });


// 取消对文件进行监视
// //4.fs.unwatchFile(filename, [listener])
// var fs=require('fs');
// var path=require('path');
// var file1=path.resolve('1.txt');
// //监视文件
// //当前程序没有结束，一直在监视文件
// var listener=function(curr,prev){
//     console.log('监视文件发生修改');
// };
// fs.watchFile(file1,{interval:100},listener);
// //取消监视文件
// //当前程序程序结束退出
// fs.unwatchFile(file1,listener);

//5.fs.link(existingPath, newPath, callback)
// 创建硬链接。
// srcpath 为源目录或文件的路径
// dstpath 它是存放转换后的目录的路径，默认为当前工作目录
// // callback 回调，传递一个err异常参数
// fs.link = function(srcpath, dstpath, callback) {
//     callback = makeCallback(callback);
//     if (!nullCheck(srcpath, callback)) return;
//     if (!nullCheck(dstpath, callback)) return;
//     binding.link(pathModule._makeLong(srcpath),
//         pathModule._makeLong(dstpath),
//         callback);
// };