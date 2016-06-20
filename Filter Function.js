function returnDupes(arr) {
 //need to concat into one single array

 var filterCallBack = function(value, index) {
    return concatArr.indexOf(value) == index; 
 };
 
 var concatArr = [];
 for (var i=0; i<arguments.length; i++){
  concatArr = concatArr.concat(arguments[i]); 
 }
  
 uniqueArray = concatArr.filter(filterCallBack);
 
 return uniqueArray;
    
}

//sample data
arr = [1,2,4,6,34,745, ["Hello World"], "Hello World", 1,375,34]
