/**
 * Created by dllo on 17/8/8.
 */
var request = require('request')
var cheerio = require('cheerio')
var download = require('./download')
var url = 'http://www.fruitday.com/'
request(url, function (error, response, body) {
    // console.log(body)
    var items = []
    var $ = cheerio.load(body)
    $('body>div:nth-child(7) .good-list .clearfix .s-img a img').each(function (index, element) {
        // console.log($(element).attr('data-original'))
        // var arr = $(element).attr('data-original')
        var url = $(element).attr('data-original')
        download(url, 'fruitsImages', index + '.jpg')
        // console.log(arr)
    })

})