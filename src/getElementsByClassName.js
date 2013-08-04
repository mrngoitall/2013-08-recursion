// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here
  var elements = [];
  if (document.body.childNodes.length > 0) 
  	for (var i = 0; i < document.body.childNodes.length; i++) {
      if (document.body.childNodes[i].classList !== undefined)
        for (var j = 0; j < document.body.childNodes[i].classList.length; j++) {
          if (document.body.childNodes[i].classList[j]===className) {
            //console.log(document.body.childNodes[i]);
            elements.push(document.body.childNodes[i]);
          }
        }
    }
    return elements;
};
