// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var elements = [];
  var searchChildNodes = function (node, className) {
	  for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].classList !== undefined) {
        for (var j = 0; j < node.childNodes[i].classList.length; j++) {
          if (node.childNodes[i].classList[j]===className) {
            elements.push(node.childNodes[i]);
          }
        }
      }
      if (node.childNodes[i].childNodes.length > 0)
        searchChildNodes(node.childNodes[i], className);
    }
  }
  if (document.body.childNodes.length > 0) 
  	searchChildNodes(document.body, className);
  return elements;
};
