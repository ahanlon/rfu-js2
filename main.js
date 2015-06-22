var yourWord = prompt("Please enter a word:");

alert("You entered: " + yourWord + 
	"\nThere are " + yourWord['length'] + " characters in the word." + 
	"\nThe third character is " + "'" + yourWord.charAt(2) + "'" + 
	"\nLowercase: " + yourWord.toLowerCase() + 
	"\nUppercase: " + yourWord.toUpperCase() +
	"\nI think that " + yourWord + " is AWESOME!" +
	"\nSubword: " + yourWord.substring(1, 5));

