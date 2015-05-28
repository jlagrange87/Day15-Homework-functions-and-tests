/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a,b){
    "use strict";
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
    else {
        return c;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        return true
    }
    if(typeof char === 'number'){
        throw "Invalid Input"
    }
    else {
        return false;
    }
}
// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    if(typeof char === 'number'){
        throw "Invalid Input"
    }
   var consonants;
   consonants ="bcdfghjklmnpqrstvwxz".split("")
   return phrase.split("").map(function(ch){
    return consonants.indexOf(ch.toLowerCase()) > -1 ? ch + "o" + ch.toLowerCase() : ch;
   }).join("");
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array){
    var result = 0;
    "use strict";
   for(var i = 0; i<array.length; i++){
    result += array[i];
   }
   return result;
}


function multiply(array){
    var result = 1;
    "use strict";
   for(var i = 0; i<array.length; i++){
    result *=  array[i]
   }
   return result;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    "use strict";
    if(typeof char === 'number'){
        throw "Invalid Input"
    }
    var result = "";
    for(var i = str.length -1; i > -1; i--)
        result += str[i];
    return result;
}
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var length = 0;
    var longestWord;
    for(var i = 0; i < words.length; i++){
        if(words[i].length > length){
            length = words[i].length;
            longestWord = words[i]
        }
    }
        return longestWord;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var array = [];
    for(var x = 0; x < words.length; x++){
        if(words[x].length > i){
            array.push(words[x]);
        }
    }
    return array;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var freq = {};
    var letter;
    for (var i=0; i<string.length;i++) {
        letter = string.charAt(i);
            if (freq[letter]) {
               freq[letter]++;
            } else {
               freq[letter] = 1;
            }
    }
    var answer = ""
    for(var propertyName in freq){
        answer += propertyName + ": "  +freq[propertyName] +  ", ";
    }
    return answer;
}
