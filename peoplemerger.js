var firstList = require('./people1.json');
var secondList = require('./people2.json');
var fs = require('fs');

var mergedLists = firstList.concat(secondList).sort();

fs.writeFileSync('peopleComplete.txt', mergedLists);
