
var data = require('unicode-mandarin-readings')
var surnameSubs = require('./surname-subs.json')
var romanizationSys = require('./romanization-pairs.json')
var removeDiacritics = require('diacritics').remove

module.exports = function (name, system) {
  system = system || 'WG'

  var chars = name.replace(/\s/g, '').split('')
  var surnameLength = chars.length > 3 ? 2 : 1

  var result = chars.map(function (word, i) {
    // Should it be subbed?
    if (i < surnameLength && Object.keys(surnameSubs).indexOf(word) >= 0) {