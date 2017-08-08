// https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502165978663&di=050b81bbbdf03d733194b86f77c25e36&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201604%2F29%2F20160429235255_XhdxF.jpeg
var request = require('request')
var fs = require('fs')
var path = require('path')
// var imgageURL = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502165978663&di=050b81bbbdf03d733194b86f77c25e36&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201604%2F29%2F20160429235255_XhdxF.jpeg'
// //创建图片路径//当前路径,拼接
// var imgagePath = path.join(__dirname, '/imgaes', 'timg.jpg')
// //下载保存图片;
// //1.下载
// //2.导流,2进制的方式,以流的形式传递刚刚下载的数据
// //3,fs根据传递过来的流以路径创建文件
// request(imgageURL).pipe(fs.createWriteStream(imgagePath))
//封装函数:
//下载函数
//1:要下载内容地址
//2要保存的文件夹名
//3要保存的文件名
function download(url, directory, filename) {
    var dir=path.join(__dirname,directory)
    var isDir=fs.existsSync(dir)
    if (!isDir){
       // 如果不存在生产目录
       fs.mkdir(dir)
    }
    //生产文件路径
    var filePath = path.join(dir, directory, filename)
    //下载保存
    request(url).pipe(fs.createWriteStream(filePath))
}
var imgURL = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502166010758&di=3340e33beb55c49a03db32ac0c36a8ee&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201506%2F10%2F20150610170258_SxtNH.jpeg'
download(imgURL, 'img', 'img2.jpg')
//判断文件是否存在
// var isDirectory = fs.existsSync(path.join(__dirname, 'imgaes'))
// if (isDirectory){
//      console.log('no')
// }else {
//     console.log('yes')
// }