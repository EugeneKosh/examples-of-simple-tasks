function longestRepetition(s) {
  let longestLetter = '',
      longestCount = 0,
      presentLetter = '',
      presentCount = 0;
  
  for (let i = 0; i <= s.length; i++) {
    if (s[i] !== presentLetter) {
      if (presentCount > longestCount) {
        longestCount = presentCount;
        longestLetter = presentLetter; 
      }
      presentCount = 0;
      presentLetter = s[i];
    }
    presentCount++;
  }
  return [longestLetter, longestCount]
}