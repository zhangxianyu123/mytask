/**
 * Created by dllo on 17/8/8.
 */
var cheerio = require('cheerio')
var request = require('request')
// // var html=''
// // cheerio.load(html);
var url = 'https://cnodejs.org/'
//body是查询结果:
request(url, function (error, response, body) {
    // console.log(body)
    var items = []
    var $ = cheerio.load(body)
    $('#topic_list .topic_title').each(function (index, element) {
        // console.log($(element).attr('title'))
        // console.log($(element).attr('href'))
        var item = {
            title: $(element).attr('title'),
            href: $(element).attr('href')
        }
        items.push(item)
    })
    //取到头像:
    $('.cell>.user_avatar>img').each(function (index, element) {
       items[index].icon=$(element).attr('src')
    })
    console.log(items)
})