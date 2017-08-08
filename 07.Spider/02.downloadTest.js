var download = require('./download')
var imgAll = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502170359416&di=6b9e1a38c2f933ac84785b011f55eab5&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fvideo%2F1a%2F1ad3af6b84feb676b5f4600510694529.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502170359416&di=46c51d47ab159ef070f9ac58d63d1fc5&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201604%2F03%2F20160403112120_QvVwW.jpeg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502170359415&di=ef708da7c6c81b714e829184d8061cdc&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201508%2F01%2F20150801121931_EUB3V.thumb.700_0.jpeg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502170359415&di=06b7484269b1726302cc3c78957d89f0&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201501%2F01%2F20150101012801_tWjVA.jpeg"
]
imgAll.forEach(function (item, index) {
    console.log(index)
    download(item, 'imgs', index + '.jpg')
})
