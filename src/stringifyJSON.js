// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var quotes = '\"';
  if (typeof obj === "string") {
	if (obj) {
	  return quotes.concat(obj,quotes);
	} else {
	  return '';
	}
  }
  if (Object.prototype.toString.call(obj) === "[object Array]") {
  	var values = '';
  	for (var i=0; i<obj.length; i++) {
  	  if (i != 0) values += ',';
	  typeof obj[i] === "number" ? values += obj[i] : values += stringifyJSON(obj[i]);
  	}
	return "[".concat(values,"]");
  }
  if (Object.prototype.toString.call(obj) === "[object Object]") {
  	var values = '';
  	var blankFunction = new RegExp("function.*\{ *}");
  	for (var name in obj) {
  	  if (values != '') values += ',';
  	  value = stringifyJSON(obj[name]);
  	  console.log(name + value);
  	  if (!blankFunction.test(value) && value !== undefined)
  	  	values += stringifyJSON(name) + ':' + value;
  	}
	return "{".concat(values,"}");
  }
  if (obj!=undefined) return obj.toString();
  if (obj===null) return 'null';
  return obj;
};
