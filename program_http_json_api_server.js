var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  console.log(parsedUrl)
  var time = new Date(parsedUrl.query.iso)
  var result

  if ((req.url).indexOf("parsetime") !== -1) {
    result = parsetime(time)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else if ((req.url).indexOf("unixtime") !== -1) {
    result = unixtime(time)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  }

})
server.listen(Number(process.argv[2]))
