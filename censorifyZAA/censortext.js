/** Author Zachariah Alber
	Spring Adv. Int Concepts
*/
var Nonowords = ["sad", "bad", "mad", "fart", ];
var customNonowords = []; 
function censor(inStr) { 
 	for (idx in Nonowords) {      
 	 	inStr = inStr.replace(Nonowords[idx], "****");   
 	 } 
 	for (idx in customNonowords) {      
 	  	  inStr = inStr.replace(customNonowords[idx], "****");   
 	 }    
 	return inStr; 
 	}
function alrightwords(word) {   
	customNonowords.push(word); } 
 function getNonowords() {    
 	return Nonowords.concat(customNonowords); } 
 exports.censor = censor;  
 exports.alrightwords = alrightwords; 
 exports.getNonowords = getNonowords;
