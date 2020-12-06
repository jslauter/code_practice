//Return the odds from a list:

//First Solution
function odds(values){
  return values.filter(function(num){ if( num % 2 ) return num;});
}
