var request = require('request')
var fs = require('fs')
var path = require('path')
function download(url, directory, filename) {
    var dir=path.join(__dirname,directory)
    var isDir=fs.existsSync(dir)
    if (!isDir){
        // 如果不存在生产目录
        fs.mkdir(dir)
    }
    //生产文件路径
    var filePath = path.join(dir,filename)
    //下载保存
    request(url).pipe(fs.createWriteStream(filePath))
}
module.exports=download

