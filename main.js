const express = require('express')
const app = express()
const port = 3000

app.use(express.static('project'))

app.get('/', (req, res) => res.send('test'))

// app.get('/Path1', function (req, res) {
//     res.send("GET Path1");
//     })
//     app.get('/Path2', function(req,res) {
//     res.send("GET Path2 : " + Date());
//     })
//     app.put('/Path1', function (req, res) {
//     res.send("PUT Path1");
//     })

app.get('/kakao',function(req,res) {
  var request = require('request');
  var url = 'https://dapi.kakao.com/v2/local/search/keyword.json?query='+encodeURI(req.query.name)+"&size=5"
  var options = {
  'method': 'GET',
  'url': url,
  'headers': {
    'Authorization': 'KakaoAK 84018580eb87b99a294f1e110a5fd5dc'
  }
};
  request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.send(response.body)
});

})
    
app.get('/navi',function(req,res){
  var request = require('request');
  console.log(req.query.desx, req.query.desy)
  var options = {
  'method': 'GET',
  'url': 'https://apis-navi.kakaomobility.com/v1/directions?origin=129.10360130281313,35.18384455133566&destination='+req.query.desx+","+req.query.desy,
  'headers': {
    'Authorization': 'KakaoAK 84018580eb87b99a294f1e110a5fd5dc'
  }
};
  request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  res.send(response.body);
});

})




app.listen(port, () => console.log(`Example app listening a
t http://localhost:${port}`))
