/**
 * Created by dllo on 17/8/8.
 */
var cheerio = require('cheerio');
var request = require('request');
var download = require('../download')
var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
}
//热点内容图片
//创建一个全局的空数组;
var brr = []
request.get(options, function (error, response, body) {
    var $ = cheerio.load(body);
    $('.albums>ul>li .pic a img').each(function (index, element) {
        var imgone = $(element).attr('data-origin')
        download(imgone, 'imgAll', index + '.jpg')
    })
    $('.notes>ul .first .title a').each(function (index, element) {
        brr.push($(element).text())

    })
    $('.notes>ul>li a').each(function (index, element) {
        brr.push($(element).text())

    })
    // 豆瓣时间图片
    $('.time-list>li a img').each(function (index, element) {
        // console.log($(element).text())
        var imgtwo = $(element).attr('src')
        // console.log(imgtwo)
        // download(imgtwo, 'imgAll', index + '.jpg')
    })
    // 豆瓣时间的文字
    $('.time-list>li .cover img').each(function (index, element) {
        brr.push($(element).attr('alt'))
    })
    //视频:
    $('.main>ul>li .video-cover a').each(function (index,element) {
          console.log($(element).attr('src'))
    })
    console.log(brr)
})





