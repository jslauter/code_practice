//Remove first and last char

function removeChar(str){

  var str = str.split('');
  var first = str.pop();
  var last = str.shift();
  return str.join('');
};

removeChar('abcgd');
