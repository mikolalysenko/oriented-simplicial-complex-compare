'use strict'

var compareCell = require('compare-oriented-cell')

module.exports = orientedSimplicialComplexCompare

function orientedSimplicialComplexCompare(a, b) {
  if(a.length !== b.length) {
    return a.length - b.length
  }
  var as = a.slice().sort(compareCell)
  var bs = b.slice().sort(compareCell)
  for(var i=0; i<as.length; ++i) {
    var d = compareCell(as[i], bs[i])
    if(d) {
      return d
    }
  }
  return 0
}
