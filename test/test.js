var romanize = require('../index.js')
var test = require('tape')
var systems = ['WG', 'MPS-II', 'TONGYONG', 'HANYU']

test('2-char name', function (t) {
  var results = ['Hsuan Chang', 'Shiuan Jang', 'Syuan Jhang', 'Xuan Zhang']

