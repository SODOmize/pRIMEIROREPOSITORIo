var romanize = require('../index.js')
var test = require('tape')
var systems = ['WG', 'MPS-II', 'TONGYONG', 'HANYU']

test('2-char name', function (t) {
  var results = ['Hsuan Chang', 'Shiuan Jang', 'Syuan Jhang', 'Xuan Zhang']

  systems.forEach(function (sys, i) {
    var name = romanize('張懸', sys)
    t.equal(results[i], name, 'translated in ' + sys + ' correctly.')
  