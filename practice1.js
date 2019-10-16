function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result="";
    result += "The " +myAdjective+ "  " +myNoun+ "  " +myVerb+ " to his owner " +myAdverb;
    return result;
}
    console.log(wordBlanks("dog","big","ran","quickly"));
