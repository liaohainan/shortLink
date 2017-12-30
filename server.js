var express = require('express')
var bodyParser = require('body-parser')
// var Md5 = require('md5')
var transform = require('./utils/index.js')
// 生成实例
var app = express()
var cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const linkArr = new Array(1000000)
app.get('/',function(req,res){
    // console.log(req.query)
    res.send('hello world')
})
// 查询长链接
app.get('/api/getLongLink',function(req,res){
    // console.log(req.query)
    if(req.query.shortLink != null){
        let longLink = null
        if(linkArr[transform.string62to10(req.query.shortLink)-1]){
            longLink = linkArr[transform.string62to10(req.query.shortLink)-1].longLink
        }
        if(longLink){
            res.json({
                code:200,
                msg:'获取成功',
                longLink
            })
        }else{
            res.json({
                code:100,
                msg:'参数错误'
            })
        }
        
    }else{
        res.json({
            code:100,
            msg:'参数错误'
        })
    }
})


// 长链接转换短链接
app.post('/api/getShortLink', function (req, res) {
    // console.log(req.body)
    // console.log(req.body.longLink)
    if(req.body.longLink != null){
        let shortLink = transform.string10to62(linkArr.length+1)
        linkArr.push({
            shortLink,
            longLink: req.body.longLink,
        })
        res.json({
            code:200,
            msg:'获取成功',
            shortLink
        })
    }else{
        res.json({
            code:100,
            msg:'参数错误'
        })
    }
})
 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})