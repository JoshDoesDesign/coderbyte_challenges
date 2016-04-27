
/* Create a function that finds the longest word in a sentence */

var LongestWord = function(sen) {

	var longWord = '';
	var senArray = sen.split(' ');
    var wrdInSen = '';
  
	for (var i = 0;i < senArray.length;i++) {
      
        wrdInSen = senArray[i];
        
        if (longWord.length < wrdInSen.length) {
			longWord = wrdInSen;
        }
    }  
 
    console.log(longWord);
	return longWord;
}
   
LongestWord('We love horses');